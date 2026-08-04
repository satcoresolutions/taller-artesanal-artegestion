"use client";

import HeroBadge
  from "./hero-badge";

import HeroActions
  from "./hero-actions";

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
            "var(--text-muted)",
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
          primaryAction={
            content.primaryAction
          }
          secondaryAction={
            content.secondaryAction
          }
        />
      </div>
    </div>
  );
}