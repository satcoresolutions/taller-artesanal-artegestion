import type {
  CSSProperties,
} from "react";

export const imageVariants = {
  default: {},

  rounded: {
    borderRadius:
      "var(--radius-lg)",
  },

  card: {
    borderRadius:
      "var(--radius-xl)",

    border:
      "1px solid var(--color-border)",
  },

  product: {
    borderRadius:
      "var(--radius-2xl)",

    border:
      "1px solid color-mix(in srgb, var(--color-border) 70%, transparent)",

    boxShadow:
      "var(--shadow-xl)",
  },

  hero: {
    borderRadius:
      "var(--radius-2xl)",
  },
} satisfies Record<
  string,
  CSSProperties
>;