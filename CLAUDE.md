## Project notes

- Static React + Vite site (single page, no router) deployed to Cloudflare Workers static assets at astraljaeger.dev (`wrangler.toml`).
- All page content lives in `src/model.ts`.
- Tailwind v4 via `@tailwindcss/vite`; theme overrides go in the `@theme` block in `src/index.css` (there is no `tailwind.config.js`).
- pnpm 11: packages with install scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- Run `pnpm lint && pnpm build` before committing.
