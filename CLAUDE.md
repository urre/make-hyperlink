# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

make-hyperlink.com — a single-page tool that builds an HTML (or JSX) `<a>` tag
interactively: you toggle attributes in a sidebar and the generated markup is
shown, syntax highlighted, ready to copy.

Vite + React 18, no router, no backend, no tests.

## Commands

```bash
npm install     # .npmrc sets legacy-peer-deps=true
npm start       # vite dev server on http://localhost:5173
npm run build   # production build into dist/
npm run serve   # preview the built dist/ locally
```

Node version is pinned in `.nvmrc` (20.15.0).

## Layout

- `index.html` — Vite entry, holds all `<meta>`/OG tags and `#root`.
- `src/index.jsx` — mounts `App` and imports every stylesheet in `src/styles/`.
- `src/App.jsx` — the whole app: a single React **class** component. It owns a
  `state.link` object with one key per supported attribute, and `createMarkup()`
  turns that object into the HTML or JSX string. Prism is re-run on every
  `componentDidUpdate` to highlight the output.
- `src/components/` — one component per attribute group (`Target`, `Rel`,
  `Download`, `ReferrerPolicy`, `A11y`, `QueryString`, `Analytic` for UTM
  params), plus `Copy`, `Header`, `Colophon` and inline SVG icon components.
  They are controlled by `App` through the `useAttribute` prop callback.
- `src/constants.js` — `notes`, the explanatory copy shown under each control.
- `src/styles/` — plain CSS, one file per area, no preprocessor or CSS modules.
- `public/` — favicons, OG image, `manifest.json`, and `CNAME` for the custom
  domain. Everything here is copied verbatim into `dist/`.

## Conventions

- Prettier formats the code (`.prettierrc`): no semicolons, double quotes.
- Attribute components stay dumb — state lives in `App`, children call
  `props.useAttribute(name, value)`.
- To add an attribute: add its key to `state.link`, build a component in
  `src/components/`, render it in the sidebar, and make sure `createMarkup()`
  handles it (note the `utm*` / `querystring*` keys are filtered out there
  because they are folded into `href` instead of emitted as attributes).

## Deployment

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain comes from `public/CNAME`;
`base` in `vite.config.ts` is `/` because the site is served from the domain
root. If it ever moves to `urre.github.io/make-hyperlink/`, `base` has to become
`/make-hyperlink/`.

There is no Vercel setup any more — don't reintroduce `@vercel/analytics` or a
`vercel.json`.
