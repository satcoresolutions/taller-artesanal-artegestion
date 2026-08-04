"use client";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  detailsSpecificationsContent,
} from "../content/details-specifications.content";

import type {
  ProductData,
} from "@/types/product.types";

import type {
  Property,
} from "@/types/property.types";

interface DetailsSpecificationsProps {

  product: ProductData;

}

export default function DetailsSpecifications({

  product,

}: DetailsSpecificationsProps) {

  const lang =
    useLanguage();

  const content =
    detailsSpecificationsContent[lang];

  if (
    product.properties.length === 0
  ) {

    return null;

  }

  return (

    <Card
      variant="featured"
      className="
        p-8
      "
    >

      <div
        className="
          flex
          flex-col
          gap-8
        "
      >

        <div>

          <h3>

            {content.title}

          </h3>

          <p
            className="
              mt-2
            "
            style={{
              color:
                "var(--color-text-primary)",
            }}
          >

            {content.subtitle}

          </p>

        </div>

        <div
          className="
            grid
            gap-5

            md:grid-cols-2
          "
        >

          {product.properties.map(

            (
              property: Property,
            ) => (

              <div
                key={property.label}
                className="
                  rounded-2xl
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{

                  background:
                    "var(--color-surface)",
                    

                  border:
                    "1px solid var(--color-border)",

                }}
              >

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.15em]
                  "
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                >

                  {property.label}

                </p>

                <p
                  className="
                    mt-3
                    text-xl
                    font-semibold
                    leading-snug
                  "
                  style={{
                    color:
                      "var(--color-text-primary)",
                  }}
                >

                  {property.value}

                </p>

              </div>

            ),

          )}

        </div>

      </div>

    </Card>

  );

}