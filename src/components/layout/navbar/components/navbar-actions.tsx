"use client";

import Button from "@/components/ui/button";
import { ctaConfig } from "@/config/cta.config";
import { ctaContent } from "@/i18n/cta.content";
import { useLanguage } from "@/hooks/use-language";
import { Events } from "@/integrations/google/analytics";

export default function NavbarActions() {
  const lang = useLanguage();
  const t = ctaContent[lang];

  return (
    <Button
      href={ctaConfig.navbar.href}
      variant="gradient"
      onClick={() => Events.ctaClick("navbar_cta")}
    >
      {t.navbar.label}
    </Button>
  );
}