# Product Goals

## Primary Goals

| ID | Goal | Notes |
|---|---|---|
| G1 | Present Reach International as credible, capable and premium | Industrial brand, strong type, intentional whitespace |
| G2 | Let visitors find the right equipment in ≤ 3 clicks from any page | Equipment taxonomy + hub pages |
| G3 | Make requesting a quote possible in ≤ 2 clicks from any page | Persistent nav CTA + sticky mobile bar |
| G4 | Deliver one visual system and one component library across every page | tokens.css → primitives → patterns → templates → pages |
| G5 | Ship static output with no custom server for public pages | Next.js `output: 'export'` + Cloudflare Pages |
| G6 | Achieve strong organic and AI-answer-engine discoverability | Full HTML content, JSON-LD, llms.txt, robots.txt |
| G7 | Meet measurable performance, accessibility and SEO budgets | LCP ≤ 2.5s, Lighthouse ≥ 95 |
| G8 | Make future changes safe via enforced documentation and CI gates | AGENTS.md, brain/, VERIFIED_FACTS.md |

## Non-Goals

- Copying the legacy design or layout
- Customer portal, authentication, rental-management or inventory backend
- Live stock/availability claims (no verified data source exists)
- Custom AI model or inference hosting
- Database or custom backend where a hosted service suffices
- Decorative animation that harms performance, accessibility or comprehension
- Inventing history, specs, testimonials, clients or metrics

## Success Metrics

| Metric | Target | Measured by |
|---|---|---|
| LCP (p75, mobile) | ≤ 2.5 s | CrUX / Lighthouse CI |
| INP (p75) | ≤ 200 ms | CrUX |
| CLS (p75) | ≤ 0.1 | CrUX |
| Lighthouse Perf (mobile lab) | ≥ 95 | Lighthouse CI |
| Lighthouse A11y | ≥ 95 | Lighthouse CI |
| Lighthouse Best Practices | ≥ 95 | Lighthouse CI |
| Lighthouse SEO | = 100 on key pages | Lighthouse CI |
| Quote-request conversion | Baseline set in first 30 days | Analytics |
| Indexed canonical pages | 100% of sitemap URLs within 60 days | Search Console |
| Broken internal links / missing assets | 0 | CI |

## Guiding Principle

> A fast, useful, trustworthy equipment website — not an animation showcase.

Lab scores are indicators, not guarantees; real-user data is the final judge.
