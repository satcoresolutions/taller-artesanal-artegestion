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

  return (

    <div
      className="
        mt-10
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >

      {products.map((product) => (

        <ProductCard
          key={product.documentId}
          product={product}
        />

      ))}

    </div>

  );

}