"use client";

import {
  useState,
} from "react";

import type {
  ProductFilterGroup,
  ProductFilters,
} from "../types/catalog.types";


const initialFilters:
  ProductFilters = {

  categories: [],

  materials: [],

  availability: [],

  stock: [],

  collection: [],

  price: [],

};


export default function useProductsFilters() {

  const [
    filters,
    setFilters,
  ] = useState<ProductFilters>(
    initialFilters,
  );


  const handleFilterChange = (
    groupId: ProductFilterGroup,
    filterId: string,
  ) => {

    setFilters(
      previousFilters => {

        const currentFilters =
          previousFilters[groupId];

        const isSelected =
          currentFilters.some(
            id =>
              id === filterId,
          );

        return {

          ...previousFilters,

          [groupId]:
            isSelected

              ? currentFilters.filter(
                  id =>
                    id !== filterId,
                )

              : [
                  ...currentFilters,
                  filterId,
                ],

        };

      },
    );

  };


  return {

    filters,

    handleFilterChange,

  };

}