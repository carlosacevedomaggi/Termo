import { NextRequest, NextResponse } from "next/server"
import fs from "node:fs"
import path from "node:path"

function findBaseDir(): string | null {
  const root = process.cwd()
  const candidates = ["documenos", "documentos"]
  for (const name of candidates) {
    const full = path.join(root, name)
    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) return full
  }
  return null
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug?: string[] } }
) {
  const parts = params.slug || []
  if (parts.length < 2) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 })
  }

  const baseDir = findBaseDir()
  if (!baseDir) {
    return NextResponse.json({ error: "Documents folder not found" }, { status: 404 })
  }

  const unsafePath = path.join(baseDir, ...parts)
  const resolvedBase = path.resolve(baseDir)
  const resolved = path.resolve(unsafePath)

  if (!resolved.startsWith(resolvedBase + path.sep)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  if (!/\.pdf$/i.test(resolved)) {
    return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
  }

  let stat: fs.Stats
  try {
    stat = fs.statSync(resolved)
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 })
  }
  if (!stat.isFile()) {
    return NextResponse.json({ error: "Not a file" }, { status: 400 })
  }

  const filename = parts[parts.length - 1]
  const data = fs.readFileSync(resolved)

  return new Response(data, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${encodeURIComponent(filename)}"`,
      "Content-Length": String(stat.size),
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, max-age=0, must-revalidate",
    },
  })
}


