// =============================================================================
//  SITE CONFIGURATION
// =============================================================================
//
//  This is the ONLY file you need to edit to spin up a new instance of this
//  template (a personal page, a creative/cosplay site, a band page, ...).
//
//  Edit the values below, drop your images into `public/`, then run the app.
//  Nothing else in `src/` needs to change for a basic reconfiguration.
//
//  Sections:
//    1. meta    – browser tab title & description
//    2. theme   – the colors of the whole site (see `src/theme.ts`)
//    3. footer  – copyright + source-code link
//    4. content – your portrait, bio, skill/interest icons and social links
//
// =============================================================================

import { SiteConfig } from "./model.ts";

export const siteConfig: SiteConfig = {
  // ---------------------------------------------------------------------------
  // 1. META — shown in the browser tab. (Open Graph / social-preview tags live
  //    in `index.html`; update those there for an instance.)
  // ---------------------------------------------------------------------------
  meta: {
    title: "AstralJaeger.dev",
    description:
      "DevOps specialist and chaotic evil software developer by passion",
  },

  // ---------------------------------------------------------------------------
  // 2. THEME — the four colors that define the whole look of the site.
  //
  //    Any valid CSS color works (hex, rgb(), hsl(), ...). Changing these is
  //    all you need to do to recolor every panel, gradient, hover and text.
  //
  //    Example "cosplay pink" palette:
  //      surface:   "#2a1a2e",
  //      accent:    "#ff5fa2",
  //      text:      "#f5e6f0",
  //      textMuted: "#e9d5e0",
  // ---------------------------------------------------------------------------
  theme: {
    surface: "#374151", // panels / cards background
    accent: "#f99c1c", // gradients, highlights, hovers
    text: "#d1d5db", // primary text
    textMuted: "#e5e7eb", // secondary / footer text
  },

  // ---------------------------------------------------------------------------
  // 3. FOOTER
  // ---------------------------------------------------------------------------
  footer: {
    name: "AstralJaeger™",
    year: 2023,
    url: "https://astraljaeger.dev/?q=footer",
    repoUrl: "https://github.com/AstralJaeger/LinkBeam",
  },

  // ---------------------------------------------------------------------------
  // 4. CONTENT
  // ---------------------------------------------------------------------------
  content: {
    // The round portrait at the top. Click it on the page to flip to a QR code.
    // Put your files in `public/` and reference them with a leading slash.
    badge: {
      image: "/phoenix.svg",
      qrCodeImage: "/qrcode.svg",
    },

    bio: {
      name: "Felix Hillebrand",
      tag: "@AstralJaeger",
      bio: "DevOps specialist and chaotic evil software developer by passion",

      // The two icon rows below use https://skillicons.dev — set each `icon`
      // to a slug from https://skillicons.dev/ (e.g. "react", "figma", "ps").
      // For a non-developer site, repurpose these as "skills" and "tools",
      // or simply set them to empty arrays: `languages: []`.
      languages: [
        { icon: "rust", url: "https://www.rust-lang.org/" },
        { icon: "go", url: "https://go.dev/" },
        { icon: "java", url: "https://dev.java/" },
        { icon: "ts", url: "https://www.typescriptlang.org/" },
        { icon: "nodejs", url: "https://nodejs.org/en" },
        { icon: "python", url: "https://www.python.org/" },
      ],
      tools: [
        { icon: "docker", url: "https://www.docker.com/" },
        { icon: "kubernetes", url: "https://kubernetes.io/" },
        {
          icon: "openshift",
          url: "https://www.redhat.com/de/technologies/cloud-computing/openshift",
        },
        { icon: "prometheus", url: "https://prometheus.io/" },
        { icon: "rabbitmq", url: "https://www.rabbitmq.com/" },
        { icon: "bash", url: "https://www.gnu.org/software/bash/" },
        {
          icon: "powershell",
          url: "https://learn.microsoft.com/en-us/powershell/",
        },
        { icon: "aws", url: "https://aws.amazon.com/" },
        { icon: "azure", url: "https://azure.microsoft.com/de-de" },
        { icon: "firebase", url: "https://firebase.google.com/" },
      ],
    },

    // The list of buttons. `icon` selects which brand logo is shown — see the
    // supported list in `src/links/SocialLink.tsx` (discord, github, instagram,
    // tiktok, youtube, twitch, patreon, ko-fi, x, bluesky, mastodon, ...).
    // Unknown icons fall back to a generic person icon.
    socials: [
      {
        name: "Discord",
        url: "https://discord.com/users/299862332530753537",
        icon: "discord",
      },
      {
        name: "Signal",
        url: "https://signal.me/#eu/qlIwDnZTYz4n9SGmwLBf0p80p37Lz_nkkHZmYTDEEtnJtv8lW89M_IzzU567afal",
        icon: "signal",
      },
      {
        name: "GitHub",
        url: "https://github.com/AstralJaeger",
        icon: "github",
      },
      {
        name: "GitLab",
        url: "https://gitlab.com/AstralJaeger",
        icon: "gitlab",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/felix-hillebrand-4a194a215/",
        icon: "linkedin",
      },
    ],
  },
};
