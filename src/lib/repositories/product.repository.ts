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
) {

  const response =
    await api.get(
      ENDPOINTS.products,
      {
        params: buildQuery({

          locale,

          populate:
            POPULATE.product,

        }),
      },
    );

  return response.data;

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
            POPULATE.product,

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
            POPULATE.product,

        }),
      },
    );

  return response.data;

}