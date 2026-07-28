"use client";

import HeroBadge
  from "./hero-badge";

import HeroActions
  from "./hero-actions";

import { heroContent }
  from "../content/hero.content";

import { ctaContent }
  from "@/i18n/cta.content";

import { useLanguage }
  from "@/hooks/use-language";

export default function HeroContent() {
  const lang =
    useLanguage();

  const content =
    heroContent[lang];

  const cta =
    ctaContent[lang].hero;

  return (
    <div
      className="
        flex
        flex-col
      "
    >
      <HeroBadge
        label={content.badge}
      />

      <h1
        className="
          mt-6
          max-w-3xl
          text-balance
        "
      >
        {content.title}
      </h1>

      <p
        className="
          mt-5
          max-w-2xl
          text-balance
        "
        style={{
          color:
            "var(--tertiary)",
        }}
      >
        {content.description}
      </p>

      <div
        className="
    mt-8
    flex
    flex-wrap
    gap-3
  "
      >
        {
          content.features.map(
            (feature) => (
              <span
                key={feature}
                className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            text-sm
            font-medium
          "
                style={{
                  borderRadius:
                    "var(--radius-badge)",

                  background:
                    "color-mix(in srgb, var(--color-surface) 90%, transparent)",

                  border:
                    "1px solid color-mix(in srgb, var(--color-tertiary) 18%, transparent)",

                  color:
                    "var(--color-primary)",
                }}
              >
                <span>
                  ✦
                </span>

                {feature}
              </span>
            ),
          )
        }
      </div>

      <div
        className="
          mt-10
        "
      >
        <HeroActions
          primary={{
            label:
              cta.primaryAction.label,
          }}
          secondary={{
            label:
              cta.secondaryAction.label,
          }}
        />
      </div>
    </div>
  );
}