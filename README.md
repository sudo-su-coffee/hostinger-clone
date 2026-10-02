# Client-only website ZIP

This archive contains only the runnable frontend source and its local images. Each of the 46 images appears once. There is no backend/server folder, database, prebuilt duplicate image folder, or `node_modules`.

## Contents
- `client/src/` — homepage and Plans & Pricing page source
- `client/public/assets/images/` — 46 local images (one copy each)
- `client/index.html` and `client/pricing.html` — two page entry points
- `client/package.json` and `client/package-lock.json` — reproducible npm setup

## Run locally
Requires Node.js and npm:

```bash
cd client
npm ci
npm run dev
```

Open the local address printed by Vite. The pricing page is available at `/pricing.html`. Run `npm run build` for a production build; it writes the static site to the sibling `site/` directory.

This is an independent visual recreation for demonstration and is not affiliated with Hostinger. Product images and marks remain the property of their respective owners.
