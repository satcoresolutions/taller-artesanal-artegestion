import ResultsCount
  from "./components/results-count";

import ProductSorting
  from "./components/product-sorting";

import type {
  ProductsHeaderProps,
} from "./types/products-header.types";

export default function ProductsHeader({
  count,
  sorting,
  onSortingChange,
}: ProductsHeaderProps) {
  return (
    <div
      className="
        mb-8
        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <ResultsCount
        count={count}
      />

      <ProductSorting
        value={sorting}
        onChange={
          onSortingChange
        }
      />
    </div>
  );
}