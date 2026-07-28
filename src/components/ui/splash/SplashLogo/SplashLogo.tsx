"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import type {
  FC,
} from "react";

import {
  assetsConfig,
} from "@/config/assets.config";

import {
  splashLogoVariants,
} from "./SplashLogo.variants";

import type {
  SplashLogoProps,
} from "./SplashLogo.types";

const SplashLogo: FC<SplashLogoProps> = ({
  variant = "default",
  width = 220,
  height = 220,
  style,
}) => {

  return (

    <motion.div
      animate={{
        x: [-12, 12, -12],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      <Image
        src={assetsConfig.logoPrimary}
        alt="IPSA Arte Gestión"
        width={Number(width)}
        height={Number(height)}
        priority
        draggable={false}
        style={{
          ...splashLogoVariants[variant],
          width,
          height,
          ...style,
        }}
      />

    </motion.div>

  );

};

export default SplashLogo;