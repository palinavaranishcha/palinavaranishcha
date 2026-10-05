# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A React + TypeScript portfolio website for artist Palina Varanishcha, deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/static.yml`. Vite is the build tool — the workflow runs `npm run build` and deploys `dist/`.

## Stack

- React 18, TypeScript, Vite
- React Router v6 with `HashRouter` (required for GitHub Pages — no server-side routing)
- Plain CSS (imported globally in `src/main.tsx`)

## Active pages and routes

| Route | Component |
|-------|-----------|
| `/#/` | `src/pages/Work.tsx` |
| `/#/about` | `src/pages/About.tsx` |
| `/#/contact` | `src/pages/Contact.tsx` |

Header and Footer are shared components in `src/components/`.

## CSS

`css/style.css` is the one file to edit for all visual changes. It contains the full design system: base resets, layout, components, and responsive breakpoints (`@media (max-width: 900px)` and `@media (max-width: 600px)`).

`css/responsive.css` is legacy from an old template — its selectors target old ARIA-role HTML that no longer exists. Do not add to it; it can be removed in a future cleanup.

## Paintings

Artwork images live in `public/images/paintings/`. To add a painting:
1. Place the image in `public/images/paintings/`.
2. Add an entry to the `paintings` array in `src/pages/Work.tsx`.
3. Increment the two-digit number in the `number` field.

## Development

```bash
npm install
npm run dev
npm run build
```

## HashRouter note

The site uses `HashRouter` so that all routes work on GitHub Pages without a server. Links use React Router's `<Link>` and `<NavLink>` components — never bare `<a href="">` tags for internal navigation.
