# Dev Notes

## Deploy pipeline

Deploys from GitLab Pages (`davidawad/davidawad.gitlab.io`, `master`
branch); the GitHub repo is a mirror only. CI runs `yarn install
--immutable` — add packages with `yarn add`, never `npm`. The repo's
`package-lock.json` is stale (Nov 2025) and unused. Astro is v5, so
integration majors must match (e.g. `@astrojs/mdx@4`, not latest).
Deploy latency after push is ~60s for the GitLab Pages pipeline.

## Trailing-slash 404s

Slash-less URLs on freshly deployed directory routes return 404 instead
of redirecting (`/error-concepts/concept-1` → 404, while
`/concept-1/` → 200). Established routes like `/investing` do 302.
Always share/open URLs with a trailing slash.

## Cloudflare

`CLOUDFLARE_API_TOKEN` (Infisical general vault — fetch via `uv run
AI/skills/get-credentials/credentials.py --profile general get
CLOUDFLARE_API_TOKEN` from `~/.dotfiles`) covers the davidaw.ad zone
(id `40332227fc6af1f3b8047263260cdc18`) as of 2026-07-25, alongside
awad.esq/awad.lawyer/teamlab.wtf. Confirmed working: Zone Read, Cache
Rules Edit, Zone Settings Edit (HSTS), Transform Rules Edit. Cache
Purge failed with an auth error on 2026-07-25 and hasn't been
re-verified since — check before relying on purge.

Zone config as of 2026-07-25: cache rules `/_astro/*` 1yr edge+browser,
`/assets/*` edge 1mo / browser 1d; HSTS max-age 31536000 (no
subdomains, no preload); response header transform adds `nosniff` +
`Referrer-Policy`.

## Local-first workflow

This is David's public professional site — don't push experimental or
in-progress design candidates to production; he reviews locally first
(`npx astro dev`) and pushes only what he's picked/approved. A one-off
"commit and push" instruction applies to that batch of finished work
only, not standing authorization. Fixes to real user-facing bugs (e.g.
a broken nav link) are fine to ship immediately without waiting for
review.

## "Theory of work" post

When David refers to his "theory of work" blog post, he means **Lessons
from Markets on Decision Making**
(`src/data/blog/en/lessons-from-markets-on-decision-making.mdx`, slug
`3-8-lessons-from-markets-on-decision-making`). It's the public version
of his utility/EU-rate work-execution framework (swings, sizing,
alpha/beta), and embeds the reusable `PayoffMatrix.astro` component in
the alpha section.
