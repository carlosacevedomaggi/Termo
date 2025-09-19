import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-edge py-24 sm:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Modern Products for a Minimal World
              </motion.h1>
              <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg opacity-80">
                We craft elegant solutions with a focus on performance, simplicity, and timeless design.
              </motion.p>
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 flex gap-3">
                <NavLink to="/products" className="btn btn-primary">Explore Products</NavLink>
                <NavLink to="/support/faq" className="btn btn-outline">Learn more</NavLink>
              </motion.div>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="aspect-[4/3] rounded-3xl bg-muted"></motion.div>
          </div>
        </div>
      </section>

      <section className="container-edge py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {["Product A","Product B","Product C"].map((name, idx) => (
            <NavLink key={name} to={`/products#p${idx+1}`} className="group block">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-muted group-hover:opacity-90 transition-opacity"></div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{name}</h3>
                    <span className="text-xs opacity-60">View →</span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  )
}


