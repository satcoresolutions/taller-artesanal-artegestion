import type {
  BadgeProps,
} from "./badge.types";

import {
  badgeVariants,
} from "./badge.variants";

export default function Badge({
  children,

  variant = "default",

  className = "",

  style,

  ...props
}: BadgeProps) {
  const variantStyle =
    badgeVariants[variant];

  return (
    <span
      {...props}
      className={`
        inline-flex
        w-fit
        items-center
        px-4
        py-2
        text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-badge)",

        ...variantStyle,

        ...style,
      }}
    >
      {children}
    </span>
  );
}