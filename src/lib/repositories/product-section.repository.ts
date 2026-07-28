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


export async function getProductSections() {


  const response =
    await api.get(
      ENDPOINTS.productSections,
      {
        params: buildQuery({

          populate:
            POPULATE.productSection,

        }),
      },
    );


  return response.data;

}



export async function getProductSectionBySlug(
  slug: string,
) {


  const response =
    await api.get(
      ENDPOINTS.productSections,
      {
        params: buildQuery({

          filters: {

            slug: {

              $eq: slug,

            },

          },

          populate:
            POPULATE.productSection,

        }),
      },
    );


  return response.data;

}