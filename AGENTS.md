# AGENTS.md — Reach International Website

**Read this file first before making any changes.**

## 1. Read First

Before working on this project:
1. Read `PRD.md` (project root) — full requirements, IDs, rules
2. Read `brain/VERIFIED_FACTS.md` — what may be published
3. Read `brain/OPEN_QUESTIONS.md` — pending approvals
4. Read `brain/DECISION_LOG.md` — prior architectural decisions
5. Read the relevant doc in `architecture/`, `features/`, or `design/` for your task area

## 2. Audit Before Change

- Inspect existing files, dependencies, scripts and tests **before writing code**
- Never assume a file doesn't exist; check first
- Never assume a dependency is installed; check `package.json`

## 3. Proposal Before Implementation

When the task is non-trivial:
1. State your plan (affected files, approach, risks)
2. Get confirmation (or proceed if obvious/low-risk)
3. Implement only within agreed scope

## 4. No Blind Rewrites

- Do not replace working architecture without evidence and a `DECISION_LOG.md` entry
- Do not change the token system without recomputing contrast ratios (see `design/BRAND_COLORS.md`)

## 5. Content Rules (MUST)

- **Never invent** company facts, specs, prices, stock, testimonials, clients or metrics
- If a fact isn't in `brain/VERIFIED_FACTS.md` with status `verified`, render "Contact us to confirm" instead
- No unverified metrics in hero, About, or home "Why us" sections

## 6. Logo Rule (CV-02)

- Use logo assets as supplied — never recreate as text
- Use correct variant per theme (light/dark)
- Never recolor without owner approval

## 7. Use the System

- Tokens → primitives → patterns → templates → pages (strict layer order)
- Use existing components; only add new ones if nothing fits (update `design/COMPONENT_PATTERNS.md`)
- Colors: semantic tokens only in components; no hardcoded hex

## 8. Run Gates Before Done

```
pnpm typecheck        # TypeScript strict
pnpm lint             # ESLint
pnpm build            # Static export — must succeed with zero errors
```

> **CRITICAL BUILD NOTE:** The `pnpm dev` server MUST be stopped before running `pnpm build`.
> Running both concurrently corrupts webpack chunks in `.next/` and causes prerender failures.
> If build fails with "Cannot find module './NNN.js'", stop the dev server and run:
> `Remove-Item -Recurse -Force .next; pnpm build`

Also check manually:
- All internal links resolve
- No `noindex` on production pages
- Semantic tokens used (no hardcoded hex in components)
- Content verified before publishing

## 9. Report After Work

Changed files · commands run · results · unresolved risks · follow-ups

## 10. Never

- Commit secrets or API keys
- Publish internal docs (brain/, rules/, etc.)
- Weaken a CI gate or budget to make a check pass
- Publish unverified facts

## 11. Log Decisions

Add a dated entry to `brain/DECISION_LOG.md` for any significant architectural, design, or content decision.

---

## Quick Reference: Project Structure

```
app/                  Routes (Next.js App Router, static export)
components/
  primitives/         Unstyled base elements (Button, Card, etc.)
  patterns/           Site and business components (SiteHeader, EquipmentCard, etc.)
  templates/          Page templates (CategoryPageTemplate, IndustryPageTemplate)
styles/
  tokens.css          ALL design tokens — single source of truth
lib/                  Pure helpers (metadata, jsonld, format)
content/
  schema/             Zod schemas
  data/               Validated JSON/MDX content
brain/                Agent knowledge base (NOT public)
public/               Served files only (_redirects, _headers, robots.txt, llms.txt, manifest)
```

## Quick Reference: Key URLs (Production)

- Home: https://www.reachinternational.co.in/
- Equipment: https://www.reachinternational.co.in/equipment/
- Quote: https://www.reachinternational.co.in/request-a-quote/
- Stitch design: https://stitch.withgoogle.com/projects/15669300440936796835
