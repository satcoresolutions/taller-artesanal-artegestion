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


export async function getMaterialCategories() {


  const response =
    await api.get(
      ENDPOINTS.materialCategories,
      {
        params: buildQuery({

          populate:
            POPULATE.materialCategory,

        }),
      },
    );


  return response.data;

}



export async function getMaterialCategoryBySlug(
  slug: string,
) {


  const response =
    await api.get(
      ENDPOINTS.materialCategories,
      {
        params: buildQuery({

          filters: {

            slug: {

              $eq: slug,

            },

          },

          populate:
            POPULATE.materialCategory,

        }),
      },
    );


  return response.data;

}