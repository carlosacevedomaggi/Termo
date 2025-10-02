import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  const products = await prisma.product.findMany({
    include: { category: true, images: { orderBy: { position: "asc" } } },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json({ products })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }
  const {
    name,
    slug,
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

  if (!name || !slug || !description || typeof price !== "number" || !categoryId) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const product = await prisma.product.create({
    data: {
      name: name as string,
      slug: slug as string,
      description: description as string,
      manufacturer: (manufacturer as string) || null,
      model: (model as string) || null,
      availability: typeof availability === "number" ? availability : 0,
      price,
      refurbishedPrice: typeof refurbishedPrice === "number" ? refurbishedPrice : null,
      supportsCondition: Boolean(supportsCondition),
      kitAddOnName: (kitAddOnName as string) || null,
      kitAddOnPrice: typeof kitAddOnPrice === "number" ? kitAddOnPrice : null,
      categoryId: categoryId as string,
      heroImage: (heroImage as string) || null,
      shortDescription: (shortDescription as string) || null,
    },
  })

  return NextResponse.json({ product }, { status: 201 })
}

