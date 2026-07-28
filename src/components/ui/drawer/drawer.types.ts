import type {
  HTMLAttributes,
  ReactNode,
  CSSProperties,
} from "react";

import type { DrawerVariant } from "./drawer.variants";

export interface DrawerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;

  variant?: DrawerVariant;

  className?: string;

  style?: CSSProperties;
}