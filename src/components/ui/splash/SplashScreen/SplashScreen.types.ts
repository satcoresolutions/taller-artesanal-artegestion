import type {
  CSSProperties,
  ReactNode,
} from "react";

export type SplashScreenVariant =
  | "default"
  | "surface"
  | "transparent"
  | "glass"
  | "hero";

export interface SplashScreenProps {

  /**
   * Determines whether the splash screen
   * should be rendered.
   */
  isVisible: boolean;

  /**
   * Visual variant.
   *
   * @default "default"
   */
  variant?: SplashScreenVariant;

  /**
   * Allows overriding or extending the
   * computed styles.
   */
  style?: CSSProperties;

  /**
   * Splash content.
   */
  children?: ReactNode;

}