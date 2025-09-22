"use client"
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

const PRODUCTS = [
  // Main appliances (with variants handled on detail page)
  { id: 'ac_unit', name: 'Aire Acondicionado Inverter 12k BTU', price: 450, description: 'Eficiente y silencioso. Nuevo o reacondicionado.' },
  { id: 'water_heater', name: 'Calentador Eléctrico Instantáneo', price: 180, description: 'Sin tanque (tankless). Nuevo o reacondicionado.' },
  // A few sample accessories (from ~40)
  { id: 'mount_bracket', name: 'Soporte de Pared', price: 25, description: 'Soporte universal para instalación.' },
  { id: 'copper_tube', name: 'Tubo de Cobre 3m', price: 30, description: 'Para kits de instalación.' },
  { id: 'insulation_tape', name: 'Cinta de Aislamiento', price: 5, description: 'Aislamiento térmico para tuberías.' },
]

export default function ProductsPage() {
  const addToCart = useCartStore(s => s.addItem)
  const [ack, setAck] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-6xl py-14 px-4">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      {ack && (
        <div className="mb-4 text-sm bg-black text-white px-3 py-2 rounded-md">{ack}</div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="rounded-2xl border border-border p-4">
            <Link href={`/products/${p.id}`} className="block">
              <div className="font-medium flex items-center justify-between">
                <span>{p.name}</span>
                <span className="text-sm">${p.price}</span>
              </div>
              <p className="text-sm opacity-70 mt-1">{p.description}</p>
            </Link>
            <button
              className="btn btn-primary w-full mt-4"
              onClick={() => {
                addToCart(p)
                setAck(`${p.name} added to cart`)
                setTimeout(()=>setAck(null), 1500)
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


