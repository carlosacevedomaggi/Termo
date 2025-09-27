import fs from "node:fs"
import path from "node:path"

export type ProductRecord = {
  slug: string
  name: string
  description: string
  manufacturer: string
  model: string
  availability: number
  price: number
  quantity: number
  images: string[]
  categoryId: string
  categoryName: string
  categoryTagline: string
  supportsCondition?: boolean
  refurbishmentDiscount?: number
  refurbishedPrice?: number
  kitAddOn?: KitAddOn
}

export type ProductCategory = {
  id: string
  name: string
  tagline: string
  heroImage?: string
  products: ProductSummary[]
}

export type ProductSummary = {
  slug: string
  name: string
  price: number
  shortDescription: string
  image?: string
  manufacturer: string
  model: string
  availability: number
  supportsCondition?: boolean
  refurbishmentDiscount?: number
  refurbishedPrice?: number
  kitAddOn?: KitAddOn
}

type ParsedMeta = {
  name: string
  manufacturer: string
  model: string
  availability: number
  price: number
  quantity: number
  description: string
}

type KitAddOn = {
  slug: string
  name: string
  price: number
}

type CategoryConfig = {
  id: string
  name: string
  tagline: string
  dir: string
  heroImage?: string
  mode: "single" | "collection"
}

const SOURCE_ROOT = path.join(process.cwd(), "images")
const PUBLIC_ROOT = path.join(process.cwd(), "public", "images")

const CATEGORY_CONFIG: CategoryConfig[] = [
  {
    id: "calentadores-termotronic",
    name: "Calentadores Termotronic",
    tagline: "Calentadores eléctricos instantáneos con control inteligente.",
    dir: "termo",
    heroImage: "termo/termo-descriptivo.jpg",
    mode: "single",
  },
  {
    id: "calentadores-cbx",
    name: "Calentadores Industriales CBX",
    tagline: "Potencia multivoltaje y seguridad para aplicaciones exigentes.",
    dir: "cbx",
    heroImage: "CBX/CBX-descriptivo.jpg",
    mode: "single",
  },
  {
    id: "accesorios",
    name: "Accesorios y Repuestos",
    tagline: "Componentes originales para instalación y mantenimiento.",
    dir: "accesorios",
    heroImage: "accesorios/kit/kit descriptivo.jpg",
    mode: "collection",
  },
]

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i
const CONDITION_CATEGORY_IDS = new Set(["calentadores-termotronic", "calentadores-cbx"])
const REFURBISHED_DISCOUNT = 0.85
const REFURBISHED_PRICE_BY_CATEGORY: Partial<Record<string, number>> = {
  "calentadores-termotronic": 298,
  "calentadores-cbx": 206,
}
const CATEGORY_IMAGE_OVERRIDES: Partial<Record<string, string[]>> = {
  "calentadores-termotronic": ["termo/termo-descriptivo.jpg"],
}
const CATEGORY_IMAGE_PRIORITY: Partial<Record<string, string[]>> = {
  "calentadores-termotronic": ["Termo-caja", "termo-descriptivo"],
  "calentadores-cbx": ["CBX-caja"],
}

const categoryCache = new Map<string, LoadedCategory>()
let cachedKitAddOn: KitAddOn | null | undefined

export function getProductCategories(): ProductCategory[] {
  return CATEGORY_CONFIG.map(loadCategory).filter(Boolean) as ProductCategory[]
}

export function getAllProducts(): ProductRecord[] {
  const categories = CATEGORY_CONFIG.map(loadCategoryWithProducts).filter(Boolean) as LoadedCategory[]
  return categories.flatMap((category) => category.products.map((product) => ({
    slug: product.slug,
    name: product.meta.name,
    description: product.meta.description,
    manufacturer: product.meta.manufacturer,
    model: product.meta.model,
    availability: product.meta.availability,
    price: product.meta.price,
    quantity: product.meta.quantity,
    images: product.images,
    categoryId: category.config.id,
    categoryName: category.config.name,
    categoryTagline: category.config.tagline,
    supportsCondition: CONDITION_CATEGORY_IDS.has(category.config.id) ? true : undefined,
    refurbishmentDiscount: CONDITION_CATEGORY_IDS.has(category.config.id) ? REFURBISHED_DISCOUNT : undefined,
    refurbishedPrice: CONDITION_CATEGORY_IDS.has(category.config.id) ? REFURBISHED_PRICE_BY_CATEGORY[category.config.id] : undefined,
    kitAddOn: CONDITION_CATEGORY_IDS.has(category.config.id) ? getKitAddOn() ?? undefined : undefined,
  })))
}

