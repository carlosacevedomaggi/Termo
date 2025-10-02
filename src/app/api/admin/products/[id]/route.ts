import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

type Params = Promise<{ id: string }>

export async function PATCH(request: Request, { params }: { params: Params }) {
  const { id } = await params
  const body = await request.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const {
    name,
    description,
    manufacturer,
    model,
    availability,
    price,
    refurbishedPrice,
    supportsCondition,
    kitAddOnName,
    kitAddOnPrice,
    categoryId,
    heroImage,
    shortDescription,
  } = body as Record<string, unknown>

  const product = await prisma.product.update({
    where: { id },
    data: {
      name: typeof name === "string" ? name : undefined,
      description: typeof description === "string" ? description : undefined,
      manufacturer: typeof manufacturer === "string" ? manufacturer : undefined,
      model: typeof model === "string" ? model : undefined,
      availability: typeof availability === "number" ? availability : undefined,
      price: typeof price === "number" ? price : undefined,
      refurbishedPrice: typeof refurbishedPrice === "number" ? refurbishedPrice : null,
      supportsCondition: typeof supportsCondition === "boolean" ? supportsCondition : undefined,
      kitAddOnName: typeof kitAddOnName === "string" ? kitAddOnName : null,
      kitAddOnPrice: typeof kitAddOnPrice === "number" ? kitAddOnPrice : null,
      categoryId: typeof categoryId === "string" ? categoryId : undefined,
      heroImage: typeof heroImage === "string" ? heroImage : undefined,
      shortDescription: typeof shortDescription === "string" ? shortDescription : undefined,
    },
  })

  return NextResponse.json({ product })
}

export async function DELETE(_request: Request, { params }: { params: Params }) {
  const { id } = await params
  await prisma.product.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}

