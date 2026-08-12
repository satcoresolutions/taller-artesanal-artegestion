"use client";

import ProductCard
  from "@/components/modules/products/sections/catalog/product-card";

import type {
  ProductData,
} from "@/types/product.types";

interface FeaturedProductsGridProps {
  products: ProductData[];
}

export default function FeaturedProductsGrid({
  products,
}: FeaturedProductsGridProps) {

  if (products.length === 0) {
    return null;
  }

  return (
    <div
      className="
        mt-10

        flex
        gap-6

        overflow-x-auto
        overflow-y-hidden

        pb-4

        snap-x
        snap-mandatory
      "
    >

      {products.map(
        (product) => (

          <div
            key={product.documentId}
            className="
              w-[82%]
              shrink-0
              snap-start

              sm:w-[55%]

              md:w-[40%]

              lg:w-[30%]

              xl:w-[24%]
            "
          >

            <ProductCard
              product={product}
            />

          </div>

        ),
      )}

    </div>
  );
}