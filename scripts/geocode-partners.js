require("ts-node/register")
require("dotenv").config({ path: require("path").join(__dirname, "../.env") })
const fs = require("fs")
const path = require("path")
const fetch = global.fetch || require("node-fetch")

const { distributorLocations, serviceLocations } = require("../src/app/support/partners/data")

const OC_KEY = process.env.OPENCAGE_API_KEY
const ORS_KEY = process.env.ORS_API_KEY
if (!OC_KEY) {
  console.error("Missing OPENCAGE_API_KEY in environment")
  process.exit(1)
}
if (!ORS_KEY) {
  console.error("Missing ORS_API_KEY in environment")
  process.exit(1)
}

const OUTPUT_PATH = path.join(__dirname, "../src/data/partner-coordinates.json")

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const uniqueEntries = []
const seen = new Set()

function normalizeQuery({ name, address, cityState }) {
  const parts = [
    name?.trim(),
    address?.trim(),
    cityState?.trim(),
    "Venezuela",
  ].filter(Boolean)
  return parts.join(", ")
}

function addEntries(list, type) {
  list.forEach((location) => {
    location.businesses.forEach((business) => {
      const key = `${business.name}|${business.address}|${business.cityState}`
      if (seen.has(key)) return
      seen.add(key)
      uniqueEntries.push({
        id: key,
        type,
        name: business.name?.trim() ?? "",
        address: business.address?.trim() ?? "",
        cityState: business.cityState?.trim() ?? "",
      })
    })
  })
}

addEntries(distributorLocations, "distributor")
addEntries(serviceLocations, "service")

uniqueEntries.forEach((entry) => {
  entry.query = normalizeQuery(entry)
})

async function geocodeOpenCage(entry) {
  const url = new URL("https://api.opencagedata.com/geocode/v1/json")
  url.searchParams.set("q", entry.query)
  url.searchParams.set("key", OC_KEY)
  url.searchParams.set("limit", "1")
  url.searchParams.set("no_annotations", "1")
  url.searchParams.set("language", "es")
  url.searchParams.set("countrycode", "ve")

  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(`OpenCage ${response.status}: ${await response.text()}`)
  }
  const data = await response.json()
  if (!data.results || !data.results.length) {
    throw new Error("OpenCage no results")
  }
  const { lat, lng } = data.results[0].geometry
  return { lat, lng, source: "opencage" }
}

async function geocodeORS(entry) {
  const url = new URL("https://api.openrouteservice.org/geocode/search")
  url.searchParams.set("text", entry.query)
  url.searchParams.set("boundary.country", "VE")
  url.searchParams.set("size", "1")

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: ORS_KEY,
    },
  })
  if (!response.ok) {
    throw new Error(`ORS ${response.status}: ${await response.text()}`)
  }
  const data = await response.json()
  if (!data.features || !data.features.length) {
    throw new Error("ORS no results")
  }
  const [lng, lat] = data.features[0].geometry.coordinates
  return { lat, lng, source: "ors" }
}

async function geocode(entry) {
  try {
    return await geocodeOpenCage(entry)
  } catch (error) {
    console.warn(`OpenCage failed for ${entry.query}: ${error.message}`)
    await sleep(1200)
    return geocodeORS(entry)
  }
}

async function main() {
  console.log(`Geocoding ${uniqueEntries.length} partner locations...`)
  const results = {}
  const failures = []

  for (let i = 0; i < uniqueEntries.length; i += 1) {
    const entry = uniqueEntries[i]
    try {
      const coords = await geocode(entry)
      results[entry.id] = {
        type: entry.type,
        name: entry.name,
        address: entry.address,
        cityState: entry.cityState,
        lat: Number(coords.lat.toFixed(6)),
        lng: Number(coords.lng.toFixed(6)),
        source: coords.source,
      }
      console.log(`[${i + 1}/${uniqueEntries.length}] ${entry.query} -> ${coords.lat}, ${coords.lng} (${coords.source})`)
    } catch (error) {
      console.error(`Error geocoding ${entry.query}:`, error.message)
      failures.push(entry)
    }
    await sleep(1100)
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2))
  console.log(`Saved coordinates to ${OUTPUT_PATH}`)

  if (failures.length) {
    console.warn("Failed entries:", failures.map((entry) => entry.query))
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
