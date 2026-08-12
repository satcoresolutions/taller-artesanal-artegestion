
import type {
    ProductData,
} from "@/types/product.types";

import type {
    ProductFilters,
} from "../types/catalog.types";

import {
    filterBySearch,
} from "./filter-by-search";

import {
    filterByCategory,
} from "./filter-by-category";

import {
    filterByMaterial,
} from "./filter-by-material";

import {
    filterByAvailability,
} from "./filter-by-availability";

import {
    filterByStock,
} from "./filter-by-stock";

import {
    filterByCollection,
} from "./filter-by-collection";

import {
    filterByPrice,
} from "./filter-by-price";


interface FilterProductsParams {

    products: ProductData[];

    search: string;

    filters: ProductFilters;

}


export function filterProducts({
    products,
    search,
    filters,
}: FilterProductsParams): ProductData[] {

    return products.filter(
        product =>

            filterBySearch(
                product,
                search,
            )

            &&

            filterByCategory(
                product,
                filters.categories,
            )

            &&

            filterByMaterial(
                product,
                filters.materials,
            )

            &&

            filterByAvailability(
                product,
                filters.availability,
            )

            &&

            filterByStock(
                product,
                filters.stock,
            )

            &&

            filterByCollection(
                product,
                filters.collection,
            )

            &&

            filterByPrice(
                product,
                filters.price,
            ),
    );
}