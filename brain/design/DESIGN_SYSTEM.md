# Design System Reference

## Brand Colors

| Token | Value | Status | Usage |
|---|---|---|---|
| `--brand-blue` | `#008CFC` | **Approved by owner** | Brand identity, large graphics, icons |
| `--brand-charcoal` | `#202329` | *(provisional)* | Dark surfaces, light-theme text |
| `--brand-white` | `#FFFFFF` | Final | Light surfaces, text on dark |

> **CRITICAL:** `#008CFC` is the approved brand blue. MUST NOT be altered in any context.
> Provisional values are starting points — verify against actual logo before launch.

## Action Colors (by theme)

| Token | Light | Dark |
|---|---|---|
| `--action-primary-bg` | `#005AA3` | `#008CFC` |
| `--action-primary-fg` | `#FFFFFF` | `#FFFFFF` |
| `--action-primary-hover` | `#004A8C` | `#1A96FD` |

Why different in light? `#008CFC` on a white background fails WCAG AA contrast (3.87:1). `#005AA3` achieves 5.5:1.

## Typography Scale

Tokens defined in `styles/tokens.css` (`--text-*`). Mapped to Tailwind utilities in `tailwind.config.ts`.

| Utility | Size / Line-height | Weight | Use |
|---|---|---|---|
| `text-h1` | 3rem / 1.1 | 700 | Page hero headlines |
| `text-h2` | 2rem / 1.2 | 700 | Section headings |
| `text-h3` | 1.5rem / 1.3 | 600 | Sub-section headings |
| `text-h4` | 1.125rem / 1.4 | 600 | Card titles, labels |
| `text-body-lg` | 1.125rem / 1.6 | 400 | Lead paragraphs |
| `text-body` | 1rem / 1.6 | 400 | Body copy |
| `text-body-sm` | 0.875rem / 1.5 | 400 | Secondary copy |
| `text-label` | 0.875rem / 1.4 | 500 | UI labels, buttons |
| `text-caption` | 0.75rem / 1.4 | 400 | Meta, timestamps |
| `text-overline` | 0.6875rem / 1.2 | 600 | Section labels (uppercase) |

## Surface Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `--surface-base` | `#FFFFFF` | `#161A1F` | Default page background |
| `--surface-sunken` | `#F5F6F8` | `#0E1115` | Alternate / sidebar background |
| `--surface-raised` | `#FFFFFF` | `#1E2329` | Cards, elevated content |
| `--surface-inverse` | `#202329` | `#008CFC` | Dark CTA sections |
| `--surface-tint` | `rgba(0,140,252,.08)` | `rgba(0,140,252,.12)` | Highlight pill backgrounds |

## Border Tokens

| Token | Light | Dark |
|---|---|---|
| `--border-subtle` | `#E8EAED` | `#2A2F38` |
| `--border-strong` | `#C4CAD4` | `#3D4452` |
| `--border-focus` | `#005AA3` | `#008CFC` |

## Component Patterns

### Buttons

```tsx
// Primary
<button style={{ backgroundColor: 'var(--action-primary-bg)', color: 'var(--action-primary-fg)' }}>

// Ghost / outline
<button style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)', backgroundColor: 'transparent' }}>

// Link-style
<a style={{ color: 'var(--text-link)' }}>
```

### Cards

Cards use `--surface-raised` background + `--border-subtle` border + `--shadow-card` shadow.
On hover: `--surface-base` border or slight elevation.

### Focus Ring

All interactive elements:
```css
outline: 2px solid var(--border-focus);
outline-offset: 2px;
```

## Icon Usage

Inline SVG only (no icon font). Heroicons stroke style, `strokeWidth={2}`, `fill="none"`.
Always add `aria-hidden="true"` on decorative icons.

## Spacing System

Based on 4px grid. Tailwind spacing scale unchanged (1 unit = 4px).
Common: `p-4` (16px), `p-6` (24px), `p-8` (32px), `gap-4`, `gap-6`.

## Logo Rules (CV-02)

- Never recreate logo as text
- Never recolor without owner approval
- Use correct variant per theme (light logo on dark bg, dark logo on light bg)
- Preserve original proportions — never stretch
- Assets pending: see `brain/OPEN_QUESTIONS.md` OQ #9
