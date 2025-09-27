import ProductsClient from "./ProductsClient"
import { getProductCategories } from "@/lib/product-data"

export default function ProductsPage() {
  const categories = getProductCategories()
  return <ProductsClient categories={categories} />
}


