"use client";

import Image
  from "@/components/ui/image";

import type {
  Media,
} from "@/types/media.types";

interface HeroImageProps {

  image: Media | null;

  alt: string;

}

export default function HeroImage({

  image,

  alt,

}: HeroImageProps) {

  if (!image) {

    return (

      <div
        className="
          flex
          aspect-square
          items-center
          justify-center
          rounded-2xl
          border
        "
        style={{

          borderColor:
            "var(--color-border)",

          background:
            "var(--color-surface)",

          color:
            "var(--color-text-muted)",

        }}
      >

        Sin imagen

      </div>

    );

  }

  return (

    <Image
      src={image.url}
      alt={
        image.alternativeText
        ?? alt
      }
      variant="product"
      priority
      preview
    />

  );

}