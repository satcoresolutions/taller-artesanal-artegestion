"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  materialsContent,
} from "../content/materials.content";

export default function MaterialsContent() {

  const lang =
    useLanguage();

  const content =
    materialsContent[lang];

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
          color:
            "var(--color-primary)",
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
        style={{
          color:
            "var(--color-text-secondary)",
        }}
      >

        {content.description}

      </p>

    </div>

  );

}