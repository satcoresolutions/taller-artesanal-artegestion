"use client";

import useProductsCatalog
  from "./hooks/use-products-catalog";

import ProductsSidebar
  from "../products-sidebar/products-sidebar";

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

  const catalog =
    useProductsCatalog({
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



        <ProductFilters
          groups={catalog.filterGroups}
          selectedFilters={catalog.filters.filters}
          onFilterChange={catalog.filters.handleFilterChange}
        />

      </ProductsSidebar>

      <ProductsContent>

        <ProductsHeader
          count={
            catalog.filteredProducts.length
          }

          sorting={
            catalog.sorting.sorting
          }

          onSortingChange={
            catalog.sorting.setSorting
          }

          search={
            catalog.search.search
          }

          onSearchChange={
            catalog.search.setSearch
          }
        />

        <ProductsGrid
          products={
            catalog.paginatedProducts
          }
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
            currentPage={
              catalog.pagination.currentPage
            }
            totalPages={
              catalog.pagination.totalPages
            }
            onPageChange={
              catalog.pagination.setCurrentPage
            }
          />

        </div>

      </ProductsContent>

    </div>
  );
}