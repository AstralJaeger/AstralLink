# link

Personal landing page / link tree at **https://astraljaeger.dev**.

Developed on [GitLab](https://gitlab.com/ajxhome/web/link); [GitHub](https://github.com/AstralJaeger/AstralLink) is a read-only push mirror of `main`, so issues and merge requests go to GitLab.

Stack: [Svelte 5](https://svelte.dev) · [Vite](https://vite.dev) · [Tailwind v4](https://tailwindcss.com) · Cloudflare Workers (static assets).

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # svelte-check + build to ./dist
pnpm preview    # serve ./dist through wrangler (Workers runtime)
pnpm lint
pnpm format
```

## Content

Name, bio, skill icons and social links live in `src/profile.json` (types in `src/model.ts`). Skill icons come from [skillicons.dev](https://skillicons.dev) by id; social icons are mapped to Font Awesome in `src/links/SocialLink.svelte`.

### Why it is client-rendered and obfuscated

The page is meant for people, not crawlers: `robots.txt` blocks everything, the HTML is an empty shell, and `profile.json` is XOR/base64-encoded with a random key at build time (`build/encode-profile.ts`). A plain HTTP fetch or a grep over the HTML/JS finds no personal data; it only appears once a browser runs the page. This deters simple scrapers, not headless browsers.

## Deploy

GitLab CI uses the shared `ajxhome/platform/cloudflare` webapp component (`.gitlab-ci.yml`): lint + build on every push, `main` deploys to production on `astraljaeger.dev`, other branches get preview versions.

Requires `CLOUDFLARE_ACCOUNT_ID` (group `ajxhome/web`) and `CLOUDFLARE_API_TOKEN` (this project). Manual deploy: `pnpm deploy`.
