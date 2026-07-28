"use client";

import Section from "@/components/ui/section";
import { footerContent } from "../content/footer.content";
import { companyConfig } from "@/config/company.config";
import { useLanguage } from "@/hooks/use-language";

export default function FooterMap() {
  const lang = useLanguage();

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    companyConfig.address.query
  )}&output=embed`;

  return (
    <Section spacing="none" className="space-y-4">
      {/* TITLE */}
      <h3 className="text-text-muted">
        {footerContent[lang].sections.map.title}
      </h3>

      {/* MAP */}
      <div className="overflow-hidden rounded-xl border border-surface-secondary bg-surface">
        <iframe
          src={mapUrl}
          title={companyConfig.address.label}
          className="h-45 w-full"
          loading="lazy"
        />
      </div>
    </Section>
  );
}