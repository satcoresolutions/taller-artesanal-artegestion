"use client";

import {
  motion,
} from "framer-motion";

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/dropdown";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  productSortingContent,
} from "./content/product-sorting.content";

import type {
  ProductSortingProps,
} from "./types/product-sorting.types";

export default function ProductSorting({
  value,
  onChange,
}: ProductSortingProps) {
  const lang = useLanguage();

  const content = productSortingContent[lang];

  const selectedOption =
    content.options.find(
      (option) => option.value === value,
    );

  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      {/* Label mejorado */}
      <span
        className="
          text-xs
          uppercase
          tracking-wide
        "
        style={{
          color: "var(--color-text-muted)",
        }}
      >
        {content.label}
      </span>

      <Dropdown>
        <DropdownTrigger>
          <motion.button
            type="button"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              gap-2

              px-3
              py-2

              border

              bg-(--color-surface)
              border-[color-mix(in_srgb,var(--color-text-muted)_15%,transparent)]

              shadow-sm

              transition-all
              duration-200
            "
            style={{
              borderRadius: "var(--radius-dropdown)",
            }}
          >
            <span
              className="
                text-sm
                font-medium
              "
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {selectedOption?.label}
            </span>

            <span
              className="
                text-xs
              "
              style={{
                color: "var(--color-text-muted)",
              }}
            >
              ▾
            </span>
          </motion.button>
        </DropdownTrigger>

        <DropdownContent>
          {content.options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => onChange?.(option.value)}
              className="
                text-sm
              "
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </Dropdown>
    </div>
  );
}