"use client";

import { functionalityContent } from "../content/functionality.content";
import { useLanguage } from "@/hooks/use-language";

export default function FunctionalityTech() {
  const lang = useLanguage();
  const content = functionalityContent[lang];

  return (
    <div
      className="
        mt-12
        flex
        flex-wrap
        justify-center
        gap-3
      "
    >
      {(content.technologies ?? []).map((tech) => (
        <span
          key={tech.name}
          className="
            rounded-full
            border
            px-4
            py-2
            text-sm
          "
          style={{
            borderColor: "var(--glass-border)",
          }}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}