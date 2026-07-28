"use client";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  DropdownContext,
} from "./dropdown-context";

import type {
  DropdownProps,
} from "./dropdown.types";

export default function Dropdown({
  children,
}: DropdownProps) {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const ref =
    useRef<HTMLDivElement>(null);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(
      (prev) => !prev,
    );
  }

  useEffect(() => {
    function handleOutside(
      event: PointerEvent,
    ) {
      if (
        ref.current &&
        !ref.current.contains(
          event.target as Node,
        )
      ) {
        close();
      }
    }

    function handleEscape(
      event: KeyboardEvent,
    ) {
      if (
        event.key === "Escape"
      ) {
        close();
      }
    }

    document.addEventListener(
      "pointerdown",
      handleOutside,
    );

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutside,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        open,
        close,
        toggle,
      }}
    >
      <div
        ref={ref}
        className="relative inline-block"
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
}