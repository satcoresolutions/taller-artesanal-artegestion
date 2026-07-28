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


export async function getMaterials() {

  const response =
    await api.get(
      ENDPOINTS.materials,
      {
        params: buildQuery({
          populate: POPULATE.material,
        }),
      },
    );

  return response.data;

}


export async function getMaterialBySlug(
  slug: string,
) {

  const response =
    await api.get(
      ENDPOINTS.materials,
      {
        params: buildQuery({

          filters: {
            slug: {
              $eq: slug,
            },
          },

          populate: POPULATE.material,

        }),
      },
    );


  return response.data;

}


export async function getMaterialsByCategory(
  slug: string,
) {

  const response =
    await api.get(
      ENDPOINTS.materials,
      {
        params: buildQuery({

          filters: {

            category: {

              slug: {

                $eq: slug,

              },

            },

          },

          populate: POPULATE.material,

        }),
      },
    );


  return response.data;

}


export async function getMaterialsByGroup(
  slug: string,
) {

  const response =
    await api.get(
      ENDPOINTS.materials,
      {
        params: buildQuery({

          filters: {

            group: {

              slug: {

                $eq: slug,

              },

            },

          },

          populate: POPULATE.material,

        }),
      },
    );


  return response.data;

}