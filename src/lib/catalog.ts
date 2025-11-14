import prisma from "./prisma"
import { getProductCategories } from "./product-data"

export type CatalogProductInput = {
  id: string
  slug: string
  name: string
  price: number
  shortDescription: string
  image?: string
  manufacturer?: string
  model?: string
  availability: number
  supportsCondition: boolean
  refurbishedPrice?: number
  kitAddOnName?: string
  kitAddOnPrice?: number
}

export type CatalogCategory = {
  id: string
  name: string
  tagline?: string
  heroImage?: string
  products: CatalogProductInput[]
}

export type CatalogData = {
  categories: CatalogCategory[]
}

export async function loadCatalog(): Promise<CatalogData> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        products: {
          orderBy: { name: "asc" },
          include: { images: { orderBy: { position: "asc" } } },
        },
      },
    })

    if (!categories.length) {
      const fallback = getProductCategories()
      return {
        categories: fallback.map((category) => ({
          id: category.id,
          name: category.name,
          tagline: category.tagline,
          heroImage: category.heroImage,
          products: category.products.map((product) => ({
            id: product.slug,
            slug: product.slug,
            name: product.name,
            price: product.price,
            shortDescription: product.shortDescription,
            image: product.image,
            manufacturer: product.manufacturer,
            model: product.model,
            availability: product.availability,
            supportsCondition: Boolean(product.supportsCondition),
            refurbishedPrice: product.refurbishedPrice,
            kitAddOnName: product.kitAddOn?.name,
            kitAddOnPrice: product.kitAddOn?.price,
          })),
        })),
      }
    }

    return {
      categories: categories.map((category) => ({
        id: category.slug,
        name: category.name,
        tagline: category.tagline ?? undefined,
        heroImage: category.heroImage ?? undefined,
        products: category.products.map((product) => ({
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price / 100,
          shortDescription: product.shortDescription ?? product.description.slice(0, 180),
          image: product.images[0]?.url,
          manufacturer: product.manufacturer ?? undefined,
          model: product.model ?? undefined,
          availability: product.availability,
          supportsCondition: product.supportsCondition,
          refurbishedPrice: product.refurbishedPrice ? product.refurbishedPrice / 100 : undefined,
          kitAddOnName: product.kitAddOnName ?? undefined,
          kitAddOnPrice: product.kitAddOnPrice ? product.kitAddOnPrice / 100 : undefined,
        })),
      })),
    }
  } catch (error) {
    // If database is not available or misconfigured, fall back to file-based product data
    console.warn('Database not available, using fallback product data:', error instanceof Error ? error.message : error)
    const fallback = getProductCategories()
    return {
      categories: fallback.map((category) => ({
        id: category.id,
        name: category.name,
        tagline: category.tagline,
        heroImage: category.heroImage,
        products: category.products.map((product) => ({
          id: product.slug,
          slug: product.slug,
          name: product.name,
          price: product.price,
          shortDescription: product.shortDescription,
          image: product.image,
          manufacturer: product.manufacturer,
          model: product.model,
          availability: product.availability,
          supportsCondition: Boolean(product.supportsCondition),
          refurbishedPrice: product.refurbishedPrice,
          kitAddOnName: product.kitAddOn?.name,
          kitAddOnPrice: product.kitAddOn?.price,
        })),
      })),
    }
  }
}

