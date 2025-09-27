# TerMo Store

A small e-commerce app focused on selling three products with payment options commonly used in Venezuela. This repository currently contains a React + Vite SPA; we also outline the future migration to Next.js and a production-ready backend.

## 1) Current (what exists in the app today)

- Stack
  - React 18 + Vite 5 (SPA)
  - TypeScript
  - React Router (routing)
  - Zustand (cart state, localStorage persistence)
  - TailwindCSS (styling)
  - Framer Motion (micro-animations)

- Implemented features
  - Products listing and detail pages
  - Cart (add/remove/clear; quantity aggregation)
  - Checkout form for customer info
  - Payment methods (manual/offline confirmation):
    - Zelle (USD)
    - Pago Móvil (VES)
    - Depósito Banesco Verde (USD)
    - PayPal (USD)
  - Method-specific instructions and field validation in checkout

- Where to configure payments
  - `src/shared/payments.ts` defines payment methods, merchant receiving accounts, and the per-method form fields customers must complete.
  - Replace placeholder merchant data (emails, bank account, phone, IDs, wallet) with real values before going live.

- Current flow (manual payments)
  1) User adds items to cart (stored with Zustand → localStorage)
  2) User goes to checkout, enters Name/Email/Address
  3) User selects a payment method and fills in method-specific data (e.g., reference/TXID)
  4) Submission validates required fields and shows a “Thank you” confirmation
  5) Operationally, payment reconciliation is manual (no backend yet): you check Zelle / bank / Binance and fulfill

> Note: There is no persistent order storage or admin dashboard yet; those are part of future work below.

---

## 2) Future implementation (what we will build next)

The business will receive funds directly in the settlement currency of the selected method (USD or VES). We will not do FX conversion in-app; instead, we’ll display and charge in the currency appropriate to the method.

### 2.1 Orders and admin (applies to all methods)

- Data model (minimum)
  - order: id, createdAt, status (pending_payment → awaiting_review → paid → fulfilled/cancelled), customer info (name, email, address), selected payment method, currency, totals (amount, currency), method fields (reference/TXID), optional proof (file URL)
  - order_items: orderId, productId, name, unitPrice, quantity, subtotal
  - payments: orderId, method, amount, currency, providerId/txid/reference, status, timestamps

- API endpoints
  - POST /orders → create order from cart and checkout form
  - POST /orders/:id/proof (multipart) → attach a proof image (optional) for manual methods
  - PATCH /orders/:id/status → admin-only status transitions

- Notifications
  - Email/WhatsApp to customer on order creation and on status changes
  - Internal email/WhatsApp on new order pending review

- Admin UI
  - List/filter orders
  - View references/TXIDs/proofs
  - Mark paid/cancelled, add notes, audit trail

- Security
  - Server-side validation
  - Rate limiting for public endpoints
  - Signed webhook verification (for card gateways)

### 2.2 Credit/Debit cards plan

Goal: Add a card option (“Pay with card”) that charges the exact order amount in the currency we settle (USD or VES), without doing on-the-fly FX conversions in the app.

- Gateway options (pick based on your company/entity availability)
  - Stripe (typical for USD settlement; confirm your country eligibility)
  - Mercado Pago or a regional PSP that supports your legal entity and desired currency (VES/USD)
  - Local acquirer via PSP if available for Venezuela

- Frontend (cards)
  - Add “Pay with card” as a payment method next to manual methods
  - Render provider UI (e.g., Stripe Payment Element)
  - Flow: Client requests a Payment Intent (or equivalent) from backend → provider element confirms payment → show success/failure

- Backend (cards)
  - Endpoint: POST /payments/intent → creates provider intent/session with amount and currency (USD or VES as per business policy)
  - Endpoint: POST /orders → create the order (pending_payment or processing)
  - Webhooks: receive provider events (e.g., payment_intent.succeeded) and mark the related order as paid
  - Reconciliation: store payment events for audit; handle refunds/voids later

- UX & policy
  - Clearly display the currency being charged (USD or VES)
  - Use 3D Secure when required; handle declines gracefully with retry

- Deliverables
  - Frontend: Card element integration and order confirmation screen
  - Backend: Payment intent API + webhooks + order linkage, admin visibility of payment status

### 2.3 Manual methods (Zelle / Pago Móvil / Depósito Banesco)

- Show exact amounts in the method’s currency (USD, VES, USDT)
- Require references/TXIDs; optionally accept proof of payment image
- Admin confirms and marks as paid after reconciling in banking/crypto tools

---

## 3) Next.js migration plan

Why: Better SEO (SSR/SSG), built-in API routes for orders/payments/webhooks, server components, and easy deployment to Vercel.

- Steps
  1) Create a Next.js (App Router) project with TypeScript + Tailwind
  2) Move pages to `app/` routes: `/`, `/products`, `/products/[id]`, `/cart` (client), `/checkout` (client), `/support/*`
  3) Keep Zustand for client cart, or migrate cart persistence with cookies/Server Actions if desired
  4) Implement API routes:
     - `POST /api/orders`
     - `POST /api/payments/intent`
     - `POST /api/webhooks/{provider}` (e.g., /stripe, /mercadopago)
  5) Add `/admin/orders` (protected) for review and status updates
  6) Configure environment variables in `.env.local`
  7) Deploy to Vercel (or similar); use managed Postgres (Neon/Supabase/RDS)

- Cutover
  - Keep the same UI styles; update imports and routing
  - Validate client vs server component boundaries
  - Dry run end-to-end in staging before DNS switch

---

## 4) Production backend design

- Tech
  - Next.js API routes (or separate Node/Express service) with TypeScript
  - Postgres for orders/payments (Neon/Supabase/RDS)
  - Object storage (S3-compatible) for proofs
  - Job queue/cron for reconciliation (BullMQ, Cloud Tasks, or hosted alternatives)
  - Email (Resend/SendGrid) and WhatsApp Business API/Twilio for messaging
  - Admin auth (NextAuth/OAuth) with role-based permissions

- Data flow
  1) Client submits order (cart + customer info + chosen method/currency)
  2) Manual method: order stays `pending_payment` until admin confirms reference/txid/proof
  3) Card method: backend creates payment intent; webhook marks order `paid` after provider confirmation
  4) Admin fulfills and updates status; customer notified

- Observability & security
  - Structured logs, request tracing, error monitoring
  - Verify webhook signatures and apply rate limits
  - Principle of least privilege for API keys; separate envs (dev/stage/prod)
  - Database backups and migration strategy

---

## 5) Local development

- Install deps: `npm i`
- Run dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

Update merchant data
- Edit `src/shared/payments.ts` with your real Zelle, Pago Móvil, depósito Banesco, and PayPal details

---

## 6) Roadmap

- Add orders persistence + admin dashboard
- Integrate notifications (email/WhatsApp)
- Add proof-of-payment upload for manual methods
- Integrate PayPal Checkout for cards and wallets
- Add credit/debit cards via Stripe or a regional PSP
- Migrate to Next.js + API routes
- Add webhooks for card confirmations
- Harden security, monitoring, and backups
