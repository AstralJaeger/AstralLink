## Project notes

- Svelte 5 + Vite SPA (single page, no router) deployed to Cloudflare Workers static assets at astraljaeger.dev (`wrangler.toml`).
- Client-rendered **on purpose**: no SSR or prerendering. Personal data must never appear in the HTML; `robots.txt` blocks all crawlers deliberately.
- Page content lives in `src/profile.json`. It is imported as `./profile.json?encoded` and obfuscated at build time by `build/encode-profile.ts` (decoded by `src/lib/decode.ts`). Never import it without `?encoded`; after a build, `grep -rF Hillebrand dist/` must find nothing.
- Icons: Font Awesome icon definitions rendered by `src/lib/Icon.svelte` (no FA runtime).
- Tailwind v4 via `@tailwindcss/vite`; theme overrides go in the `@theme` block in `src/index.css` (there is no `tailwind.config.js`).
- pnpm 11: packages with install scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- Run `pnpm lint && pnpm build` (includes `svelte-check`) before committing.
