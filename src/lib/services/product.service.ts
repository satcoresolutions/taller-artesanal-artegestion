import {
  getProducts,
  getProductBySlug as fetchProductBySlug,
  getProductByDocumentId as fetchProductByDocumentId,
} from "@/lib/repositories/product.repository";

import {
  mapProduct,
} from "@/lib/mappers/product.mapper";

import type {
  ProductData,
} from "@/types/product.types";

export async function getAllProducts(
  locale = "es",
): Promise<ProductData[]> {

  const response =
    await getProducts(
      locale,
    );

  return response.data.map(
    (item: any) =>
      mapProduct(item),
  );

}

export async function getProductBySlug(
  slug: string,
  locale = "es",
): Promise<ProductData | null> {

  const response =
    await fetchProductBySlug(
      slug,
      locale,
    );

  const item =
    response.data?.[0];

  if (!item) {

    return null;

  }

  return mapProduct(
    item,
  );

}

export async function getProductByDocumentId(
  documentId: string,
  locale = "es",
): Promise<ProductData | null> {

  const response =
    await fetchProductByDocumentId(
      documentId,
      locale,
    );

  const item =
    response.data?.[0];

  if (!item) {

    return null;

  }

  return mapProduct(
    item,
  );

}