"use client";

import {
  useDropdown,
} from "./dropdown-context";

import type {
  DropdownItemProps,
} from "./dropdown.types";

export default function DropdownItem({
  children,
  danger,
  className = "",
  onClick,
  ...props
}: DropdownItemProps) {
  const {
    close,
  } = useDropdown();

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    onClick?.(event);

    close();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        w-full
        px-4
        py-2

        text-left
        text-sm

        transition-colors

        ${
          danger
            ? `
              text-danger
              hover:bg-danger/10
            `
            : `
              text-text-primary
              hover:bg-surface-secondary
              hover:rounded-xl
            `
        }

        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}