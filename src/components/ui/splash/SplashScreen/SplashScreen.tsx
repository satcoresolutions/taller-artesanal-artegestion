"use client";

import type {
  FC,
} from "react";

import {
  splashScreenVariants,
} from "./SplashScreen.variants";

import type {
  SplashScreenProps,
} from "./SplashScreen.types";

const SplashScreen: FC<SplashScreenProps> = ({
  isVisible,
  variant = "default",
  style,
  children,
}) => {

  if (!isVisible) {
    return null;
  }

  return (

    <div
      style={{
        ...splashScreenVariants[variant],
        ...style,
      }}
    >

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "480px",
        }}
      >
        {children}
      </div>

    </div>

  );

};

export default SplashScreen;