import type {
  CSSProperties,
} from "react";

import type {
  SplashMessageVariant,
} from "./SplashMessage.types";

export const splashMessageVariants: Record<
  SplashMessageVariant,
  CSSProperties
> = {
  default: {

    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    justifyContent: "center",

    gap: "0.5rem",

    textAlign: "center",

    userSelect: "none",

    color: "var(--color-foreground)",

  },
};