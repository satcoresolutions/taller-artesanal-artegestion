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


export async function getMaterialGroups() {


  const response =
    await api.get(
      ENDPOINTS.materialGroups,
      {
        params: buildQuery({

          populate:
            POPULATE.materialGroup,

        }),
      },
    );


  return response.data;

}



export async function getMaterialGroupBySlug(
  slug: string,
) {


  const response =
    await api.get(
      ENDPOINTS.materialGroups,
      {
        params: buildQuery({

          filters: {

            slug: {

              $eq: slug,

            },

          },

          populate:
            POPULATE.materialGroup,

        }),
      },
    );


  return response.data;

}