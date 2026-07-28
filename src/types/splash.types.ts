export interface SplashContextValue {

  /**
   * Indicates whether the splash
   * screen is currently visible.
   */
  isVisible: boolean;

  /**
   * Displays the splash screen.
   */
  show: () => void;

  /**
   * Hides the splash screen.
   */
  hide: () => void;

}