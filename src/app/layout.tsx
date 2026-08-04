import "@/app/globals.css";

import type {
  Viewport,
} from "next";

import Navbar
  from "@/components/layout/navbar";

import Footer
  from "@/components/layout/footer";

import GoogleAnalytics
  from "@/analytics/google-analytics";

import WhatsAppButton
  from "@/components/ui/button/WhatsAppButton";

import AppProvider
  from "@/providers/app-provider";

import {
  baseMetadata,
} from "@/seo/metadata";

import {
  openGraphMetadata,
  twitterMetadata,
} from "@/seo/open-graph";

import {
  getSchemaScript,
} from "@/seo/schema";

export const metadata = {
  ...baseMetadata,
  openGraph: openGraphMetadata,
  twitter: twitterMetadata,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "{{PRIMARY_COLOR}}",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getSchemaScript(),
          }}
        />
      </head>

      <body className="antialiased min-h-screen">
        <GoogleAnalytics />

        <AppProvider>
          <Navbar />

          {children}

          <Footer />
        </AppProvider>

        <WhatsAppButton
          phone="573022016072"
          message="Hola, me gustaría obtener más información."
        />
      </body>
    </html>
  );
}