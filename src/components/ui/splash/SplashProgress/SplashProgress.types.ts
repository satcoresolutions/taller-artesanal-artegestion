import type {
  CSSProperties,
} from "react";

export type SplashProgressVariant =
  | "default";

export interface SplashProgressProps {

  /**
   * Visual variant.
   *
   * @default "default"
   */
  variant?: SplashProgressVariant;

  /**
   * Progress value.
   *
   * Undefined means indeterminate.
   */
  value?: number;

  /**
   * Custom styles.
   */
  style?: CSSProperties;

}