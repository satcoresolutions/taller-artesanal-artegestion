"use client";

import Image
  from "@/components/ui/image";

import type {
  Media,
} from "@/types/media.types";

interface HeroGalleryProps {

  images: Media[];

  activeImage: Media | null;

  onSelect: (
    image: Media,
  ) => void;

}

export default function HeroGallery({

  images,

  activeImage,

  onSelect,

}: HeroGalleryProps) {

  if (

    images.length === 0

  ) {

    return null;

  }

  return (

    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-3
      "
    >

      {images.map(

        (image) => {

          const isActive =

            activeImage?.id === image.id;

          return (

            <button
              key={image.id}
              type="button"
              onClick={() => onSelect(image)}
              className="
                relative
                h-20
                w-20
                overflow-hidden
                rounded-xl
                border
                transition-all
                duration-300
                hover:scale-105
              "
              style={{

                borderColor:

                  isActive

                    ? "var(--color-accent)"

                    : "var(--color-border)",

                opacity:

                  isActive

                    ? 1

                    : 0.75,

              }}
            >

              <Image
                src={image.url}
                alt={
                  image.alternativeText
                  ?? image.name
                }
                fill
                className="
                  object-cover
                "
              />

            </button>

          );

        },

      )}

    </div>

  );

}