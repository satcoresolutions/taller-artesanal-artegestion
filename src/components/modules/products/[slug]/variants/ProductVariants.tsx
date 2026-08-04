"use client";

import Section from "@/components/ui/section";

import VariantCard
  from "./componets/VariantCard";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productVariantsContent,
} from "./content/variants.content";

import type {
  ProductVariantsProps,
} from "./types/ProductVariants.types";

export default function ProductVariants({

  product,

  selectedVariant,

  onVariantChange,

}: ProductVariantsProps) {

  const language =
    useLanguage();

  const content =
    productVariantsContent[language];

  if (
    !product.variants ||
    product.variants.length === 0
  ) {

    return null;

  }

  return (

    <Section
      className="
        px-10 py-5
        space-y-4
        text-center
      "
    >

      <div>

        <h3
          className="
            text-lg
            font-semibold
          "
        >
          {content.title}
        </h3>

        <p
          className="
            text-sm
            text-muted-foreground
          "
        >
          {content.subtitle}
        </p>

      </div>

      <div
        className="
          flex
          flex-wrap
          gap-4
        "
      >

        {product.cover && (

          <VariantCard
            variant={{

              id: 0,

              variant:
                content.original,

              cover:
                product.cover,

              gallery:
                product.gallery,

              stock:
                product.stock ?? 0,

              sortOrder: 0,

              active: true,

            }}
            selected={
              selectedVariant === null
            }
            onSelect={() =>
              onVariantChange(null)
            }
          />

        )}

        {product.variants.map(
          (variant) => (

            <VariantCard
              key={variant.id}
              variant={variant}
              selected={
                selectedVariant?.id ===
                variant.id
              }
              onSelect={() =>
                onVariantChange(
                  variant,
                )
              }
            />

          ),
        )}

      </div>

    </Section>

  );

}