"use client";

import { useMemo } from "react";

import type {
    ProductData,
    ProductAvailability,
} from "@/types/product.types";

import type {
    ProductFilterGroupData,
    ProductStockFilter,
} from "../types/catalog.types";

interface UseProductFilterOptionsProps {
    products: ProductData[];
    content: any;
}

const availabilityOptions: ProductAvailability[] = [
    "made_to_order",
    "one_of_a_kind",
    "coming_soon",
    "discontinued",
];

const stockOptions: ProductStockFilter[] = [
    "in_stock",
    "out_of_stock",
];

export default function useProductFilterOptions({
    products,
    content,
}: UseProductFilterOptionsProps) {

    const categories = useMemo(() => {
        return Array.from(
            new Map(
                products
                    .filter(
                        product =>
                            product.category !== null,
                    )
                    .map(product => [
                        product.category!.slug,
                        product.category!,
                    ]),
            ).values(),
        );
    }, [products]);

    const materials = useMemo(() => {
        return Array.from(
            new Map(
                products
                    .flatMap(
                        product =>
                            product.materials ?? [],
                    )
                    .map(material => [
                        material.slug,
                        material,
                    ]),
            ).values(),
        );
    }, [products]);

    const filterGroups: ProductFilterGroupData[] = [
        {
            id: "categories",

            title:
                content.filters.categories.title,

            options:
                categories.map(category => ({
                    id: category.slug,
                    label: category.title,
                })),
        },

        {
            id: "materials",

            title:
                content.filters.materials.title,

            options:
                materials.map(material => ({
                    id: material.slug,
                    label: material.title,
                })),
        },

        {
            id: "availability",

            title:
                content.filters.availability.title,

            options:
                availabilityOptions.map(
                    availability => ({
                        id: availability,

                        label:
                            content.filters
                                .availability
                                .options[
                                    availability
                                ],
                    }),
                ),
        },

        {
            id: "stock",

            title:
                content.filters.stock.title,

            options:
                stockOptions.map(
                    stock => ({
                        id: stock,

                        label:
                            content.filters
                                .stock
                                .options[
                                    stock
                                ],
                    }),
                ),
        },

        {
            id: "collection",

            title:
                content.filters.collection.title,

            options: [
                {
                    id: "featured",
                    label:
                        content.filters
                            .collection
                            .options
                            .featured,
                },

                {
                    id: "newArrival",
                    label:
                        content.filters
                            .collection
                            .options
                            .newArrival,
                },

                {
                    id: "bestSeller",
                    label:
                        content.filters
                            .collection
                            .options
                            .bestSeller,
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
                        content.filters
                            .price
                            .options
                            .under50,
                },

                {
                    id: "price-2",
                    label:
                        content.filters
                            .price
                            .options
                            .between50and100,
                },

                {
                    id: "price-3",
                    label:
                        content.filters
                            .price
                            .options
                            .over100,
                },
            ],
        },
    ];

    return {
        categories,
        materials,
        filterGroups,
    };
}