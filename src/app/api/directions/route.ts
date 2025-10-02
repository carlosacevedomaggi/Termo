import { NextResponse } from "next/server"

const ORS_KEY = process.env.ORS_API_KEY

export async function POST(request: Request) {
  if (!ORS_KEY) {
    return NextResponse.json({ error: "ORS key not configured" }, { status: 500 })
  }

  const body = await request.json().catch(() => null)
  if (!body || !body.start || !body.end) {
    return NextResponse.json({ error: "start and end coordinates required" }, { status: 400 })
  }

  const { start, end } = body as {
    start: { lat: number; lng: number }
    end: { lat: number; lng: number }
  }

  if (typeof start?.lat !== "number" || typeof start?.lng !== "number" || typeof end?.lat !== "number" || typeof end?.lng !== "number") {
    return NextResponse.json({ error: "Invalid coordinates" }, { status: 400 })
  }

  const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car", {
    method: "POST",
    headers: {
      Authorization: ORS_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      coordinates: [
        [start.lng, start.lat],
        [end.lng, end.lat],
      ],
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    return NextResponse.json({ error: text || "Failed to get directions" }, { status: response.status })
  }

  const data = await response.json()
  const summary = data.features?.[0]?.properties?.summary
  if (!summary) {
    return NextResponse.json({ error: "No route summary" }, { status: 502 })
  }

  return NextResponse.json({
    duration: summary.duration, // seconds
    distance: summary.distance, // meters
  })
}
