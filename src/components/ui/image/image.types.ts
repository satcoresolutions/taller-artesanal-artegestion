import type {
  CSSProperties,
} from "react";

export interface ImageProps {
  src: string;

  alt: string;

  variant?:
    | "default"
    | "rounded"
    | "card"
    | "product"
    | "hero";

  priority?: boolean;

  fill?: boolean;

  preview?: boolean;

  className?: string;

  style?: CSSProperties;

  width?: number;

  height?: number;
}