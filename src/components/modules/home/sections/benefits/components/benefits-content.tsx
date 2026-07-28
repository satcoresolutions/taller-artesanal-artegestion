"use client";

import { useLanguage } from "@/hooks/use-language";
import { benefitsContent } from "../content/benefits.content";

export default function BenefitsContent() {
  const lang = useLanguage();
  const content = benefitsContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      <span
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
        "
        style={{
          color: "var(--color-primary)",
        }}
      >
        {content.badge}
      </span>

      <h2 className="mt-4">
        {content.title}
      </h2>

      <p className="mt-6">
        {content.description}
      </p>
    </div>
  );
}