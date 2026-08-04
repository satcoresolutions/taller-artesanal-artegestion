"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import HeroImage
  from "./components/hero-image";

import HeroGallery
  from "./components/hero-gallery";

import type {
  ProductData,
  ProductVariant,
} from "@/types/product.types";

import type {
  Media,
} from "@/types/media.types";

interface ProductHeroProps {
  product: ProductData;
  selectedVariant: ProductVariant | null;
}

export default function ProductHero({

  product,
  selectedVariant,

}: ProductHeroProps) {

  const images =
    useMemo(() => {

      const cover =
        selectedVariant?.cover ??
        product.cover;

      const gallery =
        selectedVariant?.gallery?.length
          ? selectedVariant.gallery
          : product.gallery;

      const allImages = [

        ...(cover
          ? [cover]
          : []),

        ...(gallery ?? []),

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
      selectedVariant,

    ]);

  const [

    activeImage,

    setActiveImage,

  ] = useState<Media | null>(

    images[0] ?? null,

  );

  useEffect(() => {

    setActiveImage(
      images[0] ?? null,
    );

  }, [

    images,

  ]);

  return (

    <section
      className="
      container
      px-6
      lg:p-10
    "
    >

      <div
        className="
        flex
        flex-col
        items-center
        gap-6
      "
      >

        <div
          className="
          w-full
          max-w-xl
          rounded-2xl
          border
          bg-white
          overflow-hidden

          h-105
          sm:h-130
          lg:h-155
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