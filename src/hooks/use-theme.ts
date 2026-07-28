// hooks/use-theme.ts

"use client";

import {
  useEffect,
  useState,
} from "react";

type ThemeMode =
  | "light"
  | "dark";

export function useTheme() {
  const [theme, setTheme] =
    useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "theme",
      ) as ThemeMode | null;

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme,
    );

    localStorage.setItem(
      "theme",
      theme,
    );
  }, [theme]);

  function toggleTheme() {
    setTheme((current) =>
      current === "light"
        ? "dark"
        : "light",
    );
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}