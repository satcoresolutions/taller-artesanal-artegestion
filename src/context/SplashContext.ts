"use client";

import {
  createContext,
} from "react";

import type {
  SplashContextValue,
} from "@/types/splash.types";

const SplashContext =
  createContext<SplashContextValue | null>(
    null,
  );

export default SplashContext;