# Operations — Build & Deployment

## Static Export

This site uses Next.js `output: 'export'`. The build produces a fully static `./out/` directory with no server requirement.

```bash
pnpm build
# Outputs to ./out/
```

## Cloudflare Pages Deployment

### Connect Repository

1. Push code to GitHub
2. Log in to Cloudflare Pages
3. Create new project → Connect to GitHub → Select repo
4. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `pnpm build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (repo root)
5. Environment variables:
   - `NODE_VERSION` = `20`

### Headers & Redirects

`public/_headers` — Security headers applied to all pages:
- `Content-Security-Policy` (report-only initially, then enforced)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Cache-Control: public, max-age=31536000, immutable` for `/_next/static/*`

`public/_redirects` — Cloudflare Pages redirect format:
- Trailing-slash normalization
- Legacy URL redirects (preserve search equity)

## Performance Budget Enforcement

Before launch, run Lighthouse CI on key pages:
- Perf ≥ 95
- A11y ≥ 95
- Best Practices ≥ 95
- SEO = 100

### Check with local Lighthouse

```bash
# Install
npm install -g lighthouse

# Run (build first)
pnpm build
npx serve out -p 3333 &
lighthouse http://localhost:3333 --view
```

## Checklist Before Launch

- [ ] All `OPEN_QUESTIONS.md` blockers resolved
- [ ] Real contact details in SiteFooter + StickyActionBar
- [ ] Logo assets in `public/` (light + dark variants)
- [ ] Real OG image at `public/og-image.png` (1200×630)
- [ ] Favicon set complete (`favicon.ico`, `icon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`)
- [ ] Privacy policy text approved by owner
- [ ] Terms of service text approved (or page removed)
- [ ] Sitemap submitted to Google Search Console
- [ ] Analytics configured (privacy-conscious, e.g., Fathom / Plausible)
- [ ] CSP header switched from report-only to enforced
- [ ] `pnpm build` exits with code 0
- [ ] Lighthouse CI passes all budgets
- [ ] Zero broken internal links (run link checker)
- [ ] `brain/VERIFIED_FACTS.md` covers all published claims
