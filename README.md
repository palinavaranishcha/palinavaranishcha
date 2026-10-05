# Palina Varanishcha — Portfolio Website

Static portfolio website for contemporary artist Palina Varanishcha. Built with React + TypeScript + Vite. Deployed automatically to GitHub Pages on every push to `main`.

## Live site

`https://palinavaranishcha.github.io`

## Tech stack

- **React 18** — UI
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **React Router v6** — client-side routing (HashRouter for GitHub Pages compatibility)

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/#/` | `src/pages/Work.tsx` | Gallery of selected paintings, hero, contact preview |
| `/#/about` | `src/pages/About.tsx` | Artist biography and statement |
| `/#/contact` | `src/pages/Contact.tsx` | Contact details |

## Project structure

```
├── src/
│   ├── main.tsx              # Entry point — imports CSS, wraps in HashRouter
│   ├── App.tsx               # Route definitions
│   ├── components/
│   │   ├── Header.tsx        # Navigation with active link highlighting
│   │   └── Footer.tsx        # Footer with nav links and copyright
│   └── pages/
│       ├── Work.tsx          # Home page — painting grid + about/contact previews
│       ├── About.tsx         # Artist bio page
│       └── Contact.tsx       # Contact page
├── public/
│   └── images/
│       └── paintings/        # Artwork images and artist photo
├── css/
│   ├── style.css             # Main stylesheet — all visual changes go here
│   └── font-awesome.min.css
├── fonts/                    # Font Awesome web fonts
├── index.html                # Vite HTML entry point
├── vite.config.ts
├── tsconfig.json
└── .github/
    └── workflows/
        └── static.yml        # Build → deploy to GitHub Pages
```

## Development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

## Adding a painting

Open `src/pages/Work.tsx` and add an entry to the `paintings` array:

```ts
{ id: 8, number: '08', title: 'Untitled VIII', src: '/images/paintings/painting-8.jpg' }
```

Place the image in `public/images/paintings/`.

## Deployment

Pushing to `main` triggers `.github/workflows/static.yml`, which installs dependencies, runs `npm run build`, and deploys the `dist/` folder to GitHub Pages.

## CSS

`css/style.css` is the single file to edit for all visual changes. It is imported globally in `src/main.tsx`. Responsive breakpoints are at `@media (max-width: 900px)` and `@media (max-width: 600px)`.

`css/responsive.css` is a legacy file from an old template. It has no effect and can be removed.

## Known issues

- `css/responsive.css` is loaded on every page but targets old markup. Can be removed in a future cleanup.

## Contact

palinavarani@gmail.com
