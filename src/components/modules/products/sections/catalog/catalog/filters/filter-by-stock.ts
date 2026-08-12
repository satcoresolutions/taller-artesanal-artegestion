import type {
    ProductData,
} from "@/types/product.types";

import type {
    ProductStockFilter,
} from "../types/catalog.types";

export function filterByStock(
    product: ProductData,
    selectedStock: ProductStockFilter[],
): boolean {

    if (selectedStock.length === 0) {
        return true;
    }

    const stock = product.stock ?? 0;

    const isInStock =
        stock > 0;

    const isOutOfStock =
        stock <= 0;

    return selectedStock.some(
        filter => {

            if (
                filter === "in_stock"
            ) {
                return isInStock;
            }

            if (
                filter === "out_of_stock"
            ) {
                return isOutOfStock;
            }

            return false;
        },
    );
}