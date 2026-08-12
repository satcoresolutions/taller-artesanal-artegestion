import {
  getProducts,
  getAllProductsFromRepository,
  getProductBySlug as fetchProductBySlug,
  getProductByDocumentId as fetchProductByDocumentId,
} from "@/lib/repositories/product.repository";

import {
  mapProduct,
} from "@/lib/mappers/product.mapper";

import type {
  ProductData,
} from "@/types/product.types";


interface ProductPagination {

  page: number;

  pageSize: number;

  pageCount: number;

  total: number;

}


interface PaginatedProducts {

  products: ProductData[];

  pagination: ProductPagination;

}


/**
 * Productos paginados.
 *
 * Esta función se utiliza para el
 * catálogo principal.
 *
 * La paginación se mantiene en Strapi.
 */
export async function getProductsPage(
  locale = "es",
  page = 1,
  pageSize = 24,
): Promise<PaginatedProducts> {

  const response =
    await getProducts(
      locale,
      page,
      pageSize,
    );

  return {

    products:
      response.data.map(
        (item: any) =>
          mapProduct(item),
      ),

    pagination:
      response.meta.pagination,

  };

}


/**
 * Obtiene todos los productos.
 *
 * El repository se encarga de realizar
 * las peticiones necesarias para obtener
 * todas las páginas de Strapi.
 *
 * Esto evita el límite de 100 productos
 * por petición.
 */
export async function getAllProducts(
  locale = "es",
): Promise<ProductData[]> {

  const response =
    await getAllProductsFromRepository(
      locale,
    );

  return response.data.map(
    (item: any) =>
      mapProduct(item),
  );

}


/**
 * Producto por slug.
 */
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


/**
 * Producto por documentId.
 */
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