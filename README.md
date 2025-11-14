# Termo Store

E-commerce platform for TerMo's water heater products (Termotronic heaters, CBX control systems, accessories) with payment methods common in Venezuela and distributor fulfillment capabilities.

## Overview

Termo Store is a modern Next.js e-commerce platform designed for the Venezuelan market, supporting multiple payment methods including PayPal, Zelle, Pago Móvil, and bank deposits. The platform includes product catalog management, shopping cart functionality, checkout flow, and groundwork for distributor fulfillment.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, TailwindCSS 4
- **State Management**: Zustand (cart state)
- **Database**: Prisma + SQLite (dev), PostgreSQL (production)
- **Payments**: PayPal Checkout SDK
- **Maps**: Leaflet + React Leaflet (distributor locations)
- **Authentication**: NextAuth.js (admin panel)

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up database
npx prisma generate
npx prisma migrate dev

# Seed initial data (optional)
npm run dev
# Visit http://localhost:3000/api/seed
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
npm start
```

## Features

### Product Catalog

- **Termotronic Heaters**: Electric tankless water heaters
- **CBX Control Systems**: Temperature control systems
- **Accessories**: Installation kits and accessories
- Product detail pages with galleries, specifications, and descriptions
- Condition toggle (Nuevo/Reconstruido) with pricing
- Installation kit add-ons

### Shopping Cart

- Add/remove products
- Quantity management
- Persistent cart (localStorage)
- Real-time price calculations

### Checkout Flow

- Customer information collection
- Fulfillment options (pickup/delivery)
- Location selection with map integration
- Multiple payment methods:
  - PayPal (online)
  - Credit/Debit Card (via PayPal Checkout)
  - Zelle (USD)
  - Pago Móvil (VES)
  - Bank Deposit (Banesco Verde USD)

### Support Resources

- **FAQ Page**: Common questions and answers
- **Documentation Downloads**: Product manuals and installation guides
- **Distributor Network**: Map of authorized distributors and service centers
- **Contact Form**: Customer inquiries

### Admin Panel

- Product management (CRUD)
- Category management
- Order viewing
- User authentication

## Project Structure

```
termo/
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── page.tsx           # Homepage
│   │   ├── products/          # Product catalog
│   │   ├── cart/              # Shopping cart
│   │   ├── checkout/          # Checkout flow
│   │   ├── support/           # Support pages
│   │   ├── admin/             # Admin panel
│   │   └── api/               # API routes
│   ├── lib/                   # Utilities and data
│   │   ├── product-data.ts   # Product metadata loader
│   │   ├── partners.ts        # Distributor data
│   │   └── maps.ts           # Map utilities
│   ├── store/                 # State management
│   │   └── cart.ts            # Cart store (Zustand)
│   ├── shared/                # Shared types/constants
│   │   └── payments.ts       # Payment method definitions
│   └── ui/                    # Reusable UI components
├── images/                    # Source product images
├── public/images/             # Served product images
├── prisma/                    # Database schema and migrations
└── Documentos/                # Product documentation PDFs
```

## Documentation

- **[SETUP.md](./SETUP.md)** - Detailed setup and configuration
- **[FEATURES.md](./FEATURES.md)** - Complete feature documentation
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Development workflows
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment
- **[ROADMAP.md](./ROADMAP.md)** - Future features and plans

## Environment Variables

Create `.env.local`:

```env
# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-paypal-client-id

# Database
DATABASE_URL="file:./dev.db"

# NextAuth (for admin)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API (for order submission)
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Payment Methods

### PayPal

- Online payment processing
- PayPal Checkout SDK integration
- Sandbox and production modes

### Manual Payment Methods

- **Zelle**: USD transfers with confirmation
- **Pago Móvil**: Venezuelan mobile payment (VES)
- **Bank Deposit**: Banesco Verde USD account

All manual payments require order confirmation via email.

## Distributor Network

- Interactive map showing distributor locations
- Toggle between distributors and service centers
- Distance calculation and routing
- Pickup location selection during checkout

## Order Processing

Orders are submitted to:
- Local database (Prisma)
- External API endpoint (`/api/orders`)
- Email notification (future)

Order status tracking and payment verification coming soon.

## License

Private project - Termotronic

