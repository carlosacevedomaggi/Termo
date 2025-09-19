"use client"
import Link from 'next/link'
import { useCartStore } from '@/store/cart'
import { useEffect, useState } from 'react'

export default function CartPage() {
  const { items, removeItem, clear } = useCartStore()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const subtotal = items.reduce((acc, i) => acc + i.price * (i.quantity ?? 1), 0)

  return (
    <div className="container-edge py-14">
      <h1 className="text-3xl font-semibold mb-6">Cart</h1>
      {!mounted ? null : items.length === 0 ? (
        <div className="opacity-70">Your cart is empty. <Link className="underline" href="/products">Browse products</Link>.</div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={i.id} className="border border-border rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm opacity-70">Qty {i.quantity ?? 1}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div>${i.price * (i.quantity ?? 1)}</div>
                  <button className="text-sm underline" onClick={() => removeItem(i.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="border border-border rounded-xl p-5 h-fit">
            <div className="flex items-center justify-between">
              <span className="opacity-70">Subtotal</span>
              <span className="font-medium">${subtotal}</span>
            </div>
            <Link href="/checkout" className="btn btn-primary w-full mt-4">Checkout</Link>
            <button className="btn btn-outline w-full mt-2" onClick={() => clear()}>Clear cart</button>
          </div>
        </div>
      )}
    </div>
  )
}


