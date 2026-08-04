"use client";

import {
  useEffect,
  useState,
} from "react";

import ProductHero
  from "@/components/modules/products/[slug]/hero";

import ProductVariants
  from "./variants/ProductVariants";

import ProductDetails
  from "@/components/modules/products/[slug]/details";

import DetailsRelatedProducts
  from "@/components/modules/products/[slug]/details-related-products";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductData,
  ProductVariant,
} from "@/types/product.types";

interface ProductPageClientProps {

  initialProduct: ProductData;

  slug: string;

}

export default function ProductPageClient({

  initialProduct,

}: ProductPageClientProps) {

  const language =
    useLanguage();

  const [

    product,

    setProduct,

  ] = useState<ProductData>(
    initialProduct,
  );

  const [

    selectedVariant,

    setSelectedVariant,

  ] = useState<ProductVariant | null>(
    null,
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

          setSelectedVariant(
            null,
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

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-[560px_minmax(0,1fr)]
        lg:items-start
      "
    >

      <aside
        className="
          flex
          flex-col
          gap-8
          lg:sticky
          lg:top-24
        "
      >

        <ProductHero
          product={product}
          selectedVariant={selectedVariant}
        />

        <ProductVariants
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />

        <div
          className="
            hidden
            lg:block
          "
        >

          <DetailsRelatedProducts
            product={product}
          />

        </div>

      </aside>

      <section
        className="
          min-w-0
        "
      >

        <ProductDetails
          product={product}
        />

        <div
          className="
            mt-12
            lg:hidden
          "
        >

          <DetailsRelatedProducts
            product={product}
          />

        </div>

      </section>

    </div>

  );

}