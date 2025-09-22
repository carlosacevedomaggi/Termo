"use client"
import { useEffect, useMemo, useRef, useState } from 'react'
import { useCartStore } from '@/store/cart'

export type Accessory = {
  id: string
  name: string
  price?: number
  images: string[]
}

export default function AccessoriesList({ items }: { items: Accessory[] }) {
  const addToCart = useCartStore(s => s.addItem)
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return items
    return items.filter(i => i.name.toLowerCase().includes(query) || i.id.toLowerCase().includes(query))
  }, [items, q])

  return (
    <div className="container-edge py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Accesorios</h1>
          <p className="opacity-70">Explora repuestos y piezas de instalación.</p>
        </div>
        <div className="flex gap-2">
          <input placeholder="Buscar" value={q} onChange={e=>setQ(e.target.value)} className="rounded-md border border-border px-3 py-2" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(i => (
          <div key={i.id} className="rounded-2xl border border-border overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <HoverSlideshow images={i.images} />
            </div>
            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{i.name}</h3>
                <span className="text-sm">{i.price && i.price > 0 ? `$${i.price}` : 'Consultar precio'}</span>
              </div>
              {i.price && i.price > 0 ? (
                <button className="btn btn-primary w-full mt-2" onClick={()=>addToCart({ id: i.id, name: i.name, price: i.price! })}>Agregar al carrito</button>
              ) : (
                <a href="/support/contact" className="btn btn-outline w-full mt-2">Consultar</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HoverSlideshow({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  const [hovered, setHovered] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    if (!hovered || images.length <= 1) return
    timer.current = setInterval(() => setIdx(i => (i + 1) % images.length), 1800)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [hovered, images])
  const current = images[idx] ?? images[0]
  return (
    <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} src={current} alt="Accesorio" className="w-full h-full object-cover transition-opacity" />
  )
}


