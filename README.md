# link

Personal landing page / link tree at **https://astraljaeger.dev**.

Stack: [React 19](https://react.dev) · [Vite](https://vite.dev) · [Tailwind v4](https://tailwindcss.com) · Cloudflare Workers (static assets).

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # type-check + build to ./dist
pnpm preview    # serve ./dist through wrangler (Workers runtime)
pnpm lint
pnpm format
```

## Content

Name, bio, skill icons and social links all live in `src/model.ts`. Skill icons come from [skillicons.dev](https://skillicons.dev) by id; social icons are mapped to Font Awesome in `src/links/SocialLink.tsx`.

## Deploy

GitLab CI (`.gitlab-ci.yml`) lints and builds every push, then deploys with wrangler:

- `main` → `wrangler deploy` to production on `astraljaeger.dev`
- any other branch → `wrangler versions upload --preview-alias <branch>`; the preview URL shows up on the environment in GitLab

Requires the CI/CD variables `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Manual deploy: `pnpm deploy`.
