import { Route, Routes } from 'react-router-dom'
import Layout from '@/shared/Layout'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import ProductDetail from '@/pages/ProductDetail'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'
import FAQ from '@/pages/support/FAQ'
import Docs from '@/pages/support/Docs'
import Contact from '@/pages/support/Contact'
import Locations from '@/pages/support/Locations'
import NotFound from '@/pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="support/faq" element={<FAQ />} />
        <Route path="support/docs" element={<Docs />} />
        <Route path="support/contact" element={<Contact />} />
        <Route path="support/locations" element={<Locations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}


