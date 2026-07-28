import type {
  CSSProperties,
} from "react";

export type SplashLogoVariant =
  | "default";

export interface SplashLogoProps {

  /**
   * Visual variant.
   *
   * @default "default"
   */
  variant?: SplashLogoVariant;

  /**
   * Logo width.
   */
  width?: number | string;

  /**
   * Logo height.
   */
  height?: number | string;

  /**
   * Custom styles.
   */
  style?: CSSProperties;

}