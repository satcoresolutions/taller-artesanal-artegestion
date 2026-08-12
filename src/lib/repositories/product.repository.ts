import { api } from "@/lib/api/client";

import {
  ENDPOINTS,
} from "@/lib/api/endpoints";

import {
  POPULATE,
} from "@/lib/api/populate";

import {
  buildQuery,
} from "@/lib/api/query";


export async function getProducts(
  locale = "es",
  page = 1,
  pageSize = 100,
) {

  const response =
    await api.get(
      ENDPOINTS.products,
      {
        params: buildQuery({

          locale,

          populate:
            POPULATE.productCard,

          pagination: {

            page,

            pageSize,

          },

        }),
      },
    );

  return response.data;

}


export async function getAllProductsFromRepository(
  locale = "es",
  pageSize = 100,
) {

  const firstResponse =
    await getProducts(
      locale,
      1,
      pageSize,
    );

  const allProducts = [
    ...firstResponse.data,
  ];

  const pagination =
    firstResponse.meta.pagination;

  const totalPages =
    pagination.pageCount;

  if (totalPages <= 1) {

    return {
      data: allProducts,
      meta: firstResponse.meta,
    };

  }

  for (
    let page = 2;
    page <= totalPages;
    page++
  ) {

    const response =
      await getProducts(
        locale,
        page,
        pageSize,
      );

    allProducts.push(
      ...response.data,
    );

  }

  return {

    data: allProducts,

    meta: {

      ...firstResponse.meta,

      pagination: {

        ...pagination,

        page: 1,

        pageSize:
          allProducts.length,

        pageCount: 1,

        total:
          allProducts.length,

      },

    },

  };

}


export async function getProductBySlug(
  slug: string,
  locale = "es",
) {

  const response =
    await api.get(
      ENDPOINTS.products,
      {
        params: buildQuery({

          locale,

          filters: {

            slug: {

              $eq: slug,

            },

          },

          populate:
            POPULATE.productDetail,

        }),
      },
    );

  return response.data;

}


export async function getProductByDocumentId(
  documentId: string,
  locale = "es",
) {

  const response =
    await api.get(
      ENDPOINTS.products,
      {
        params: buildQuery({

          locale,

          filters: {

            documentId: {

              $eq: documentId,

            },

          },

          populate:
            POPULATE.productDetail,

        }),
      },
    );

  return response.data;

}