import type { CSSProperties } from "react";

export type DrawerVariant =
  | "default"
  | "surface"
  | "glass"
  | "secondary"
  | "transparent";

export const drawerVariants: Record<
  DrawerVariant,
  CSSProperties
> = {
  default: {
    background: "var(--color-background)",
    borderLeft: "1px solid var(--glass-border)",
    color: "var(--color-text-primary)",
  },

  surface: {
    background: "var(--color-surface)",
    borderLeft: "1px solid var(--glass-border)",
    color: "var(--color-text-primary)",
  },

  secondary: {
    background: "var(--color-surface-secondary)",
    borderLeft: "1px solid var(--glass-border)",
    color: "var(--color-text-primary)",
  },

  glass: {
    background: "color-mix(in srgb, var(--color-surface) 70%, transparent)",
    backdropFilter: "blur(16px)",
    borderLeft: "1px solid var(--glass-border)",
    color: "var(--color-text-primary)",
  },

  transparent: {
    background: "transparent",
    color: "var(--color-text-primary)",
  },
};