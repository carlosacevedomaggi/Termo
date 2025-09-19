import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const PRODUCTS = [
  { id: 'p1', name: 'Product A', price: 199, description: 'Elegant and powerful.', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop', specs: ['Spec 1', 'Spec 2', 'Spec 3'] },
  { id: 'p2', name: 'Product B', price: 299, description: 'Refined for performance.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop', specs: ['Spec 1', 'Spec 2', 'Spec 3'] },
  { id: 'p3', name: 'Product C', price: 399, description: 'Minimal yet capable.', img: 'https://images.unsplash.com/photo-1524738258078-1eec1c505f6d?q=80&w=1200&auto=format&fit=crop', specs: ['Spec 1', 'Spec 2', 'Spec 3'] },
]

export default function Products() {
  return (
    <div className="container-edge py-14">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold">Products</h1>
          <p className="opacity-70">Choose from our curated lineup.</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <motion.div key={p.id} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.3}} className="rounded-2xl border border-border overflow-hidden">
            <NavLink to={`/products/${p.id}`} className="block">
              <div className="aspect-square overflow-hidden bg-muted" id={p.id}>
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{p.name}</h3>
                  <span className="text-sm">${p.price}</span>
                </div>
                <p className="text-sm opacity-70">{p.description}</p>
              </div>
            </NavLink>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


