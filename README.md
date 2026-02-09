# TUSC — The Ultimate Sourcing Company

A Next.js marketing website for **TUSC (The Ultimate Sourcing Company)**, bridging Indian craftsmanship with global commerce. The site showcases sourcing services, product categories, and artisan stories for international buyers.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) |
| **UI** | React 19, Tailwind CSS 4, Radix UI primitives |
| **Fonts** | DM Sans, Playfair Display (Google Fonts) |
| **Email** | Resend API (`/api/send-message`) |
| **Analytics** | Vercel Analytics |

---

## Project Structure

```
informative-company-website/
├── app/
│   ├── api/send-message/route.ts   # Contact form → Resend email
│   ├── categories/                 # Collections & category pages
│   │   ├── page.tsx                # Collections hub
│   │   ├── furniture/, home-decor/, kitchen-dining/, pets/, seasonal/, textiles/
│   │   └── furniture/accent-tables/
│   ├── globals.css
│   ├── layout.tsx                  # Root layout, metadata, fonts
│   └── page.tsx                    # Home page composition
├── components/
│   ├── about.tsx                   # “Our Story” + India map
│   ├── categories-modal.tsx        # Category picker modal
│   ├── contact.tsx                 # Contact form + email/Instagram
│   ├── craftmanship.tsx            # Indian Craftmanship + categories grid
│   ├── crafts.tsx
│   ├── cta.tsx                     # Call-to-action block
│   ├── footer.tsx
│   ├── header.tsx                  # Nav, mobile menu, Instagram
│   ├── hero.tsx                    # Hero + “Where tradition meets global commerce”
│   ├── india-map.tsx               # India map / craft regions
│   ├── process-flow.tsx            # Sourcing process flow
│   ├── service-snapshot.tsx        # Services overview
│   ├── services.tsx                # Services list + snapshot + process
│   ├── theme-provider.tsx
│   ├── why-tusc.tsx                # “Why TUSC” — challenges vs solutions
│   └── ui/                         # Reusable UI (buttons, inputs, dialogs, etc.)
├── lib/utils.ts
├── public/                         # Static assets, images, icons
├── package.json
├── next.config.mjs
└── tsconfig.json
```

---

## Home Page Sections

1. **Header** — Fixed nav: Collections, About, Services, Why TUSC, Contact; Instagram; “Get in Touch”; mobile menu.
2. **Hero** — Tagline “Where tradition meets global commerce,” CTA to Contact and About.
3. **About** — “Our Story,” decade of connecting worlds, India map / craft regions.
4. **Services** — Service snapshot, “Our Services – Explained,” five service cards (R&D, Sourcing, Execution, Quality, Logistics), process flow.
5. **Craftmanship** — “Stories woven into every thread,” category grid (Furniture, Home Décor, Kitchen & Dining, Textiles, Pets, Seasonal), “Explore All Categories” + categories modal.
6. **Why TUSC** — Challenges (communication, quality, lead times, transparency) vs TUSC solutions.
7. **CTA** — Call-to-action block.
8. **Contact** — Email, Instagram, and contact form (name, email, company, message) posting to `/api/send-message`.
9. **Footer** — TUSC branding, nav links, Instagram, copyright and tagline.

---

## Collections & Categories

- **`/categories`** — Hub listing all collections (Home Décor, Kitchen & Dining, Textiles, Pets, Seasonal) with subcategories and images.
- **Category routes** — e.g. `/categories/furniture`, `/categories/home-decor`, `/categories/furniture/accent-tables` for category-specific pages.

---

## Contact Form & Email

- **Form** — In `components/contact.tsx`: POST to `/api/send-message` with `name`, `email`, `company`, `message`.
- **API** — `app/api/send-message/route.ts` uses **Resend** to:
  - Send the inquiry to `hello@tusc.india`
  - Send an auto-reply to the sender
- **Env** — Set `RESEND_API_KEY` for the API route to work.

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Install

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form emails (required for `/api/send-message`) |

---

## Key Features

- **Responsive layout** — Mobile-first with breakpoints; mobile nav in header.
- **Single-page anchors** — About, Services, Why TUSC, Contact linked from header/footer.
- **Collections** — Category hub and individual category pages with subcategories.
- **Contact** — Client-side form with success/error states; server-side email via Resend.
- **Analytics** — Vercel Analytics included in root layout.
- **UI** — Shared components in `components/ui/` (shadcn-style) for consistency.

---

## License & Credits

- **Brand** — TUSC - The Ultimate Sourcing Company  
- **Contact** — hello@tusc.india | [@tusc.india](https://www.instagram.com/tusc.india/)  
- **Generator** — v0.app (referenced in layout metadata)
