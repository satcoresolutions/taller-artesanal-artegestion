import type {
    ProductData,
} from "@/types/product.types";

import type {
    ProductVariant,
} from "@/types/product.types";

import {
    mapMedia,
} from "./media.mapper";

import {
    mapProductCategory,
} from "./product-category.mapper";

import {
    mapProductSection,
} from "./product-section.mapper";


export function mapProduct(
    data: any,
): ProductData {
    return {


        id:
            data.id,


        documentId:
            data.documentId,


        sku:
            data.sku,


        code:
            data.code
            ?? "",


        barcode:
            data.barcode
            ?? "",

        craftYear:
            data.craftYear,

        slug:
            data.slug,


        title:
            data.title,


        subtitle:
            data.subtitle
            ?? "",


        shortDescription:
            data.shortDescription
            ?? "",


        description:
            data.description
            ?? null,

        variants:
            data.variants,


        cover:
            mapMedia(
                data.cover,
            ),


        gallery:
            data.gallery?.map(
                mapMedia,
            )
            ??
            [],



        length:
            data.length,


        width:
            data.width,


        height:
            data.height,


        weight:
            data.weight,



        priceUsd:
            data.priceUsd,


        priceCop:
            data.priceCop,



        availability:
            data.availability,


        allowBackorders:
            data.allowBackorders,


        productionDays:
            data.productionDays,


        canReproduce:
            data.canReproduce,

        /* Inventory */

        stock:
            data.stock,

        reserved:
            data.reserved,

        sold:
            data.sold,

        minStock:
            data.minStock,


        visibleStore:
            data.visibleStore,


        visibleGallery:
            data.visibleGallery,


        featured:
            data.featured,


        newArrival:
            data.newArrival,


        bestSeller:
            data.bestSeller,


        customizable:
            data.customizable,


        sortOrder:
            data.sortOrder,


        published:
            data.published,



        properties:
            data.properties
            ?? [],


        sections:
            data.sections
            ?? [],


        materials:
            data.materials
            ?? [],



        category:
            data.category
                ? mapProductCategory(
                    data.category,
                )
                : null,

        section:
            data.section
                ? mapProductSection(
                    data.section,
                )
                : null,



        relatedProducts:
            data.relatedProducts
            ?? [],


        relatedTo:
            data.relatedTo
            ?? [],



        seo:
            data.seo
            ?? [],


    };

}