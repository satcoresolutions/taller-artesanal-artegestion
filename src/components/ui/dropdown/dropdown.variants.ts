export const dropdownVariants = {
  default: {
    background:
      "var(--surface)",

    border:
      "1px solid var(--border)",
  },

  floating: {
    background:
      "var(--surface)",

    border:
      "none",

    boxShadow:
      "var(--shadow-dropdown)",
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