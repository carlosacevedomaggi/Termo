"use client"
import { useMemo, useState } from 'react'
import { useCartStore } from '@/store/cart'
import { PAYMENT_METHODS } from '@/shared/payments'

export default function CheckoutPage() {
  const { items, clear } = useCartStore()
  const total = items.reduce((acc, i) => acc + i.price * (i.quantity ?? 1), 0)
  const [status, setStatus] = useState<'idle'|'processing'|'done'>('idle')
  const [selectedMethodId, setSelectedMethodId] = useState(PAYMENT_METHODS[0].id)
  const selectedMethod = useMemo(() => PAYMENT_METHODS.find(m => m.id === selectedMethodId)!, [selectedMethodId])
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    selectedMethod.fields.forEach(f => { if (f.required && !fieldValues[f.id]) newErrors[f.id] = 'Required' })
    if (!fieldValues['name']) newErrors['name'] = 'Required'
    if (!fieldValues['email']) newErrors['email'] = 'Required'
    if (!fieldValues['address']) newErrors['address'] = 'Required'
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }
    setErrors({})
    setStatus('processing')
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fieldValues['name'],
          email: fieldValues['email'],
          address: fieldValues['address'],
          method: selectedMethod.id,
          currency: selectedMethod.currency,
          amount: Math.round(total * 100),
          items: items.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity ?? 1 })),
        })
      })
      if (!res.ok) throw new Error('Order creation failed')
      const data = await res.json()
      console.log('Order created', data)
      setStatus('done'); clear()
    } catch (err) {
      console.error(err)
      setStatus('idle')
    }
  }

  if (status === 'done') {
    return (
      <div className="container-edge py-14">
        <h1 className="text-3xl font-semibold">Thank you</h1>
        <p className="mt-2 opacity-80">Your order has been placed.</p>
      </div>
    )
  }

  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid gap-4">
            <div>
              <label className="text-sm opacity-70">Name</label>
              <input className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={fieldValues['name'] ?? ''} onChange={(e)=>setFieldValues(v=>({...v,name:e.target.value}))} />
              {errors['name'] && <p className="text-xs text-red-600 mt-1">{errors['name']}</p>}
            </div>
            <div>
              <label className="text-sm opacity-70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={fieldValues['email'] ?? ''} onChange={(e)=>setFieldValues(v=>({...v,email:e.target.value}))} />
              {errors['email'] && <p className="text-xs text-red-600 mt-1">{errors['email']}</p>}
            </div>
            <div>
              <label className="text-sm opacity-70">Address</label>
              <input className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={fieldValues['address'] ?? ''} onChange={(e)=>setFieldValues(v=>({...v,address:e.target.value}))} />
              {errors['address'] && <p className="text-xs text-red-600 mt-1">{errors['address']}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <div className="font-medium">Payment method</div>
            <div className="grid gap-3">
              {PAYMENT_METHODS.map(m => (
                <label key={m.id} className={`border rounded-xl p-3 cursor-pointer transition-colors ${selectedMethodId===m.id? 'border-black bg-black/[0.02]' : 'border-border hover:bg-muted'}`}>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="accent-black" checked={selectedMethodId===m.id} onChange={()=>setSelectedMethodId(m.id)} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{m.label}</span>
                        <span className="text-xs opacity-70">{m.currency}</span>
                      </div>
                      {m.description && <p className="text-xs opacity-70 mt-0.5">{m.description}</p>}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="border border-border rounded-xl p-4">
              <div className="text-sm font-medium mb-2">Instructions</div>
              <ul className="text-sm space-y-1">
                {selectedMethod.merchantInfo.map(info => (
                  <li key={info.label} className="flex items-center justify-between gap-4">
                    <span className="opacity-70">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4">
              {selectedMethod.fields.map(f => (
                <div key={f.id}>
                  <label className="text-sm opacity-70">{f.label}</label>
                  {f.type === 'select' ? (
                    <select className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-white" value={fieldValues[f.id] ?? ''} onChange={(e)=>setFieldValues(v=>({...v,[f.id]:e.target.value}))}>
                      <option value="">Select…</option>
                      {(f.options ?? []).map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  ) : (
                    <input type={f.type==='email'?'email':'text'} placeholder={f.placeholder} className="mt-1 w-full rounded-lg border border-border px-3 py-2" value={fieldValues[f.id] ?? ''} onChange={(e)=>setFieldValues(v=>({...v,[f.id]:e.target.value}))} />
                  )}
                  {errors[f.id] && <p className="text-xs text-red-600 mt-1">{errors[f.id]}</p>}
                </div>
              ))}
            </div>
          </div>

          <button disabled={status==='processing'} className="btn btn-primary">{status==='processing' ? 'Processing…' : 'Place order'}</button>
        </form>
      </div>

      <div className="border border-border rounded-xl p-5 h-fit">
        <div className="font-medium mb-3">Order Summary</div>
        <div className="space-y-2 text-sm">
          {items.map(i => (
            <div key={i.id} className="flex items-center justify-between">
              <span>{i.name} × {i.quantity ?? 1}</span>
              <span>${i.price * (i.quantity ?? 1)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="opacity-70">Total</span>
          <span className="font-medium">${total}</span>
        </div>
      </div>
    </div>
  )
}


