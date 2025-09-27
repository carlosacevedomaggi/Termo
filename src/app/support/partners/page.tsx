import { sections } from "./data"
import { PartnersClient } from "./PartnersClient"

export const metadata = {
  title: "Aliados | TerMo",
  description: "Consulta la red de distribuidores y centros de servicio autorizados.",
}

export default function PartnersPage() {
  const current = sections[0]

  return <PartnersClient sections={sections} initialSection={current.id} />
}


