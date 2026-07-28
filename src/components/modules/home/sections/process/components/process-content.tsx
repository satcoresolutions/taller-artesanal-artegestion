"use client";

import { processContent } from "../content/process.content";
import { useLanguage } from "@/hooks/use-language";

export default function ProcessContent() {
  const lang = useLanguage();
  const content = processContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-3xl
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

      <h2
        className="
          mt-4
        "
      >
        {content.title}
      </h2>

      <p
        className="
          mt-6
        "
      >
        {content.description}
      </p>
    </div>
  );
}