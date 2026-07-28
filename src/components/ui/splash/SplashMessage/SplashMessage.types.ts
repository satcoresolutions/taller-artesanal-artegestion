import type {
  CSSProperties,
} from "react";

export type SplashMessageVariant =
  | "default";

export interface SplashMessageProps {

  /**
   * Visual variant.
   *
   * @default "default"
   */
  variant?: SplashMessageVariant;

  /**
   * Loading message.
   */
  message?: string;

  /**
   * Custom styles.
   */
  style?: CSSProperties;

}