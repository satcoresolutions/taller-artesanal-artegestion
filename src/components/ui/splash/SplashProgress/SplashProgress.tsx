"use client";

import {
  motion,
} from "framer-motion";

import type {
  FC,
} from "react";

import {
  splashProgressIndicator,
  splashProgressVariants,
} from "./SplashProgress.variants";

import type {
  SplashProgressProps,
} from "./SplashProgress.types";

const SplashProgress: FC<SplashProgressProps> = ({
  variant = "default",
  style,
}) => {

  return (

    <div
      style={{
        ...splashProgressVariants[variant],
        ...style,
      }}
    >

      <motion.div
        style={splashProgressIndicator}
        animate={{
          x: [
            "-120%",
            "350%",
          ],
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

    </div>

  );

};

export default SplashProgress;