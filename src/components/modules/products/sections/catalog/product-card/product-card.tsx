"use client";

import Image from "next/image";
import Link from "next/link";

import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productCardContent,
} from "./content/product-card.content";

import type {
  ProductCardProps,
} from "./types/product-card.types";

import {
  getStrapiMedia,
} from "@/lib/utils/strapi";


export default function ProductCard({
  product,
}: ProductCardProps) {

  const lang =
    useLanguage();

  const content =
    productCardContent[lang];

  const description =
    Array.isArray(product.description)
      ? product.description
        .flatMap(
          (block: any) =>
            block.children?.map(
              (child: any) =>
                child.text,
            ) ?? [],
        )
        .join(" ")
      : "";


  const availableStock =
    (product.stock ?? 0) -
    (product.reserved ?? 0);

  const isInStock =
    availableStock > 0;


  const availabilityLabel =
    product.availability
      ? content.availability[
      product.availability
      ]
      : null;


  return (

    <Card
      variant={
        isInStock
          ? "outlined"
          : "featured"
      }
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >

      {/* Image */}

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
            src={getStrapiMedia(
              product.cover.url,
            )}
            alt={
              product.cover
                .alternativeText
              ?? product.title
            }
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />

        )}


        {/* Category Badge */}

        {product.category && (

          <div
            className="
              absolute
              left-2
              top-2
              z-10
            "
          >

            <Badge variant="primary">

              {product.category.title}

            </Badge>

          </div>

        )}


        {/* Availability Badge */}

        {availabilityLabel && (
          <div
            className="
      absolute
      bottom-2
      right-2
      z-10
    "
          >
            <Badge variant="default">
              {availabilityLabel}
            </Badge>
          </div>
        )}

      </div>


      {/* Content */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5
        "
      >

        <h3
          className="
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
                "var(--color-muted)",
            }}
          >

            {description}

          </p>

        )}


        {(product.priceCop ??
          product.priceUsd) != null && (

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
                )

              }

            </p>

          )}


        <div
          className="
            mt-auto
            flex
            justify-end
            pt-5
            text-primary
          "
        >

          <Link
            href={`/products/${product.slug}`}
            className="
              text-sm
              font-medium
              uppercase
              tracking-wide
            "
          >

            {content.viewDetails}

          </Link>

        </div>

      </div>

    </Card>

  );

}