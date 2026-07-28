import { create } from "zustand";
import type { LanguageCode } from "@/types/language.types";

interface LanguageState {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "es",
  setLanguage: (lang) => set({ language: lang }),
}));