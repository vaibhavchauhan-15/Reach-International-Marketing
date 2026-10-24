# Coding Standards

## Core Rules

- **TypeScript strict** (`"strict": true`, `noUncheckedIndexedAccess`). No `any` unless justified in a comment.
- **No hardcoded hex** in components. Always `var(--token-name)` via inline styles or Tailwind's arbitrary-value syntax `text-[var(--text-link)]`.
- **Import order**: React → Next.js → external libs → `@/components` → `@/lib` → types. No unorganized barrel re-exports.
- **Server Components by default**. Add `'use client'` only when the component needs hooks, browser APIs, or event listeners.
- **Avoid `useEffect` for data-fetching** — fetch at server component level.
- **pnpm only** — never `npm install` or `yarn add`.

## File Naming

| Type | Convention | Example |
|---|---|---|
| React components | PascalCase `.tsx` | `CategoryPageTemplate.tsx` |
| Pages | `page.tsx` (App Router) | `app/about/page.tsx` |
| Layouts | `layout.tsx` | `app/industries/layout.tsx` |
| Utilities | camelCase `.ts` | `lib/formatDate.ts` |
| Styles | kebab-case `.css` | `styles/tokens.css` |

## Component Layer Order

```
styles/tokens.css          — design tokens (CSS custom properties)
components/primitives/     — atoms: Button, Badge, Icon (no business logic)
components/patterns/       — molecules: SiteHeader, SiteFooter, Breadcrumb, etc.
components/templates/      — page scaffolds: CategoryPageTemplate, IndustryPageTemplate
app/**/page.tsx            — concrete pages, import templates, never reinvent layout
```

**Rule:** higher layers import from lower layers only. Pages do not define layout primitives inline.

## Content Rules

- **CV-01**: Never publish unverified business facts. Use "Contact us to confirm" pattern.
- **CV-02**: Logo assets are the source of truth; never recreate as text.
- All claims (fleet sizes, specs, locations, testimonials) must be in `brain/VERIFIED_FACTS.md` before appearing in page copy.

## Accessibility

- All interactive elements: visible focus ring using `--focus-ring` token.
- Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text (WCAG AA).
- `aria-label` or `aria-labelledby` on every landmark and icon button.
- Keyboard: tab order, `Esc` closes modals/dropdowns, focus returns to trigger.
- `scroll-margin-top` on all `id` anchor targets (`--scroll-margin` token).

## Performance

- Images: `next/image` when assets are available; `loading="lazy"` below fold.
- Fonts: Geist via `next/font` (zero FOUT, self-hosted).
- No third-party scripts in `<head>` that block rendering.
- Inline scripts in `<head>` must be ≤ 400 bytes (theme bootstrap only).
- No `{JSON.stringify(largeObject)}` in page HTML — extract to static JSON files.
