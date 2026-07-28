export type LanguageCode = "en" | "es" | "pt";

export interface Language {
  code: LanguageCode; 

  label: string;

  shortLabel: string;
}