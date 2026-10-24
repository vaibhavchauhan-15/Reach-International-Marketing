# brain/

Agent and team knowledge base for the Reach International website project.

## Purpose

Permanent, human-and-agent-readable records of business facts, decisions, open questions and goals.
**Never published to the web.** Keep outside `public/` — the post-build leak check enforces this.

## Files

| File | Purpose |
|---|---|
| `README.md` | This file — directory index |
| `BUSINESS_CONTEXT.md` | Company identity, offerings, market, audiences |
| `PRODUCT_GOALS.md` | Goals, non-goals, success metrics from PRD §3 |
| `VERIFIED_FACTS.md` | Register of all facts with verification status |
| `OPEN_QUESTIONS.md` | Pending owner approvals (PRD §23) |
| `DECISION_LOG.md` | Architectural and design decisions with rationale |

## Usage

1. **Before implementing anything**: read `VERIFIED_FACTS.md` to confirm what may be published.
2. **Before changing design/architecture**: read `DECISION_LOG.md` to understand prior decisions.
3. **When a question arises**: add it to `OPEN_QUESTIONS.md` before assuming an answer.
4. **After a significant decision**: log it in `DECISION_LOG.md` within the same session.
