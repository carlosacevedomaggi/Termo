import rawData from "@/data/partner-coordinates.json"

export type PartnerLocation = {
  id: string
  type: "distributor" | "service"
  name: string
  address: string
  cityState: string
  lat: number
  lng: number
  source?: string
}

const partners: PartnerLocation[] = Object.entries(rawData).map(([key, value]) => ({
  id: key,
  type: value.type as PartnerLocation["type"],
  name: value.name,
  address: value.address,
  cityState: value.cityState,
  lat: value.lat,
  lng: value.lng,
  source: value.source,
}))

export function getAllPartners(): PartnerLocation[] {
  return partners
}

export function getPartnersByType(type: PartnerLocation["type"]): PartnerLocation[] {
  return partners.filter((partner) => partner.type === type)
}

export function getPartnerById(id: string | null | undefined): PartnerLocation | null {
  if (!id) return null
  return partners.find((partner) => partner.id === id) ?? null
}
