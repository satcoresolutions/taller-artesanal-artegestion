import type {
  MaterialData,
} from "@/types/material.types";

import {
  mapMedia,
} from "./media.mapper";


export function mapMaterial(
  data: any,
): MaterialData {

  console.log("MAP MATERIAL EJECUTADO");

  return  {


    /* ---------------------------------------------------------------------- */
    /* Identity                                                               */
    /* ---------------------------------------------------------------------- */


    id:
      data.id,


    documentId:
      data.documentId,


    slug:
      data.slug,



    /* ---------------------------------------------------------------------- */
    /* Content                                                                */
    /* ---------------------------------------------------------------------- */


    title:
      data.title,


    subtitle:
      data.subtitle
      ?? "",


    description:
      data.description
      ?? null,



    /* ---------------------------------------------------------------------- */
    /* Media                                                                  */
    /* ---------------------------------------------------------------------- */


    cover:
      mapMedia(data.cover),

    gallery:
      data.gallery?.map(
        mapMedia,
      ) ?? [],



    /* ---------------------------------------------------------------------- */
    /* Components                                                             */
    /* ---------------------------------------------------------------------- */


    properties:

      data.properties?.map(
        (property: any) => ({

          label:
            property.label,


          value:
            property.value,


          icon:
            property.icon
            ?? null,

        }),
      )
      ??
      [],



    sections:

      data.sections?.map(
        (section: any) => ({


          title:
            section.title,


          type:
            section.type,


          icon:
            section.icon
            ?? "",


          paragraphs:
            section.paragraphs
            ?? [],


          items:
            section.items
            ?? [],


          steps:
            section.steps
            ?? [],


          image:
            section.image
            ?? null,


          order:
            section.order
            ?? 0,


          active:
            section.active
            ?? true,


        }),
      )
      ??
      [],




    seo:

      data.seo
      ??
      [],




    /* ---------------------------------------------------------------------- */
    /* Relations                                                              */
    /* ---------------------------------------------------------------------- */


    category:

      data.category
      ??
      null,



    group:

      data.group
      ??
      null,



    products:

      data.products?.map(
        (product: any) => product,
      )
      ??
      [],


  };

}