"use client";

import ResultsCount
  from "./components/results-count";

import ProductSorting
  from "./components/product-sorting";

import ProductSearch
  from "../ProductSearch";

import type {
  ProductsHeaderProps,
} from "./types/products-header.types";


export default function ProductsHeader({
  count,
  sorting,
  onSortingChange,
  search,
  onSearchChange,
}: ProductsHeaderProps) {

  return (
    <div
      className="
                mb-8
                flex
                flex-col
            

                sm:flex-row
                sm:items-center
                sm:justify-between
            "
    >

      <ProductSorting
        value={sorting}
        onChange={
          onSortingChange
        }
      />

      <ProductSearch
        value={search}
        onChange={onSearchChange}
      />

      <ResultsCount
        count={count}
      />

    </div>
  );
}