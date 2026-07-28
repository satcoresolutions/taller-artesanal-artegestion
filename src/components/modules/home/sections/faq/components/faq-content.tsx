"use client";

import { useLanguage }
  from "@/hooks/use-language";

import { faqContent }
  from "../content/faq.content";

export default function FAQContent() {
  const lang = useLanguage();

  const content =
    faqContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      {
        content.badge && (
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
        )
      }

      <h2 className="mt-4">
        {content.title}
      </h2>

      <p className="mt-6">
        {content.description}
      </p>
    </div>
  );
}