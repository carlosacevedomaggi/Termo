"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { useCartStore } from "@/store/cart"
import { PAYMENT_METHODS } from "@/shared/payments"
import { usePayPalConfig } from "../PayPalProvider"
import LocationStep, { LocationStepValues } from "./components/LocationStep"
import { getPartnerById, getPartnersByType } from "@/lib/partners"
import { sortPartnersByDistance } from "@/lib/maps"

type Step = 1 | 2 | 3 | 4

type DeliveryInfo = {
  partnerId: string
  partnerName: string
  partnerAddress: string
  partnerCityState: string
  minutes: number
  minutesCapped: number
  fee: number
  distanceMeters: number | null
  source: "ors" | "fallback"
}

type OrderResult = {
  id: string
  status: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clear } = useCartStore()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const distributors = useMemo(() => getPartnersByType("distributor"), [])

  const baseTotal = useMemo(() => items.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0), [items])
  const orderItems = useMemo(
    () =>
      items.map((item) => ({
        key: item.id,
        name: item.name,
        quantity: item.quantity ?? 1,
        total: item.price * (item.quantity ?? 1),
      })),
    [items]
  )

  const [step, setStep] = useState<Step>(1)
  const [locationValues, setLocationValues] = useState<LocationStepValues>({
    name: "",
    email: "",
    phone: "",
    fulfillmentMode: "pickup",
    customerLocation: null,
    selectedPartnerId: null,
  })
  const [locationErrors, setLocationErrors] = useState<Record<string, string>>({})
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null)

  useEffect(() => {
    if (!locationValues.customerLocation) {
      setDeliveryInfo(null)
      return
    }
    if (locationValues.fulfillmentMode !== "delivery" || !locationValues.selectedPartnerId) {
      setDeliveryInfo(null)
      return
    }
    const partner = getPartnerById(locationValues.selectedPartnerId)
    if (!partner) {
      setDeliveryInfo(null)
      return
    }
    fetchDirections(
      locationValues.customerLocation.lat,
      locationValues.customerLocation.lng,
      {
        id: partner.id,
        name: partner.name,
        address: partner.address,
        cityState: partner.cityState,
        lat: partner.lat,
        lng: partner.lng,
      }
    ).then((result) => {
      if (result) {
        setDeliveryInfo(result)
      }
    })
  }, [locationValues.customerLocation, locationValues.fulfillmentMode, locationValues.selectedPartnerId])

  async function fetchDirections(
    customerLat: number,
    customerLng: number,
    partner: { id: string; name: string; address: string; cityState: string; lat: number; lng: number }
  ): Promise<DeliveryInfo | null> {
    try {
      const response = await fetch("/api/directions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: { lat: customerLat, lng: customerLng },
          end: { lat: partner.lat, lng: partner.lng },
        }),
      })
      if (!response.ok) {
        const text = await response.text()
        console.warn("Directions failed", text)
        return fallbackDeliveryInfo(customerLat, customerLng, partner)
      }
      const data = await response.json()
      const durationMinutes = Math.round((data.duration ?? 0) / 60)
      const minutesCapped = Math.min(durationMinutes, 45)
      const fee = minutesCapped * 0.5
      return {
        partnerId: partner.id,
        partnerName: partner.name,
        partnerAddress: partner.address,
        partnerCityState: partner.cityState,
        minutes: durationMinutes,
        minutesCapped,
        fee,
        distanceMeters: data.distance ?? null,
        source: "ors",
      }
    } catch (error) {
      console.warn("Directions error", error)
      return fallbackDeliveryInfo(customerLat, customerLng, partner)
    }
  }

  function fallbackDeliveryInfo(
    customerLat: number,
    customerLng: number,
    partner: { id: string; name: string; address: string; cityState: string; lat: number; lng: number }
  ): DeliveryInfo {
    const distanceMeters = calculateDistance(customerLat, customerLng, partner.lat, partner.lng)
    const averageSpeedKmh = 40
    const timeHours = distanceMeters / 1000 / averageSpeedKmh
    const durationMinutes = Math.round(timeHours * 60)
    const minutesCapped = Math.max(10, Math.min(durationMinutes, 45))
    const fee = minutesCapped * 0.5
    return {
      partnerId: partner.id,
      partnerName: partner.name,
      partnerAddress: partner.address,
      partnerCityState: partner.cityState,
      minutes: durationMinutes,
      minutesCapped,
      fee,
      distanceMeters,
      source: "fallback",
    }
  }

  const [paymentMethodId, setPaymentMethodId] = useState<string>(PAYMENT_METHODS[0]?.id ?? "paypal")
  const selectedMethod = useMemo(() => PAYMENT_METHODS.find((method) => method.id === paymentMethodId)!, [paymentMethodId])
  const [paymentFields, setPaymentFields] = useState<Record<string, string>>({})
  const [paymentErrors, setPaymentErrors] = useState<Record<string, string>>({})
  const [receiptPreference, setReceiptPreference] = useState<"email" | "phone">("email")
  const [paypalOrderId, setPaypalOrderId] = useState<string | null>(null)
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null)
  const [submitState, setSubmitState] = useState<"idle" | "processing">("idle")
  const [submittedSummary, setSubmittedSummary] = useState<{
    items: { key: string; name: string; quantity: number; total: number }[]
    baseTotal: number
    deliveryFee: number
    orderTotal: number
  } | null>(null)
  const { isConfigured: isPayPalConfigured } = usePayPalConfig()

  const deliveryFee = locationValues.fulfillmentMode === "delivery" && deliveryInfo ? deliveryInfo.fee : 0
  const orderTotal = baseTotal + deliveryFee

  const phoneMasked = locationValues.phone ? `***-${locationValues.phone.slice(-3)}` : "No proporcionado"

  const canContinueStep2 =
    (locationValues.fulfillmentMode === "pickup" && locationValues.selectedPartnerId) ||
    (locationValues.fulfillmentMode === "delivery" && deliveryInfo)
  const paypalSelected = paymentMethodId === "paypal" || paymentMethodId === "card"
  const canContinueStep3 = submitState !== "processing"

  if (!items.length && !submittedSummary && step !== 4) {
    return (
      <div className="container-edge py-16 text-center">
        <h1 className="text-2xl font-semibold">Tu carrito está vacío</h1>
        <p className="mt-3 text-sm text-slate-600">Agrega productos para iniciar el proceso de compra.</p>
      </div>
    )
  }

  if (!isHydrated) {
    return (
      <div className="container-edge py-16 text-center">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <p className="mt-2 text-sm text-slate-600">Cargando detalles del pedido…</p>
      </div>
    )
  }

  return (
    <div className="container-edge py-12">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <Stepper currentStep={step} />
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]">
        <div className="space-y-6">
          {step === 1 && (
            <StepCard title="1. Información y ubicación">
              <LocationStep
                partners={distributors}
                value={locationValues}
                onChange={(updated) => setLocationValues(updated)}
                errors={locationErrors}
                onErrorsChange={setLocationErrors}
                onComplete={() => setStep(2)}
              />
            </StepCard>
          )}

          {step === 2 && (
            <StepCard title="2. Entrega y método de pago">
              <section className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Modalidad</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <OptionButton
                    label="Retiro en distribuidor"
                    description="Elige el punto aliado más conveniente para retirar tu pedido."
                    selected={locationValues.fulfillmentMode === "pickup"}
                    onClick={() => {
                      setLocationValues((prev) => ({ ...prev, fulfillmentMode: "pickup" }))
                      setDeliveryInfo(null)
                    }}
                  />
                  <OptionButton
                    label="Entrega a domicilio"
                    description="Coordinamos con el aliado más cercano y calculamos el cargo de envío."
                    selected={locationValues.fulfillmentMode === "delivery"}
                    onClick={async () => {
                      const partner = locationValues.selectedPartnerId
                        ? getPartnerById(locationValues.selectedPartnerId)
                        : null
                      setLocationValues((prev) => ({ ...prev, fulfillmentMode: "delivery" }))
                      if (partner && locationValues.customerLocation) {
                        fetchDirections(
                          locationValues.customerLocation.lat,
                          locationValues.customerLocation.lng,
                          {
                            id: partner.id,
                            name: partner.name,
                            address: partner.address,
                            cityState: partner.cityState,
                            lat: partner.lat,
                            lng: partner.lng,
                          }
                        ).then((result) => {
                          if (result) setDeliveryInfo(result)
                        })
                      }
                    }}
                  />
            </div>
              </section>

              <section className="mt-6 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {locationValues.fulfillmentMode === "pickup" ? "Aliado seleccionado" : "Entrega coordinada"}
                </h3>
                <FulfillmentSummary
                  fulfillmentMode={locationValues.fulfillmentMode}
                  selectedPartnerId={locationValues.selectedPartnerId}
                  deliveryInfo={deliveryInfo}
                  customerLocation={locationValues.customerLocation}
                />
              </section>

              <section className="mt-6 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Método de pago</h3>
            <div className="grid gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <label
                      key={method.id}
                      className={`rounded-xl border p-3 transition ${
                        paymentMethodId === method.id
                          ? "border-slate-900 bg-slate-900/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          className="mt-1 accent-slate-900"
                          checked={paymentMethodId === method.id}
                          onChange={() => setPaymentMethodId(method.id)}
                        />
                    <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold text-slate-900">{method.label}</span>
                            <span className="rounded-full bg-slate-900/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                              {method.currency}
                            </span>
                      </div>
                          {method.description && (
                            <p className="mt-1 text-sm text-slate-600">{method.description}</p>
                          )}
                    </div>
                  </div>
                </label>
              ))}
            </div>
              </section>

              <StepActions
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                nextDisabled={!canContinueStep2}
                nextLabel="Confirmar medios"
                backLabel="Regresar"
              />
            </StepCard>
          )}

          {step === 3 && (
            <StepCard title="3. Pago y recibo">
              <section className="space-y-4">
                <InstructionsList method={selectedMethod} />

                {selectedMethod.fields.length > 0 && (
            <div className="grid gap-4">
                    {selectedMethod.fields.map((field) => (
                      <div key={field.id}>
                        <label className="text-sm font-medium text-slate-700">{field.label}</label>
                        {field.type === "select" ? (
                          <select
                            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            value={paymentFields[field.id] ?? ""}
                            onChange={(event) =>
                              setPaymentFields((prev) => ({ ...prev, [field.id]: event.target.value }))
                            }
                          >
                            <option value="">Selecciona…</option>
                            {(field.options ?? []).map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                    </select>
                  ) : (
                          <input
                            type={field.type === "email" ? "email" : "text"}
                            placeholder={field.placeholder}
                            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            value={paymentFields[field.id] ?? ""}
                            onChange={(event) =>
                              setPaymentFields((prev) => ({ ...prev, [field.id]: event.target.value }))
                            }
                          />
                        )}
                        {paymentErrors[field.id] && (
                          <p className="mt-1 text-xs text-red-600">{paymentErrors[field.id]}</p>
                        )}
                </div>
              ))}
            </div>
                )}

                {paypalSelected && (
                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                    {isPayPalConfigured
                      ? "El pago con PayPal/Tarjeta será simulado en este entorno."
                      : "Sin PayPal configurado: la simulación aprobará el pago automáticamente. Para producción, reemplaza este bloque con PayPalButtons."}
                  </div>
                )}

                <section className="space-y-3">
                  <h4 className="text-sm font-semibold text-slate-700">¿Cómo prefieres recibir tu comprobante?</h4>
                  <div className="grid gap-2 md:grid-cols-2">
                    <label
                      className={`rounded-xl border px-3 py-2 text-sm ${
                        receiptPreference === "email"
                          ? "border-slate-900 bg-slate-900/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="receipt"
                        className="mr-2 accent-slate-900"
                        checked={receiptPreference === "email"}
                        onChange={() => setReceiptPreference("email")}
                      />
                      Enviar al correo: <span className="font-medium">{locationValues.email}</span>
                    </label>
                    <label
                      className={`rounded-xl border px-3 py-2 text-sm ${
                        receiptPreference === "phone"
                          ? "border-slate-900 bg-slate-900/5"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="receipt"
                        className="mr-2 accent-slate-900"
                        checked={receiptPreference === "phone"}
                        onChange={() => setReceiptPreference("phone")}
                        disabled={!locationValues.phone}
                      />
                      WhatsApp ({phoneMasked})
                      {!locationValues.phone && (
                        <span className="ml-2 text-xs text-slate-500">Agrega un número en el paso 1</span>
                      )}
                    </label>
          </div>
                </section>
              </section>

              <StepActions
                onBack={() => setStep(2)}
                onNext={async () => {
                  const fieldErrors: Record<string, string> = {}
                  selectedMethod.fields.forEach((field) => {
                    if (field.required && !paymentFields[field.id]) {
                      fieldErrors[field.id] = "Requerido"
                    }
                  })
                  if (receiptPreference === "phone" && !locationValues.phone) {
                    fieldErrors.receipt = "Debes registrar un número de teléfono"
                  }
                  setPaymentErrors(fieldErrors)
                  if (Object.keys(fieldErrors).length > 0) {
                    return
                  }

                  setSubmitState("processing")
                  try {
                    const payload = {
                      name: locationValues.name,
                      email: locationValues.email,
                      phone: locationValues.phone || null,
                      address: locationValues.customerLocation?.label ?? "",
                      method: paymentMethodId,
                      currency: selectedMethod.currency,
                      amount: Math.round(orderTotal * 100),
                      items: orderItems.map((item) => ({
                        id: item.key,
                        name: item.name,
                        price: Math.round((item.total / item.quantity) * 100),
                        quantity: item.quantity,
                      })),
                      reference: (() => {
                        if (paypalSelected) {
                          const generated = paypalOrderId ?? `mock-paypal-${Date.now()}`
                          setPaypalOrderId(generated)
                          return generated
                        }
                        return paymentFields.reference ?? null
                      })(),
                      receiptPreference,
                      manualPaymentMethod: paymentMethodId,
                      fulfillmentType: locationValues.fulfillmentMode === "pickup" ? "PICKUP" : "DELIVERY",
                      pickupLocationId: locationValues.selectedPartnerId,
                      pickupLocationName: getPartnerById(locationValues.selectedPartnerId)?.name ?? null,
                      pickupLocationAddress: getPartnerById(locationValues.selectedPartnerId)?.address ?? null,
                      fulfillmentLocationId: locationValues.selectedPartnerId,
                      deliveryEtaMinutes: deliveryInfo?.minutes ?? null,
                      deliveryFee: deliveryInfo ? Math.round(deliveryInfo.fee * 100) : 0,
                      customerCoordinates: locationValues.customerLocation
                        ? {
                            lat: locationValues.customerLocation.lat,
                            lng: locationValues.customerLocation.lng,
                          }
                        : null,
                      partnerCoordinates: locationValues.selectedPartnerId
                        ? {
                            lat: getPartnerById(locationValues.selectedPartnerId!)?.lat ?? null,
                            lng: getPartnerById(locationValues.selectedPartnerId!)?.lng ?? null,
                          }
                        : null,
                      metadata: {
                        ...paymentFields,
                        ...(paypalSelected ? { simulation: true } : {}),
                        customerCoordinates: locationValues.customerLocation,
                        partnerCoordinates: locationValues.selectedPartnerId
                          ? {
                              lat: getPartnerById(locationValues.selectedPartnerId!)?.lat ?? null,
                              lng: getPartnerById(locationValues.selectedPartnerId!)?.lng ?? null,
                            }
                          : null,
                      },
                    }

                    console.log("submit-order payload:\n" + JSON.stringify(payload, null, 2))

                    const response = await fetch("/api/orders", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    })
                    if (!response.ok) {
                      throw new Error("Order creation failed")
                    }
                    const data = (await response.json()) as OrderResult
                    const snapshotItems = orderItems.map((item) => ({ ...item }))
                    setSubmittedSummary({
                      items: snapshotItems,
                      baseTotal,
                      deliveryFee,
                      orderTotal,
                    })
                    setOrderResult(data)
                    setStep(4)
                    setTimeout(() => clear(), 0)
                  } catch (error) {
                    console.error(error)
                    setPaymentErrors((prev) => ({ ...prev, root: "No se pudo procesar el pedido. Intenta nuevamente." }))
                  } finally {
                    setSubmitState("idle")
                  }
                }}
                nextDisabled={!canContinueStep3 || submitState === "processing"}
                nextLabel="Confirmar pedido"
                backLabel="Regresar"
              />
              {paymentErrors.root && <p className="mt-3 text-sm text-red-600">{paymentErrors.root}</p>}
            </StepCard>
          )}

          {step === 4 && (
            <StepCard title="4. Confirmación">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">
                  {orderResult?.status === "paid"
                    ? "¡Gracias por su compra!"
                    : "Gracias por su pedido"}
                </h2>
                <p className="text-sm text-slate-700">
                  {orderResult?.status === "paid"
                    ? "Hemos registrado el pago y enviaremos el comprobante según su preferencia."
                    : "Su solicitud quedó en revisión. Validaremos el pago manual en menos de 48 horas y recibirá su comprobante."}
                </p>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  <p>
                    <span className="font-semibold">Número de seguimiento:</span> {orderResult?.id ?? "-"}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Recibo vía:</span> {receiptPreference === "email" ? locationValues.email : phoneMasked}
                  </p>
                </div>
                <button
                  className="btn btn-outline"
                  onClick={() => router.push("/")}
                >
                  Volver al inicio
                </button>
              </div>
            </StepCard>
          )}
        </div>

        <aside className="space-y-4">
          <OrderSummary
            items={submittedSummary?.items ?? orderItems}
            baseTotal={submittedSummary?.baseTotal ?? baseTotal}
            deliveryFee={submittedSummary?.deliveryFee ?? deliveryFee}
            orderTotal={submittedSummary?.orderTotal ?? orderTotal}
            deliveryInfo={locationValues.fulfillmentMode === "delivery" ? deliveryInfo : null}
          />
        </aside>
      </div>
    </div>
  )
}

function Stepper({ currentStep }: { currentStep: Step }) {
  const steps = [
    "Información",
    "Entrega",
    "Pago",
    "Confirmación",
  ]
  return (
    <div className="mt-6 grid gap-3 md:grid-cols-4">
      {steps.map((label, index) => {
        const stepNumber = (index + 1) as Step
        const completed = currentStep > stepNumber
        const active = currentStep === stepNumber
        return (
          <div
            key={label}
            className={`rounded-2xl border px-4 py-3 text-sm transition ${
              active
                ? "border-slate-900 bg-slate-900 text-white"
                : completed
                ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            <div className="text-xs uppercase tracking-[0.3em]">Paso {index + 1}</div>
            <div className="mt-1 font-semibold">{label}</div>
          </div>
        )
      })}
    </div>
  )
}

function StepCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
              </div>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  required,
  className,
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={`block ${className ?? ""}`} htmlFor={id}>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function StepActions({
  onBack,
  onNext,
  nextDisabled,
  nextLabel,
  backLabel,
}: {
  onBack?: () => void
  onNext: () => void | Promise<void>
  nextDisabled?: boolean
  nextLabel: string
  backLabel?: string
}) {
  return (
    <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
      {onBack && (
        <button onClick={onBack} type="button" className="btn btn-outline sm:w-auto">
          {backLabel ?? "Anterior"}
        </button>
      )}
      <button
        type="button"
        className="btn btn-primary sm:w-auto"
        disabled={nextDisabled}
        onClick={onNext}
      >
        {nextLabel}
      </button>
          </div>
  )
}

function OptionButton({
  label,
  description,
  selected,
  onClick,
}: {
  label: string
  description: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-left transition ${
        selected ? "border-slate-900 bg-slate-900/5" : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div className="font-semibold text-slate-900">{label}</div>
      <p className="mt-1 text-xs text-slate-600">{description}</p>
    </button>
  )
}

function PickupChooser({
  options,
  selectedId,
  onSelect,
}: {
  options: PickupOption[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  if (!options.length) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Completa tu dirección para sugerirte aliados cercanos o contáctanos para coordinar la entrega.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <label
          key={option.id}
          className={`flex items-start gap-3 rounded-2xl border px-4 py-3 transition ${
            selectedId === option.id
              ? "border-slate-900 bg-slate-900/5"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <input
            type="radio"
            className="mt-1 accent-slate-900"
            checked={selectedId === option.id}
            onChange={() => onSelect(option.id)}
          />
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              {option.name}
              {index === 0 && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                  Recomendado
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600">{option.address}</p>
            <p className="text-[11px] uppercase tracking-wide text-slate-400">{option.cityState}</p>
            </div>
        </label>
          ))}
        </div>
  )
}

function FulfillmentSummary({
  fulfillmentMode,
  selectedPartnerId,
  deliveryInfo,
  customerLocation,
}: {
  fulfillmentMode: "pickup" | "delivery"
  selectedPartnerId: string | null
  deliveryInfo: DeliveryInfo | null
  customerLocation: { lat: number; lng: number; label: string } | null
}) {
  const partner = selectedPartnerId ? getPartnerById(selectedPartnerId) : null

  if (!partner) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Selecciona un aliado en el paso anterior.
      </div>
    )
  }

  const distanceKm = customerLocation
    ? (calculateDistance(customerLocation.lat, customerLocation.lng, partner.lat, partner.lng) / 1000).toFixed(1)
    : null

  if (fulfillmentMode === "pickup") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-900/5 p-4">
        <div className="text-sm font-semibold text-slate-900">{partner.name}</div>
        <p className="text-xs text-slate-600">{partner.address}</p>
        <p className="text-[11px] uppercase tracking-wide text-slate-400">{partner.cityState}</p>
        {distanceKm && customerLocation && (
          <p className="mt-2 text-xs text-slate-500">Aproximadamente {distanceKm} km desde tu ubicación.</p>
        )}
      </div>
    )
  }

  if (!deliveryInfo) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Calcularemos el aliado más cercano una vez ingreses tu dirección completa.
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900/5 p-4">
      <div className="text-sm font-semibold text-slate-900">Aliado asignado: {partner.name}</div>
      <p className="text-xs text-slate-600">{partner.address}</p>
      <p className="text-[11px] uppercase tracking-wide text-slate-400">{partner.cityState}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-700">
        <span className="rounded-full bg-slate-900/5 px-2 py-1 font-semibold">Estimado: {deliveryInfo.minutes} min</span>
        <span className="rounded-full bg-slate-900/5 px-2 py-1 font-semibold">Cobrado: {deliveryInfo.minutesCapped} min</span>
        <span className="rounded-full bg-slate-900/5 px-2 py-1 font-semibold">Cargo adicional: ${deliveryInfo.fee.toFixed(2)}</span>
      </div>
      <div className="mt-2 text-xs text-slate-500">
        Fuente: {deliveryInfo.source === "ors" ? "Ruta ORS" : "Estimación"}
        </div>
      {distanceKm && (
        <div className="mt-4 text-xs text-slate-600">Distancia aproximada: {distanceKm} km.</div>
      )}
      <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-xs text-slate-600">
        El costo de envío se calcula a $0.50 por minuto (máximo 45 minutos), utilizando el aliado sugerido.
      </div>
    </div>
  )
}

function InstructionsList({ method }: { method: (typeof PAYMENT_METHODS)[number] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900/5 p-4">
      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Instrucciones</h4>
      <ul className="mt-3 space-y-1 text-sm text-slate-700">
        {method.merchantInfo.map((info) => (
          <li key={info.label} className="flex items-center justify-between gap-4">
            <span className="text-slate-500">{info.label}</span>
            <span className="font-semibold text-slate-900">{info.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function OrderSummary({
  items,
  baseTotal,
  deliveryFee,
  orderTotal,
  deliveryInfo,
}: {
  items: { key: string; name: string; quantity: number; total: number }[]
  baseTotal: number
  deliveryFee: number
  orderTotal: number
  deliveryInfo: DeliveryInfo | null
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Resumen del pedido</h2>
      <div className="mt-4 space-y-3 text-sm text-slate-700">
        {items.map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>${item.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${baseTotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-slate-500">
          <span>Envío</span>
          <span>{deliveryInfo ? `$${deliveryFee.toFixed(2)}` : "$0.00"}</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>
      </div>
      {deliveryInfo && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-900/5 px-3 py-2 text-xs text-slate-600">
          Envío calculado {deliveryInfo.source === "ors" ? "con ORS" : "con estimación"}. Distancia aproximada: {deliveryInfo.distanceMeters ? `${(deliveryInfo.distanceMeters / 1000).toFixed(1)} km` : "N/D"}.
        </div>
      )}
    </div>
  )
}

function derivePickupOptions(address: string): PickupOption[] {
  if (!address) return []
  const normalized = address.toLowerCase()

  const options: PickupOption[] = []
  distributorLocations.forEach((location) => {
    location.businesses.forEach((business) => {
      const cityFragments = business.cityState.toLowerCase().split(/\s|,/).filter(Boolean)
      let score = 0
      cityFragments.forEach((fragment) => {
        if (fragment.length > 3 && normalized.includes(fragment)) {
          score += 2
        }
      })
      if (normalized.includes(business.name.toLowerCase())) {
        score += 3
      }
      if (!score && normalized.includes(location.city.toLowerCase())) {
        score += 1
      }
      options.push({
        id: `${business.name}-${business.address}`,
        name: business.name,
        address: business.address,
        cityState: business.cityState,
        score,
      })
    })
  })

  const sorted = options.sort((a, b) => b.score - a.score)
  return sorted.slice(0, 3).map((option, index) => ({ ...option, score: option.score + (3 - index) }))
}

function deriveDeliveryInfo(address: string, options: PickupOption[]): DeliveryInfo | null {
  if (!address) return null
  const candidates = options.length ? options : derivePickupOptions(address)
  if (!candidates.length) return null
  const best = candidates[0]
  const minutesEstimated = Math.max(20, 30 - best.score * 2)
  const minutesCapped = Math.min(minutesEstimated, 45)
  console.log({ step: "delivery-estimate", selectedAlly: best.id, minutesEstimated, minutesCapped })
  const fee = minutesCapped * 0.5
  return {
    partnerId: best.id,
    partnerName: best.name,
    partnerAddress: best.address,
    partnerCityState: best.cityState,
    minutes: minutesEstimated,
    minutesCapped,
    fee,
    distanceMeters: null, // Placeholder, will be calculated by ORS
    source: "fallback", // Placeholder, will be determined by ORS
  }
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371e3
  const toRad = (value: number) => (value * Math.PI) / 180
  const φ1 = toRad(lat1)
  const φ2 = toRad(lat2)
  const Δφ = toRad(lat2 - lat1)
  const Δλ = toRad(lng2 - lng1)

  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}