"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useCartStore } from "@/store/cart"
import type { ProductCategory } from "@/lib/product-data"

type ConditionOption = "nuevo" | "reconstruido"
const CONDITION_LABELS: Record<ConditionOption, string> = {
  nuevo: "Nuevo",
  reconstruido: "Reconstruido",
}

function formatPrice(value: number): string {
  const rounded = Math.round(value * 100) / 100
  return Number.isInteger(rounded) ? `${rounded}$` : `${rounded.toFixed(2)}$`
}

type ProductsClientProps = {
  categories: ProductCategory[]
}

export default function ProductsClient({ categories }: ProductsClientProps) {
  const addToCart = useCartStore((state) => state.addItem)
  const [ack, setAck] = useState<string | null>(null)
  const [conditionMap, setConditionMap] = useState<Record<string, ConditionOption>>({})
  const [kitMap, setKitMap] = useState<Record<string, boolean>>({})

  if (!categories.length) {
    return (
      <div className="container-edge py-24 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Catálogo no disponible</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80rem_80rem_at_20%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(60rem_60rem_at_80%_0%,rgba(14,116,144,0.12),transparent)]" />
        <div className="container-edge py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-blue-300/80">Nuestro portafolio</p>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Soluciones de agua caliente y accesorios profesionales</h1>
            <p className="mt-4 text-base md:text-lg text-white/70">
              Explora calentadores Termotronic, la línea industrial CBX y nuestra selección de piezas originales para instalación y mantenimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="container-edge py-14 md:py-20">
        <nav className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:border-white transition">
              {category.name}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.4em] text-blue-200/80">
                    {category.id}
                  </div>
                  <h2 className="mt-4 text-2xl md:text-4xl font-semibold tracking-tight">{category.name}</h2>
                  <p className="mt-3 text-white/70 text-sm md:text-base max-w-2xl">{category.tagline}</p>
                </div>
                {category.heroImage && (
                  <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                    <Image src={Array.isArray(category.heroImage) ? category.heroImage[0] : category.heroImage} alt={category.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {category.products.map((product) => {
                  const condition = (product.supportsCondition ? conditionMap[product.slug] : undefined) ?? "nuevo"
                  const isRefurbished = condition === "reconstruido"
                  const basePrice = isRefurbished
                    ? product.refurbishedPrice ?? (product.refurbishmentDiscount ? Math.round(product.price * product.refurbishmentDiscount * 100) / 100 : product.price)
                    : product.price
                  const includeKit = product.kitAddOn ? (kitMap[product.slug] ?? false) : false
                  const kitPrice = includeKit && product.kitAddOn ? product.kitAddOn.price : 0
                  const finalPrice = Math.round((basePrice + kitPrice) * 100) / 100
                  const articleKey = `${product.slug}-${condition}-${includeKit ? "kit" : "no-kit"}`
                  const isTermotronic = category.id === "calentadores-termotronic"
                  const isCBX = category.id === "calentadores-cbx"

                  return (
                    <article key={articleKey} className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10">
                       {product.image && (
                        <div className="relative h-40 rounded-2xl overflow-hidden">
                           <Image src={product.image} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                          <span className="absolute top-3 right-3 inline-flex items-center rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium">{formatPrice(finalPrice)}</span>
                        </div>
                      )}
                      <div className="mt-5 space-y-3">
                        <h3 className="text-lg font-semibold tracking-tight text-white">{product.name}</h3>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{product.manufacturer} • {product.model}</p>
                        {isTermotronic || isCBX ? (
                          <div className="text-sm text-white leading-relaxed space-y-1">
                            <p className="uppercase text-xs tracking-[0.3em] text-white/70">Especificaciones</p>
                            <ul className="space-y-1">
                              <li>- Fabricante: Termotronic</li>
                              <li>- Modelo: {isTermotronic ? "CE-11W4" : "CE-11CBX3"}</li>
                              <li>- Disponibilidad: {isTermotronic ? "3118" : "1232"}</li>
                            </ul>
                          </div>
                        ) : (
                          <>
                            <p className="text-sm text-white/80 leading-relaxed">{product.shortDescription}</p>
                            <div className="text-xs text-white/60">Disponibles: {product.availability}</div>
                          </>
                        )}
                        {product.supportsCondition && product.refurbishmentDiscount && (
                          <div className="flex gap-3 pt-3">
                            {(Object.keys(CONDITION_LABELS) as ConditionOption[]).map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setConditionMap((prev) => ({ ...prev, [product.slug]: option }))}
                                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                                  (conditionMap[product.slug] ?? "nuevo") === option
                                    ? "border-white bg-white/30 text-white shadow"
                                    : "border-white/40 text-white/80 hover:text-white"
                                }`}
                              >
                                {CONDITION_LABELS[option]}
                              </button>
                            ))}
                          </div>
                        )}
                        {product.kitAddOn && (
                          <label className="mt-3 flex items-center gap-3 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
                            <input
                              type="checkbox"
                              className="accent-blue-400 scale-110"
                              checked={kitMap[product.slug] ?? false}
                              onChange={(event) => setKitMap((prev) => ({ ...prev, [product.slug]: event.target.checked }))}
                            />
                            Agregar kit de instalación (+${product.kitAddOn.price.toFixed(2)})
                          </label>
                        )}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <Link href={`/products/${product.slug}`} className="flex-1 rounded-full border border-white/30 px-4 py-2 text-sm text-white/90 transition hover:border-white hover:text-white">
                            Ver detalles
                          </Link>
                          <button
                            className="flex-1 rounded-full bg-blue-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                            onClick={() => {
                              const name = `${product.name}${isRefurbished ? " (Reacondicionado)" : ""}${includeKit ? " + Kit" : ""}`
                              addToCart({ id: `${product.slug}-${condition}${includeKit ? "-kit" : ""}`, name, price: finalPrice })
                              if (includeKit && product.kitAddOn) {
                                addToCart({ id: product.kitAddOn.slug, name: product.kitAddOn.name, price: product.kitAddOn.price })
                              }
                              setAck(`${name} agregado al carrito`)
                              setTimeout(() => setAck(null), 1500)
                            }}
                          >
                            Añadir
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      {ack && (
        <div className="fixed inset-x-0 bottom-6 mx-auto w-fit rounded-full bg-white text-slate-900 px-5 py-3 text-sm shadow-xl">
          {ack}
        </div>
      )}
    </div>
  )
}


