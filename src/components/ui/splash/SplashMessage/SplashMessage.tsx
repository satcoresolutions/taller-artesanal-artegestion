"use client";

import type {
  FC,
} from "react";

import {
  companyConfig,
} from "@/config/company.config";

import {
  siteConfig,
} from "@/config/site.config";

import {
  splashMessageVariants,
} from "./SplashMessage.variants";

import type {
  SplashMessageProps,
} from "./SplashMessage.types";

const SplashMessage: FC<SplashMessageProps> = ({
  variant = "default",
  style,
}) => {

  return (

    <div
      style={{
        ...splashMessageVariants[variant],
        ...style,
      }}
    >

      <h1
        style={{
          margin: 0,

          background: `
  linear-gradient(
    135deg,
    var(--secondary) 0%,
    var(--secondary) 50%,
    var(--background) 50%,
    var(--background) 100%
  )
`,

          backgroundClip: "text",
          WebkitBackgroundClip: "text",

          color: "transparent",
          WebkitTextFillColor: "transparent",

          fontSize: "3.5rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1,
          fontFamily: "'Inter', sans-serif",

          WebkitTextStroke: "0.3px #FFFFFF",
        }}
      >
        {companyConfig.name}
      </h1>

      <p
        style={{
          margin: 0,

          fontFamily: "'Inter', sans-serif",

          fontSize: "1.8rem",

          fontWeight: 800,

          letterSpacing: "0.25em",

          textTransform: "uppercase",

          color: "var(--primary)",

          WebkitTextStroke: "1px var(--secondary)",

          textShadow: `
      0px 2px 4px rgba(37,37,37,.20)
    `,
        }}
      >
        {siteConfig.name}
      </p>

    </div>

  );

};

export default SplashMessage;