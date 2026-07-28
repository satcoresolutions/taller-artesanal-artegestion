import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

export type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "glass"
  | "success"
  | "warning"
  | "danger";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;

  variant?: BadgeVariant;

  className?: string;

  style?: CSSProperties;
}