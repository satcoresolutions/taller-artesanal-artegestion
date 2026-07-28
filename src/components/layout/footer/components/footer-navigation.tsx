"use client";

import Link from "@/components/ui/nav-link";
import Section from "@/components/ui/section";

import { navigationConfig } from "@/config/navigation.config";
import { navigationContent } from "@/i18n/navigation.content";
import { useLanguage } from "@/hooks/use-language";

export default function FooterNavigation() {
  const lang = useLanguage();
  const t = navigationContent[lang];

  return (
    <Section spacing="none" className="space-y-4">
      {/* TITLE */}
      <h3 className="text-text-muted">
        {t.contact}
      </h3>

      {/* LINKS */}
      <div className="flex flex-col gap-2">
        {navigationConfig.footer.map((item) => (
          <Link key={item.href} href={item.href}>
            {t[item.key]}
          </Link>
        ))}
      </div>
    </Section>
  );
}