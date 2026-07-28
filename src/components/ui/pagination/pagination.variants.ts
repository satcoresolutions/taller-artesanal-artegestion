export const paginationVariants = {
  default: {
    background: "transparent",
  },

  outlined: {
    background: "transparent",
    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 15%, transparent)",
  },

  subtle: {
    background:
      "color-mix(in srgb, var(--color-surface) 94%, var(--color-background))",
  },

  floating: {
    background: "var(--color-surface)",
    boxShadow: `
      0 4px 12px rgba(0,0,0,.04),
      0 16px 40px rgba(0,0,0,.08)
    `,
  },
} as const;

export const paginationButtonStyles = {
  base: `
    min-width: 36px;
    height: 36px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: var(--radius-badge);

    font-size: 14px;

    transition: all 0.2s ease;
  `,

  default: `
    background: transparent;
    color: var(--color-text-muted);
  `,

  active: `
    background: var(--color-primary);
    color: white;
  `,

  hover: `
    &:hover {
      background: color-mix(
        in srgb,
        var(--color-primary) 10%,
        transparent
      );
    }
  `,
};