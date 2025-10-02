import { useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import useSWR from "swr"

import type { AdminProduct } from "./ProductsManager"

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Request failed")
    return res.json()
  })

export default function ProductFormModal({
  open,
  product,
  onClose,
  onSaved,
}: {
  open: boolean
  product: AdminProduct | null
  onClose: () => void
  onSaved: () => void
}) {
  const [mounted, setMounted] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const [formState, setFormState] = useState({
    name: "",
    slug: "",
    description: "",
    manufacturer: "",
    model: "",
    availability: "0",
    price: "0",
    refurbishedPrice: "",
    supportsCondition: false,
    kitAddOnName: "",
    kitAddOnPrice: "",
    categoryId: "",
    heroImage: "",
    shortDescription: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { data: categoriesData } = useSWR<{ categories: Array<{ id: string; name: string }> }>(
    open ? "/api/admin/categories" : null,
    fetcher
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (product) {
      setFormState({
        name: product.name ?? "",
        slug: product.slug ?? "",
        description: product.description ?? "",
        manufacturer: product.manufacturer ?? "",
        model: product.model ?? "",
        availability: String(product.availability ?? 0),
        price: ((product.price ?? 0) / 100).toString(),
        refurbishedPrice: product.refurbishedPrice ? ((product.refurbishedPrice ?? 0) / 100).toString() : "",
        supportsCondition: Boolean(product.supportsCondition),
        kitAddOnName: product.kitAddOnName ?? "",
        kitAddOnPrice: product.kitAddOnPrice ? ((product.kitAddOnPrice ?? 0) / 100).toString() : "",
        categoryId: product.categoryId ?? product.category?.id ?? "",
        heroImage: product.heroImage ?? "",
        shortDescription: product.shortDescription ?? "",
      })
    } else {
      setFormState((prev) => ({
        ...prev,
        name: "",
        slug: "",
        description: "",
        manufacturer: "",
        model: "",
        availability: "0",
        price: "0",
        refurbishedPrice: "",
        supportsCondition: false,
        kitAddOnName: "",
        kitAddOnPrice: "",
        categoryId: "",
        heroImage: "",
        shortDescription: "",
      }))
    }
  }, [product])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open, onClose])

  const categories = useMemo(() => categoriesData?.categories ?? [], [categoriesData])

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        ref={dialogRef}
        className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl focus:outline-none"
        tabIndex={-1}
      >
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">{product ? "Editar producto" : "Nuevo producto"}</h2>
            <p className="text-sm text-slate-600">Completa la información para el catálogo.</p>
          </div>
          <button
            onClick={() => {
              if (!submitting) {
                onClose()
              }
            }}
            className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-100"
          >
            Cerrar
          </button>
        </header>

        <form
          className="mt-5 space-y-4"
          onSubmit={async (event) => {
            event.preventDefault()
            setSubmitting(true)
            setError(null)
            try {
              const payload = {
                name: formState.name,
                slug: formState.slug,
                description: formState.description,
                manufacturer: formState.manufacturer || undefined,
                model: formState.model || undefined,
                availability: Number(formState.availability) || 0,
                price: Math.round((Number(formState.price) || 0) * 100),
                refurbishedPrice: formState.refurbishedPrice
                  ? Math.round((Number(formState.refurbishedPrice) || 0) * 100)
                  : undefined,
                supportsCondition: formState.supportsCondition,
                kitAddOnName: formState.kitAddOnName || undefined,
                kitAddOnPrice: formState.kitAddOnPrice
                  ? Math.round((Number(formState.kitAddOnPrice) || 0) * 100)
                  : undefined,
                categoryId: formState.categoryId,
                heroImage: formState.heroImage || undefined,
                shortDescription: formState.shortDescription || undefined,
              }

              const endpoint = product ? `/api/admin/products/${product.id}` : "/api/admin/products"
              const method = product ? "PATCH" : "POST"

              const response = await fetch(endpoint, {
                method,
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              })
              if (!response.ok) {
                throw new Error("Error al guardar el producto")
              }
              onSaved()
              onClose()
            } catch (error: any) {
              console.error(error)
              setError(error.message || "No se pudo guardar el producto")
            } finally {
              setSubmitting(false)
            }
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TextField label="Nombre" value={formState.name} onChange={(value) => setFormState((prev) => ({ ...prev, name: value }))} required />
            <TextField label="Slug" value={formState.slug} onChange={(value) => setFormState((prev) => ({ ...prev, slug: value }))} required />
            <SelectField
              label="Categoría"
              value={formState.categoryId}
              onChange={(value) => setFormState((prev) => ({ ...prev, categoryId: value }))}
              options={categories.map((category) => ({ value: category.id, label: category.name }))}
              placeholder="Selecciona una categoría"
              required
            />
            <TextField label="Inventario" type="number" value={formState.availability} onChange={(value) => setFormState((prev) => ({ ...prev, availability: value }))} />
            <TextField label="Precio (USD)" type="number" value={formState.price} onChange={(value) => setFormState((prev) => ({ ...prev, price: value }))} required />
            <TextField label="Precio reacondicionado (USD)" type="number" value={formState.refurbishedPrice} onChange={(value) => setFormState((prev) => ({ ...prev, refurbishedPrice: value }))} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextField label="Fabricante" value={formState.manufacturer} onChange={(value) => setFormState((prev) => ({ ...prev, manufacturer: value }))} />
            <TextField label="Modelo" value={formState.model} onChange={(value) => setFormState((prev) => ({ ...prev, model: value }))} />
            <TextField label="Kit (nombre)" value={formState.kitAddOnName} onChange={(value) => setFormState((prev) => ({ ...prev, kitAddOnName: value }))} />
            <TextField label="Kit (precio USD)" value={formState.kitAddOnPrice} onChange={(value) => setFormState((prev) => ({ ...prev, kitAddOnPrice: value }))} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Imagen destacada (URL)"
              value={formState.heroImage}
              onChange={(value) => setFormState((prev) => ({ ...prev, heroImage: value }))}
            />
            <TextField
              label="Descripción corta"
              value={formState.shortDescription}
              onChange={(value) => setFormState((prev) => ({ ...prev, shortDescription: value }))}
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={formState.supportsCondition}
                onChange={(event) => setFormState((prev) => ({ ...prev, supportsCondition: event.target.checked }))}
              />
              Mostrar opción de reacondicionado
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Descripción</label>
            <textarea
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              rows={4}
              value={formState.description}
              onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="btn btn-outline" onClick={onClose} disabled={submitting}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Guardando…" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  )
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
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
    </label>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
  placeholder?: string
  required?: boolean
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">{placeholder ?? "Selecciona"}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
