import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  const data = await request.json().catch(() => null)
  if (!data) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const {
    fullName,
    email,
    company,
    phone,
    inquiryType,
    message,
  } = data as {
    fullName?: string
    email?: string
    company?: string
    phone?: string
    inquiryType?: string
    message?: string
  }

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const result = await prisma.contactSubmission.create({
    data: {
      fullName,
      email,
      company: company || null,
      phone: phone || null,
      inquiryType: inquiryType || null,
      message: message || null,
    },
  })

  return NextResponse.json({ id: result.id })
}

