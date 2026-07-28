import type {
  SEO,
} from "./seo.types";

import type {
  ProductData,
} from "./product.types";

import type {
  ProductSectionData,
} from "./product-section.types";

/* -------------------------------------------------------------------------- */
/*                             PRODUCT CATEGORY                               */
/* -------------------------------------------------------------------------- */

export type ProductCategorySlug =
  | "rings"
  | "earrings"
  | "pendants"
  | "necklaces"
  | "sets"
  | "headbands"
  | "gnomes"
  | "wall-hangings"
  | "bracelets"
  | "other";

export interface ProductCategoryData {

  /* Identity */

  id: number;

  documentId: string;

  title: string;

  slug: string;

  /* Content */

  description?: unknown;

  /* Configuration */

  order: number;

  active: boolean;

  /* Relations */

  section?: ProductSectionData | null;

  products?: ProductData[];

  /* SEO */

  seo: SEO[];

}