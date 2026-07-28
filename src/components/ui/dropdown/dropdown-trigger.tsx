"use client";

import {
  useDropdown,
} from "./dropdown-context";

import type {
  DropdownTriggerProps,
} from "./dropdown.types";

export default function DropdownTrigger({
  children,
  className = "",
}: DropdownTriggerProps) {
  const {
    toggle,
  } = useDropdown();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          toggle();
        }
      }}
      className={className}
    >
      {children}
    </div>
  );
}