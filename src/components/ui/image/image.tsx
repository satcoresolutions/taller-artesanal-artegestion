import NextImage from "next/image";

import {
  PhotoView,
} from "react-photo-view";

import type {
  ImageProps,
} from "./image.types";

import {
  imageVariants,
} from "./image.variants";

export default function Image({
  src,
  alt,

  variant = "default",

  priority = false,

  fill = false,

  preview = false,

  className = "",

  style,

  width = 1200,

  height = 1200,
}: ImageProps) {

  const image = (
    <NextImage
      src={src}
      alt={alt}
      priority={priority}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={{
        ...(fill
          ? {}
          : {
              width: "100%",
              height: "auto",
            }),

        ...imageVariants[variant],

        ...style,
      }}
    />
  );

  if (!preview) {
    return image;
  }

  return (
    <PhotoView src={src}>
      {image}
    </PhotoView>
  );
}