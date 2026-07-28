import type {
  SectionProps,
} from "./section.types";

import {
  sectionVariants,
} from "./section.variants";

export default function Section({
  children,

  variant = "default",

  className = "",

  style,

  ...props
}: SectionProps) {
  const variantStyle =
    sectionVariants[variant];

  return (
    <section
      {...props}
      className={`
        w-full
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-section)",

        ...variantStyle,

        ...style,
      }}
    >
      {children}
    </section>
  );
}