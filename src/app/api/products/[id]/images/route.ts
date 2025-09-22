import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const folder = id === 'termotronic' ? 'termo' : id === 'cbx' ? 'CBX' : ''
  if (!folder) return NextResponse.json([], { status: 200 })
  try {
    const dir = path.join(process.cwd(), 'public', 'images', folder)
    const files = fs.readdirSync(dir).filter(fn => /\.(png|jpe?g|webp)$/i.test(fn))
    const images = files.map(fn => `/images/${folder}/${fn}`)
    return NextResponse.json(images)
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}


