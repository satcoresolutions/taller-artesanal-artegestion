import { siteConfig }    from "@/config/site.config";
import { companyConfig } from "@/config/company.config";
import { assetsConfig }  from "@/config/assets.config";
import { siteContent }   from "@/i18n/site.content";

const content = siteContent["es"]; // o dinámico con lang

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type":    "Organization",
  name:       companyConfig.name,
  url:        siteConfig.url,
  logo:       assetsConfig.logoPrimary,
  contactPoint: {
    "@type":             "ContactPoint",
    telephone:           companyConfig.whatsapp,
    contactType:         "customer service",
    availableLanguage:   "Spanish",
  },
};

export const websiteSchema = {
  "@context":  "https://schema.org",
  "@type":     "WebSite",
  name:        siteConfig.name,
  url:         siteConfig.url,
  description: content.description,
};

export function getSchemaScript() {
  return JSON.stringify([
    organizationSchema,
    websiteSchema,
  ]);
}