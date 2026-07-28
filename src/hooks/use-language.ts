import { useLanguageStore } from "@/stores/language.store";

export function useLanguage() {
  return useLanguageStore((state) => state.language);
}