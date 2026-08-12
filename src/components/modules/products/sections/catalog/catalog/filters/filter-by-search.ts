import type {
    ProductData,
} from "@/types/product.types";

export function filterBySearch(
    product: ProductData,
    search: string,
): boolean {

    const normalizedSearch =
        search.trim().toLowerCase();

    if (normalizedSearch === "") {
        return true;
    }

    return product.title
        .toLowerCase()
        .includes(normalizedSearch);
}