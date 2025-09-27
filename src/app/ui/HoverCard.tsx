"use client"
import { useRef, useState } from 'react'

type HoverCardProps = {
  trigger: React.ReactNode
  content: React.ReactNode
}

export function HoverCard({ trigger, content }: HoverCardProps) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openMenu = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null }
    setOpen(true)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 160)
  }

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <div className="select-none">{trigger}</div>
      <div
        ref={contentRef}
        className={`absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 origin-top bg-white text-slate-900 border border-black/10 rounded-xl shadow-xl p-4 transition-all duration-150 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {content}
      </div>
    </div>
  )
}


