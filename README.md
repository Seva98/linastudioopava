# Lina Studio Opava

Czech marketing website for Lina Studio Opava, built with Next.js 16, the App Router, TypeScript, Tailwind CSS, and pnpm.

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The development-only component gallery is available at `/component-gallery` and returns 404 in production.

## Checks

```bash
pnpm run lint
pnpm run typecheck
pnpm test
pnpm test:e2e
pnpm run build
```

## Zenamu schedule and prices

The homepage reads the next four public lessons from Lina Studio's Zenamu calendar. The price page derives its lesson prices from the same public source and falls back to the last verified values if Zenamu is temporarily unavailable. Responses are cached for five minutes.

Generated placeholder photography and its prompt record are documented in [docs/image-generation.md](docs/image-generation.md).

The approved fonts, palette, and client-supplied file mapping are documented in [docs/brand-assets.md](docs/brand-assets.md).
