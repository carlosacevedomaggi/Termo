import type { PartnerLocation } from "./partners"

export function calculateHaversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371e3
  const toRad = (value: number) => (value * Math.PI) / 180
  const φ1 = toRad(lat1)
  const φ2 = toRad(lat2)
  const Δφ = toRad(lat2 - lat1)
  const Δλ = toRad(lng2 - lng1)

  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

export function sortPartnersByDistance(
  partners: PartnerLocation[],
  userLat: number,
  userLng: number
): PartnerLocation[] {
  return [...partners].sort((a, b) => {
    const distA = calculateHaversineDistance(userLat, userLng, a.lat, a.lng)
    const distB = calculateHaversineDistance(userLat, userLng, b.lat, b.lng)
    return distA - distB
  })
}
