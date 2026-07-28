import type {
  CSSProperties,
} from "react";

import type {
  SplashScreenVariant,
} from "./SplashScreen.types";

export const splashScreenVariants: Record<
  SplashScreenVariant,
  CSSProperties
> = {
  default: {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100dvh",

    padding: "2rem",

    background:
      "var(--color-background)",

    zIndex: 9999,

    overflow: "hidden",
  },

  surface: {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100dvh",

    padding: "2rem",

    background:
      "var(--color-surface)",

    zIndex: 9999,

    overflow: "hidden",
  },

  transparent: {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100dvh",

    padding: "2rem",

    background: "transparent",

    zIndex: 9999,

    overflow: "hidden",
  },

  glass: {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100dvh",

    padding: "2rem",

    background:
      "rgba(255,255,255,0.08)",

    backdropFilter:
      "blur(18px)",

    WebkitBackdropFilter:
      "blur(18px)",

    zIndex: 9999,

    overflow: "hidden",
  },

  hero: {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100dvh",

    padding: "2rem",

    background: `
      radial-gradient(
        circle at top,
        rgba(var(--color-primary-rgb), 0.12),
        transparent 60%
      ),
      var(--color-background)
    `,

    zIndex: 9999,

    overflow: "hidden",
  },
};