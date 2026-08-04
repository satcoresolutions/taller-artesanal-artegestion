"use client";

import Card
  from "@/components/ui/card";

import type {
  ProductData,
} from "@/types/product.types";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  detailsHeaderContent,
} from "../content/details-header.content";

import {
  productAvailabilityContent,
} from "@/i18n/product-availability.content";

interface DetailsHeaderProps {

  product: ProductData;

}



export default function DetailsHeader({

  product,

}: DetailsHeaderProps) {

  const lang =
    useLanguage();

  const content =
    detailsHeaderContent[lang];

  const availabilityContent =
    productAvailabilityContent[lang];

  const availability =
    availabilityContent[
    product.availability
    ] ??
    product.availability;

  return (

    <Card
      variant="premium"
      className="
    p-8
    md:p-10
  "
    >

      <div
        className="
      flex
      flex-col
      gap-6
    "
      >
        <div
          className="
        flex
        flex-col
        gap-4

        md:flex-row
        md:items-start
        md:justify-between
      "
        >


          <div>
            <div
              className="
          flex-1
          text-center
        "
            >

              <h1
                className="
    text-balance
    font-semibold
  "
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
                  lineHeight: "1.15",
                }}
              >
                {product.title}
              </h1>

              {product.subtitle && (

                <p
                  className="
              mt-3
              text-lg
            "
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >

                  {product.subtitle}

                </p>

              )}

            </div>
            <div className="py-5">
              {product.category && (

                <span
                  className="
          inline-flex
          w-fit
          rounded-full
          px-4
          py-2
          text-xs
          font-medium
          uppercase
          tracking-[0.12em]
        "
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent) 10%, transparent)",

                    color:
                      "var(--primary)",
                  }}
                >

                  {product.category.title}

                </span>

              )}
            </div>
            <div
              className="
        flex
        flex-wrap
        items-center
        gap-3
        text-sm
      "
              style={{
                color:
                  "var(--color-text-primary)",
              }}
            >

              {product.code && (

                <span>

                  <strong>{content.code}:</strong> {product.code}

                </span>

              )}

              {product.availability && (

                <span>

                  <strong>{content.availability}:</strong>{" "}
                  {availability}

                </span>

              )}

            </div>
          </div>

          {product.priceCop && (

            <div
              className="
      shrink-0
      text-left
      md:text-right
    "
            >

              <span
                className="
        text-xs
        uppercase
        tracking-[0.2em]
      "
                style={{
                  color: "var(--color-text-secondary)",
                }}
              >
                {content.price}
              </span>

              <p
                className="
        mt-1
        font-black
        leading-none
        tracking-tight
      "
                style={{
                  fontSize: "3rem",
                  lineHeight: "0.95",
                  color: "var(--primary)",
                }}
              >
                {new Intl.NumberFormat(
                  "es-CO",
                  {
                    style: "currency",
                    currency: "COP",
                    maximumFractionDigits: 0,
                  },
                ).format(product.priceCop)}
              </p>

              <div
                className="
        mt-5
        flex
        flex-col
        gap-2
        text-sm
        md:items-end
      "
              >

                <div
                  className="
          flex
          items-center
          gap-2
        "
                >
                  <span>📦</span>

                  <span
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <strong>{content.stock}:</strong>{" "}
                    {product.stock === 0
                      ? content.outOfStock
                      : product.stock === 1
                        ? content.uniquePiece
                        : `${product.stock} ${content.unitsAvailable}`}
                  </span>
                </div>

                <div
                  className="
          flex
          items-center
          gap-2
        "
                >
                  <span>🛠️</span>

                  <span
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {content.productionDays}: {product.productionDays} {content.days}
                  </span>
                </div>
                <div
                  className="
    flex
    items-center
    gap-2
  "
                >
                  <span>🗓️</span>

                  <span
                    style={{
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {content.craftYear}: {product.craftYear}
                  </span>
                </div>

              </div>

            </div>

          )}

        </div>



        <div
          className="
        flex
        flex-wrap
        gap-2
      "
        >

          {product.newArrival && (

            <span
              className="
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
          "
              style={{
                background:
                  "color-mix(in srgb, var(--success) 12%, transparent)",

                color:
                  "var(--success)",
              }}
            >

              {content.newArrival}

            </span>

          )}

          {product.bestSeller && (

            <span
              className="
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
          "
              style={{
                background:
                  "color-mix(in srgb, var(--warning) 12%, transparent)",

                color:
                  "var(--warning)",
              }}
            >

              {content.bestSeller}

            </span>

          )}

          {product.customizable && (

            <span
              className="
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
          "
              style={{
                background:
                  "color-mix(in srgb, var(--info) 12%, transparent)",

                color:
                  "var(--info)",
              }}
            >

              {content.customizable}

            </span>

          )}

          {product.shortDescription && (

            <p
              className="
      mt-3
      text-base
      leading-7
    "
              style={{
                color: "var(--color-text-secondary)",
              }}
            >

              {product.shortDescription}

            </p>

          )}

        </div>

      </div>

    </Card>

  );

}