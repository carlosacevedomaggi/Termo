import fs from "node:fs"
import path from "node:path"
import Accordion from "@/app/ui/Accordion"

type FaqItem = { question: string; answer: string }

function parseFaqFile(content: string): FaqItem[] {
  const lines = content.split(/\r?\n/)
  const items: FaqItem[] = []
  let currentQuestion: string | null = null
  let currentAnswerLines: string[] = []

  const flush = () => {
    if (currentQuestion) {
      const answer = currentAnswerLines.join("\n").trim()
      items.push({ question: currentQuestion.trim(), answer })
    }
    currentQuestion = null
    currentAnswerLines = []
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = raw.trimEnd()
    if (!line) {
      currentAnswerLines.push("")
      continue
    }
    const isQuestion = /\?$/.test(line) || /^¿.+\?$/.test(line)
    if (isQuestion && (currentQuestion === null || currentAnswerLines.length > 0)) {
      if (currentQuestion !== null) flush()
      currentQuestion = line
      continue
    }
    currentAnswerLines.push(raw)
  }
  if (currentQuestion !== null) flush()

  return items.filter(it => it.question && it.answer)
}

export const metadata = {
  title: "Preguntas frecuentes | TerMo",
  description: "Respuestas a preguntas frecuentes sobre Termotronic y CBX.",
}

export default function FAQPage() {
  const faqPath = path.join(process.cwd(), "FAQ.txt")
  let items: FaqItem[] = []
  try {
    const content = fs.readFileSync(faqPath, "utf-8")
    items = parseFaqFile(content)
  } catch {
    items = []
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_100%_-10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(40rem_40rem_at_-10%_-20%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="container-edge py-14 md:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Actualizado {new Date().toLocaleDateString()}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">Preguntas frecuentes</h1>
          <p className="mt-3 text-base md:text-lg opacity-80 max-w-2xl">
            Encuentra respuestas claras sobre instalación, rendimiento, seguridad y soporte de nuestros calentadores.
          </p>
        </div>
      </section>

      <section className="container-edge py-10 md:py-14">
        {items.length > 0 ? (
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <Accordion items={items} allowMultiple defaultOpenIndices={[0,1]} />
            </div>
            <aside className="md:col-span-4 space-y-4">
              <div className="rounded-2xl border border-black/10 p-5 bg-white/70 backdrop-blur">
                <h2 className="text-sm uppercase opacity-60 mb-2">¿No encuentras tu pregunta?</h2>
                <p className="text-sm opacity-80 mb-3">Nuestro equipo puede ayudarte a escoger el modelo e instalación ideal.</p>
                <a href="/support/contact" className="btn btn-primary h-10 px-4">Contáctanos</a>
              </div>
              <div className="rounded-2xl border border-black/10 p-5 bg-white/70 backdrop-blur">
                <h3 className="text-sm uppercase opacity-60 mb-2">Documentos</h3>
                <ul className="text-sm space-y-2">
                  <li><a className="hover:underline" href="/support/docs">Manuales y hojas técnicas</a></li>
                </ul>
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-xl border border-black/10 p-6 bg-muted">No hay entradas de FAQ disponibles.</div>
        )}
      </section>
    </div>
  )
}


