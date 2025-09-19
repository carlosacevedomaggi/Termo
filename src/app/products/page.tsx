"use client"
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

const PRODUCTS = [
  { id: 'p1', name: 'Product A', price: 199, description: 'Elegant and powerful.' },
  { id: 'p2', name: 'Product B', price: 299, description: 'Refined for performance.' },
  { id: 'p3', name: 'Product C', price: 399, description: 'Minimal yet capable.' },
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


