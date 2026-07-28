"use client";

import Button from "@/components/ui/button";

import { Events }
  from "@/analytics/events";

import {
  ctaConfig,
} from "@/config/cta.config";

interface HeroActionsProps {
  primary: {
    label: string;
  };

  secondary: {
    label: string;
  };
}

export default function HeroActions({
  primary,
  secondary,
}: HeroActionsProps) {
  return (
    <div
      className="
        mt-10
        flex
        flex-wrap
        gap-4
      "
    >
      <Button
        href={
          ctaConfig.hero.primaryAction.href
        }
        variant="gradient"
        onClick={() =>
          Events.ctaClick(
            "hero_primary",
          )
        }
      >
        {primary.label}
      </Button>

      <Button
        href={
          ctaConfig.hero.secondaryAction.href
        }
        variant="primary"
        onClick={() =>
          Events.ctaClick(
            "hero_secondary",
          )
        }
      >
        {secondary.label}
      </Button>
    </div>
  );
}