"use client";

import { useLanguage }
  from "@/hooks/use-language";

import { faqContent }
  from "../content/faq.content";

import FAQItem
  from "./faq-item";

export default function FAQList() {
  const lang =
    useLanguage();

  const content =
    faqContent[lang];

  return (
    <div
      className="
        mt-10
        space-y-4
      "
    >
      {
        content.items.map(
          (item) => (
            <FAQItem
              key={item.question}
              item={item}
            />
          )
        )
      }
    </div>
  );
}