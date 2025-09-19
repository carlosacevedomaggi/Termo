import { NavLink, Outlet } from 'react-router-dom'
import { ShoppingBag } from './icons/ShoppingBag'
import { motion } from 'framer-motion'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-border">
        <div className="container-edge h-16 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-semibold tracking-tight">TerMo</NavLink>
          <nav className="hidden md:flex gap-6 text-sm">
            <NavLink to="/" className={({isActive})=>`hover:opacity-70 ${isActive? 'opacity-100' : 'opacity-80'}`}>Home</NavLink>
            <NavLink to="/products" className={({isActive})=>`hover:opacity-70 ${isActive? 'opacity-100' : 'opacity-80'}`}>Products</NavLink>
            <div className="group relative">
              <NavLink to="/support/faq" className={({isActive})=>`hover:opacity-70 ${isActive? 'opacity-100' : 'opacity-80'}`}>Support</NavLink>
              <motion.div initial={{opacity:0, y:-6}} whileHover={{opacity:1, y:0}} transition={{duration:0.15}} className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-border rounded-xl shadow-lg p-3 w-56">
                <div className="flex flex-col text-sm">
                  <NavLink to="/support/faq" className="px-3 py-2 rounded-md hover:bg-muted">FAQ</NavLink>
                  <NavLink to="/support/docs" className="px-3 py-2 rounded-md hover:bg-muted">Docs</NavLink>
                  <NavLink to="/support/contact" className="px-3 py-2 rounded-md hover:bg-muted">Contact</NavLink>
                  <NavLink to="/support/locations" className="px-3 py-2 rounded-md hover:bg-muted">Locations</NavLink>
                </div>
              </motion.div>
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <NavLink to="/cart" className="btn btn-outline h-9 px-4">
              <ShoppingBag className="w-4 h-4 mr-2" /> Cart
            </NavLink>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border py-10">
        <div className="container-edge text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-70">© {new Date().getFullYear()} TerMo. All rights reserved.</p>
          <div className="flex gap-6 opacity-80">
            <NavLink to="/support/docs">Docs</NavLink>
            <NavLink to="/support/contact">Contact</NavLink>
            <NavLink to="/support/locations">Locations</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}


