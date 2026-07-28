"use client";

import Card from "@/components/ui/card";
import { ctaContentContact } from "../content/cta.content";
import { useLanguage } from "@/hooks/use-language";

export default function CTACard() {
  const lang = useLanguage();
  const content = ctaContentContact[lang];

  if (!content.microcopy) {
    return null;
  }

  return (
    <Card
      variant="glass"
      className="
        mt-8
        p-4
      "
    >
      <p
        className="text-sm"
        style={{
          color: "var(--text-muted)",
        }}
      >
        {content.microcopy}
      </p>
    </Card>
  );
}