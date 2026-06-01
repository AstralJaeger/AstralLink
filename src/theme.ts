// -----------------------------------------------------------------------------
// Theme application
// -----------------------------------------------------------------------------
// Maps the `theme` colors from `site.config.ts` onto the CSS variables that the
// Tailwind color tokens (surface / accent / fg / muted) read from. This is why
// editing the four colors in the config recolors the entire site — no rebuild
// of a color palette required.
// -----------------------------------------------------------------------------

import { Theme } from "./model.ts";

export const applyTheme = (theme: Theme): void => {
  const root = document.documentElement;
  root.style.setProperty("--color-surface", theme.surface);
  root.style.setProperty("--color-accent", theme.accent);
  root.style.setProperty("--color-fg", theme.text);
  root.style.setProperty("--color-muted", theme.textMuted);
};
