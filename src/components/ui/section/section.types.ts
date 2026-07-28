import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type SectionVariant =
  | "default"
  | "surface"
  | "muted"
  | "glass"
  | "hero"
  | "accent"
  | "transparent";

export type SectionSpacing =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  variant?: SectionVariant;

  spacing?: SectionSpacing;

  className?: string;

  style?: CSSProperties;
}