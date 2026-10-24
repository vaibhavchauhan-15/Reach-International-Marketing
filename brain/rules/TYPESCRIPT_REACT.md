# TypeScript & React Standards

## TypeScript

- **Strict mode** (`strict: true`) — no exceptions.
- **`noUncheckedIndexedAccess`** — array indexing returns `T | undefined`.
- **No `any`** — if unavoidable, comment why with `// eslint-disable-next-line @typescript-eslint/no-explicit-any`.
- **No type assertions** (`as`) unless at a framework boundary with a comment.
- Return types: explicit for exported functions, inferred for unexported helpers.
- Prefer `interface` for object shapes passed as props; `type` for unions and aliases.

### Prop Typing

```tsx
// Good
interface ButtonProps {
  label: string
  href?: string
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}

// Bad — avoid
type ButtonProps = {
  label: any  // ❌ no any
}
```

## React

### Server vs Client

- Default: Server Component (no directive needed).
- Add `'use client'` **only** when the component uses:
  - React hooks (`useState`, `useEffect`, `useRef`, `useCallback`, etc.)
  - Browser APIs (`window`, `document`, `localStorage`)
  - Event handlers that need client-side interactivity
  - Third-party client-only libraries

**Keep client boundaries as small and deep as possible.**

```tsx
// Good: SiteHeader is server; ThemeToggle is the only client leaf
// components/patterns/SiteHeader.tsx  — no 'use client'
// components/patterns/ThemeToggle.tsx — 'use client' at the top

// Bad
// components/patterns/SiteHeader.tsx — 'use client' (pulls entire nav into bundle)
```

### Hooks

- No `useEffect` for data that can be fetched at server level.
- `usePathname` and other router hooks require `'use client'`.
- `useEffect` for DOM side-effects (scroll lock, focus management) is acceptable.

### Keys

- List item keys must be **stable and unique** — use IDs or slugs, not array indices.

```tsx
// Good
items.map(item => <Card key={item.href} {...item} />)

// Bad
items.map((item, i) => <Card key={i} {...item} />)
```

### Fragments

- Use `<>...</>` over `<React.Fragment>` unless the fragment needs a `key`.

### Conditional Rendering

```tsx
// Good
{condition && <Component />}

// Also good
{condition ? <A /> : <B />}

// Avoid — renders "0" literally if count is 0
{count && <Component />}
// Fix:
{count > 0 && <Component />}
```

## Imports

Standard order (enforced by ESLint if configured):
1. React (if needed explicitly)
2. Next.js (`next/link`, `next/image`, etc.)
3. External libraries (`@radix-ui/*`, etc.)
4. Internal: `@/components/*`
5. Internal: `@/lib/*`
6. Internal: `@/types/*`
7. Relative imports

Never import from `../../` — use `@/` aliases.
