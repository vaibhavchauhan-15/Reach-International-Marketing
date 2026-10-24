# System Overview

## Architecture

```
User request (browser)
      │
      ▼
Cloudflare CDN (edge cache)
      │  (static HTML + assets)
      ▼
./out/ directory (static export)
   ├── index.html
   ├── equipment/index.html
   ├── equipment/boom-lifts/index.html
   ├── _next/static/ (JS + CSS chunks, immutably cached)
   └── ...
```

No server. No database. No runtime. Public pages are pure HTML on a CDN.

## Next.js Configuration

- **`output: 'export'`** — Generates `./out/` with fully static HTML
- **`trailingSlash: true`** — `/about` → `/about/index.html`
- **`images.unoptimized: true`** — No Next.js image optimization server (use static pre-optimized images or host on a CDN)
- **Webpack alias** `@` → project root (required for `@/components/*` imports)

## Layer Architecture

```
styles/tokens.css          (1) Design tokens — CSS custom properties
     ↓
components/primitives/     (2) Atoms — no business logic, no page context
     ↓
components/patterns/       (3) Molecules — SiteHeader, SiteFooter, ThemeToggle, Breadcrumb, StickyActionBar
     ↓
components/templates/      (4) Page scaffolds — CategoryPageTemplate, IndustryPageTemplate
     ↓
app/**/page.tsx            (5) Concrete pages — compose templates + content
```

**Rule:** Each layer only imports from layers below it. Pages never define shared layout inline.

## Static Constraints (PRD §8.2)

These features are **incompatible** with `output: 'export'`:

| Feature | Status | Alternative |
|---|---|---|
| API Routes / Route Handlers | ❌ Incompatible | Static JSON files in `public/` |
| Server Actions | ❌ Incompatible | Form provider (Netlify Forms, Formspree, etc.) |
| `next/image` optimization | ❌ Incompatible | Pre-optimized images or CDN |
| Middleware | ❌ Incompatible | Cloudflare `_redirects` + `_headers` |
| Dynamic routes without `generateStaticParams` | ❌ Incompatible | Must define all params at build time |
| `app/sitemap.ts` without `force-static` | ❌ Fails | `export const dynamic = 'force-static'` |
| Route handlers for `llms.txt` | ❌ Fails | `public/llms.txt` static file |

## Component Patterns

### SiteHeader
- Desktop: disclosure nav with mega-panel for Equipment (keyboard + hover-less compatible)
- Mobile: Radix Dialog full-screen menu, focus-trapped, Esc closes, body scroll lock
- Theme toggle integrated
- Server Component except for ThemeToggle (client)

### SiteFooter
- Four column groups: Equipment, Services, Industries, Company
- Server Component

### StickyActionBar
- Mobile-only persistent bar with Call + Request a Quote
- Hidden on `/contact/` and `/request-a-quote/`
- Safe-area insets for iOS notched devices
- Client Component (reads `usePathname`)

### ThemeToggle
- Client Component
- `localStorage('reach-theme')` for persistence
- `data-theme` attribute on `<html>`
- Inline bootstrap script prevents FOUC

## Data Flow

No runtime data fetching. All page content is:
1. Hardcoded in page files (static copy, placeholder when unverified)
2. Generated at build time from `lib/` utilities
3. Read from `content/` directory (if added later for products)

## Documentation

All agent-safe documentation lives in `brain/`:
- `brain/README.md` — orientation
- `brain/VERIFIED_FACTS.md` — what is confirmed by owner
- `brain/OPEN_QUESTIONS.md` — pending items
- `brain/DECISION_LOG.md` — why decisions were made
- `brain/rules/` — coding + design standards
- `brain/design/` — design system reference
- `brain/seo/` — SEO + structured data
- `brain/operations/` — local dev + deployment
- `brain/architecture/` — this document

`brain/` is never deployed. It is never in `public/` or `out/`.
`AGENTS.md` (root) — AI agent workflow rules and content gates.
