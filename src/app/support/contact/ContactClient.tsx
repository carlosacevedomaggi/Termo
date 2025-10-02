"use client"

import { useMemo, useState } from "react"
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react"

const contactItems = [
  {
    icon: MapPin,
    label: "Caracas 1071 - Venezuela",
    description: "Dirección",
  },
  {
    icon: Phone,
    label: "+58 (212)239.6165 - (212)237.4551 - (212)237.5083",
    description: "Teléfono",
  },
  {
    icon: Instagram,
    label: "industriastermotronic",
    description: "Instagram",
  },
  {
    icon: MessageCircle,
    label: "Termotronic",
    description: "WhatsApp",
  },
]

const inquiryOptions = [
  { value: "compras", label: "Compras al mayor" },
  { value: "servicios", label: "Centros de servicios" },
  { value: "cursos", label: "Cursos de reparación e instalación" },
  { value: "otro", label: "Otro" },
]

export default function ContactClient() {
  const groupedOptions = useMemo(() => inquiryOptions, [])
  const [status, setStatus] = useState<{ state: "idle" | "submitting" | "success" | "error"; message?: string }>({ state: "idle" })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    if (!payload.fullName || !payload.email) {
      setStatus({ state: "error", message: "Nombre y correo son requeridos" })
      return
    }
    setStatus({ state: "submitting" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        throw new Error("Request failed")
      }
      event.currentTarget.reset()
      setStatus({ state: "success", message: "Mensaje enviado. Nuestro equipo le contactará pronto." })
    } catch (error) {
      console.error(error)
      setStatus({ state: "error", message: "No se pudo enviar el mensaje. Intente nuevamente." })
    }
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container-edge py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Contáctenos</h1>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-blue-600">Intención</p>
            <div className="space-y-5">
              {contactItems.map((item, index) => (
                <ContactDetail key={index} icon={item.icon} label={item.label} description={item.description} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-100 via-white to-blue-50 blur-2xl" aria-hidden />
            <div className="rounded-3xl border border-black/5 bg-white/80 p-6 md:p-8 shadow-lg backdrop-blur">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField name="fullName" label="Nombre completo" id="fullName" placeholder="Tu nombre" required />
                  <InputField name="email" label="Correo electrónico" id="email" placeholder="name@example.com" type="email" required />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField name="company" label="Compañía" id="company" placeholder="Nombre de tu empresa" />
                  <InputField name="phone" label="Teléfono" id="phone" placeholder="Ej. +58 412-1234567" />
                </div>

                <SelectField
                  label="Intención"
                  id="inquiry"
                  placeholder="Selecciona una opción"
                  name="inquiryType"
                  options={groupedOptions}
                />

                <InputField name="message" label="Tu Mensaje" id="message" placeholder="Cuéntanos cómo podemos ayudarte" as="textarea" />

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-black px-6 text-sm font-semibold tracking-wide text-white transition focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2 disabled:opacity-70"
                  >
                    <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-blue-600 to-purple-500 transition-transform duration-300 group-hover:translate-y-0" />
                    <span className="relative">{status.state === "submitting" ? "Enviando…" : "Enviar"}</span>
                  </button>
                  {status.state !== "idle" && status.message && (
                    <p className={`mt-3 text-sm ${status.state === "success" ? "text-green-700" : "text-red-600"}`}>
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ContactDetailProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  description: string
}

function ContactDetail({ icon: Icon, label, description }: ContactDetailProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
      <span className="h-10 w-10 flex-shrink-0 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-black/60">{description}</p>
        <p className="mt-1 text-sm md:text-base font-semibold">{label}</p>
      </div>
    </div>
  )
}

type InputFieldProps = {
  label: string
  id: string
  placeholder?: string
  type?: string
  as?: "input" | "textarea"
  name: string
  required?: boolean
}

function InputField({ label, id, placeholder, type = "text", as = "input", name, required }: InputFieldProps) {
  const Field = as === "textarea" ? "textarea" : "input"

  return (
    <label className="block text-sm font-medium text-black/70" htmlFor={id}>
      {label}
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm shadow-inner outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        rows={as === "textarea" ? 5 : undefined}
        type={as === "textarea" ? undefined : type}
        required={required}
      />
    </label>
  )
}

type SelectFieldProps = {
  label: string
  id: string
  placeholder?: string
  options: Array<{ value: string; label: string }>
  name: string
}

function SelectField({ label, id, placeholder, options, name }: SelectFieldProps) {
  return (
    <label className="block text-sm font-medium text-black/70" htmlFor={id}>
      {label}
      <div className="mt-2 relative">
        <select
          id={id}
          defaultValue=""
          name={name}
          className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm shadow-inner outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        >
          <option value="" disabled hidden>
            {placeholder || "Selecciona"}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-black/40">▾</span>
      </div>
    </label>
  )
}



