"use client";

import {
  Globe,
  ChevronDown,
} from "lucide-react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/dropdown";

import {
  languageConfig,
} from "@/config/language.config";

import { useLanguageStore } from "@/stores/language.store";

export default function LanguageSwitcher() {
  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);

  const currentLanguage =
    languageConfig.find((item) => item.code === language)!;

  function handleSelectLanguage(code: "en" | "es" | "pt") {
    setLanguage(code);
  }

  return (
    <Dropdown>
      <DropdownTrigger
        className="
          inline-flex
          items-center
          gap-2
          px-3
        "
      >
        <Globe className="h-4 w-4" />

        <span>
          {currentLanguage.shortLabel}
        </span>

        <ChevronDown className="h-4 w-4" />
      </DropdownTrigger>

      <DropdownContent
        align="end"
        className="
          min-w-36
          overflow-hidden
        "
      >
        {languageConfig.map((languageItem) => (
          <DropdownItem
            key={languageItem.code}
            onClick={() =>
              handleSelectLanguage(languageItem.code)
            }
          >
            <div
              className="
                flex
                w-full
                items-center
                justify-between
              "
            >
              <span>
                {languageItem.label}
              </span>

              {language === languageItem.code && (
                <span>✓</span>
              )}
            </div>
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}