# Operations — Local Development

## Requirements

- Node.js ≥ 18 (recommend 20 LTS)
- pnpm ≥ 9 (`npm install -g pnpm`)

## Setup

```bash
# Clone and install
git clone <repo-url>
cd reach-prototype
pnpm install
```

## Commands

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server at http://localhost:3000 |
| `pnpm build` | Static export to `./out/` |
| `pnpm tsc --noEmit` | Type-check only |
| `pnpm lint` | ESLint (if configured) |

## Dev Server Notes

- If port 3000 is in use, Next.js tries 3001, 3002, etc.
- Dev server does **not** produce the static export — run `pnpm build` for that.
- Hot module replacement works for all pages and components.
- Theme toggle works in dev. Toggle persists via localStorage.

## Build Output

```
out/
├── index.html
├── about/index.html
├── equipment/
│   ├── index.html
│   ├── boom-lifts/index.html
│   └── ...
├── _next/static/
│   ├── chunks/
│   └── css/
└── ...
```

Deploy the `out/` directory to Cloudflare Pages.

## Environment Variables

None currently required for the static build.

When a form provider is selected (OQ #7), add the form endpoint key here.

## Known Issues

- `.next` cache can become corrupt after interrupted builds. Fix: `Remove-Item -Recurse -Force .next; pnpm build`
- TypeScript version must be v6 (not v7). If `pnpm install` upgrades to v7, fix with `pnpm add -D "typescript@^6"`.

## File Watching

`pnpm dev` watches all source files. No additional watch commands needed.
