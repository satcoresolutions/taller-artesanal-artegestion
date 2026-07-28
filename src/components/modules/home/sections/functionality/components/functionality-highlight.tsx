"use client";

import Card from "@/components/ui/card";
import { functionalityContent } from "../content/functionality.content";
import { useLanguage } from "@/hooks/use-language";

export default function FunctionalityHighlight() {
  const lang = useLanguage();
  const content = functionalityContent[lang];

  return (
    <Card
      variant="glass"
      className="
        mt-10
        p-6
      "
    >
      <p
        className="
          text-sm
          font-medium
        "
      >
        {content.highlight.text}
      </p>
    </Card>
  );
}