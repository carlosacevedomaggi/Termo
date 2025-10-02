# TerMo Store

E-commerce platform for TerMo’s products (Termotronic heaters, CBX line, accessories) with payment methods common in Venezuela and the groundwork for full distributor fulfillment.

## Stack Overview
- **Next.js 15** (App Router, TypeScript)
- **React 19**, **TailwindCSS**, **Framer Motion**
- **Zustand** for client-side cart state
- **Prisma + SQLite (dev)**, Postgres planned for production
- **PayPal Checkout** integration (client ID via `NEXT_PUBLIC_PAYPAL_CLIENT_ID`)

## Current Features
- Landing page, product catalog, detailed product views
- Cart with quantity management (persisted in localStorage)
- Checkout form capturing customer info and payment method
- Manual payment methods with instructions: Zelle, Pago Móvil, Depósito Banesco Verde, PayPal manual reference
- PayPal Checkout button for online payments (sandbox-ready)
- Support pages: FAQ, documentation downloads from `/support/docs`

## Project Structure
```
src/
 ├─ app/        # Next.js routes
 │   ├─ page.tsx (home)
 │   ├─ products/
 │   │   ├─ page.tsx (catalog with Termotronic/CBX/Accesorios sections)
 │   │   ├─ [id]/         # dynamic product detail
 │   │   │   ├─ page.tsx
 │   │   │   └─ ProductDetailClient.tsx
 │   ├─ support/
 │   │   ├─ docs/page.tsx (document downloads)
 │   │   └─ partners/page.tsx (distributors & service centers with toggle)
 │   ├─ api/       # file-streaming API routes for docs/images
 │   └─ layout.tsx
 ├─ lib/
 │   └─ product-data.ts   # loads metadata/images from `images/`
 ├─ store/
 │   └─ cart.ts
 └─ shared/
    └─ payments.ts
```

Images live under `images/` (source assets) and `public/images/` (Next.js served). Metadata files (`title-price-desc.txt`) feed product descriptions, specs, pricing, availability.

## Environment Variables
- `.env` (local) and `.env.example`
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID` – PayPal client ID for Checkout SDK.
  - Future additions will include backend API URLs, JWT secrets, database URLs, etc.

## Distributor & Service Network Pages
- `/support/partners` renders two datasets (distributors list, warranty/service centers) with a stateful toggle.
- Data seeded from `partners` content in code; future plan is to move to database-driven content.

## Product Catalog Enhancements
- Termotronic & CBX cards show structured spec lists instead of long paragraphs.
- Toggle between `Nuevo` and `Reconstruido` with fixed pricing (298 USD Termotronic, 206 USD CBX) and optional installation kit add-on.
- Product detail pages show gallery, concise spec blocks, paragraph-formatted description, and kit/toggle controls.

## Upcoming Distributor Platform (Separate App)
- See `READMEAPP.md` in root for the mobile/portal product spec.
- Summary: capture distributor data in DB, route orders to nearest distributor, support staff approvals for offline payments, provide mobile app for distributors (order management, restock requests), HQ admin oversight.

## Local Development
```
npm install
npm run dev
```
Visit `http://localhost:3000`; Next.js handles API streams for `/support/docs` and product image endpoints.

While running locally, every order submission is also POSTed to `http://localhost:4000/orders`. You can run a mock server there (e.g., `npx http-echo-server 4000`) to observe the full JSON payload that will be consumed by the mobile app. Each line item now includes both `id` and `productId` fields so downstream services can keep their existing schema while we maintain Prisma references.

## Deployment
- Target: Vercel / Render / Railway
- Prepare `.env` with PayPal key and future backend credentials
- Use managed Postgres when persisting orders/distributors; current Prisma config uses SQLite for dev

## Roadmap Summary
1. Persist orders + payment status (Prisma + Postgres)
2. Admin/staff portal for order review & manual payment approval
3. Integrate PayPal webhooks for automatic confirmation
4. Build distributor mobile app (React Native/Expo) using backend APIs
5. Notifications (push/email/WhatsApp)
6. Inventory/restock tracking per distributor
7. Harden security (auth, rate limits, audits) and observability

For the distributor/mobile initiative, consult `READMEAPP.md` (recreate from design spec if missing) and plan development in a dedicated workspace.
