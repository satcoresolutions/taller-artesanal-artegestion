"use client";

import FAQList
  from "./faq-list";

export default function FAQAccordion() {
  return (
    <div
      className="
        mx-auto
        mt-12
        max-w-4xl
      "
    >
      <FAQList />
    </div>
  );
}