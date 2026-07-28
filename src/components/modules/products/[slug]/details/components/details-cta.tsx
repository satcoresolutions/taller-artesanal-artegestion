"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  detailsCTAContent,
} from "../content/details-cta";

import type {
  ProductData,
} from "@/types/product.types";

interface DetailsCTAProps {

  product: ProductData;

}

export default function DetailsCTA({

  product,

}: DetailsCTAProps) {

  const lang =
    useLanguage();

  const content =
    detailsCTAContent[lang];

  const message =
    encodeURIComponent(

      `${content.message} ${product.title}`,

    );

  const whatsappUrl =
    `https://wa.me/573022016072?text=${message}`;

  return (

    <div
      className="
        flex
        flex-col
        gap-3
      "
    >

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          rounded-xl
          px-5
          py-3
          text-sm
          font-medium
          transition
        "
        style={{
          background:
            "var(--primary)",
        }}
      >

        {content.button}

      </a>

      <span
        className="
          text-xs
          text-center
        "
        style={{
          color:
            "var(--color-text-muted)",
        }}
      >

        {content.description}

      </span>

    </div>

  );

}