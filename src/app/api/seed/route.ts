import { NextResponse } from "next/server"
import { ensureAdminSeed } from "@/lib/seeds/admin"

export async function POST() {
  try {
    await ensureAdminSeed()
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Seed failed" }, { status: 500 })
  }
}

