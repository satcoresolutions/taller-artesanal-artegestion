"use client";

import {
  productFiltersContent,
} from "./content/product-filters.content";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductFiltersProps,
} from "./types/product-filters.types";

export default function ProductFilters({
  groups,
  selectedFilters,
  onFilterChange,
}: ProductFiltersProps) {
  const lang =
    useLanguage();

  const content =
    productFiltersContent[lang];

  return (
    <div
      className="
        flex
        flex-col
        gap-8
      "
    >
      <h4
        className="
          text-lg
          font-medium
        "
      >
        {content.title}
      </h4>

      {groups.map(
        (group) => (
          <div
            key={group.id}
          >
            <h5
              className="
    mb-3
    font-medium
  "
              style={{
                color: "var(--color-primary)",
              }}
            >
              {group.title}
            </h5>

            <div
              className="
                flex
                flex-col
                gap-2
              "
            >
              {group.options.map(
                (option) => (
                  <label
                    key={option.id}
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <input
                      type="checkbox"
                      checked={
                        selectedFilters.includes(
                          option.id
                        )
                      }
                      onChange={() =>
                        onFilterChange(
                          option.id
                        )
                      }
                    />

                    <span>
                      {option.label}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}