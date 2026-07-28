export const modalVariants = {
  default: {
    background:
      "var(--surface)",

    border:
      "1px solid var(--border)",
  },

  elevated: {
    background:
      "var(--surface)",

    border:
      "none",

    boxShadow:
      "var(--shadow-modal)",
  },

  glass: {
    background:
      "color-mix(in srgb, var(--surface) 70%, transparent)",

    border:
      "1px solid var(--glass-border)",

    backdropFilter:
      "blur(16px)",
  },
} as const;