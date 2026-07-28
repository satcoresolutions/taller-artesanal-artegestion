"use client";

import { functionalityContent } from "../content/functionality.content";
import { useLanguage } from "@/hooks/use-language";

export default function FunctionalityContent() {
  const lang = useLanguage();
  const content = functionalityContent[lang];

  return (
    <div>
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
          max-w-2xl
        "
      >
        {content.title}
      </h2>

      <p
        className="
          mt-6
          max-w-xl
        "
      >
        {content.description}
      </p>
    </div>
  );
}