export function getProductBySlug(slug: string): ProductRecord | null {
  return getAllProducts().find((p) => p.slug === slug) ?? null
}

function loadCategory(config: CategoryConfig): ProductCategory | null {
  const loaded = loadCategoryWithProducts(config)
  if (!loaded || loaded.products.length === 0) return null

  const heroImage = config.heroImage ? ensurePublicAsset(path.join(SOURCE_ROOT, config.heroImage)) : loaded.products[0]?.images[0]
  const overrideHero = CATEGORY_IMAGE_OVERRIDES[config.id]
  const hero = overrideHero ? ensurePublicAssets(overrideHero)[0] : heroImage

  return {
    id: config.id,
    name: config.name,
    tagline: config.tagline,
    heroImage: hero,
    products: loaded.products.map((product) => ({
      slug: product.slug,
      name: product.meta.name,
      price: product.meta.price,
      shortDescription: buildShortDescription(product.meta.description),
      image: product.images[0],
      manufacturer: product.meta.manufacturer,
      model: product.meta.model,
      availability: product.meta.availability,
      supportsCondition: CONDITION_CATEGORY_IDS.has(config.id) ? true : undefined,
      refurbishmentDiscount: CONDITION_CATEGORY_IDS.has(config.id) ? REFURBISHED_DISCOUNT : undefined,
      refurbishedPrice: CONDITION_CATEGORY_IDS.has(config.id) ? REFURBISHED_PRICE_BY_CATEGORY[config.id] : undefined,
      kitAddOn: CONDITION_CATEGORY_IDS.has(config.id) ? getKitAddOn() ?? undefined : undefined,
    })),
  }
}

type LoadedProduct = {
  slug: string
  meta: ParsedMeta
  images: string[]
}

type LoadedCategory = {
  config: CategoryConfig
  products: LoadedProduct[]
}

function loadCategoryWithProducts(config: CategoryConfig): LoadedCategory | null {
  if (categoryCache.has(config.id)) {
    return categoryCache.get(config.id)!
  }
  const baseDir = path.join(SOURCE_ROOT, config.dir)
  if (!fs.existsSync(baseDir)) return null

  const products: LoadedProduct[] = []

  if (config.mode === "single") {
    const metaPath = path.join(baseDir, "title-price-desc.txt")
    if (!fs.existsSync(metaPath)) return null
    const meta = parseMetadata(metaPath)
    if (!meta) return null
    let images = collectImages(baseDir)
    images = applyPriority(config.id, images)
    const slug = slugify(`${config.id}-${meta.model || meta.name || config.dir}`)
    products.push({ slug, meta, images })
  } else {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const folder = path.join(baseDir, entry.name)
      const metaPath = path.join(folder, "title-price-desc.txt")
      if (!fs.existsSync(metaPath)) continue
      const meta = parseMetadata(metaPath)
      if (!meta) continue
      const images = collectImages(folder)
      const slugBase = `${config.id}-${entry.name}-${meta.model || meta.name}`
      const slug = slugify(slugBase)
      products.push({ slug, meta, images })
    }
    // Keep deterministic order
    products.sort((a, b) => a.meta.name.localeCompare(b.meta.name, "es", { sensitivity: "base" }))
  }
  const result: LoadedCategory = { config, products }
  categoryCache.set(config.id, result)
  return result
}

