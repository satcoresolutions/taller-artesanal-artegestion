"use client";

import Input
  from "@/components/ui/input";

import {
  productSearchContent,
} from "./content/product-search.content";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProductSearchProps,
} from "./types/product-search.types";

export default function ProductSearch({
  value,
  onChange,
}: ProductSearchProps) {
  const lang =
    useLanguage();

  const content =
    productSearchContent[lang];

  return (
    <Input
      value={value}
      placeholder={
        content.placeholder
      }
      onChange={(event) =>
        onChange?.(
          event.target.value
        )
      }
    />
  );
}