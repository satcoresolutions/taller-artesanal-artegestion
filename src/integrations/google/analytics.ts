import { analyticsConfig } from "@/config/analytics.config";

// ─── Tipos ────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void; // ← opcional para ser consistente
  }
}

export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

// ─── Guard helpers ────────────────────────────────────────────────────────────

function isReady(): boolean {
  return (
    analyticsConfig.enabled &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

// ─── Wrapper seguro ───────────────────────────────────────────────────────────

/** Llama a gtag solo si existe. Evita "cannot invoke possibly undefined". */
function gtag(...args: unknown[]): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

// ─── Inicialización ───────────────────────────────────────────────────────────

export function initAnalytics(): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

// ─── Page views ───────────────────────────────────────────────────────────────

export function trackPageView(url: string): void {
  if (!isReady()) return;

  gtag("config", analyticsConfig.googleAnalyticsId, {
    page_path: url,
  });
}

// ─── Evento genérico ──────────────────────────────────────────────────────────

export function trackEvent(action: string, params?: GtagEventParams): void {
  if (!isReady()) return;

  gtag("event", action, params ?? {});
}

// ─── Eventos predefinidos ─────────────────────────────────────────────────────

export const Events = {


  ctaClick: (label: string) =>
    trackEvent("cta_click", {
      event_category: "engagement",
      event_label: label,
    }),

  whatsappClick: () =>
    trackEvent("whatsapp_click", {
      event_category: "engagement",
      event_label: "floating_button",
    }),

  scrollDepth: (depth: number) =>
    trackEvent("scroll_depth", {
      event_category: "engagement",
      value: depth,
    }),

  mobileMenuOpen: () =>
    trackEvent("mobile_menu_open", {
      event_category: "navigation",
    }),

  formSubmit: (formId?: string) =>
    trackEvent("form_submit", {
      event_category: "conversion",
      event_label: formId,
    }),

  bookCall: () =>
    trackEvent("book_call", {
      event_category: "conversion",
      event_label: "cta",
    }),

  navClick: (label: string) =>
    trackEvent("nav_click", {
      event_category: "navigation",
      event_label: label,
    }),

  socialClick: (platform: string) =>
    trackEvent("social_click", {
      event_category: "engagement",
      event_label: platform,
    }),

} as const;