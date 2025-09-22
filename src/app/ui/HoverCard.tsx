"use client"
import { useEffect, useRef, useState } from 'react'

type HoverCardProps = {
  trigger: React.ReactNode
  content: React.ReactNode
}

export function HoverCard({ trigger, content }: HoverCardProps) {
  const [open, setOpen] = useState(false)
  const [spacerHeight, setSpacerHeight] = useState<number>(0)
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

  useEffect(() => {
    if (open && contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect()
      setSpacerHeight(rect.height)
    }
  }, [open])

  return (
    <div className="relative" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <div className="select-none">{trigger}</div>
      {/* Reserve vertical space while open so the area remains hoverable */}
      <div style={{ height: open ? spacerHeight : 0 }} />
      <div
        ref={contentRef}
        className={`absolute left-0 top-full bg-white border border-border rounded-xl shadow-lg p-3 transition-opacity duration-150 ${open? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {content}
      </div>
    </div>
  )
}


