"use client";

import { ctaContentContact } from "../content/cta.content";
import { useLanguage } from "@/hooks/use-language";

export default function CTAContentSection() {
  const lang = useLanguage();
  const content = ctaContentContact[lang];

  return (
    <div
      className="
        flex
        flex-col
        items-center
      "
    >
      <span
        className="
          inline-flex
          items-center
          rounded-full
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.18em]
        "
        style={{
          color: "var(--color-primary)",
          background: "color-mix(in srgb, var(--color-primary) 12%, transparent)",
        }}
      >
        {content.badge}
      </span>

      <h2
        className="
          mt-8
          max-w-4xl
          text-balance
        "
        style={{ lineHeight: "1.05" }}
      >
        {content.title}
      </h2>

      <p
        className="
          mt-6
          max-w-2xl
          text-balance
        "
        style={{ color: "var(--text-secondary)" }}
      >
        {content.description}
      </p>
    </div>
  );
}