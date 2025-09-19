export default function Locations() {
  const locations = [
    { city: 'New York', address: '123 Fifth Ave, NY', hours: '10:00–18:00' },
    { city: 'London', address: '221B Baker St, London', hours: '10:00–18:00' },
    { city: 'Tokyo', address: '1-1 Chiyoda, Tokyo', hours: '10:00–18:00' },
  ]
  return (
    <div className="container-edge py-14">
      <h1 className="text-3xl font-semibold mb-6">Store Locations</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map(l => (
          <div key={l.city} className="border border-border rounded-xl p-5">
            <div className="font-medium">{l.city}</div>
            <div className="text-sm opacity-80 mt-1">{l.address}</div>
            <div className="text-sm opacity-70 mt-2">Hours: {l.hours}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


