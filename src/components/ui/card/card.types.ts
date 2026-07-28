import type {
  HTMLAttributes,
} from "react";

export type CardVariant =
  | "default"
  | "outlined"
  | "glass"
  | "featured"
  | "premium"

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}