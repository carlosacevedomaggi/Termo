import { NextResponse } from "next/server"

const ORS_KEY = process.env.ORS_API_KEY

export async function POST(request: Request) {
  if (!ORS_KEY) {
    return NextResponse.json({ error: "ORS key not configured" }, { status: 500 })
  }

  const body = await request.json().catch(() => null)
  if (!body || typeof body.query !== "string" || !body.query.trim()) {
    return NextResponse.json({ error: "Query is required" }, { status: 400 })
  }

  const url = new URL("https://api.openrouteservice.org/geocode/search")
  url.searchParams.set("text", body.query.trim())
  url.searchParams.set("boundary.country", "VE")
  url.searchParams.set("size", body.limit ? String(body.limit) : "5")

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: ORS_KEY,
    },
  })

  if (!response.ok) {
    const text = await response.text()
    return NextResponse.json({ error: text || "Failed to geocode" }, { status: response.status })
  }

  const data = await response.json()
  const results = (data.features ?? []).map((feature: any, index: number) => ({
    id: feature.properties?.id ?? `${feature.properties?.osm_id ?? index}`,
    label: feature.properties?.label ?? feature.properties?.name ?? body.query,
    name: feature.properties?.name ?? feature.properties?.label ?? body.query,
    locality: feature.properties?.locality ?? feature.properties?.region ?? "",
    lat: feature.geometry?.coordinates?.[1],
    lng: feature.geometry?.coordinates?.[0],
  })).filter((item: any) => typeof item.lat === "number" && typeof item.lng === "number")

  return NextResponse.json({ results })
}
