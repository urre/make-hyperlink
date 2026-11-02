# Make a Hyperlink

## Create a hyperlink

Created during the pandemic

## Development

```bash
npm install
npm start
```

Then open http://localhost:5173.

## Deployment

Hosted on GitHub Pages at <https://urre.github.io/make-hyperlink/>. Every push
to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site with Vite and publishes `dist/`.

Because the site lives under a sub path, `base` in
[vite.config.ts](vite.config.ts) is `/make-hyperlink/`.
