# Reach International — Corporate Website

Premium, minimal, fast static website for [Reach International](https://www.reachinternational.co.in/) — provider of aerial work platforms, access equipment, and material handling equipment across India.

**Tagline:** Reaching All Heights

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, `output: 'export'`) |
| Language | TypeScript 6 (strict) |
| Styling | Tailwind CSS v4 + CSS custom properties (tokens) |
| Font | Geist Sans (variable) |
| Package manager | pnpm |
| Hosting target | Cloudflare Pages (static) |
| UI Reference | Stitch (project ID: `15669300440936796835`) |

---

## Local Development

### Prerequisites
- Node.js ≥ 18
- pnpm ≥ 9

### Install dependencies

```bash
pnpm install
```

### Start dev server

```bash
pnpm dev
# Opens at http://localhost:3000
```

### Build (static export)

```bash
pnpm build
# Output: ./out/  (deploy this directory)
```

### Type-check only

```bash
pnpm tsc --noEmit
```

---

## Project Structure

```
reach-prototype/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (header, footer, sticky bar)
│   ├── page.tsx            # Homepage
│   ├── equipment/          # Equipment catalogue + category pages
│   ├── services/           # Rental + sales service pages
│   ├── industries/         # Industry landing pages
│   ├── about/
│   ├── contact/
│   ├── request-a-quote/
│   └── privacy/
├── components/
│   ├── patterns/           # SiteHeader, SiteFooter, ThemeToggle, StickyActionBar
│   └── templates/          # CategoryPageTemplate, IndustryPageTemplate
├── styles/
│   └── tokens.css          # ALL design tokens (single source of truth)
├── public/                 # Static assets, robots.txt, manifest, _headers, _redirects
├── brain/                  # Project documentation (never deployed)
│   ├── README.md
│   ├── DECISION_LOG.md
│   ├── VERIFIED_FACTS.md
│   └── OPEN_QUESTIONS.md
├── types/
│   └── global.d.ts         # CSS module type declarations
├── AGENTS.md               # AI agent workflow rules
└── next.config.mjs
```

---

## Design System

All tokens live in [`styles/tokens.css`](./styles/tokens.css). Components **must** use `var(--token-name)` — no hardcoded hex values.

Key tokens:

| Token | Role |
|---|---|
| `--brand-blue` | `#008CFC` — approved brand color, never alter |
| `--action-primary-bg` | Light: `#005AA3`, Dark: `#008CFC` |
| `--surface-base` | Page background |
| `--text-primary` | Body text |
| `--text-link` | Link color |

### Theme Toggle

Users can switch light/dark. Preference stored in `localStorage('reach-theme')`. Theme is bootstrapped inline before first paint (no FOUC).

---

## Content Rules

> **CV-01 (MUST):** Never publish unverified business claims. Fleet counts, locations, specs, testimonials, customer logos, and milestones require owner verification.
>
> **CV-02 (MUST):** Logo assets are the source of truth — never recreate as text or recolor without approval.

See [`brain/VERIFIED_FACTS.md`](./brain/VERIFIED_FACTS.md) for the verified facts register and [`brain/OPEN_QUESTIONS.md`](./brain/OPEN_QUESTIONS.md) for items pending owner response.

---

## Route Map

| URL | Page |
|---|---|
| `/` | Homepage |
| `/about/` | About |
| `/equipment/` | Equipment catalogue |
| `/equipment/aerial-work-platforms/` | AWP hub |
| `/equipment/boom-lifts/` | Boom lifts |
| `/equipment/scissor-lifts/` | Scissor lifts |
| `/equipment/vertical-mast-lifts/` | Vertical mast lifts |
| `/equipment/spider-lifts/` | Spider lifts |
| `/equipment/scaffolding/` | Scaffolding |
| `/equipment/material-handling/` | MHE hub |
| `/equipment/forklifts/` | Forklifts |
| `/equipment/reach-trucks/` | Reach trucks |
| `/equipment/material-lifts/` | Material lifts |
| `/services/rental/` | Rental service |
| `/services/equipment-sales/` | Equipment sales |
| `/industries/` | Industries index |
| `/industries/construction/` | Construction |
| `/industries/manufacturing/` | Manufacturing |
| `/industries/warehousing-logistics/` | Warehousing & Logistics |
| `/industries/infrastructure/` | Infrastructure |
| `/contact/` | Contact |
| `/request-a-quote/` | Quote request |
| `/privacy/` | Privacy policy |

---

## Deployment (Cloudflare Pages)

The project is fully configured for static export deployment on Cloudflare Pages.

### Option A: Cloudflare Pages Git Integration (Recommended)

1. Push your repository to GitHub / GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `pnpm build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
4. Node.js version and pnpm are auto-detected via [`.node-version`](./.node-version) and [`package.json`](./package.json) (`packageManager: "pnpm@11.28.8"`).

### Option B: Direct Deploy via Wrangler CLI

You can also deploy directly using Wrangler:

```bash
# Preview build output locally with Cloudflare headers & redirects
pnpm pages:dev

# Deploy out/ directory directly to Cloudflare Pages
pnpm pages:deploy
```

### Option C: GitHub Actions CI/CD

An automated workflow is included in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` to your GitHub repository secrets.

### Headers and Redirects

- [`public/_headers`](./public/_headers): Configures security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options) and sets `Cache-Control: public, max-age=31536000, immutable` for Next.js hashed assets (`/_next/static/*`).
- [`public/_redirects`](./public/_redirects): Enforces canonical trailing slashes for all routes and redirects legacy paths.
- `404.html`: Automatically generated into `out/404.html` and served by Cloudflare Pages for non-existent paths.

---

## Performance Targets

| Metric | Target |
|---|---|
| LCP (p75, mobile) | ≤ 2.5 s |
| INP (p75) | ≤ 200 ms |
| CLS (p75) | ≤ 0.1 |
| Lighthouse Perf (mobile) | ≥ 95 |
| Lighthouse A11y | ≥ 95 |
| Lighthouse SEO | = 100 |

---

## Open Questions

See [`brain/OPEN_QUESTIONS.md`](./brain/OPEN_QUESTIONS.md) for the complete list. Key blockers:

- Contact details (phone, email, address) — needed for footer, contact page, sticky bar
- Logo assets — needed for header/footer
- Real equipment photography
- Form provider for quote request form
- Verified fleet specs and product models
