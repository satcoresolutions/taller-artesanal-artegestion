import type { CSSProperties } from "react";

export type IconSize =
  | "xs"   // 16
  | "sm"   // 20
  | "md"   // 24
  | "lg"   // 32
  | "xl"   // 40
  | "2xl"; // 48

export type IconVariant =
  | "default"
  | "muted"
  | "social"
  | "brand";

export interface IconProps {
  src: string;
  alt: string;
  size?: IconSize | number;
  variant?: IconVariant;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}