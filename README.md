# link

Personal landing page / link tree at **https://astraljaeger.dev**.

This repository is a read-only mirror of `main`.

Stack: [Svelte 5](https://svelte.dev) · [Vite](https://vite.dev) · [Tailwind v4](https://tailwindcss.com) · the AstralJaeger design system (`@ajxhome/design-system`) · Cloudflare Workers (static assets).

## Develop

`@ajxhome/design-system` comes from a private GitLab npm registry (see `.npmrc`); authenticate once with a personal
access token (`read_api`) before installing.

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # svelte-check + build to ./dist
pnpm preview    # serve ./dist through wrangler (Workers runtime)
pnpm lint
pnpm format
```

## Content

The profile (name, bio, skill icons, social links) is personal data and is not committed. The build reads it, in this order, from:

1. `PROFILE_JSON`: path to the JSON file (a GitLab CI file-type variable; required in CI, so placeholder data never ships)
2. `src/profile.json` (gitignored, for local development)
3. `src/profile.example.json` (committed placeholder; shows the format, types in `src/model.ts`)

Skills are listed by their [skillicons.dev](https://skillicons.dev)-style id and shown as text chips; social `icon` names are the design system's icons (`discord`, `signal`, `github`, `gitlab`, `linkedin`); `src/profile.ts` maps the JSON onto its components.

### Why it is client-rendered and obfuscated

The page is meant for people, not crawlers: `robots.txt` blocks everything, the HTML is an empty shell, and the profile is XOR/base64-encoded with a random key at build time (`build/encode-profile.ts`). A plain HTTP fetch or a grep over the HTML/JS finds no personal data; it only appears once a browser runs the page. This deters simple scrapers, not headless browsers.

## Deploy

GitLab CI uses a shared Cloudflare webapp component (`.gitlab-ci.yml`): lint + build on every push, `main` deploys to production on `astraljaeger.dev`, other branches get preview versions.

Requires `CLOUDFLARE_ACCOUNT_ID` (group), `CLOUDFLARE_API_TOKEN` and `PROFILE_JSON` (file type) on the project. Manual deploy: `pnpm deploy`.
