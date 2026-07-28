"use client";

import Image
  from "@/components/ui/image";

import type {
  Media,
} from "@/types/media.types";

interface Props {

  image: Media | null;

}

export default function SectionImage({

  image,

}: Props) {

  if (!image) {

    return null;

  }

  return (

    <Image
      src={image.url}
      alt={
        image.alternativeText
        ?? image.name
      }
      variant="card"
      preview
    />

  );

}