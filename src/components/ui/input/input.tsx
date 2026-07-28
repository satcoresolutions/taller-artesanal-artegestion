import type {
  InputProps,
} from "./input.types";

import {
  inputVariants,
} from "./input.variants";

export default function Input({
  variant = "default",
  className = "",
  style,
  ...props
}: InputProps) {
  const variantStyle =
    inputVariants[variant];

  return (
    <input
      {...props}
      className={`
        px-4
        py-2
        outline-none
        transition-all
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-input)",

        ...variantStyle,

        ...style,
      }}
    />
  );
}