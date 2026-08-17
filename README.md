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

## iSport schedule

Development uses local fixtures by default. Production intentionally shows no fabricated classes until official iSport API access is configured. Copy `.env.example` to `.env.local` and use the server-only values documented in [docs/isport-integration.md](docs/isport-integration.md).

Generated placeholder photography and its prompt record are documented in [docs/image-generation.md](docs/image-generation.md).
