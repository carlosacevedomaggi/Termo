"use client"
import Link from 'next/link'
import { useCartStore } from '@/store/cart'

export default function CartButton() {
  const items = useCartStore(s => s.items)
  const count = items.reduce((acc, i) => acc + (i.quantity ?? 1), 0)
  return (
    <Link href="/cart" className="relative border px-3 py-1.5 rounded-md">
      Cart
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  )
}


