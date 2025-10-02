import { NextResponse } from "next/server"

import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data) return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })

  const {
    name,
    email,
    address,
    phone,
    method,
    currency,
    amount,
    items,
    reference,
    receiptPreference,
    manualPaymentMethod,
    fulfillmentType,
    fulfillmentLocationId,
    pickupLocationId,
    pickupLocationName,
    pickupLocationAddress,
    deliveryEtaMinutes,
    deliveryFee,
    metadata,
  } = data as Record<string, unknown>

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof address !== "string" ||
    typeof method !== "string" ||
    typeof currency !== "string" ||
    typeof amount !== "number" ||
    !Array.isArray(items)
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  if ((method === "paypal" || method === "card") && typeof reference !== "string") {
    return NextResponse.json({ error: "PayPal reference required" }, { status: 400 })
  }

  const normalizedItems = items.map((item) => {
    const { id, name: itemName, price, quantity } = item as {
      id: string
      name: string
      price: number
      quantity: number
    }
    return {
      productId: id,
      name: itemName,
      unitPrice: Math.round(price),
      quantity,
    }
  })

  const order = await prisma.order.create({
    data: {
      name,
      email,
      address,
      phone: typeof phone === "string" ? phone : null,
      method,
      currency,
      amount,
      status: method === "paypal" || method === "card" ? "paid" : "pending_review",
      reference: typeof reference === "string" ? reference : null,
      receiptPreference: typeof receiptPreference === "string" ? receiptPreference : null,
      manualPaymentMethod: typeof manualPaymentMethod === "string" ? manualPaymentMethod : null,
      fulfillmentType:
        fulfillmentType === "DELIVERY" || fulfillmentType === "PICKUP" ? fulfillmentType : "PICKUP",
      fulfillmentLocationId:
        typeof fulfillmentLocationId === "string" ? fulfillmentLocationId : null,
      pickupLocationId: typeof pickupLocationId === "string" ? pickupLocationId : null,
      pickupLocationName: typeof pickupLocationName === "string" ? pickupLocationName : null,
      pickupLocationAddress:
        typeof pickupLocationAddress === "string" ? pickupLocationAddress : null,
      deliveryEtaMinutes:
        typeof deliveryEtaMinutes === "number" ? Math.round(deliveryEtaMinutes) : null,
      deliveryFee: typeof deliveryFee === "number" ? Math.round(deliveryFee) : 0,
      metadata: metadata ?? null,
      items: {
        create: normalizedItems,
      },
    },
    include: { items: true },
  })

  const notificationPayload = {
    id: order.id,
    status: order.status,
    name: order.name,
    email: order.email,
    phone: order.phone,
    address: order.address,
    method: order.method,
    currency: order.currency,
    amount: order.amount,
    reference: order.reference,
    receiptPreference: order.receiptPreference,
    manualPaymentMethod: order.manualPaymentMethod,
    fulfillmentType: order.fulfillmentType,
    fulfillmentLocationId: order.fulfillmentLocationId,
    pickupLocationId: order.pickupLocationId,
    pickupLocationName: order.pickupLocationName,
    pickupLocationAddress: order.pickupLocationAddress,
    deliveryEtaMinutes: order.deliveryEtaMinutes,
    deliveryFee: order.deliveryFee,
    metadata: order.metadata,
    items: order.items.map((item) => ({
      id: item.productId,
      productId: item.productId,
      name: item.name,
      price: item.unitPrice,
      unitPrice: item.unitPrice,
      quantity: item.quantity,
    })),
  }

  fetch("http://localhost:4000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notificationPayload),
  }).catch((error) => {
    console.warn("Failed to notify mobile server", error)
  })

  return NextResponse.json({ id: order.id, status: order.status })
}


