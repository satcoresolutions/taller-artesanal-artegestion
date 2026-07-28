"use client";

import Card from "@/components/ui/card";
import { processContent } from "../content/process.content";
import { useLanguage } from "@/hooks/use-language";

export default function ProcessSummary() {
  const lang = useLanguage();
  const content = processContent[lang];

  return (
    <Card
      variant="glass"
      className="
        mx-auto
        mt-12
        max-w-3xl
        p-8
      "
    >
      <p
        className="
          text-center
          font-medium
        "
      >
        {content.summary}
      </p>
    </Card>
  );
}