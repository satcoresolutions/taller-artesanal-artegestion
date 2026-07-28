import type {
  MaterialGroupData,
} from "@/types/material-group.types";

import {
  mapMaterial,
} from "./material.mapper";


export function mapMaterialGroup(
  data: any,
): MaterialGroupData {


  return {


    /* ---------------------------------------------------------------------- */
    /* Identity                                                               */
    /* ---------------------------------------------------------------------- */


    id:
      data.id,


    documentId:
      data.documentId,


    slug:
      data.slug,


    title:
      data.title,



    /* ---------------------------------------------------------------------- */
    /* Content                                                                */
    /* ---------------------------------------------------------------------- */


    description:
      data.description
      ?? null,



    order:
      data.order
      ?? 0,


    active:
      data.active
      ?? true,



    /* ---------------------------------------------------------------------- */
    /* Relations                                                              */
    /* ---------------------------------------------------------------------- */


    category:
      data.category
      ?? null,



    materials:
      data.materials?.map(
        mapMaterial,
      ) ?? [],



    seo:
      data.seo
      ?? [],



  };

}