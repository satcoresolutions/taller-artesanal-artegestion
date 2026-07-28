import type {
  MaterialCategoryData,
} from "@/types/material-category.types";

import {
  mapMaterialGroup,
} from "./material-group.mapper";


export function mapMaterialCategory(
  data: any,
): MaterialCategoryData {


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



    icon:
      data.icon
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


    groups:
      data.groups?.map(
        mapMaterialGroup,
      ) ?? [],



    materials:
      data.materials
      ?? [],



    seo:
      data.seo
      ?? [],



  };

}
