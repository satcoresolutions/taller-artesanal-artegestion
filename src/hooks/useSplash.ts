"use client";

import {
  useContext,
} from "react";

import SplashContext
  from "@/context/SplashContext";

import type {
  SplashContextValue,
} from "@/types/splash.types";

const useSplash = (): SplashContextValue => {

  const context =
    useContext(SplashContext);

  if (!context) {

    throw new Error(
      "useSplash must be used within SplashProvider.",
    );

  }

  return context;

};

export default useSplash;