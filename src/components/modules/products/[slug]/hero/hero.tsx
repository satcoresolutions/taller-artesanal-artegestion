"use client";

import {
  useMemo,
  useState,
} from "react";

import HeroImage
  from "./components/hero-image";

import HeroGallery
  from "./components/hero-gallery";

import type {
  ProductData,
} from "@/types/product.types";

import type {
  Media,
} from "@/types/media.types";

interface ProductHeroProps {

  product: ProductData;

}

export default function ProductHero({

  product,

}: ProductHeroProps) {

  const images =
    useMemo(() => {

      const allImages = [

        ...(product.cover
          ? [product.cover]
          : []),

        ...(product.gallery ?? []),

      ];

      return allImages.filter(

        (image, index, array) =>

          array.findIndex(

            (item) => item.id === image.id,

          ) === index,

      );

    }, [

      product.cover,

      product.gallery,

    ]);

  const [

    activeImage,

    setActiveImage,

  ] = useState<Media | null>(

    images[0] ?? null,

  );

  return (

    <section
      className="
        container
        p-10
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
          gap-8
        "
      >

        <div
          className="
            w-full
            max-w-xl
          "
        >

          <HeroImage
            image={activeImage}
            alt={product.title}
          />

        </div>

        <HeroGallery
          images={images}
          activeImage={activeImage}
          onSelect={setActiveImage}
        />

      </div>

    </section>

  );

}