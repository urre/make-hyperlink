# make-hyperlink.com

## Create a hyperlink

Created during the pandemic

## Development

```bash
npm install
npm start
```

Then open http://localhost:5173.

## Deployment

Hosted on GitHub Pages. Every push to `main` runs
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the
site with Vite and publishes `dist/`.

One-time setup: in the repository's **Settings → Pages**, set *Source* to
**GitHub Actions**. The custom domain `make-hyperlink.com` comes from
[public/CNAME](public/CNAME) and needs DNS pointing at GitHub Pages
(`A` records to GitHub's Pages IPs, or a `CNAME` to `urre.github.io`).
