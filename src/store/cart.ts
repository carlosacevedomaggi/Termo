import { create } from 'zustand'

export type CartItem = {
  id: string
  name: string
  price: number
  quantity?: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  clear: () => void
}

const STORAGE_KEY = 'termo.cart.v1'

const load = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

const save = (items: CartItem[]) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch {}
}

export const useCartStore = create<CartState>((set, get) => ({
  items: load(),
  addItem: (item) => set(() => {
    const existing = get().items.find(i => i.id === item.id)
    const updated = existing
      ? get().items.map(i => i.id === item.id ? { ...i, quantity: (i.quantity ?? 1) + 1 } : i)
      : [...get().items, { ...item, quantity: 1 }]
    save(updated)
    return { items: updated }
  }),
  removeItem: (id) => set(() => {
    const updated = get().items.filter(i => i.id !== id)
    save(updated)
    return { items: updated }
  }),
  clear: () => set(() => { save([]); return { items: [] } })
}))


