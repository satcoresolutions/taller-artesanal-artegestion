"use client";

import Button from "@/components/ui/button";

import { Events }
  from "@/analytics/events";

import type {
  HeroContent,
} from "../types/hero.types";

type HeroActionsProps = Pick<
  HeroContent,
  "primaryAction" | "secondaryAction"
>;

export default function HeroActions({
  primaryAction,
  secondaryAction,
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
        href={primaryAction.href}
        variant="gradient"
        onClick={() =>
          Events.ctaClick(
            "hero_primary",
          )
        }
      >
        {primaryAction.label}
      </Button>

      <Button
        href={secondaryAction.href}
        variant="primary"
        onClick={() =>
          Events.ctaClick(
            "hero_secondary",
          )
        }
      >
        {secondaryAction.label}
      </Button>
    </div>
  );
}