# Porter — MicroVM orchestration engine

This repository contains the Porter marketing and infrastructure-commerce frontend. Porter combines the smooth deploy flow of Vercel, the self-hosting control of Coolify, useful Kubernetes-style orchestration primitives, OCI/Docker image workflows, MicroVM isolation through Firecracker, observability, billing, and AI-assisted operations.

## Run locally

```bash
npm ci
npm run dev
```

The homepage is available at `/` and the infrastructure commerce page is available at `/pricing.html` and `/pricing`.

## Checks

```bash
npm run check
npm run build
```

## Cloudflare Pages

- Framework preset: **Vite**
- Build command: `npm ci && npm run build`
- Build output directory: `site`
- Node.js: 22 or newer

The build emits both the homepage and the pricing entry point. The repository also includes `public/manus-routes.json` for the declared page routes.
