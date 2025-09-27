import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  const { name, email, address, method, currency, amount, items, reference } = data as {
    name: string
    email: string
    address: string
    method: string
    currency: string
    amount: number
    reference?: string
    items: { id: string; name: string; price: number; quantity: number }[]
  }
  if (!name || !email || !address || !method || !currency || typeof amount !== 'number' || !Array.isArray(items)) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  if ((method === 'paypal' || method === 'card') && !reference) {
    return NextResponse.json({ error: 'PayPal reference required' }, { status: 400 })
  }
  const order = await prisma.order.create({
    data: {
      name,
      email,
      address,
      method,
      currency,
      amount,
      status: method === 'paypal' || method === 'card' ? 'paid' : 'pending_payment',
      reference: reference ?? null,
      items: {
        create: items.map(i => ({ productId: i.id, name: i.name, unitPrice: Math.round(i.price * 100), quantity: i.quantity }))
      }
    },
    include: { items: true }
  })
  return NextResponse.json({ id: order.id, status: order.status })
}


