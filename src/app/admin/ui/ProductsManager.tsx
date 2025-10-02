"use client"

import { useState } from "react"
import useSWR from "swr"

import ProductFormModal from "./ProductFormModal"

export type AdminProduct = {
  id: string
  name: string
  slug: string
  description?: string | null
  manufacturer?: string | null
  model?: string | null
  availability: number
  price: number
  refurbishedPrice?: number | null
  supportsCondition?: boolean
  kitAddOnName?: string | null
  kitAddOnPrice?: number | null
  categoryId?: string | null
  category?: { id: string; name: string } | null
}

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) throw new Error("Request failed")
  return res.json()
})

export default function ProductsManager() {
  const { data, error, isLoading, mutate } = useSWR<{ products: AdminProduct[] }>(
    "/api/admin/products",
    fetcher
  )
  const [selectedProduct, setSelectedProduct] = useState<AdminProduct | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (isLoading) {
    return <div>Cargando productos…</div>
  }
  if (error) {
    return <div className="text-red-600">No se pudieron cargar los productos.</div>
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
      <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div>
          <h1 className="text-xl font-semibold">Catálogo</h1>
          <p className="text-sm text-slate-500">Administre los productos visibles en la tienda.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedProduct(null)
              setIsModalOpen(true)
            }}
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white"
          >
            Nuevo producto
          </button>
        </div>
      </header>
      <div className="px-6 py-4">
        <table className="min-w-full text-sm">
          <thead className="text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="py-2">Nombre</th>
              <th className="py-2">Categoría</th>
              <th className="py-2">Precio</th>
              <th className="py-2">Inventario</th>
              <th className="py-2" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data?.products?.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50">
                <td className="py-3">
                  <div className="font-medium text-slate-900">{product.name}</div>
                  <div className="text-xs text-slate-500">{product.slug}</div>
                </td>
                <td className="py-3 text-slate-700">{product.category?.name ?? "Sin categoría"}</td>
                <td className="py-3 text-slate-700">${(product.price / 100).toFixed(2)}</td>
                <td className="py-3 text-slate-700">{product.availability}</td>
                <td className="py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(product)
                        setIsModalOpen(true)
                      }}
                      className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-100"
                    >
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ProductFormModal
        open={isModalOpen}
        product={selectedProduct}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedProduct(null)
        }}
        onSaved={() => mutate()}
      />
    </div>
  )
}

