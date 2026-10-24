# DECISION_LOG.md

Architectural and design decisions. Format: date · context · decision · alternatives considered · consequences.

---

## [2026-10-23] TypeScript version

**Context:** pnpm installed TypeScript 7.0 by default. Next.js 15 requires TypeScript ≤ 6.  
**Decision:** Downgrade to TypeScript 6.0.3 (`typescript@^6`).  
**Alternative:** Upgrade to Next.js 16+ — not yet stable enough.  
**Consequences:** TypeScript 6 features available; TS7 native compiler not used.

---

## [2026-10-23] CSS tokenization approach

**Context:** PRD requires all color tokens in one file, semantic tokens in components only.  
**Decision:** CSS custom properties in `styles/tokens.css` with Tailwind v4 `@import "tailwindcss"`. Components use inline `style={{ color: 'var(--text-primary)' }}` etc. — not Tailwind color utilities — to ensure strict adherence to semantic tokens and avoid hardcoded hex in component code.  
**Alternative:** Tailwind CSS-only token mapping — loses runtime CSS var flexibility (e.g. dark mode without data-attribute).  
**Consequences:** Semantic tokens enforced; dark mode works via `[data-theme="dark"]` CSS selector.

---

## [2026-10-23] Tailwind CSS v4

**Context:** pnpm installed Tailwind v4 alongside `@tailwindcss/postcss`.  
**Decision:** Use Tailwind v4 with PostCSS plugin. Config in `tailwind.config.ts`.  
**Alternative:** Tailwind v3 — v4 is the current release and used by the generated Next.js ecosystem.  
**Consequences:** v4 API used; some v3 utilities differ.

---

## [2026-10-23] No `src/` directory

**Context:** The project directory name "Reach Prototype" has spaces and capital letters, preventing `create-next-app` from running.  
**Decision:** Manual project setup (no CNA scaffold). Root-level `app/`, `components/`, `styles/`, `lib/` directories (no `src/` wrapper).  
**Alternative:** `src/` wrapper — adds one level of indirection with no benefit for this project.  
**Consequences:** Paths are `app/`, `components/`, etc. at root.

---

## [2026-10-23] webpack alias for `@/` paths

**Context:** Next.js 15 did not pick up the tsconfig `paths` `@/*` mapping without explicit webpack config.  
**Decision:** Added `webpack: (config) => { config.resolve.alias['@'] = __dirname }` in `next.config.mjs`.  
**Alternative:** Use relative imports — hurts maintainability across deep directory trees.  
**Consequences:** `@/components/...` resolves to project root `components/...` in both TS and webpack.

---

## [2026-10-23] Static sitemap via `app/sitemap.ts`

**Context:** Next.js App Router supports `sitemap.ts`; requires `export const dynamic = 'force-static'` for `output: 'export'`.  
**Decision:** Added `force-static` export; sitemap dates hardcoded to content dates (not build time, per PRD SE-04).  
**Consequences:** Sitemap is correct at build time; update dates when content changes.

---

## [2026-10-23] llms.txt as static file

**Context:** Route handlers (`/app/llms.txt/route.ts`) require `output: 'export'` workarounds. Static files in `public/` are simpler.  
**Decision:** `public/llms.txt` — static file, served as plain text.  
**Alternative:** Route handler with `force-static` — unnecessary complexity.  
**Consequences:** `llms.txt` must be manually updated when content changes. Add to build checklist.

---

## [2026-10-23] Do not run dev server and build concurrently

**Context:** During development, running `pnpm dev` and `pnpm build` simultaneously caused webpack chunk corruption in `.next/server/` — "Cannot find module './NNN.js'" errors during static export prerendering.  
**Decision:** Always stop dev server before running production build. Document in AGENTS.md and DECISION_LOG.  
**Alternative:** Use separate output dirs — not supported by Next.js without ejecting.  
**Consequences:** Manual workflow step: stop dev server → clean build → restart dev server.

---

