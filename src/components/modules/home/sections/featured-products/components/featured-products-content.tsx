"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  featuredProductsContent,
} from "../content/featured-products.content";

export default function FeaturedProductsContent() {
  const lang =
    useLanguage();

  const content =
    featuredProductsContent[lang];

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
          text-primary
        "
      >
        {content.badge}
      </span>

      <h2 className="mt-4">
        {content.title}
      </h2>

      <p
        className="
          mt-6
          text-text-secondary
        "
      >
        {content.description}
      </p>
    </div>
  );
}