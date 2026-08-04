"use client";

import useProductsCatalog
  from "./hooks/use-products-catalog";

import ProductsSidebar
  from "../products-sidebar/products-sidebar";

import ProductSearch
  from "../ProductSearch";

import ProductFilters
  from "../ProductFilters";

import ProductsContent
  from "../products-content";

import ProductsHeader
  from "../products-header";

import ProductsGrid
  from "../grid-products";

import Pagination
  from "@/components/ui/pagination";

import type {
  ProductData,
} from "@/types/product.types";

interface CatalogClientProps {

  products: ProductData[];

}

export default function CatalogClient({

  products,

}: CatalogClientProps) {

  const {

    search,
    setSearch,

    sorting,
    setSorting,

    selectedFilters,
    handleFilterChange,

    filterGroups,

    filteredProducts,
    paginatedProducts,

    currentPage,
    totalPages,
    setCurrentPage,

  } = useProductsCatalog({

    products,

  });

  return (

    <div
      className="
      mt-10
    grid
    items-start
    gap-10
    xl:grid-cols-[300px_minmax(0,1fr)]
  "
    >

      <ProductsSidebar>

        <ProductSearch
          value={search}
          onChange={setSearch}
        />

        <ProductFilters
          groups={filterGroups}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
        />

      </ProductsSidebar>

      <ProductsContent>

        <div className="">

          <ProductsHeader
            count={filteredProducts.length}
            sorting={sorting}
            onSortingChange={setSorting}
          />

        </div>

        <ProductsGrid
          products={paginatedProducts}
        />

        <div
          className="
            mt-12
            flex
            justify-center
          "
        >

          <Pagination
            variant="floating"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

        </div>

      </ProductsContent>

    </div>

  );

}