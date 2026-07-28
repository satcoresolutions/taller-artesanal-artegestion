export const cardVariants = {
  default: {
    background:
      "var(--color-surface)",

    border:
      "1px solid transparent",
  },

  outlined: {
    background:
      "var(--color-surface)",

    border: `
    1px solid
    color-mix(
      in srgb,
      var(--color-text-muted) 25%,
      transparent
    )
  `,
  },

  glass: {
    background:
      "color-mix(in srgb, var(--color-surface) 60%, transparent)",

    border: `
    1px solid
    color-mix(
      in srgb,
      white 12%,
      transparent
    )
  `,

    backdropFilter:
      "blur(24px)",

    WebkitBackdropFilter:
      "blur(24px)",
  },

  featured: {
    background: `
    linear-gradient(
      135deg,
      color-mix(
        in srgb,
        var(--color-primary) 18%,
        var(--color-surface)
      ),
      var(--color-surface)
    )
  `,

    border: `
    1px solid
    color-mix(
      in srgb,
      var(--color-primary) 35%,
      transparent
    )
  `,

    boxShadow: `
    0 16px 40px
    color-mix(
      in srgb,
      var(--color-primary) 18%,
      transparent
    )
  `,
  },

  premium: {
    background: `
    linear-gradient(
      145deg,
      color-mix(
        in srgb,
        var(--color-accent) 20%,
        var(--color-surface)
      ),
      var(--color-surface)
    )
  `,

    border: `
    1px solid
    color-mix(
      in srgb,
      var(--color-accent) 40%,
      transparent
    )
  `,

    boxShadow: `
    0 20px 50px
    color-mix(
      in srgb,
      var(--color-accent) 20%,
      transparent
    )
  `,
  },
} as const;