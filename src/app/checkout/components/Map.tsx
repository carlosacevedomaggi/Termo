"use client"

import { useEffect, useMemo, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import L from "leaflet"

import type { PartnerLocation } from "@/lib/partners"

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const highlightedIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [30, 50],
  iconAnchor: [15, 50],
  popupAnchor: [1, -40],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

const defaultCenter: [number, number] = [10.491016, -66.902656] // Caracas
const defaultZoom = 6

export type MapProps = {
  customerLocation: { lat: number; lng: number; label: string } | null
  partners: PartnerLocation[]
  fulfillmentMode: "pickup" | "delivery"
  selectedPartnerId: string | null
  onCustomerLocationChange: (location: { lat: number; lng: number; label: string }) => void
  onSelectPartner: (partnerId: string) => void
}

export default function Map({
  customerLocation,
  partners,
  fulfillmentMode,
  selectedPartnerId,
  onCustomerLocationChange,
  onSelectPartner,
}: MapProps) {
  const [center, setCenter] = useState<[number, number]>(customerLocation ? [customerLocation.lat, customerLocation.lng] : defaultCenter)
  const zoom = customerLocation ? 13 : defaultZoom

  useEffect(() => {
    if (customerLocation) {
      setCenter([customerLocation.lat, customerLocation.lng])
    }
  }, [customerLocation])

  return (
    <MapContainer center={center} zoom={zoom} className="h-full w-full" scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />
      <DraggableMarker
        customerLocation={customerLocation}
        onChange={(position) => {
          onCustomerLocationChange({
            lat: position.lat,
            lng: position.lng,
            label: customerLocation?.label ?? `${position.lat.toFixed(6)}, ${position.lng.toFixed(6)}`,
          })
        }}
      />
      {partners.map((partner) => (
        <Marker
          key={partner.id}
          position={[partner.lat, partner.lng]}
          icon={partner.id === selectedPartnerId ? highlightedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelectPartner(partner.id),
          }}
        >
          <Popup>
            <div className="space-y-1 text-sm">
              <div className="font-semibold">{partner.name}</div>
              <div className="text-xs text-slate-600">{partner.address}</div>
              <div className="text-[11px] uppercase tracking-wide text-slate-400">{partner.cityState}</div>
              <button
                type="button"
                className="mt-2 w-full rounded-md bg-blue-600 px-2 py-1 text-[11px] font-semibold text-white"
                onClick={() => onSelectPartner(partner.id)}
              >
                {fulfillmentMode === "pickup" ? "Seleccionar aliado" : "Asignar aliado"}
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

function DraggableMarker({
  customerLocation,
  onChange,
}: {
  customerLocation: { lat: number; lng: number; label: string } | null
  onChange: (position: { lat: number; lng: number }) => void
}) {
  const [position, setPosition] = useState<[number, number]>(customerLocation ? [customerLocation.lat, customerLocation.lng] : defaultCenter)

  const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng
      setPosition([lat, lng])
      onChange({ lat, lng })
    },
  })

  useEffect(() => {
    if (customerLocation) {
      setPosition([customerLocation.lat, customerLocation.lng])
      map.setView([customerLocation.lat, customerLocation.lng], 14)
    }
  }, [customerLocation, map])

  return <Marker position={position} draggable eventHandlers={{ dragend: (event) => {
    const marker = event.target as L.Marker
    const { lat, lng } = marker.getLatLng()
    setPosition([lat, lng])
    onChange({ lat, lng })
  } }} icon={highlightedIcon} />
}
