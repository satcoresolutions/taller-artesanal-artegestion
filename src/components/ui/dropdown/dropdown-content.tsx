"use client";

import {
  useDropdown,
} from "./dropdown-context";

import type {
  DropdownContentProps,
} from "./dropdown.types";

export default function DropdownContent({
  children,
  className = "",
  ...props
}: DropdownContentProps) {
  const {
    isOpen,
  } = useDropdown();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`
        absolute
        top-full
        left-0
        z-50

        mt-2
        min-w-55

        rounded-xl

        border
        border-surface-secondary

        bg-surface

        text-text-primary

        shadow-lg

        animate-in
        fade-in
        zoom-in-95

        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}