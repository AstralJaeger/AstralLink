# LinkBeam — a reconfigurable link-in-bio template

A small, single-page "link in bio" / link-tree site built with **React + TypeScript + Vite + Tailwind CSS**.

It is designed as a **template**: fork it, edit **one** well-documented config file, drop in your images, and you have a brand-new instance — a personal page, a band page, a creative/cosplay site, whatever you like.

![A round portrait that flips to a QR code, a name, a bio, rows of skill icons and a column of social buttons.](public/og-phoenix.png)

## Spin up your own instance

1. **Create a copy of the repo** (fork it, or create a new repo from it).
2. **Install dependencies** (this project uses [pnpm](https://pnpm.io/)):

   ```bash
   pnpm install
   ```

3. **Edit `src/site.config.ts`** — this is the only file you need to touch. See [Configuration](#configuration) below.
4. **Replace the images** in `public/` (see [Assets](#assets)).
5. **Run it locally**:

   ```bash
   pnpm dev      # start the dev server with hot reload
   pnpm build    # type-check + production build into dist/
   pnpm preview  # preview the production build
   ```

## Configuration

Everything that makes an instance unique lives in **`src/site.config.ts`**. It is split into four sections:

| Section    | What it controls                                                            |
| ---------- | --------------------------------------------------------------------------- |
| `meta`     | Browser tab title and description.                                           |
| `theme`    | The four colors that define the entire look of the site (see below).        |
| `footer`   | Copyright name / year / link and the "source code" link.                    |
| `content`  | Your portrait + QR code, name, tag, bio, the two icon rows and the buttons. |

### Colors

The whole site is colored from just **four** values in `theme`:

```ts
theme: {
  surface:   "#374151", // panels / cards background
  accent:    "#f99c1c", // gradients, highlights, hovers
  text:      "#d1d5db", // primary text
  textMuted: "#e5e7eb", // secondary / footer text
}
```

Any valid CSS color works (hex, `rgb(...)`, `hsl(...)`, ...). Change these values and **every** panel, gradient, hover state and piece of text updates automatically — no other file needs editing.

Under the hood these are applied at runtime as CSS variables (`--color-surface`, `--color-accent`, `--color-fg`, `--color-muted`) by `src/theme.ts`, which the Tailwind color tokens (`bg-surface`, `text-accent`, `from-surface`, `to-accent`, ...) read from. The default values also live in `src/index.css` (the `@theme` block) so the site still has sane colors before JavaScript runs.

Example "cosplay pink" palette:

```ts
theme: {
  surface:   "#2a1a2e",
  accent:    "#ff5fa2",
  text:      "#f5e6f0",
  textMuted: "#e9d5e0",
}
```

### Icon rows (`bio.languages` and `bio.tools`)

The two rows of icons under the bio are rendered via [skillicons.dev](https://skillicons.dev/). Set each `icon` to a slug from that site (e.g. `react`, `figma`, `ps`). For a non-developer site you can repurpose them as "skills" / "tools", or hide a row entirely by setting it to an empty array (`languages: []`).

### Social buttons (`content.socials`)

Each button has a `name`, a `url`, and an `icon` slug. Supported icons (see `src/links/SocialLink.tsx`) include:

`discord`, `signal`, `github`, `gitlab`, `linkedin`, `instagram`, `tiktok`, `youtube`, `twitch`, `patreon`, `ko-fi`, `x` / `twitter`, `mastodon`, `bluesky`, `facebook`, `threads`, `reddit`, `pinterest`, `spotify`, `soundcloud`, `tumblr`, `telegram`, `whatsapp`, `email`, `website`.

An unknown slug falls back to a generic person icon. To add a platform, add one entry to the `iconMap` in `src/links/SocialLink.tsx`.

## Assets

Put your files in `public/` and reference them with a leading slash in `site.config.ts`:

- `content.badge.image` — the round portrait (e.g. `/phoenix.svg`). Click it on the page to flip to the QR code.
- `content.badge.qrCodeImage` — an SVG QR code (e.g. `/qrcode.svg`).
- Replace `public/og-phoenix.png` and the favicon to update social previews.

The **Open Graph / Twitter** preview tags are static HTML and live in `index.html` — update the `<title>` and `og:*` / `twitter:*` tags there for each instance.

## Tech stack

- [Vite](https://vitejs.dev/) + [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query) (fetches the QR code SVG)
- [Font Awesome](https://fontawesome.com/) brand icons
