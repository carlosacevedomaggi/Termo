import { distributorLocations } from "@/app/support/partners/data"

export type Coordinates = {
  lat: number
  lng: number
}

export type DistributorLocation = {
  id: string
  name: string
  address: string
  cityState: string
  coordinates?: Coordinates
}

export function loadDistributorsStub(): DistributorLocation[] {
  return distributorLocations.flatMap((location) =>
    location.businesses.map((business) => ({
      id: `${business.name}-${business.address}`,
      name: business.name,
      address: business.address,
      cityState: business.cityState,
    }))
  )
}

