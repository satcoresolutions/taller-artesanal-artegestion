"use client";

import Image from "next/image";
import Link from "next/link";

import Card from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productCardContent,
} from "./content/product-card.content";

import type {
  ProductCardProps,
} from "./types/product-card.types";

import { getStrapiMedia } from "@/lib/utils/strapi";

export default function ProductCard({

  product,

}: ProductCardProps) {

  const lang =
    useLanguage();

  const content =
    productCardContent[lang];


  console.log("ProductCard:", product);

  const description =

    Array.isArray(product.description)

      ? product.description
        .flatMap((block: any) =>

          block.children?.map(
            (child: any) => child.text,
          ) ?? [],
        )
        .join(" ")

      : "";

  return (

    <Card
      variant="outlined"
      className="
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >

      <div
        className="
          relative
          aspect-square
          overflow-hidden
        "
      >

        {product.cover && (

          <Image
            fill
            src={getStrapiMedia(product.cover.url)}
            alt={product.cover.alternativeText ?? product.title}
            className="
    object-cover
    transition-transform
    duration-500
    hover:scale-105
  "
          />

        )}

      </div>

      <div
        className="
          p-5
        "
      >

        {product.category && (

          <span
            className="
              text-xs
              uppercase
              tracking-wide
            "
            style={{
              color:
                "var(--color-text-muted)",
            }}
          >

            {product.category.title}

          </span>

        )}

        <h3
          className="
            mt-2
            text-lg
            font-semibold
          "
        >

          {product.title}

        </h3>

        {description && (

          <p
            className="
              mt-3
              line-clamp-2
              text-sm
            "
            style={{
              color:
                "var(--color-text-muted)",
            }}
          >

            {description}

          </p>

        )}

        {(product.priceCop ?? product.priceUsd) != null && (

          <p
            className="
              mt-4
              text-base
              font-semibold
            "
          >

            {product.priceCop != null

              ? new Intl.NumberFormat(

                "es-CO",

                {

                  style: "currency",

                  currency: "COP",

                  maximumFractionDigits: 0,

                },

              ).format(
                product.priceCop,
              )

              : new Intl.NumberFormat(

                "en-US",

                {

                  style: "currency",

                  currency: "USD",

                },

              ).format(
                product.priceUsd!,
              )}

          </p>

        )}

        <div
          className="
    mt-5
    flex
    justify-end
  "
        >

          <Link
            href={`/products/${product.slug}`}
            className="
      inline-flex
      text-sm
      font-medium
    "
          >

            {content.viewDetails}

          </Link>

        </div>

      </div>

    </Card>

  );

}