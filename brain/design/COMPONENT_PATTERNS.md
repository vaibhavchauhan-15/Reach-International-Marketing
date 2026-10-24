# Component Patterns Reference

## Pattern: Page Header with Breadcrumb

All inner pages follow this structure:

```tsx
<div
  className="pt-[72px]"
  style={{ backgroundColor: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}
>
  <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 py-12">
    {/* Breadcrumb — also emits BreadcrumbList JSON-LD */}
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-caption" style={{ color: 'var(--text-muted)' }}>
        <li><Link href="/" style={{ color: 'var(--text-link)' }}>Home</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" style={{ color: 'var(--text-primary)' }}>Page Title</li>
      </ol>
    </nav>
    <h1 className="text-h1 mb-4" style={{ color: 'var(--text-primary)' }}>...</h1>
    <p className="text-body-lg max-w-narrow" style={{ color: 'var(--text-muted)' }}>...</p>
  </div>
</div>
```

`pt-[72px]` is the sticky header height offset.

## Pattern: Section

```tsx
<section
  className="w-full py-20"
  style={{ backgroundColor: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-subtle)' }}
>
  <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8">
    {/* Section heading */}
    <div className="mb-10">
      <p className="text-overline uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
        Section Label
      </p>
      <h2 className="text-h2" style={{ color: 'var(--text-primary)' }}>
        Section Title
      </h2>
    </div>
    {/* Content */}
  </div>
</section>
```

## Pattern: Card

```tsx
<div
  className="p-6 rounded-lg"
  style={{ backgroundColor: 'var(--surface-base)', border: '1px solid var(--border-subtle)' }}
>
  ...
</div>
```

## Pattern: Primary Button

```tsx
<Link
  href="/request-a-quote/"
  className="inline-flex items-center justify-center px-6 h-11 rounded-md text-label font-medium transition-colors"
  style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}
>
  Request a quote
</Link>
```

## Pattern: Ghost Button

```tsx
<Link
  href="/equipment/"
  className="inline-flex items-center justify-center px-6 h-11 rounded-md border text-label font-medium transition-colors"
  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'transparent' }}
>
  Browse equipment
</Link>
```

## Pattern: Link with Arrow

```tsx
<Link href="..." className="inline-flex items-center gap-1 text-label font-medium" style={{ color: 'var(--text-link)' }}>
  View all equipment
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</Link>
```

## Pattern: Overline / Section Label

```tsx
<p className="text-overline uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>
  Category Label
</p>
```

## Pattern: Inverse (Dark) CTA Section

```tsx
<section className="w-full py-20" style={{ backgroundColor: 'var(--surface-inverse)' }}>
  <div className="max-w-wide mx-auto px-4 md:px-6 lg:px-8 text-center">
    <h2 className="text-h2 mb-4" style={{ color: 'var(--text-inverse)' }}>...</h2>
    <p className="text-body-lg mb-8" style={{ color: 'var(--text-muted)', maxWidth: '560px' }}>...</p>
    {/* Buttons */}
  </div>
</section>
```

## Pattern: FAQ (native `<details>`)

```tsx
<details className="group" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
  <summary
    className="flex items-center justify-between py-5 cursor-pointer list-none gap-4 text-label font-medium"
    style={{ color: 'var(--text-primary)' }}
  >
    <span>Question text</span>
    <svg className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" ...>
      <path ... d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <p className="pb-5 text-body" style={{ color: 'var(--text-secondary)' }}>Answer</p>
</details>
```

## Navigation Patterns

### Desktop Disclosure Nav (SiteHeader)

Uses native `<button>` + `aria-expanded` + `aria-controls`. NOT ARIA `menu` role (PRD §5.4).
Works on keyboard and hover-less devices.

### Mobile Dialog (SiteHeader)

Radix UI `Dialog` — full-screen, focus-trapped, Esc closes, body scroll lock.
Focus returns to trigger on close.

## JSON-LD Patterns

Use helpers from `@/lib/jsonld`:

```tsx
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from '@/lib/jsonld'

// In a Server Component
const jsonLd = buildBreadcrumbJsonLd([{ label: 'Equipment', href: '/equipment/' }, { label: 'Boom Lifts' }])

return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    {/* ... */}
  </>
)
```
