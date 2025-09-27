import { notFound } from "next/navigation"
import ProductDetailClient from "./ProductDetailClient"
import { getProductBySlug } from "@/lib/product-data"

type ProductPageParams = {
  params: {
    id: string
  }
}

export default async function ProductDetailPage({ params }: ProductPageParams) {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product) {
    notFound()
  }

  return (
    <ProductDetailClient
      product={{
        id: product.slug,
        name: product.name,
        price: product.price,
        description: product.description,
        specs: buildSpecs(product),
        manufacturer: product.manufacturer,
        model: product.model,
        availability: product.availability,
        supportsCondition: product.supportsCondition,
        refurbishmentDiscount: product.refurbishmentDiscount,
        refurbishedPrice: product.refurbishedPrice,
        kitAddOn: product.kitAddOn,
      }}
      images={product.images}
    />
  )
}

function buildSpecs(product: ReturnType<typeof getProductBySlug>) {
  if (!product) return [] as string[]
  return [
    `Fabricante: ${product.manufacturer}`,
    `Modelo: ${product.model}`,
    `Disponibilidad: ${product.availability}`,
  ]
}


