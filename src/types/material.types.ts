import type {
  Media,
} from "./media.types";

import type {
  Property,
} from "./property.types";

import type {
  ContentSection,
} from "./content-section.types";

import type {
  SEO,
} from "./seo.types";

import type {
  ProductData,
} from "./product.types";

import type {
  MaterialCategoryData,
} from "./material-category.types";

import type {
  MaterialGroupData,
} from "./material-group.types";



/* -------------------------------------------------------------------------- */
/*                                  MATERIAL                                  */
/* -------------------------------------------------------------------------- */


export interface MaterialData {


  /* Identity */

  id:number;

  documentId:string;

  slug:string;



  /* Content */


  title:string;

  subtitle?:string;

  description:unknown;



  /* Media */


  cover: Media | null;

  gallery:Media[];



  /* Components */


  properties:Property[];

  sections:ContentSection[];

  seo:SEO[];



  /* Relations */


  category:MaterialCategoryData | null;

  group:MaterialGroupData | null;


  products:ProductData[];


}