"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type AdminShellProps = {
  children: React.ReactNode
}

export default function AdminShell({ children }: AdminShellProps) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return <div className="container-edge py-20">Verificando sesión…</div>
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-edge h-16 flex items-center justify-between">
          <div>
            <Link href="/admin" className="text-lg font-semibold">Panel administrativo</Link>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/admin/orders" className="hover:text-blue-600">Órdenes</Link>
            <Link href="/admin/products" className="hover:text-blue-600">Catálogo</Link>
            <Link href="/admin/contact" className="hover:text-blue-600">Contactos</Link>
            <button onClick={() => signOut({ callbackUrl: "/admin/login" })} className="rounded-md border border-slate-200 px-3 py-1.5 hover:bg-slate-100">Cerrar sesión</button>
          </div>
        </div>
      </header>
      <main className="container-edge py-10">{children}</main>
    </div>
  )
}

