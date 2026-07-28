"use client";
import Section from "@/components/ui/section";

import DetailsHeader
  from "./components/details-header";

import DetailsSpecifications
  from "./components/details-specifications";

import DetailsContentSections
  from "./components/details-content-sections";

import DetailsCTA
  from "./components/details-cta";

import type {
  ProductData,
} from "@/types/product.types";

interface ProductDetailsProps {

  product: ProductData;

}

export default function ProductDetails({

  product,

}: ProductDetailsProps) {

  return (
    <Section
      className="
        container
        p-10
      "
    >
      <div
        className="
        flex
        flex-col
        gap-8
      "
      >

        <div
          className="
          flex
          flex-col
          gap-6
        "
        >

          <DetailsHeader
            product={product}
          />

          <DetailsCTA
            product={product}
          />

        </div>

        <DetailsSpecifications
          product={product}
        />

        <DetailsContentSections
          product={product}
        />



      </div>
    </Section>
  );

}