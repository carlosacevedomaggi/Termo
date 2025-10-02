import ProductsClient from "../ProductsClient"
import { loadCatalog } from "@/lib/catalog"

export default async function CatalogPage() {
  const catalog = await loadCatalog()
  return <ProductsClient categories={catalog.categories} />
}

