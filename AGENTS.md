## Project notes

- Svelte 5 + Vite SPA (single page, no router) deployed to Cloudflare Workers static assets at astraljaeger.dev (`wrangler.toml`).
- Client-rendered **on purpose**: no SSR or prerendering. Personal data must never appear in the HTML; `robots.txt` blocks all crawlers deliberately.
- Public links point to the GitHub mirror (github.com/AstralJaeger/AstralLink), never the private GitLab project.
- Page content (personal data) is **not in the repo**: the public GitHub mirror would expose it. `build/encode-profile.ts` serves it as `virtual:profile`, reading `PROFILE_JSON` (GitLab CI file variable, required in CI), else the gitignored `src/profile.json`, else the placeholder `src/profile.example.json`. It is obfuscated in the bundle (decoded by `src/lib/decode.ts`); after a CI build, `grep -rF Hillebrand dist/` must find nothing.
- Icons: Font Awesome icon definitions rendered by `src/lib/Icon.svelte` (no FA runtime).
- Tailwind v4 via `@tailwindcss/vite`; theme overrides go in the `@theme` block in `src/index.css` (there is no `tailwind.config.js`).
- pnpm 11: packages with install scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- Run `pnpm lint && pnpm build` (includes `svelte-check`) before committing.
