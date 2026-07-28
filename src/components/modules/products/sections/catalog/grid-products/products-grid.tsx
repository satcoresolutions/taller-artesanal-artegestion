"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productsGridContent,
} from "./content/products-grid.content";

import ProductCard
  from "../product-card";

import type {
  ProductsGridProps,
} from "./types/products-grid.types";

export default function ProductsGrid({
  products,
}: ProductsGridProps) {
  const lang =
    useLanguage();

  const content =
    productsGridContent[lang];

  if (
    products.length === 0
  ) {
    return (
      <p>
        {content.empty}
      </p>
    );
  }

  return (
    <div
      className="
        grid
        gap-6

        sm:grid-cols-2

        xl:grid-cols-3
      "
    >
      {products.map(
        (product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        )
      )}
    </div>
  );
}