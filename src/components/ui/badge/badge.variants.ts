import type {
  CSSProperties,
} from "react";

import type {
  BadgeVariant,
} from "./badge.types";

export const badgeVariants: Record<
  BadgeVariant,
  CSSProperties
> = {
  default: {
    background:
      "var(--color-surface)",

    color:
      "var(--text-primary)",

    border:
      "1px solid var(--color-border)",
  },

  primary: {
    background:
      "var(--color-primary)",

    color:
      "var(--color-primary-foreground)",
  },

  secondary: {
    background:
      "var(--color-surface-secondary)",

    color:
      "var(--text-primary)",
  },

  glass: {
    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter:
      "blur(12px)",

    color:
      "var(--text-primary)",
  },

  success: {
    background:
      "rgba(34,197,94,0.12)",

    border:
      "1px solid rgba(34,197,94,0.25)",

    color:
      "rgb(34,197,94)",
  },

  warning: {
    background:
      "rgba(245,158,11,0.12)",

    border:
      "1px solid rgba(245,158,11,0.25)",

    color:
      "rgb(245,158,11)",
  },

  danger: {
    background:
      "rgba(239,68,68,0.12)",

    border:
      "1px solid rgba(239,68,68,0.25)",

    color:
      "rgb(239,68,68)",
  },
};