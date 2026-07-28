import Image from "next/image";

import type { IconProps } from "./icon.types";
import { iconSizes, iconVariants } from "./icon.variants";

export default function Icon({
  src,
  alt,
  size = "md",
  variant = "default",
  className = "",
  style,
  priority = false,
}: IconProps) {
  const resolvedSize =
    typeof size === "number"
      ? size
      : iconSizes[size];

  const variantStyle = iconVariants[variant];
  const isBrand = variant === "brand";

  return (
    <Image
      src={src}
      alt={alt}
      width={resolvedSize}
      height={resolvedSize}
      priority={priority}
      style={{
        width: isBrand ? "auto" : resolvedSize,
        height: resolvedSize,
        flexShrink: 0,
        ...variantStyle,
        ...style,
      }}
      className={className}
    />
  );
}