import Link from "next/link";

import type {
  ButtonProps,
} from "./button.types";

import {
  buttonVariants,
} from "./button.variants";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const style =
    buttonVariants[variant];

  const classes = `
    inline-flex
    items-center
    justify-center
    px-5
    py-2
    text-sm
    font-medium
    transition-transform
    hover:scale-[1.02]
    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={{
          ...style,

          borderRadius:
            "var(--radius-button)",
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      style={{
        ...style,

        borderRadius:
          "var(--radius-button)",
      }}
    >
      {children}
    </button>
  );
}