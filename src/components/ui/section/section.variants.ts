import type {
  CSSProperties,
} from "react";

import type {
  SectionVariant,
} from "./section.types";

export const sectionVariants: Record<
  SectionVariant,
  CSSProperties
> = {
  default: {
    background:
      "var(--color-background)",
  },

  surface: {
    background:
      "var(--color-surface)",
  },

  muted: {
    background:
      "var(--color-surface-secondary)",
  },

  glass: {
    background:
      "rgba(255,255,255,0.04)",

    backdropFilter:
      "blur(16px)",

    border:
      "1px solid rgba(255,255,255,0.08)",
  },

  hero: {
    background: `
      radial-gradient(
        circle at top,
        rgba(var(--color-primary-rgb), 0.12),
        transparent 60%
      ),
      var(--color-background)
    `,
  },

  accent: {
    background:
      "var(--color-primary)",
  },

  transparent: {
    background:
      "transparent",
  },
};