"use client";

import {
  createContext,
  useContext,
} from "react";

interface DropdownContextValue {
  isOpen: boolean;

  open: () => void;

  close: () => void;

  toggle: () => void;
}

export const DropdownContext =
  createContext<
    DropdownContextValue | undefined
  >(undefined);

export function useDropdown() {
  const context =
    useContext(
      DropdownContext,
    );

  if (!context) {
    throw new Error(
      "Dropdown components must be inside Dropdown",
    );
  }

  return context;
}