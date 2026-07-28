"use client";

import Button from "@/components/ui/button";

import { useLanguage } from "@/hooks/use-language";
import { Events } from "@/integrations/google/analytics";

import { ctaContent } from "@/i18n/cta.content";
import { ctaConfig } from "@/config/cta.config";

export default function CTAActions() {
  const lang = useLanguage();

  const content = ctaContent[lang];

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button
        href={ctaConfig.section.primaryAction.href}
        variant="gradient"
        onClick={() =>
          Events.ctaClick(content.section.primaryAction.label)
        }
      >
        {content.section.primaryAction.label}
      </Button>

      <Button
        href={ctaConfig.section.secondaryAction.href}
        variant="subtle"
        onClick={() =>
          Events.ctaClick(content.section.secondaryAction.label)
        }
      >
        {content.section.secondaryAction.label}
      </Button>
    </div>
  );
}