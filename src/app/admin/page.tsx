import AdminShell from "./ui/AdminShell"
import ProductsManager from "./ui/ProductsManager"

export default function AdminHome() {
  return (
    <AdminShell>
      <ProductsManager />
    </AdminShell>
  )
}


