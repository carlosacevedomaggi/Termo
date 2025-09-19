"use client"
import { useCartStore } from '@/store/cart'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const DB: Record<string, { id: string; name: string; price: number; description: string; specs: string[] }> = {
  p1: { id: 'p1', name: 'Product A', price: 199, description: 'Elegant and powerful.', specs: ['Lightweight','Aluminum','USB-C'] },
  p2: { id: 'p2', name: 'Product B', price: 299, description: 'Refined for performance.', specs: ['Carbon fiber','Water resistant','Bluetooth 5.3'] },
  p3: { id: 'p3', name: 'Product C', price: 399, description: 'Minimal yet capable.', specs: ['OLED','Wi‑Fi 6','Fast charge'] },
}

export default function ProductDetailPage() {
  const addToCart = useCartStore(s => s.addItem)
  const { id } = useParams<{ id: keyof typeof DB }>()
  const product = id ? DB[id] : undefined
  const [ack, setAck] = useState<string | null>(null)
  if (!product) return <div className="container-edge py-14">Not found.</div>
  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div className="rounded-3xl bg-muted aspect-square" />
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 opacity-80">{product.description}</p>
        <p className="mt-6 text-2xl">${product.price}</p>
        {ack && <div className="mt-4 text-sm bg-black text-white px-3 py-2 rounded-md w-fit">{ack}</div>}
        <button
          onClick={() => { addToCart(product); setAck(`${product.name} added to cart`); setTimeout(()=>setAck(null), 1500) }}
          className="btn btn-primary mt-6"
        >
          Add to Cart
        </button>

        <div className="mt-10">
          <h2 className="font-medium mb-3">Specifications</h2>
          <ul className="space-y-2 list-disc list-inside opacity-90">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}


