"use client";

import {
  useMemo,
} from "react";

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

  const {

    search,

    setSearch,

  } =
    useProductsSearch();

  const {

    sorting,

    setSorting,

  } =
    useProductsSorting();

  const {

    selectedFilters,

    handleFilterChange,

  } =
    useProductsFilters();

  const categories = useMemo(() => {

    return Array.from(

      new Map(

        products

          .filter(
            product => product.category !== null,
          )

          .map(
            product => [

              product.category!.slug,
              product.category!,

            ],
          ),

      ).values(),

    );

  }, [products]);

  const materials = useMemo(() => {

    return Array.from(

      new Map(

        products
          .flatMap(product => product.materials ?? [])
          .map(material => [
            material.slug,
            material,
          ]),

      ).values(),

    );

  }, [products]);

  const filterGroups = [

    {
      id: "categories",

      title:
        content.filters.categories.title,

      options:
        categories.map(category => ({

          id:
            category.slug,

          label:
            category.title,

        })),
    },

    {
      id: "materials",

      title:
        content.filters.materials.title,

      options:
        materials.map(material => ({

          id:
            material.slug,

          label:
            material.title,

        })),
    },

    {
      id: "availability",

      title:
        content.filters.availability.title,

      options: [

        {
          id: "in_stock",

          label:
            content.filters.availability.options.in_stock,
        },

        {
          id: "made_to_order",

          label:
            content.filters.availability.options.made_to_order,
        },

      ],
    },

    {
      id: "collection",

      title:
        content.filters.collection.title,

      options: [

        {
          id: "featured",

          label:
            content.filters.collection.options.featured,
        },

        {
          id: "newArrival",

          label:
            content.filters.collection.options.newArrival,
        },

        {
          id: "bestSeller",

          label:
            content.filters.collection.options.bestSeller,
        },

      ],
    },

    {
      id: "price",

      title:
        content.filters.price.title,

      options: [

        {
          id: "price-1",

          label:
            content.filters.price.options.under50,
        },

        {
          id: "price-2",

          label:
            content.filters.price.options.between50and100,
        },

        {
          id: "price-3",

          label:
            content.filters.price.options.over100,
        },

      ],
    },

  ];
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      search.trim() === ""
        ? true
        : product.title
          .toLowerCase()
          .includes(search.toLowerCase());

    // Categorías
    const categoryFilters =
      filterGroups
        .find(group => group.id === "categories")
        ?.options.map(option => option.id) ?? [];

    const selectedCategories =
      selectedFilters.filter(filter =>
        categoryFilters.includes(filter),
      );

    const matchesCategory =
      selectedCategories.length === 0
        ? true
        : product.category
          ? selectedCategories.includes(product.category.slug)
          : false;

    // Materiales
    const materialFilters =
      filterGroups
        .find(group => group.id === "materials")
        ?.options.map(option => option.id) ?? [];

    const selectedMaterials =
      selectedFilters.filter(filter =>
        materialFilters.includes(filter),
      );

    const matchesMaterial =
      selectedMaterials.length === 0
        ? true
        : product.materials?.some(material =>
          selectedMaterials.includes(material.slug),
        );

    // Disponibilidad
    const matchesAvailability =
      (
        !selectedFilters.includes("in-stock") ||
        (product.stock ?? 0) > 0
      ) &&
      (
        !selectedFilters.includes("made_to_order") ||
        product.availability === "made_to_order"
      );

    // Colección
    const matchesCollection =
      (
        !selectedFilters.includes("featured") ||
        product.featured
      ) &&
      (
        !selectedFilters.includes("newArrival") ||
        product.newArrival
      ) &&
      (
        !selectedFilters.includes("bestSeller") ||
        product.bestSeller
      );

    // Precio
    const price =
      product.priceCop ?? 0;

    const matchesPrice =
      (
        !selectedFilters.includes("price-1") ||
        price < 50000
      ) &&
      (
        !selectedFilters.includes("price-2") ||
        (price >= 50000 && price <= 100000)
      ) &&
      (
        !selectedFilters.includes("price-3") ||
        price > 100000
      );

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMaterial &&
      matchesAvailability &&
      matchesCollection &&
      matchesPrice
    );

  });

  const sortedProducts =

    [...filteredProducts];

  switch (sorting) {

    case "name-asc":

      sortedProducts.sort(

        (a, b) =>

          a.title.localeCompare(
            b.title,
          ),

      );

      break;

    case "name-desc":

      sortedProducts.sort(

        (a, b) =>

          b.title.localeCompare(
            a.title,
          ),

      );

      break;

    case "newest":

      sortedProducts.reverse();

      break;

    default:

      break;

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

    setSearch,

    sorting,

    setSorting,

    selectedFilters,

    handleFilterChange,

    filterGroups,

    filteredProducts,

    paginatedProducts,

    ...pagination,

  };

}