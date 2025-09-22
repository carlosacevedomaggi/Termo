"use client"
import { useCartStore } from '@/store/cart'
import { useState } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  description: string
  specs: string[]
  hasInstallKit?: boolean
}

export default function ProductDetailClient({ product, images }: { product: Product; images: string[] }) {
  const addToCart = useCartStore(s => s.addItem)
  const [ack, setAck] = useState<string | null>(null)
  const [condicion, setCondicion] = useState<'nuevo'|'reacondicionado'>('nuevo')
  const [kitInstalacion, setKitInstalacion] = useState<boolean>(false)
  const [imgIdx, setImgIdx] = useState(0)

  const precioFinal = product.price + ((product.hasInstallKit && kitInstalacion) ? 50 : 0)

  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div>
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
      </div>

      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 opacity-80">{product.description}</p>

        {product.hasInstallKit && (
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm opacity-70">Condición</label>
              <select className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={condicion} onChange={(e)=>setCondicion(e.target.value as 'nuevo'|'reacondicionado')}>
                <option value="nuevo">Nuevo</option>
                <option value="reacondicionado">Reacondicionado</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-black" checked={kitInstalacion} onChange={(e)=>setKitInstalacion(e.target.checked)} />
                Agregar kit de instalación (+$50)
              </label>
            </div>
          </div>
        )}

        <p className="mt-6 text-2xl">${precioFinal}{condicion==='reacondicionado' ? ' (reacondicionado)' : ''}</p>
        {ack && <div className="mt-4 text-sm bg-black text-white px-3 py-2 rounded-md w-fit">{ack}</div>}
        <button
          onClick={() => {
            addToCart({
              id: product.id + (kitInstalacion? '_kit':'' ) + '_' + condicion,
              name: product.name + (kitInstalacion? ' + Kit':'' ) + (condicion==='reacondicionado'? ' (Reacondicionado)':''),
              price: precioFinal,
            })
            setAck(`${product.name} agregado al carrito`); setTimeout(()=>setAck(null), 1500)
          }}
          className="btn btn-primary mt-6"
        >
          Agregar al carrito
        </button>

        <div className="mt-10">
          <h2 className="font-medium mb-3">Descripción</h2>
          <p className="opacity-80">Calentador de agua eléctrico, instantáneo (sin tanque). {product.description}</p>
          <h3 className="font-medium mt-6 mb-3">Especificaciones</h3>
          <ul className="space-y-2 list-disc list-inside opacity-90">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}


