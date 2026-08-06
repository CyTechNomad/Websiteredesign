# CHowell.Dev – Website Redesign

> Vibe-coded personal site. Playing around with Astro 5 + React + shadcn/ui.
> Original design: [Figma](https://www.figma.com/design/30ITJmP9P4cBbBxuTNjlxo/Website-Redesign)

## Tech Stack

- **[Astro 5](https://astro.build/)** – static site generator with file-based routing
- **[React 18](https://react.dev/)** – interactive islands via `client:load`
- **[Tailwind CSS v4](https://tailwindcss.com/)** – utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** – Radix-based component library
- **[TypeScript](https://www.typescriptlang.org/)** – strict mode

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/blog` | `src/pages/blog.astro` |

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # build static output to dist/
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages

The site is configured for [GitHub Pages](https://pages.github.com/) with the custom domain **new.chowell.dev**.

1. Build and push your branch
2. GitHub Actions (or manual Pages config) deploys from the `dist/` output
3. The `CNAME` file in `public/` sets the custom domain
4. Go to **Settings → Pages** and set the source branch/folder as needed

