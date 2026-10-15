# Project Instructions for AI Agents

This file provides instructions and context for AI coding agents working on this project.

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:6cd5cc61 -->
<!-- STALE MARKER: this repo switched its beads backend from bd to br
     (2026-08-25, deregister-bd). The block below was hand-edited to match;
     the v:1/profile:minimal/hash marker above is whatever generated the
     ORIGINAL bd-flavored content and is now stale. If a doc-drift check
     flags this block, reconcile by re-deriving the hash from the current
     (br) content, don't revert to the bd wording. -->
## Beads Issue Tracker

This project uses **br (beads_rust)** for issue tracking — a local-first
SQLite+JSONL tracker, no background daemon (migrated from bd/Dolt,
2026-08-25). Run `br robot-docs guide` to see full workflow context and
commands (br's closest equivalent to bd's `prime`; br has no `prime`
subcommand).

### Quick Reference

```bash
br ready              # Find available work
br show <id>          # View issue details
br update <id> --claim  # Claim work
br close <id>         # Complete work
```

### Rules

- Use `br` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `br robot-docs guide` for detailed command reference
- `br` never runs git itself (unlike bd's Dolt-backed auto-push) — `.beads/issues.jsonl`
  stays gitignored, sync it explicitly with `br sync --flush-only` then `git add .beads/ && git commit`
  if you need it committed.
- **bd's `bd remember` persistent-memory feature has NO br equivalent** — do not
  assume memories work; use MEMORY.md-style files instead.

**Architecture in one line:** issues live in a local SQLite DB (`.beads/beads.db`);
`.beads/issues.jsonl` is br's own JSONL export. No git-remote sync mechanism
(unlike bd's Dolt `refs/dolt/data`) and no background daemon (unlike bd's Dolt
sql-server). See https://github.com/Dicklesworthstone/beads_rust for details.

### Memory carried over from bd (deregistered 2026-08-25)

`bd`'s `bd remember` had no br equivalent, and `bd` has now been fully
deregistered from this repo. This memory only ever lived in bd's shadow
store; preserved here so it isn't lost:

- **davidaw-ad-site-equation-background-effects-render-latex**: davidaw_ad
  site: equation-background effects render LaTeX to SVG on the fly (not
  pre-rendered PNGs) for crisp scaling across sizes/velocities; site-wide
  background placement is fine (not just homepage hero) as long as
  perf/accessibility bars are respected.

## Agent Context Profiles

The managed Beads block is task-tracking guidance, not permission to override repository, user, or orchestrator instructions.

- **Conservative (default)**: Use `br` for task tracking. Do not run git commits or git pushes unless explicitly asked (`br` itself never runs git). At handoff, report changed files, validation, and suggested next commands.
- **Minimal**: Keep tool instruction files as pointers to `br robot-docs guide`; use the same conservative git policy unless active instructions say otherwise.
- **Team-maintainer**: Only when the repository explicitly opts in, agents may close beads, run quality gates, commit, and push as part of session close. A current "do not commit" or "do not push" instruction still wins.

## Session Completion

This protocol applies when ending a Beads implementation workflow. It is subordinate to explicit user, repository, and orchestrator instructions.

1. **File issues for remaining work** - Create beads for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **Handle git/sync by active profile**:
   ```bash
   # Conservative/minimal/default: report status and proposed commands; wait for approval.
   git status

   # Team-maintainer opt-in only, unless current instructions forbid it:
   git pull --rebase
   git push
   git status
   ```
5. **Hand off** - Summarize changes, validation, issue status, and any blocked sync/commit/push step

**Critical rules:**
- Explicit user or orchestrator instructions override this Beads block.
- Do not commit or push without clear authority from the active profile or the current user request.
- If a required sync or push is blocked, stop and report the exact command and error.
<!-- END BEADS INTEGRATION -->


## Build & Test

_Add your build and test commands here_

```bash
# Example:
# npm install
# npm test
```

## Architecture Overview

_Add a brief overview of your project architecture_

## Conventions & Patterns

_Add your project-specific conventions here_
