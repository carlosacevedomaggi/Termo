import { useCartStore } from '@/store/cart'
import { useState } from 'react'

export default function Checkout() {
  const { items, clear } = useCartStore()
  const total = items.reduce((acc, i) => acc + i.price * (i.quantity ?? 1), 0)
  const [status, setStatus] = useState<'idle'|'processing'|'done'>('idle')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('processing')
    setTimeout(() => { setStatus('done'); clear() }, 800)
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
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-sm opacity-70">Name</label>
            <input required className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="text-sm opacity-70">Email</label>
            <input type="email" required className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="text-sm opacity-70">Address</label>
            <input required className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <button disabled={status==='processing'} className="btn btn-primary">{status==='processing' ? 'Processing…' : 'Place order'}</button>
        </form>
      </div>
      <div className="border border-border rounded-xl p-5 h-fit">
        <div className="font-medium mb-3">Order Summary</div>
        <div className="space-y-2">
          {items.map(i => (
            <div key={i.id} className="flex items-center justify-between text-sm">
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


