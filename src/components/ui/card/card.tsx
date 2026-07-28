import type {
  CardProps,
} from "./card.types";

import {
  cardVariants,
} from "./card.variants";

export default function Card({
  children,
  variant = "default",
  className = "",
  style,
  ...props
}: CardProps) {
  const variantStyle =
    cardVariants[variant];

  return (
    <div
      {...props}
      className={className}
      style={{
        borderRadius:
          "var(--radius-card)",

        ...variantStyle,

        ...style,
      }}
    >
      {children}
    </div>
  );
}