export const sidebarVariants = {
  default: {
    background:
      "var(--surface)",

    border:
      "1px solid var(--border)",
  },

  floating: {
    background:
      "var(--surface)",

    boxShadow:
      "var(--shadow-sidebar)",

    border:
      "none",
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