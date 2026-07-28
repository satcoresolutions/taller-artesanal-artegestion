// components/theme-mode-toggle.tsx

"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import {
  useThemeContext,
} from "@/providers/theme-provider";

export default function ThemeModeToggle() {
  const {
    theme,
    toggleTheme,
  } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        transition-all
        duration-300
        hover:scale-105
      "
      style={{
        borderColor:
          "var(--glass-border)",
      }}
    >
      {theme === "light" ? (
        <Moon
          size={18}
        />
      ) : (
        <Sun
          size={18}
        />
      )}
    </button>
  );
}