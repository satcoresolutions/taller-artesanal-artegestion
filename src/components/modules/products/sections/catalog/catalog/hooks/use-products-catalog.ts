"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  catalogContent,
} from "../content/catalog.content";

import useProductsSearch
  from "./use-products-search";

import useProductsFilters
  from "./use-products-filters";

import useProductsSorting
  from "./use-products-sorting";

import useProductsPagination
  from "./use-products-pagination";

import useProductFilterOptions
  from "./use-product-filter-options";

import {
  filterProducts,
} from "../filters/filter-products";

import type {
  ProductData,
} from "@/types/product.types";


interface UseProductsCatalogProps {
  products: ProductData[];
}


export default function useProductsCatalog({
  products,
}: UseProductsCatalogProps) {

  const lang =
    useLanguage();

  const content =
    catalogContent[lang];


  const search =
    useProductsSearch();


  const filters =
    useProductsFilters();


  const sorting =
    useProductsSorting();


  const filterOptions =
    useProductFilterOptions({
      products,
      content,
    });


  const filteredProducts =
    filterProducts({
      products,

      search:
        search.search,

      filters:
        filters.filters,
    });


  const sortedProducts =
    [...filteredProducts];


  if (
    sorting.sorting ===
    "name-asc"
  ) {

    sortedProducts.sort(
      (a, b) =>
        a.title.localeCompare(
          b.title,
        ),
    );

  }


  if (
    sorting.sorting ===
    "name-desc"
  ) {

    sortedProducts.sort(
      (a, b) =>
        b.title.localeCompare(
          a.title,
        ),
    );

  }


  if (
    sorting.sorting ===
    "newest"
  ) {

    sortedProducts.reverse();

  }


  const pagination =
    useProductsPagination({
      totalItems:
        sortedProducts.length,
    });


  const paginatedProducts =
    sortedProducts.slice(
      pagination.startIndex,
      pagination.endIndex,
    );


  return {

    search,

    filters,

    sorting,

    filterGroups:
      filterOptions.filterGroups,

    filteredProducts,

    paginatedProducts,

    pagination,

  };
}