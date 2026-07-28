"use client";

import "react-photo-view/dist/react-photo-view.css";

import type {
  ReactNode,
} from "react";

import {
  PhotoProvider,
} from "react-photo-view";

import {
  ThemeProvider,
} from "./theme-provider";

import SplashProvider
  from "./splash-provider";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({
  children,
}: AppProviderProps) {
  return (
    <ThemeProvider>

      <SplashProvider>

        <PhotoProvider
          maskOpacity={0.9}
        >
          {children}
        </PhotoProvider>

      </SplashProvider>

    </ThemeProvider>
  );
}