import { analyticsConfig } from "@/config/analytics.config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackPageView(url: string) {
  if (!analyticsConfig.enabled) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("config", analyticsConfig.googleAnalyticsId, {
    page_path: url,
  });
}