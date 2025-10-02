import ProductsClient from "./ProductsClient"
import { redirect } from "next/navigation"

export default function ProductsPage() {
  redirect("/products/catalog")
}


