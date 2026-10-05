# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static HTML portfolio website for artist Palina Varanishcha, deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/static.yml`. There is no build step — files are served as-is.

## Active pages and their structure

Three live pages share an identical header/footer pattern and load the same two stylesheets and JS bundle:

| Page | File |
|------|------|
| Work (home) | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |

Each page sets `class="active"` on its own nav link to show the underline indicator.

## CSS

`css/style.css` is the one file to edit for all visual changes. It contains the full design system: base resets, layout, components, and responsive breakpoints (`@media (max-width: 900px)` and `@media (max-width: 600px)`).

`css/responsive.css` is legacy from an old template — its selectors target old ARIA-role HTML that no longer exists in the site. Do not add to it; it can be removed in a future cleanup.

## Known dead references

Every HTML page loads `js/script.js`, which does not exist in the repository. This currently causes a silent 404 but no visible breakage.

## Paintings

Artwork images live in `images/paintings/`. To add a painting to `index.html`, copy an existing `<article class="painting">` block and increment the two-digit number in `<span class="painting-number">`.

## Legacy files

`blog.html`, `blog-details.html`, and `works-details.html` are leftover from an earlier template and are not linked anywhere in the current navigation. `js/custom.js`, `js/nav.js`, `js/maps.js`, `js/jquery.contact.js`, and `js/effects/` are also unused remnants.
