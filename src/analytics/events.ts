import { analyticsConfig } from "@/config/analytics.config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  action:   string,
  category: string,
  label?:   string,
  value?:   number,
) {
  if (!analyticsConfig.enabled) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label:    label,
    value,
  });
}

export const Events = {
  ctaClick:      (label: string)  => trackEvent("cta_click",     "engagement", label),
  formSubmit:    ()               => trackEvent("form_submit",    "conversion"),
  whatsappClick: ()               => trackEvent("whatsapp_click", "engagement"),
  scrollDepth:   (depth: number)  => trackEvent("scroll_depth",  "engagement", undefined, depth),
  socialClick:   (platform: string) => trackEvent("social_click", "engagement", platform),
  navClick:      (label: string)  => trackEvent("nav_click",     "navigation", label),
  mobileMenuOpen: ()              => trackEvent("mobile_menu_open", "navigation"),
  bookCall:      ()               => trackEvent("book_call",     "conversion"),
};