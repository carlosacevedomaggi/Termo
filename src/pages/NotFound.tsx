import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-edge py-20 text-center">
      <h1 className="text-5xl font-semibold">404</h1>
      <p className="mt-2 opacity-80">This page could not be found.</p>
      <NavLink to="/" className="btn btn-primary mt-6">Go Home</NavLink>
    </div>
  )
}


