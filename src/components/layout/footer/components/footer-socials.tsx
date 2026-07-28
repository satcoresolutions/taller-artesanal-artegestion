"use client";

import Link from "next/link";

import Section from "@/components/ui/section";
import Icon from "@/components/ui/icon";
import { socialsConfig } from "@/config/socials.config";
import { footerContent } from "../content/footer.content";
import { Events } from "@/integrations/google/analytics";
import { useLanguage } from "@/hooks/use-language";

const socials = Object.entries(socialsConfig).map(([key, value]) => ({
  key,
  href: value.href,
  icon: value.icon,
}));

export default function FooterSocials() {
  const lang = useLanguage();
  const content = footerContent[lang];

  return (
    <Section spacing="none" className="space-y-4">
      {/* TITLE */}
      <h3 className="text-text-muted">
        {content.sections.socials.title}
      </h3>

      {/* SOCIALS */}
      <div className="flex items-center gap-2">
        {socials.map((social) => (
          <Link
            key={social.key}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Events.socialClick(social.key)}
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-md
              p-2
              transition-all
              hover:bg-surface
              hover:scale-105
              active:scale-95
            "
          >
            <Icon
              src={social.icon}
              alt={social.key}
              size="sm"
              variant="social"
              className="group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}