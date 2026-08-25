# Agent Instructions

This project uses **br (beads_rust)** for issue tracking — a local-first
SQLite+JSONL tracker, no background daemon (migrated from bd/Dolt,
2026-08-25). Run `br robot-docs guide` for full workflow context.

> **Architecture in one line:** issues live in a local SQLite DB
> (`.beads/beads.db`); `.beads/issues.jsonl` is br's own JSONL export.
> No git-remote sync mechanism (unlike bd's Dolt `refs/dolt/data`) and no
> background daemon (unlike bd's Dolt sql-server). See
> https://github.com/Dicklesworthstone/beads_rust for details.

## Quick Reference

```bash
br ready              # Find available work
br show <id>          # View issue details
br update <id> --claim  # Claim work atomically
br close <id>         # Complete work
```

## Non-Interactive Shell Commands

**ALWAYS use non-interactive flags** with file operations to avoid hanging on confirmation prompts.

Shell commands like `cp`, `mv`, and `rm` may be aliased to include `-i` (interactive) mode on some systems, causing the agent to hang indefinitely waiting for y/n input.

**Use these forms instead:**
```bash
# Force overwrite without prompting
cp -f source dest           # NOT: cp source dest
mv -f source dest           # NOT: mv source dest
rm -f file                  # NOT: rm file

# For recursive operations
rm -rf directory            # NOT: rm -r directory
cp -rf source dest          # NOT: cp -r source dest
```

**Other commands that may prompt:**
- `scp` - use `-o BatchMode=yes` for non-interactive
- `ssh` - use `-o BatchMode=yes` to fail instead of prompting
- `apt-get` - use `-y` flag
- `brew` - use `HOMEBREW_NO_AUTO_UPDATE=1` env var

<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:6cd5cc61 -->
<!-- STALE MARKER: this repo switched its beads backend from bd to br
     (2026-08-25, deregister-bd). Reconcile the hash from current (br)
     content if a doc-drift check flags this, don't revert to bd wording. -->
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
  stays gitignored; sync explicitly with `br sync --flush-only` then `git add .beads/ && git commit`.
- **bd's `bd remember` persistent-memory feature has NO br equivalent** — do not
  assume memories work; use MEMORY.md-style files instead. (See CLAUDE.md's
  "Memory carried over from bd" section for this repo's one preserved memory.)

**Architecture in one line:** issues live in a local SQLite DB (`.beads/beads.db`);
`.beads/issues.jsonl` is br's own JSONL export. No git-remote sync mechanism
(unlike bd's Dolt `refs/dolt/data`) and no background daemon (unlike bd's
Dolt sql-server). See https://github.com/Dicklesworthstone/beads_rust for details.

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

<!-- BEGIN BEADS CODEX SETUP: originally generated by bd setup codex, hand-migrated to br 2026-08-25 -->
## Beads Issue Tracker

Use `br` (beads_rust) for durable task tracking in repositories that include it. Use the `beads-br` skill for Beads workflow guidance, then use the `br` CLI for issue operations.

### Quick Reference

```bash
br ready                # Find available work
br show <id>            # View issue details
br update <id> --claim  # Claim work
br close <id>            # Complete work
br robot-docs guide      # Refresh Beads context (br has no `prime` subcommand)
```

### Rules

- Use `br` for all task tracking; do not create markdown TODO lists.
- Run `br robot-docs guide` when Beads context is missing or stale.
- **bd's `bd remember` persistent-memory feature has NO br equivalent** — keep
  persistent project memory in MEMORY.md-style files instead (see CLAUDE.md's
  "Memory carried over from bd" section).

**Architecture in one line:** issues live in a local SQLite DB (`.beads/beads.db`);
`.beads/issues.jsonl` is br's own JSONL export. No git-remote sync mechanism
(unlike bd's Dolt `refs/dolt/data`) and no background daemon (unlike bd's
Dolt sql-server). See https://github.com/Dicklesworthstone/beads_rust for details.
<!-- END BEADS CODEX SETUP -->
