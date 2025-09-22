"use client"
import { useCartStore } from '@/store/cart'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
// Product images
import TermoDes from '../../../../images/termo/termo-descriptivo.jpg'
import TermoPlain from '../../../../images/termo/termo-plain.jpg'
import TermoCaja from '../../../../images/termo/Termo-caja.jpg'
import TermoDims from '../../../../images/termo/termo-dimesiones.jpg'
import TermoExpl from '../../../../images/termo/termo-explicacion.jpg'
import CBXDes from '../../../../images/CBX/CBX-descriptivo.jpg'
import CBXPlain from '../../../../images/CBX/CBX-plain.jpg'
import CBXCaja from '../../../../images/CBX/CBX-caja.jpg'
import CBXEspec from '../../../../images/CBX/CBX-especificaciones.jpg'
import CBXDims from '../../../../images/CBX/CBX-dimensiones.jpg'

const DB: Record<string, { id: string; name: string; price: number; description: string; specs: string[]; hasInstallKit?: boolean }> = {
  ac_unit: { id: 'ac_unit', name: 'Inverter AC 12k BTU', price: 450, description: 'Efficient cooling. New or refurbished.', specs: ['Inverter','R32 Refrigerant','Low noise'], hasInstallKit: true },
  water_heater: { id: 'water_heater', name: 'Electric Water Heater 40L', price: 180, description: 'Compact and reliable. New or refurbished.', specs: ['Thermostat','Fast Recovery','Safety Valve'], hasInstallKit: true },
  mount_bracket: { id: 'mount_bracket', name: 'Wall Mount Bracket', price: 25, description: 'Universal bracket for AC installation.', specs: [] },
  copper_tube: { id: 'copper_tube', name: 'Copper Tube 3m', price: 30, description: 'For AC installation kits.', specs: [] },
  insulation_tape: { id: 'insulation_tape', name: 'Insulation Tape', price: 5, description: 'Thermal insulation for pipes.', specs: [] },
}

export default function ProductDetailPage() {
  const addToCart = useCartStore(s => s.addItem)
  const { id } = useParams<{ id: keyof typeof DB }>()
  // Map marketing slugs to internal ids
  const key = id === 'termotronic' ? 'water_heater' : id === 'cbx' ? 'water_heater' : id
  const product = key ? DB[key] : undefined
  const [ack, setAck] = useState<string | null>(null)
  if (!product) return <div className="container-edge py-14">Not found.</div>
  const [condition, setCondition] = useState<'new'|'refurbished'>('new')
  const [installKit, setInstallKit] = useState<boolean>(false)
  const [imgIdx, setImgIdx] = useState(0)

  const urlFrom = (img: any): string => (typeof img === 'string' ? img : (img?.src ?? ''))
  const isCBX = id === 'cbx'
  const termoImages = [TermoDes, TermoPlain, TermoCaja, TermoDims, TermoExpl].map(urlFrom)
  const cbxImages = [CBXDes, CBXPlain, CBXCaja, CBXEspec, CBXDims].map(urlFrom)
  const images = (key === 'water_heater') ? (isCBX ? cbxImages : termoImages) : ['/next.svg']

  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div className="rounded-3xl bg-muted aspect-square overflow-hidden">
        <img src={images[imgIdx] ?? images[0]} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="lg:col-span-2 order-last lg:order-none mt-2 -mb-6 flex gap-2 overflow-x-auto pb-2">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setImgIdx(i)}
            className={`h-16 w-16 rounded-lg overflow-hidden border ${imgIdx===i? 'border-black' : 'border-border'} shrink-0`}
            aria-label={`Imagen ${i+1}`}
          >
            <img src={src} alt="miniatura" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 opacity-80">{product.description}</p>
        {('hasInstallKit' in product && product.hasInstallKit) && (
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm opacity-70">Condition</label>
              <select className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={condition} onChange={(e)=>setCondition(e.target.value as 'new'|'refurbished')}>
                <option value="new">New</option>
                <option value="refurbished">Refurbished</option>
              </select>
            </div>
            <div className="flex items-end">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-black" checked={installKit} onChange={(e)=>setInstallKit(e.target.checked)} />
                Add installation kit (+$50)
              </label>
            </div>
          </div>
        )}
        <p className="mt-6 text-2xl">${product.price + ((product.hasInstallKit && installKit) ? 50 : 0)}{condition==='refurbished' ? ' (refurbished)' : ''}</p>
        {ack && <div className="mt-4 text-sm bg-black text-white px-3 py-2 rounded-md w-fit">{ack}</div>}
        <button
          onClick={() => {
            const finalPrice = product.price + ((product.hasInstallKit && installKit) ? 50 : 0)
            addToCart({ id: product.id + (installKit? '_kit':'' ) + '_' + condition, name: product.name + (installKit? ' + Kit':'' ) + (condition==='refurbished'? ' (Refurbished)':''), price: finalPrice })
            setAck(`${product.name} added to cart`); setTimeout(()=>setAck(null), 1500)
          }}
          className="btn btn-primary mt-6"
        >
          Add to Cart
        </button>

        <div className="mt-10">
          <h2 className="font-medium mb-3">Descripción</h2>
          <p className="opacity-80">Calentador de agua eléctrico, instantáneo (sin tanque). {product.description}</p>
          <h3 className="font-medium mt-6 mb-3">Especificaciones</h3>
          <ul className="space-y-2 list-disc list-inside opacity-90">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
          <h3 className="font-medium mt-8 mb-3">Accesorios recomendados</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {['mount_bracket','copper_tube','insulation_tape'].map(id => (
              <div key={id} className="min-w-44 border border-border rounded-lg p-3">
                <div className="h-24 rounded-md bg-muted mb-2" />
                <div className="text-sm font-medium capitalize">{id.replace('_',' ')}</div>
                <button className="btn btn-outline w-full mt-2" onClick={()=>addToCart({ id, name: id.replace('_',' '), price: id==='mount_bracket'?25:id==='copper_tube'?30:5 })}>Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


