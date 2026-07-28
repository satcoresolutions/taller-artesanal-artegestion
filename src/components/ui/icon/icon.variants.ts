import type { CSSProperties } from "react";
import type { IconVariant, IconSize } from "./icon.types";

export const iconSizes: Record<IconSize, number> = {
  xs:  16,
  sm:  20,
  md:  24,
  lg:  32,
  xl:  40,
  "2xl": 48,
};

export const iconVariants: Record<IconVariant, CSSProperties> = {
  default: {
    opacity: 1,
  },

  muted: {
    opacity: 0.5,
  },

  social: {
    opacity: 0.7,
    transition: "opacity 150ms ease",
  },

  brand: {
    opacity: 1,
    flexShrink: 0,
  },
};