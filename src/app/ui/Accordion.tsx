"use client"
import { useEffect, useMemo, useRef, useState } from "react"

type FaqItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: FaqItem[]
  allowMultiple?: boolean
  defaultOpenIndices?: number[]
}

function useMeasuredHeight(isOpen: boolean) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number>(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setHeight(el.scrollHeight)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return { ref, height, isOpen }
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

function renderAnswer(answer: string) {
  const blocks = answer
    .split(/\n\s*\n/)
    .map(b => b.trim())
    .filter(Boolean)

  return (
    <div className="space-y-3 leading-relaxed text-sm md:text-base">
      {blocks.map((block, i) => {
        const lines = block.split(/\n/).map(l => l.trim()).filter(Boolean)
        const looksLikeList = lines.length > 1 && lines.every(l => /^(-|\d+[\.)\-]?\s+)/.test(l) || /^\d+\s/.test(l))
        if (looksLikeList) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1">
              {lines.map((l, idx) => (
                <li key={idx}>{l.replace(/^(-|\d+[\.)\-]?\s+)/, "")}</li>
              ))}
            </ul>
          )
        }
        return <p key={i} className="opacity-90">{block}</p>
      })}
    </div>
  )
}

export default function Accordion({ items, allowMultiple = true, defaultOpenIndices = [] }: AccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set(defaultOpenIndices))

  const toggle = (idx: number) => {
    setOpenSet(prev => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else {
        if (!allowMultiple) next.clear()
        next.add(idx)
      }
      return next
    })
  }

  const initialStagger = useMemo(() => Math.min(items.length, 6), [items.length])

  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur divide-y divide-black/10 shadow-sm">
      {items.map((item, idx) => {
        const open = openSet.has(idx)
        const { ref, height } = useMeasuredHeight(open)
        return (
          <div key={idx} className="group">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => toggle(idx)}
              className="w-full text-left px-4 md:px-6 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              style={{
                transitionDelay: idx < initialStagger ? `${idx * 30}ms` : undefined,
              }}
            >
              <span className="text-base md:text-lg font-medium tracking-tight">{item.question}</span>
              <Chevron open={open} />
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              className="px-4 md:px-6 overflow-hidden"
              style={{ height: open ? height : 0, transition: "height 300ms ease" }}
            >
              <div
                ref={ref}
                className={`pb-5 md:pb-6 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
                style={{ transition: "opacity 300ms ease, transform 300ms ease" }}
              >
                {renderAnswer(item.answer)}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


