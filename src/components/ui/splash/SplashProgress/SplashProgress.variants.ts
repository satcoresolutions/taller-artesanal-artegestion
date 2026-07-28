import type {
    CSSProperties,
} from "react";

import type {
    SplashProgressVariant,
} from "./SplashProgress.types";

export const splashProgressVariants: Record<
    SplashProgressVariant,
    CSSProperties
> = {
    default: {

        position: "relative",

        overflow: "hidden",

        width: "240px",

        height: "6px",

        borderRadius: "999px",

        background:
            "var(--color-surface-secondary)",


    },
};

export const splashProgressIndicator: CSSProperties = {

    position: "absolute",

    inset: 0,

    width: "30%",

    borderRadius: "999px",

    background: `
linear-gradient(
    90deg,
    transparent,
    var(--color-primary),
    transparent
)
`,

};