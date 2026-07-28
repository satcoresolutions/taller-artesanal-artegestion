import type {
  ReactNode,
} from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "subtle"
  | "ghost"
  | "outline"
  | "glass"
  | "gradient";

export interface ButtonProps {
  children: ReactNode;

  href?: string;

  variant?: ButtonVariant;

  className?: string;

  disabled?: boolean;

  onClick?: () => void;
}