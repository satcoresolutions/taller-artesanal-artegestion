"use client";

import {
  useEffect,
  useState,
} from "react";

import ProductHero
  from "@/components/modules/products/[slug]/hero";

import ProductDetails
  from "@/components/modules/products/[slug]/details";

import DetailsRelatedProducts
  from "@/components/modules/products/[slug]/details-related-products";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductData,
} from "@/types/product.types";

interface ProductPageClientProps {
  initialProduct: ProductData;
  slug: string;
}

export default function ProductPageClient({
  initialProduct,
  slug,
}: ProductPageClientProps) {

  const language =
    useLanguage();

  const [

    product,

    setProduct,

  ] = useState<ProductData>(
    initialProduct,
  );

  useEffect(() => {

    let cancelled = false;

    async function loadProduct() {

      try {

        const response =
          await fetch(

            `/api/products/document/${product.documentId}?locale=${language}`,

            {

              cache: "no-store",

            },

          );

        if (!response.ok) {

          throw new Error(
            "No fue posible obtener el producto.",
          );

        }

        const data: ProductData =
          await response.json();

        if (!cancelled) {

          setProduct(
            data,
          );

        }

      } catch (error) {

        console.error(
          "Error cargando el producto:",
          error,
        );

      }

    }

    loadProduct();

    return () => {

      cancelled = true;

    };

  }, [

    language,

    product.documentId,

  ]);

  return (

    <>

      <div
        className="
          flex
          flex-col
          gap-10
          sticky
          top-24
        "
      >

        <ProductHero
          product={product}
        />

        <DetailsRelatedProducts
          product={product}
        />

      </div>

      <ProductDetails
        product={product}
      />

    </>

  );

}