## [2026-10-23] JSON-LD via `lib/jsonld.ts` helpers

**Context:** PRD §13.2 requires Organization, WebSite, BreadcrumbList, FAQPage, Service and Product JSON-LD across pages.  
**Decision:** Centralized builder functions in `lib/jsonld.ts` (`buildBreadcrumbJsonLd`, `buildFaqJsonLd`, `buildServiceJsonLd`). Templates call these and emit `<script type="application/ld+json">` inline.  
**Alternative:** Hardcode JSON-LD in each page — error-prone, inconsistent.  
**Consequences:** Adding new schema types → one function in `lib/jsonld.ts`; all pages get consistent output.

---

## [2026-10-23] `services/layout.tsx` added

**Context:** The `services/` directory (unlike `industries/`) had no layout.tsx, causing TS path resolution warnings.  
**Decision:** Added minimal `app/services/layout.tsx` (passthrough layout, metadata template).  
**Consequences:** Services pages have consistent metadata template and layout nesting.

---

## [2026-10-24] Home Page Redesign Implementation

**Context:** Redesigning the home page to match the user-provided UI design reference with 11 distinct sections and featuring 6 confirmed OEM brands (Hyundai MHE, JCB AWP, Toyota AWP & MHE, JLG AWP, Genie AWP, BYD MHE).
**Decision:**
1. Implemented all 11 required sections in `app/page.tsx`: Hero, AWP, MHE, OEM Brands, Industries, Rental & Sales Services, Why Reach, How It Works, Testimonials, FAQ, and Footer.
2. Built `components/primitives/ReachLogo.tsx` with scissor lattice geometric icon to match the UI mock-up.
3. Created authentic Indian industrial context imagery with Indian workers, high-vis safety vests, hardhats, and infrastructure sites.
4. Updated `SiteHeader.tsx` and `SiteFooter.tsx` with matching brand logo, active navigation, pill buttons, and social links.
**Consequences:** High-fidelity UI implementation strictly aligned with design mockup, semantic color tokens, and passing TypeScript and ESLint checks.

---

## [2026-10-24] Cloudflare Pages Deployment Configuration

**Context:** Preparing the Next.js static export for production deployment on Cloudflare Pages.  
**Decision:**  
1. Pinned Node.js version via `.node-version` and `.nvmrc` (`20`) and configured `packageManager: "pnpm@11.28.8"` in `package.json` to ensure Cloudflare Pages build runner uses the correct Node and pnpm versions.  
2. Added `wrangler.toml` declaring `pages_build_output_dir = "out"` and installed `wrangler` devDependency with `pages:dev` and `pages:deploy` scripts for local testing and direct deployment.  
3. Structured `public/_headers` with baseline security headers (CSP, X-Frame-Options, X-Content-Type-Options) and cache revalidation for all routes (`/*`), with immutable caching (`max-age=31536000, immutable`) for Next.js hashed assets (`/_next/static/*`).  
4. Expanded `public/_redirects` to enforce trailing slashes across all 27 site routes and handle 301 redirects and favicon fallback.  
5. Fixed ESLint configuration and React 19 hook warning in `ThemeToggle.tsx` using `useSyncExternalStore` and updated `Breadcrumb.tsx` navigation links to pass all CI gates.  
6. Created GitHub Actions workflow `.github/workflows/deploy.yml` for automated CI/CD deployment.  
**Consequences:** Zero-error static export build, verified local emulation with Wrangler, and one-click deployment ready on Cloudflare Pages.

---

## [2026-10-24] Agentation Dev Tool Integration

