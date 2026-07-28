"use client";

import {
  useState,
} from "react";

export default function useProductsFilters() {
  const [
    selectedFilters,
    setSelectedFilters,
  ] = useState<string[]>([]);

  const handleFilterChange = (
    filterId: string
  ) => {
    setSelectedFilters(
      (prev) =>
        prev.includes(filterId)
          ? prev.filter(
              (id) =>
                id !== filterId
            )
          : [
              ...prev,
              filterId,
            ]
    );
  };

  return {
    selectedFilters,
    handleFilterChange,
  };
}