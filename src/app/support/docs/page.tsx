import fs from "node:fs"
import path from "node:path"

type DocFile = { name: string; url: string; sizeBytes?: number }
type ProductDocs = { product: string; files: DocFile[] }

function bytesToReadable(bytes?: number) {
  if (!bytes || bytes <= 0) return ""
  const units = ["B", "KB", "MB", "GB"]
  let i = 0
  let n = bytes
  while (n >= 1024 && i < units.length - 1) {
    n /= 1024
    i++
  }
  return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`
}

function safeListDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir)
  } catch {
    return []
  }
}

function loadDocuments(): { products: ProductDocs[] } {
  const projectRoot = process.cwd()
  // Root-level folder per user instruction. Support common spelling too.
  const candidates = ["documenos", "documentos"]
  let baseFolder = ""
  for (const c of candidates) {
    const full = path.join(projectRoot, c)
    if (fs.existsSync(full) && fs.statSync(full).isDirectory()) {
      baseFolder = full
      break
    }
  }

  const products: ProductDocs[] = []
  if (!baseFolder) return { products }

  const productDirs = safeListDir(baseFolder)
    .filter((entry) => fs.existsSync(path.join(baseFolder, entry)) && fs.statSync(path.join(baseFolder, entry)).isDirectory())
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))

  for (const product of productDirs) {
    const productPath = path.join(baseFolder, product)
    const files = safeListDir(productPath)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .map((file) => {
        const fullPath = path.join(productPath, file)
        const stat = fs.existsSync(fullPath) ? fs.statSync(fullPath) : undefined
        const url = `/api/docs/${encodeURIComponent(product)}/${encodeURIComponent(file)}`
        return { name: file.replace(/\.pdf$/i, ""), url, sizeBytes: stat?.size }
      })
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }))

    if (files.length) {
      products.push({ product, files })
    }
  }

  return { products }
}

export const metadata = {
  title: "Documentos | TerMo",
  description: "Descarga manuales, fichas técnicas y documentación por producto.",
}

export default function DocumentsPage() {
  const { products } = loadDocuments()

  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_100%_-10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(40rem_40rem_at_-10%_-20%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="container-edge py-14 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Biblioteca de documentos
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">Documentos</h1>
          <p className="mt-3 text-base md:text-lg opacity-80 max-w-2xl">
            Descarga manuales, fichas técnicas y guías de instalación organizadas por producto.
          </p>
        </div>
      </section>

      <section className="container-edge py-10 md:py-14">
        {products.length === 0 ? (
          <div className="rounded-xl border border-black/10 p-6 bg-muted">
            No se encontraron documentos. Coloca tus PDFs en <code>documenos/&lt;producto&gt;</code> en la raíz del proyecto.
          </div>
        ) : (
          <div className="space-y-8">
            {products.map(({ product, files }) => (
              <div key={product} className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-lg md:text-xl font-semibold tracking-tight">{product}</h2>
                  <span className="text-xs opacity-60">{files.length} archivo{files.length !== 1 ? "s" : ""}</span>
                </div>
                <ul className="divide-y divide-black/10">
                  {files.map((f, idx) => (
                    <li key={idx} className="py-3 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate font-medium">{f.name}</div>
                        <div className="text-xs opacity-60">PDF {bytesToReadable(f.sizeBytes)}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <a
                          href={f.url}
                          download
                          className="btn btn-outline h-9 px-3"
                          aria-label={`Descargar ${f.name}`}
                        >
                          Descargar
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}


