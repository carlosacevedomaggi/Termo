import bcrypt from "bcryptjs"
import prisma from "../prisma"

export async function ensureAdminSeed() {
  const email = process.env.ADMIN_SEED_EMAIL
  const password = process.env.ADMIN_SEED_PASSWORD
  if (!email || !password) {
    console.warn("ADMIN_SEED_EMAIL or ADMIN_SEED_PASSWORD not set; skipping admin seed")
    return
  }

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return
  }

  const passwordHash = await bcrypt.hash(password, 12)
  await prisma.user.create({
    data: {
      email,
      passwordHash,
      role: "admin",
    },
  })
  console.log(`Seeded admin user ${email}`)
}

