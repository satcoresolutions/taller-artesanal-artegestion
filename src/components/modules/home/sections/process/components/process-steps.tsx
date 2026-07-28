"use client";

import { processContent } from "../content/process.content";
import { useLanguage } from "@/hooks/use-language";
import ProcessStep from "./process-step";

export default function ProcessSteps() {
  const lang = useLanguage();
  const content = processContent[lang];

  return (
    <div
      className="
        mt-16
        grid
        gap-6
text-center
        md:grid-cols-4
      "
    >
      {content.steps.map((step) => (
        <ProcessStep
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}