"use client";

import Script from "next/script";
import { analyticsConfig } from "@/config/analytics.config";

export default function GoogleAnalytics() {
  if (!analyticsConfig.enabled) return null;
  if (!analyticsConfig.googleAnalyticsId.startsWith("G-")) return null;

  const id = analyticsConfig.googleAnalyticsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}