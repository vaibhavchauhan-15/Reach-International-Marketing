# SEO — Metadata & Canonicals

## Metadata Pattern

Every page exports a `metadata` object. Required fields:

```tsx
export const metadata: Metadata = {
  title: 'Page Title | Reach International',   // 50–60 chars
  description: '...',                           // 150–160 chars
  alternates: {
    canonical: 'https://www.reachinternational.co.in/page-url/',
  },
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://www.reachinternational.co.in/page-url/',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}
```

## Canonical URL Rules

- All canonical URLs include `https://www.reachinternational.co.in`
- Always trailing slash
- Canonical = the actual URL of that page (no cross-page canonicals)
- Set `metadataBase` in root layout (already done)

## JSON-LD Structured Data

| Schema type | Where used |
|---|---|
| `Organization` | Root layout (site-wide) |
| `WebSite` | Root layout (enables sitelinks searchbox) |
| `BreadcrumbList` | All nested pages via `<Breadcrumb>` component |
| `Product` | Product detail pages (when implemented) |
| `FAQPage` | Homepage FAQ section (TODO) |
| `Service` | Service pages (TODO) |

## robots.txt

`public/robots.txt` — allows all major crawlers including GPTBot, ClaudeBot, PerplexityBot.

## sitemap.xml

`app/sitemap.ts` — generates 24 URLs automatically on build.
Must be updated when new pages are added.

## Key Pages — Title / Description Targets

| Page | Title | Desc |
|---|---|---|
| Home | `Reach International — Aerial Work Platforms & Material Handling Equipment` | ≤160 chars, includes "India", "rental", "sale" |
| Equipment | `Equipment Catalogue — Aerial Work Platforms & MHE | Reach International` | Include major categories |
| Boom Lifts | `Boom Lifts for Rental & Sale — Reach International` | Include working height range when verified |
| Contact | `Contact Reach International` | Include location when verified |
| Quote | `Request a Quote — Reach International` | Clear CTA copy |

## URL Structure

- Flat, stable, human-readable, lowercase, hyphenated
- Trailing slash everywhere (`trailingSlash: true` in next.config.mjs)
- Hub pages do NOT use `index` in URL (e.g., `/equipment/` not `/equipment/index/`)

## llms.txt

`public/llms.txt` — static file for AI answer engines. Must be kept current with site content summary and verified facts only.
