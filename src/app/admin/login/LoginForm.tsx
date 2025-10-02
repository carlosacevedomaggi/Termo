"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const router = useRouter()
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    setErrorMessage(null)
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (response?.error) {
      setStatus("error")
      setErrorMessage("Credenciales inválidas")
      return
    }

    router.push("/admin")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950/5 py-16">
      <div className="w-full max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Acceso administrativo</h1>
          <p className="mt-2 text-sm text-slate-600">Introduzca su correo y contraseña para continuar.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">Correo</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-70"
          >
            {status === "loading" ? "Ingresando…" : "Ingresar"}
          </button>
          {status === "error" && errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  )
}

