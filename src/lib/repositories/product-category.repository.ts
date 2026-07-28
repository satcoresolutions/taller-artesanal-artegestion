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


export async function getProductCategories() {


  const response =
    await api.get(
      ENDPOINTS.productCategories,
      {
        params: buildQuery({

          populate:
            POPULATE.productCategory,

        }),
      },
    );


  return response.data;

}



export async function getProductCategoryBySlug(
  slug: string,
) {


  const response =
    await api.get(
      ENDPOINTS.productCategories,
      {
        params: buildQuery({

          filters: {

            slug: {

              $eq: slug,

            },

          },

          populate:
            POPULATE.productCategory,

        }),
      },
    );


  return response.data;

}