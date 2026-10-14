## Project notes

- Svelte 5 + Vite SPA (single page, no router) deployed to Cloudflare Workers static assets at astraljaeger.dev (`wrangler.toml`).
- Client-rendered **on purpose**: no SSR or prerendering. Personal data must never appear in the HTML; `robots.txt` blocks all crawlers deliberately.
- Public links point to the GitHub mirror (github.com/AstralJaeger/AstralLink), never the private GitLab project.
- Page content (personal data) is **not in the repo**: the public GitHub mirror would expose it. `build/encode-profile.ts` serves it as `virtual:profile`, reading `PROFILE_JSON` (GitLab CI file variable, required in CI), else the gitignored `src/profile.json`, else the placeholder `src/profile.example.json`. It is obfuscated in the bundle (decoded by `src/lib/decode.ts`); after a CI build, `grep -rF Hillebrand dist/` must find nothing.
- UI comes from `@ajxhome/design-system` (ajxhome/web/designsystem, GitLab npm registry): `Page`, `Profile`, `LinkList`, `SkillChips`, `Footer`, `Button`. Follow its guidelines (tokens, `brand` only for the one featured element, icons from its set); don't add custom colours or restyle components. Missing features go into the design system, not here.
- `src/profile.ts` maps the profile JSON onto the design system props (icon names, skill chip names).
- Tailwind v4 via `@tailwindcss/vite`; `src/index.css` only imports Tailwind and the design system styles (there is no `tailwind.config.js`).
- pnpm 11: packages with install scripts must be allowed in `pnpm-workspace.yaml` (`allowBuilds`).
- Run `pnpm lint && pnpm build` (includes `svelte-check`) before committing.
