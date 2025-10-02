"use client"

import { useEffect, useMemo, useState } from "react"
import dynamic from "next/dynamic"
import debounce from "lodash.debounce"

import type { PartnerLocation } from "@/lib/partners"
import { sortPartnersByDistance } from "@/lib/maps"

const Map = dynamic(() => import("./Map"), { ssr: false })

export type LocationStepValues = {
  name: string
  email: string
  phone: string
  fulfillmentMode: "pickup" | "delivery"
  customerLocation: {
    lat: number
    lng: number
    label: string
  } | null
  selectedPartnerId: string | null
}

export type LocationStepProps = {
  partners: PartnerLocation[]
  value: LocationStepValues
  onChange: (value: LocationStepValues) => void
  errors: Record<string, string>
  onErrorsChange: (errors: Record<string, string>) => void
  onComplete: () => void
}

export default function LocationStep({ partners, value, onChange, errors, onErrorsChange, onComplete }: LocationStepProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<
    Array<{ id: string; label: string; name: string; locality: string; lat: number; lng: number }>
  >([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    setSearchQuery(value.customerLocation?.label ?? "")
  }, [value.customerLocation])

  const nearestPartners = useMemo(() => {
    if (!value.customerLocation) return partners.slice(0, 5)
    return sortPartnersByDistance(partners, value.customerLocation.lat, value.customerLocation.lng).slice(0, 5)
  }, [partners, value.customerLocation])

  const selectedPartner = useMemo(() => {
    return partners.find((partner) => partner.id === value.selectedPartnerId) ?? null
  }, [partners, value.selectedPartnerId])

  const performSearch = useMemo(
    () =>
      debounce(async (query: string) => {
        if (!query.trim()) {
          setSearchResults([])
          return
        }
        setIsSearching(true)
        try {
          const response = await fetch("/api/geocode", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query })
          })
          if (!response.ok) {
            console.error("Geocode failed", await response.text())
            return
          }
          const data = await response.json()
          setSearchResults(data.results)
        } catch (error) {
          console.error("Geocode error", error)
        } finally {
          setIsSearching(false)
        }
      }, 400),
    []
  )

  useEffect(() => {
    if (searchQuery && searchQuery !== value.customerLocation?.label) {
      performSearch(searchQuery)
    } else {
      setSearchResults([])
    }
  }, [searchQuery, value.customerLocation, performSearch])

  const handleLocationChange = (location: { lat: number; lng: number; label: string }) => {
    onChange({
      ...value,
      customerLocation: location,
      selectedPartnerId:
        sortPartnersByDistance(partners, location.lat, location.lng)[0]?.id ?? null,
    })
    onErrorsChange({ ...errors, customerLocation: "" })
  }

  const validateAndContinue = () => {
    const newErrors: Record<string, string> = {}
    if (!value.name.trim()) newErrors.name = "Requerido"
    if (!value.email.trim()) newErrors.email = "Requerido"
    if (!value.customerLocation) newErrors.customerLocation = "Selecciona una ubicación"
    if (value.fulfillmentMode === "pickup" && !value.selectedPartnerId) {
      newErrors.selectedPartnerId = "Selecciona un aliado"
    }
    onErrorsChange(newErrors)
    if (Object.keys(newErrors).length === 0) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Nombre completo"
          value={value.name}
          onChange={(name) => onChange({ ...value, name })}
          error={errors.name}
          required
        />
        <Field
          label="Correo electrónico"
          type="email"
          value={value.email}
          onChange={(email) => onChange({ ...value, email })}
          error={errors.email}
          required
        />
        <Field
          label="Teléfono (opcional)"
          value={value.phone}
          onChange={(phone) => onChange({ ...value, phone })}
        />
      </div>

      <div className="space-y-4">
        <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Modalidad</label>
        <div className="grid gap-3 md:grid-cols-2">
          <ToggleButton
            label="Retiro en distribuidor"
            description="Elige el aliado más conveniente."
            selected={value.fulfillmentMode === "pickup"}
            onClick={() => onChange({ ...value, fulfillmentMode: "pickup" })}
          />
          <ToggleButton
            label="Entrega a domicilio"
            description="Coordinamos la entrega con el aliado más cercano."
            selected={value.fulfillmentMode === "delivery"}
            onClick={() => onChange({ ...value, fulfillmentMode: "delivery" })}
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {value.fulfillmentMode === "pickup" ? "Selecciona tu punto aliado" : "Dirección de entrega"}
        </label>
        <div className="space-y-2">
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={
              value.fulfillmentMode === "pickup"
                ? "Busca tu dirección o tu aliado"
                : "Escribe tu dirección"
            }
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          {isSearching && <p className="text-xs text-slate-500">Buscando…</p>}
          {searchResults.length > 0 && (
            <div className="max-h-48 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => {
                    handleLocationChange({
                      lat: result.lat,
                      lng: result.lng,
                      label: result.label,
                    })
                    setSearchResults([])
                    setSearchQuery(result.label)
                  }}
                  className="flex w-full flex-col items-start px-3 py-2 text-left text-sm hover:bg-slate-100"
                >
                  <span className="font-medium text-slate-900">{result.name}</span>
                  <span className="text-xs text-slate-600">
                    {result.locality ? `${result.locality} • ${result.label}` : result.label}
                  </span>
                </button>
              ))}
            </div>
          )}
          {errors.customerLocation && <p className="text-xs text-red-600">{errors.customerLocation}</p>}
        </div>
      </div>

      <div className="h-80 overflow-hidden rounded-2xl border border-slate-200">
        <Map
          customerLocation={value.customerLocation}
          partners={partners}
          fulfillmentMode={value.fulfillmentMode}
          selectedPartnerId={value.selectedPartnerId}
          onCustomerLocationChange={handleLocationChange}
          onSelectPartner={(partnerId) => onChange({ ...value, selectedPartnerId: partnerId })}
        />
      </div>

      {value.fulfillmentMode === "pickup" && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-700">Aliados sugeridos</h3>
          <PickupList
            options={nearestPartners}
            selectedId={value.selectedPartnerId}
            onSelect={(id) => onChange({ ...value, selectedPartnerId: id })}
          />
          {errors.selectedPartnerId && <p className="text-xs text-red-600">{errors.selectedPartnerId}</p>}
        </div>
      )}

      <div className="flex justify-end">
        <button type="button" className="btn btn-primary" onClick={validateAndContinue}>
          Continuar
        </button>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  type?: string
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  )
}

function ToggleButton({
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

function PickupList({
  options,
  selectedId,
  onSelect,
}: {
  options: PartnerLocation[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onSelect(option.id)}
          className={`flex w-full items-start justify-between rounded-xl border px-3 py-2 text-left text-sm transition ${
            selectedId === option.id
              ? "border-slate-900 bg-slate-900/5"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <div>
            <div className="font-semibold text-slate-900">{option.name}</div>
            <div className="text-xs text-slate-600">{option.address}</div>
            <div className="text-[11px] uppercase tracking-wide text-slate-400">{option.cityState}</div>
          </div>
          <div className="text-xs text-slate-500">
            {selectedId === option.id ? "Seleccionado" : "Elegir"}
          </div>
        </button>
      ))}
    </div>
  )
}
