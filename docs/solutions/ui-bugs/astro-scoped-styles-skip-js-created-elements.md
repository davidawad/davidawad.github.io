---
title: "Astro scoped styles never reach elements created by client-side JavaScript"
module: "davidaw.ad site (HeaderTerminal on the Engineering page)"
date: 2026-10-20
problem_type: ui_bug
component: frontend_stimulus
severity: medium
symptoms:
  - "Terminal output rows and the man-page box render unstyled (no accent border, no row layout) even though the same classes style the static page"
  - "A command's output looks fine when server-rendered but plain when built with document.createElement"
root_cause: scope_issue
resolution_type: code_fix
tags:
  - astro
  - scoped-styles
  - is-global
  - client-script
  - dynamic-dom
---

# Astro scoped styles never reach elements created by client-side JavaScript

## Problem

The Engineering page's live terminal builds its output rows and man-page boxes with `document.createElement` in a client `<script>`. Those elements were meant to reuse the page's own classes (`.manpage`, `.row-line`, `.col-perms`). They rendered unstyled.

## Root cause

Astro rewrites every selector in a component's plain `<style>` to carry a per-component attribute (`[data-astro-cid-xxxx]`) and stamps that attribute onto the elements the template renders at build time. Elements created at runtime by a script have no such attribute, so the scoped selectors never match them. The page's styles in `src/components/pages/EngineeringPage.astro` were scoped, so they styled the server-rendered list but not the terminal's JS-built copies.

## Solution

Make the stylesheet global for anything JS builds:

- `src/components/HeaderTerminal.astro` uses `<style is:global>` for its own rules.
- `src/components/pages/EngineeringPage.astro` was switched to `<style is:global>` so the terminal can reuse its class names; the page's class names are specific enough that the leak is confined to pages that include the component.

## Prevention

- Rule of thumb: if a class is applied from a `<script>` (createElement, innerHTML, classList), its CSS must be `is:global` (or the script must be moved into the template so Astro stamps the scope attribute).
- Prefer unique prefixes (`.live-*`) for new global rules so they cannot collide with other pages.
- When reusing another component's classes from JS, expect to widen that component's styles to global, and check the other pages that include it.
