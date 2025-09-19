import { useParams } from 'react-router-dom'
import { useCartStore } from '@/store/cart'

const DB = {
  p1: { id: 'p1', name: 'Product A', price: 199, description: 'Elegant and powerful.', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop', specs: ['Lightweight', 'Aluminum', 'USB-C'] },
  p2: { id: 'p2', name: 'Product B', price: 299, description: 'Refined for performance.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop', specs: ['Carbon fiber', 'Water resistant', 'Bluetooth 5.3'] },
  p3: { id: 'p3', name: 'Product C', price: 399, description: 'Minimal yet capable.', img: 'https://images.unsplash.com/photo-1524738258078-1eec1c505f6d?q=80&w=1600&auto=format&fit=crop', specs: ['OLED', 'Wi‑Fi 6', 'Fast charge'] },
}

export default function ProductDetail() {
  const { id } = useParams<{ id: keyof typeof DB }>()
  const product = id ? DB[id] : undefined
  const addToCart = useCartStore(s => s.addItem)

  if (!product) return <div className="container-edge py-14">Not found.</div>

  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="mt-2 opacity-80">{product.description}</p>
        <p className="mt-6 text-2xl">${product.price}</p>
        <button onClick={() => addToCart(product)} className="btn btn-primary mt-6">Add to Cart</button>

        <div className="mt-10">
          <h2 className="font-medium mb-3">Specifications</h2>
          <ul className="space-y-2 list-disc list-inside opacity-90">
            {product.specs.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}


