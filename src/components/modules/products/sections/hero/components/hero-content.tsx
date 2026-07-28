"use client";

import HeroBadge from "./hero-badge";

import {
  heroContent,
} from "../content/hero.content";

import {
  useLanguage,
} from "@/hooks/use-language";

export default function HeroContent() {
  const lang =
    useLanguage();

  const content =
    heroContent[lang];

  return (
    <div
      className="
        flex
        max-w-2xl
        flex-col
      "
    >
      <HeroBadge
        label={content.badge}
      />

      <h1
        className="
          mt-6
          max-w-2xl
          text-balance
        "
      >
        {content.title}
      </h1>

      <p
        className="
          mt-5
          max-w-xl
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
    </div>
  );
}