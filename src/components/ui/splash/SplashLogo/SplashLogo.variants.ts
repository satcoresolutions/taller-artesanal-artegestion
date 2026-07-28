import type {
  CSSProperties,
} from "react";

import type {
  SplashLogoVariant,
} from "./SplashLogo.types";

export const splashLogoVariants: Record<
  SplashLogoVariant,
  CSSProperties
> = {
  default: {
    objectFit: "contain",
    userSelect: "none",
  },
};