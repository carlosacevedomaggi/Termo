"use client"
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  description: string
  specs: string[]
  manufacturer: string
  model: string
  availability: number
  supportsCondition?: boolean
  refurbishmentDiscount?: number
  refurbishedPrice?: number
  kitAddOn?: {
    slug: string
    name: string
    price: number
  }
}

export default function ProductDetailClient({ product, images }: { product: Product; images: string[] }) {
  const addToCart = useCartStore(s => s.addItem)
  const [ack, setAck] = useState<string | null>(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [condition, setCondition] = useState<'nuevo' | 'reconstruido'>('nuevo')
  const [includeKit, setIncludeKit] = useState(false)

  const isHeater = product.id.includes('calentadores-termotronic') || product.id.includes('calentadores-cbx')

  const isRefurbished = product.supportsCondition && condition === 'reconstruido'
  const basePrice = isRefurbished
    ? product.refurbishedPrice ?? (product.refurbishmentDiscount ? Math.round(product.price * product.refurbishmentDiscount * 100) / 100 : product.price)
    : product.price
  const kitPrice = includeKit && product.kitAddOn ? product.kitAddOn.price : 0
  const finalPrice = Math.round((basePrice + kitPrice) * 100) / 100

  const shortDescription = `Especificaciones\n- Fabricante: ${product.manufacturer}\n- Modelo: ${product.model}\n- Disponibilidad: ${product.availability}`

  const renderGallery = () => (
    <>
      <div className="rounded-3xl bg-muted aspect-square overflow-hidden">
        <img src={images[imgIdx] ?? images[0]} alt={product.name} className="w-full h-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((src, i) => (
            <button key={src} onClick={()=>setImgIdx(i)} className={`h-16 w-16 rounded-md overflow-hidden border ${imgIdx===i? 'border-black' : 'border-border'}`}>
              <img src={src} alt="thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  )

  const handleAddToCart = () => {
    const name = `${product.name}${isRefurbished ? ' (Reacondicionado)' : ''}${includeKit && product.kitAddOn ? ' + Kit' : ''}`
    addToCart({
      id: `${product.id}-${condition}${includeKit && product.kitAddOn ? '-kit' : ''}`,
      name,
      price: finalPrice,
    })
    if (includeKit && product.kitAddOn) {
      addToCart({ id: product.kitAddOn.slug, name: product.kitAddOn.name, price: product.kitAddOn.price })
    }
    setAck(`${name} agregado al carrito`)
    setTimeout(()=>setAck(null), 1500)
  }

  if (isHeater) {
    return (
      <div className="container-edge py-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="space-y-6">
          {renderGallery()}

          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg space-y-5">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-slate-900">{product.name}</h1>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{product.manufacturer} • {product.model}</p>
              <div className="text-sm text-slate-700 leading-relaxed space-y-1">
                <p className="uppercase text-xs tracking-[0.3em] text-slate-500">Especificaciones</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>- Fabricante: {product.manufacturer}</li>
                  <li>- Modelo: {product.model}</li>
                  <li>- Disponibilidad: {product.availability}</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Disponibilidad: {product.availability}</span>
              <span className="text-2xl font-semibold text-slate-900">${finalPrice.toFixed(2)}</span>
            </div>
            {product.supportsCondition && product.refurbishmentDiscount && (
              <div className="flex gap-3 pt-1">
                {(['nuevo', 'reconstruido'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setCondition(option)}
                    className={`flex-1 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                      condition === option
                        ? 'border-black bg-black text-white shadow'
                        : 'border-black/30 text-slate-600 hover:border-black'
                    }`}
                  >
                    {option === 'nuevo' ? 'Nuevo' : 'Reconstruido'}
                  </button>
                ))}
              </div>
            )}
            {product.kitAddOn && (
              <label className="flex items-center gap-3 mt-3 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="accent-black"
                  checked={includeKit}
                  onChange={(e) => setIncludeKit(e.target.checked)}
                />
                Agregar kit de instalación (+${product.kitAddOn.price.toFixed(2)})
              </label>
            )}
            {ack && <div className="text-sm bg-black/80 text-white px-3 py-2 rounded-md w-fit">{ack}</div>}
            <button className="btn btn-primary w-full" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>

          <article className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Descripción completa</h2>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                {product.description
                  .split(/\n+/)
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean)
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </article>
      </div>
    )
  }

  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div>
        {renderGallery()}
      </div>

      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">{product.manufacturer} • {product.model}</p>
        <p className="mt-3 opacity-80 whitespace-pre-line">{product.description}</p>
        <p className="mt-4 text-xs text-slate-500">Disponibilidad actual: {product.availability}</p>
        {product.supportsCondition && product.refurbishmentDiscount && (
          <div className="mt-5 flex gap-3">
            {(['nuevo', 'reconstruido'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCondition(option)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
                  condition === option
                    ? 'border-black bg-black text-white'
                    : 'border-black/20 text-slate-600 hover:border-black'
                }`}
              >
                {option === 'nuevo' ? 'Nuevo' : 'Reconstruido'}
              </button>
            ))}
          </div>
        )}
        {product.kitAddOn && (
          <label className="mt-4 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="accent-black"
              checked={includeKit}
              onChange={(e) => setIncludeKit(e.target.checked)}
            />
            Agregar kit de instalación (+${product.kitAddOn.price.toFixed(2)})
          </label>
        )}

        <p className="mt-6 text-2xl">${finalPrice.toFixed(2)}</p>
        {ack && <div className="mt-4 text-sm bg-black text-white px-3 py-2 rounded-md w-fit">{ack}</div>}
        <button onClick={handleAddToCart} className="btn btn-primary mt-6">
          Agregar al carrito
        </button>

        <div className="mt-10">
          <h2 className="font-medium mb-3">Descripción</h2>
          <h3 className="font-medium mt-6 mb-3">Especificaciones</h3>
          <ul className="space-y-2 list-disc list-inside opacity-90">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}


