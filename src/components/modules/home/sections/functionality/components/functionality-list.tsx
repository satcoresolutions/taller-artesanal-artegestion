"use client";

import { functionalityContent } from "../content/functionality.content";
import { useLanguage } from "@/hooks/use-language";
import FunctionalityItem from "./functionality-item";

export default function FunctionalityList() {
  const lang = useLanguage();
  const content = functionalityContent[lang];

  return (
    <div
      className="
        flex
        flex-col
        gap-8
      "
    >
      {content.includes.map((item) => (
        <FunctionalityItem
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}