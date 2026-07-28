"use client";

import Section from "@/components/ui/section";
import Link from "@/components/ui/nav-link";

import { navigationConfig } from "@/config/navigation.config";
import { useLanguage } from "@/hooks/use-language";
import { navigationContent } from "@/i18n/navigation.content";

export default function FooterLegal() {
  const lang = useLanguage();
  const t = navigationContent[lang];

  return (
    <Section spacing="none" className="space-y-4">
      {/* TITLE */}
      <h3 className="text-text-muted">
        {t.privacy ? "Legal" : "Legal"}
      </h3>

      {/* LINKS */}
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {navigationConfig.legal.map((item) => (
          <Link key={item.href} href={item.href}>
            {t[item.key]}
          </Link>
        ))}
      </div>
    </Section>
  );
}