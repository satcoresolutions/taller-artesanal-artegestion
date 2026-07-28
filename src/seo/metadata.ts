import type { Metadata } from "next";

import { siteConfig }  from "@/config/site.config";
import { assetsConfig } from "@/config/assets.config";
import { siteContent }  from "@/i18n/site.content";

const { description } = siteContent["es"];

export const baseMetadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url.startsWith("http")
      ? siteConfig.url
      : "http://localhost:3000"
  ),

  title: {
    default:  siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description,

  keywords: [
    "desarrollo web",
    "landing page",
    "Next.js",
    "SatCore Solutions",
  ],

  authors:   [{ name: siteConfig.name, url: siteConfig.url }],
  creator:   siteConfig.name,
  publisher: siteConfig.name,

  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:  true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon:  assetsConfig.favicon,
    apple: assetsConfig.appleTouch,
  },

  openGraph: {
    images: assetsConfig.ogImage,
  },

  twitter: {
    images: assetsConfig.twitterCard,
  },
};