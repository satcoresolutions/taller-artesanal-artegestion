import type {
  Media,
} from "./media.types";

import type {
  SEO,
} from "./seo.types";

import type {
  MaterialGroupData,
} from "./material-group.types";

import type {
  MaterialData,
} from "./material.types";


export interface MaterialCategoryData {


  /* ---------------------------------------------------------------------- */
  /* Identity                                                               */
  /* ---------------------------------------------------------------------- */


  id:number;

  documentId:string;


  title:string;

  slug:string;



  /* ---------------------------------------------------------------------- */
  /* Content                                                                */
  /* ---------------------------------------------------------------------- */


  description?:unknown;


  icon?:Media | null;



  /* ---------------------------------------------------------------------- */
  /* Configuration                                                          */
  /* ---------------------------------------------------------------------- */


  order?:number;


  active?:boolean;



  /* ---------------------------------------------------------------------- */
  /* Relations                                                              */
  /* ---------------------------------------------------------------------- */


  groups?:MaterialGroupData[];


  materials?:MaterialData[];



  /* ---------------------------------------------------------------------- */
  /* SEO                                                                    */
  /* ---------------------------------------------------------------------- */


  seo:SEO[];


}