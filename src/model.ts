// -----------------------------------------------------------------------------
// Data model
// -----------------------------------------------------------------------------
// These interfaces describe the shape of the site configuration and content.
// You normally don't need to edit this file — edit `src/site.config.ts` instead.
// -----------------------------------------------------------------------------

export interface Model {
  badge: Badge;
  bio: Bio;
  socials: Social[];
}

export interface Badge {
  image: string;
  qrCodeImage: string;
}

export interface Bio {
  name: string;
  tag: string;
  bio: string;
  languages: ToolBadge[];
  tools: ToolBadge[];
}

export interface ToolBadge {
  icon: string;
  url: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export enum BadgeState {
  PICTURE,
  QR_CODE,
}

/**
 * Color theme for an instance. Every value is a CSS color string (hex, rgb,
 * hsl, ...). These are applied at runtime as CSS variables, so changing them
 * recolors the whole site. See `applyTheme` in `src/theme.ts`.
 */
export interface Theme {
  /** Background of panels / cards (default: dark slate). */
  surface: string;
  /** Accent color used for gradients, highlights and hovers. */
  accent: string;
  /** Primary text color. */
  text: string;
  /** Secondary / muted text color (e.g. the footer). */
  textMuted: string;
}

/** Page metadata used for the browser tab title and description. */
export interface Meta {
  /** Browser tab title. */
  title: string;
  /** Short description of the site. */
  description: string;
}

/** Footer configuration. */
export interface FooterConfig {
  /** Name shown in the copyright line. */
  name: string;
  /** Year shown in the copyright line. */
  year: number;
  /** URL the copyright name links to. */
  url: string;
  /** "Source code" link target shown on the right of the footer. */
  repoUrl: string;
}

/** The complete configuration for a single instance of this template. */
export interface SiteConfig {
  meta: Meta;
  theme: Theme;
  footer: FooterConfig;
  content: Model;
}

import { siteConfig } from "./site.config.ts";

export const getModel = (): Model => {
  return siteConfig.content;
};