**Context:** The user requested integration of Agentation (visual feedback and annotation toolbar for AI coding agents) in the project.  
**Decision:**  
1. Installed `agentation` (^3.1.2) as a devDependency via `pnpm add -D agentation` and approved `esbuild` and `workerd` build scripts in pnpm.  
2. Mounted `<Agentation endpoint="http://localhost:4747" />` in [app/layout.tsx](file:///c:/Users/vaibh/PROGRAMMING/PROJECTS/Reach%20Prototype/app/layout.tsx) conditioned on `process.env.NODE_ENV === 'development'`.  
**Consequences:**  
- When running in dev mode (`pnpm dev`), the Agentation toolbar renders client-side and syncs with the local Agentation MCP server at `http://localhost:4747` (or works offline locally in browser if the server is not active).  
- In production static builds (`pnpm build`), dead-code elimination omits Agentation entirely, keeping the static bundle minimal and zero-dependency in production.

---

## [2026-10-24] Official Brand Logo & Theme-Adaptive Asset Integration

**Context:** The previous logo implementation in `ReachLogo.tsx` was a synthetic placeholder using geometric SVG shapes and text. The owner provided the authentic official logo assets in `temp/` with dark and light variants, favicons, app icons, and web manifests.  
**Decision:**  
1. Extracted and deployed the high-resolution master brand logo assets (`reach-logo-dark.png` for light backgrounds and `reach-logo-light.png` for dark backgrounds) to `public/images/`.
2. Preserved the full master brand icon packages in `public/brand/dark-logo/` and `public/brand/light-logo/`.
3. Fully replaced `components/primitives/ReachLogo.tsx` with a responsive component powered by `next/image` that supports automatic zero-FOUC CSS theme switching (`variant="auto"`), as well as explicit variants (`variant="light"` and `variant="dark"`).
4. Added CSS token selectors in `styles/tokens.css` targeting `[data-theme="dark"]`, `[data-theme="light"]`, and `@media (prefers-color-scheme: dark)` to switch between dark and light logos instantaneously without layout shift (CLS = 0).
5. Updated `SiteHeader.tsx` (desktop + mobile drawer) and `SiteFooter.tsx` (dark contrast variant).
6. Deployed official `favicon.ico`, `favicon.svg` (with embedded dark/light media queries), `favicon-96x96.png`, `apple-touch-icon.png`, `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png`, and updated `manifest.webmanifest`.  
**Consequences:** Replaced all placeholder logo artifacts with authentic brand artwork strictly complying with Rule 6 (CV-02). Zero layout shift, immediate theme adaptation, and passing TypeScript and ESLint checks.
---

## [2026-10-24] Base UI Navigation Integration & Complete Removal of Older Navbar

**Context:** The user requested completely removing the older navbar (`SiteHeader.tsx`), adopting the `@sean0205/components/navigation-menu-1` Base UI primitive as the sole navbar, and renaming the component/file cleanly for our project to `navigation`.
**Decision:**
1. Installed required packages: `@base-ui-components/react`, `class-variance-authority`, `lucide-react`, and `clsx`.
2. Created standard shadcn infrastructure:
   - Configured `components.json` targeting `@/components/ui`, Tailwind CSS v4, and `@/lib/utils`.
   - Created `@/lib/utils.ts` exporting standard `cn` merging `clsx` and `tailwind-merge`.
   - Created `components/ui/navigation.tsx` housing the Base UI primitives (`NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, etc.).
   - Removed external temporary registry names (`navigation-menu-1.tsx` and demo files).
3. Created `components/patterns/Navigation.tsx` (re-exported via `components/Navigation.tsx`):
   - Named `Navigation` as the sole site header component.
   - Built rich megamenus for Equipment (with Unsplash equipment hero imagery, Access Equipment, and Material Handling), Services, and Industries with Lucide icons.
   - Retained official `ReachLogo` (Rule 6 CV-02), `ThemeToggle`, and "Request a Quote" CTA button.
   - Maintained responsive mobile drawer for small screens.
4. Completely removed `components/patterns/SiteHeader.tsx` and updated `app/layout.tsx` to mount `<Navigation />`.
**Consequences:** The older navbar is completely removed. The site now solely uses `Navigation` built on `components/ui/navigation.tsx`. Zero TypeScript or ESLint errors.
