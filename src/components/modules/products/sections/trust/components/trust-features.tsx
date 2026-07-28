"use client";

import { trustContent }
  from "../content/trust.content";

import { useLanguage }
  from "@/hooks/use-language";

import TrustFeatureCard
  from "./trust-feature-card";

export default function TrustFeatures() {
  const lang = useLanguage();

  const content = trustContent[lang];

  return (
    <div
      className="
        mt-10
        grid
        gap-6

        md:grid-cols-3
      "
    >
      {
        content.features.map(
          (feature) => (
            <TrustFeatureCard
              key={feature.title}
              feature={feature}
            />
          ),
        )
      }
    </div>
  );
}