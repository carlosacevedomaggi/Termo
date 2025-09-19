import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data || typeof data.amount !== 'number' || !data.currency) {
    return NextResponse.json({ error: 'amount and currency required' }, { status: 400 })
  }
  // TODO: create payment intent with provider (Stripe/Mercado Pago)
  return NextResponse.json({ clientSecret: 'pi_test_secret_123' })
}


