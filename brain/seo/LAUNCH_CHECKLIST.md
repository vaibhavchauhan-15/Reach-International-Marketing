# SEO — Launch Checklist

## Pre-Launch SEO Gates

All items MUST be complete before submitting to Search Console.

### Content

- [ ] All published pages have unique `<title>` (50–60 chars)
- [ ] All published pages have unique `<meta name="description">` (150–160 chars)
- [ ] All published pages have correct `<link rel="canonical">`
- [ ] No duplicate content across pages (hub pages ≠ category copy)
- [ ] Placeholder copy removed from all published pages (CV-01)
- [ ] All facts in page copy exist in `brain/VERIFIED_FACTS.md`

### Structured Data

- [ ] `Organization` JSON-LD in root layout ✅
- [ ] `WebSite` JSON-LD in root layout ✅
- [ ] `BreadcrumbList` in all nested pages (via templates) ✅
- [ ] `FAQPage` on homepage ✅
- [ ] `Service` on `/services/rental/` and `/services/equipment-sales/` (TODO)
- [ ] `Product` on product detail pages (when implemented)
- [ ] Test all JSON-LD with Google's Rich Results Test

### Technical SEO

- [ ] `public/robots.txt` allows all crawlers ✅
- [ ] `app/sitemap.ts` covers 100% of published pages ✅
- [ ] No broken internal links (run link checker in CI)
- [ ] No 3xx redirect chains
- [ ] All images have descriptive `alt` text
- [ ] All pages accessible without JavaScript (static HTML content)
- [ ] `hreflang` not needed at launch (single locale `en-IN`)

### Performance (affects SEO)

- [ ] LCP ≤ 2.5s on key pages (mobile Lighthouse)
- [ ] CLS ≤ 0.1
- [ ] No render-blocking resources
- [ ] Images preloaded for hero sections

### Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor Core Web Vitals in CrUX
- [ ] Set up Search Console alerts for crawl errors
- [ ] Verify all sitemap URLs are indexed within 60 days

## URL Redirect Map (Legacy → New)

Redirect map lives in `public/_redirects`. Update when:
- Old URL structure changes
- Pages are removed
- Slugs change

Current redirects handle trailing-slash normalization only. Legacy URL audit needed once live domain is accessible.