function parseMetadata(filePath: string): ParsedMeta | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8")
    const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter((line) => line.length > 0)

    if (lines.length === 0) return null

    let pointer = lines.length - 1

    const readLine = (offset = 0) => lines[pointer - offset]
    const popLine = () => lines.splice(pointer--, 1)[0]

    let quantity = 1
    const quantityCandidate = readLine()
    if (quantityCandidate && /[0-9]/.test(quantityCandidate) && !/[a-zA-Z]/.test(quantityCandidate)) {
      quantity = parseInt(quantityCandidate.replace(/[^0-9]/g, ""), 10) || 1
      popLine()
    }
    if (/^Cantidad/i.test(readLine() ?? "")) {
      popLine()
    }

    let price = 0
    const priceCandidate = readLine()
    if (priceCandidate) {
      const match = priceCandidate.match(/\$\s*([0-9]+(?:[.,][0-9]{1,2})?)/)
      if (match) {
        price = Number(match[1].replace(/\./g, "").replace(/,/g, "."))
        popLine()
      }
    }

    let availability = 0
    if (/^Disponibilidad:/i.test(readLine() ?? "")) {
      const line = popLine()
      availability = parseInt(line.replace(/^Disponibilidad:\s*/i, "").replace(/[^0-9]/g, ""), 10) || 0
    }

    let model = ""
    if (/^Modelo:/i.test(readLine() ?? "")) {
      const line = popLine()
      model = line.replace(/^Modelo:\s*/i, "").trim()
    }

    let manufacturer = ""
    if (/^Fabricante:/i.test(readLine() ?? "")) {
      const line = popLine()
      manufacturer = line.replace(/^Fabricante:\s*/i, "").trim()
    }

    let name = ""
    if (pointer >= 0) {
      name = popLine()?.trim() ?? ""
    }

    const description = lines.slice(0, pointer + 1).join("\n").trim()

    return {
      name,
      manufacturer,
      model,
      availability,
      price,
      quantity,
      description,
    }
  } catch (error) {
    console.error("Failed to parse metadata", filePath, error)
    return null
  }
}

function collectImages(folder: string): string[] {
  if (!fs.existsSync(folder)) return []
  const files = fs.readdirSync(folder)
  return files
    .filter((file) => IMAGE_EXT.test(file))
    .map((file) => ensurePublicAsset(path.join(folder, file)))
}

function ensurePublicAsset(fullPath: string): string {
  const relative = path.relative(SOURCE_ROOT, fullPath)
  const publicPath = path.join(PUBLIC_ROOT, relative)
  try {
    fs.mkdirSync(path.dirname(publicPath), { recursive: true })
    if (!fs.existsSync(publicPath)) {
      fs.copyFileSync(fullPath, publicPath)
    }
  } catch (error) {
    console.error("Failed to ensure public asset", fullPath, error)
  }
  return `/images/${relative.replace(/\\/g, "/")}`
}

function ensurePublicAssets(relatives: string[]): string[] {
  return relatives.map((relative) => ensurePublicAsset(path.join(SOURCE_ROOT, relative)))
}

function buildShortDescription(description: string): string {
  const cleaned = description.split(/\n+/).map((line) => line.trim()).filter(Boolean)
  const summary = cleaned.slice(0, 2).join(" ")
  return summary.length > 160 ? summary.slice(0, 157) + "…" : summary
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getKitAddOn(): KitAddOn | null {
  if (cachedKitAddOn !== undefined) return cachedKitAddOn
  const accessoriesConfig = CATEGORY_CONFIG.find((cfg) => cfg.id === "accesorios")
  if (!accessoriesConfig) {
    cachedKitAddOn = null
    return cachedKitAddOn
  }
  const accessories = loadCategoryWithProducts(accessoriesConfig)
  if (!accessories) {
    cachedKitAddOn = null
    return cachedKitAddOn
  }
  const kitProduct = accessories.products.find((product) => /kit/i.test(product.meta.name))
  if (!kitProduct) {
    cachedKitAddOn = null
    return cachedKitAddOn
  }
  cachedKitAddOn = {
    slug: kitProduct.slug,
    name: kitProduct.meta.name,
    price: kitProduct.meta.price > 0 ? kitProduct.meta.price : 50,
  }
  return cachedKitAddOn
}

function applyPriority(categoryId: string, images: string[]): string[] {
  const priorities = CATEGORY_IMAGE_PRIORITY[categoryId]
  if (!priorities || !priorities.length) return images
  const sorted = [...images]
  for (let i = priorities.length - 1; i >= 0; i--) {
    const keyword = priorities[i]
    const index = sorted.findIndex((img) => img.toLowerCase().includes(keyword.toLowerCase()))
    if (index > 0) {
      const [image] = sorted.splice(index, 1)
      sorted.unshift(image)
    }
  }
  return sorted
}


