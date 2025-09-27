"use client"

import { useState } from "react"
import type { PartnerSection } from "./data"

export type PartnersClientProps = {
  sections: ReadonlyArray<PartnerSection>
  initialSection: string
}

export function PartnersClient({ sections, initialSection }: PartnersClientProps) {
  const [activeSection, setActiveSection] = useState(initialSection)
  const current = sections.find((section) => section.id === activeSection) ?? sections[0]

  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_100%_-10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(40rem_40rem_at_-10%_-20%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="container-edge py-14 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Red de aliados
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">Aliados</h1>
          <p className="mt-3 text-base md:text-lg opacity-80 max-w-2xl">
            Encuentra distribuidores autorizados y centros de servicio para tus equipos Termotronic y CBX.
          </p>
        </div>
      </section>

      <section className="container-edge py-10 md:py-14">
        <div className="flex flex-wrap gap-3 mb-6">
          {sections.map((section) => {
            const isActive = section.id === activeSection
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveSection(section.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-black bg-black text-white shadow"
                    : "border-black/20 bg-white/60 text-black hover:border-black/40"
                }`}
                aria-pressed={isActive}
              >
                {section.label}
              </button>
            )
          })}
        </div>

        <article className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
          <header className="mb-5">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{current.title}</h2>
            <p className="mt-1 text-sm md:text-base opacity-70">{current.description}</p>
          </header>

          {current.countriesTitle ? (
            <h3 className="mb-4 text-lg md:text-xl font-semibold tracking-tight uppercase">
              {current.countriesTitle}
            </h3>
          ) : null}

          <div className="grid gap-5 md:gap-6">
            {current.locations.map((location) => (
              <section key={location.city} className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{location.city}</h3>

                <div className="grid gap-4 md:grid-cols-2">
                  {location.businesses.map((business) => (
                    <article
                      key={`${location.city}-${business.name}`}
                      className="rounded-xl border border-black/10 bg-white/90 p-4 shadow-sm transition hover:shadow-md"
                    >
                      <h4 className="text-base md:text-lg font-semibold tracking-tight">{business.name}</h4>
                      <dl className="mt-3 space-y-2 text-sm md:text-base">
                        <div>
                          <dt className="sr-only">Dirección</dt>
                          <dd className="opacity-80">{business.address || "Dirección no suministrada"}</dd>
                        </div>
                        <div>
                          <dt className="sr-only">Ciudad y estado</dt>
                          <dd className="opacity-80">{business.cityState}</dd>
                        </div>
                        <div>
                          <dt className="sr-only">Teléfono(s)</dt>
                          <dd className="font-medium">{business.phones}</dd>
                        </div>
                      </dl>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}


