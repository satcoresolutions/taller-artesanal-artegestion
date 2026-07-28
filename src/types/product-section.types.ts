import type {
  Media,
} from "./media.types";

import type {
  SEO,
} from "./seo.types";

import type {
  ProductData,
} from "./product.types";

import type {
  ProductCategoryData,
} from "./product-category.types";

/* -------------------------------------------------------------------------- */
/*                              PRODUCT SECTION                               */
/* -------------------------------------------------------------------------- */

export type ProductSectionSlug =
  | "accessories"
  | "fashion"
  | "home"
  | "other";

export interface ProductSectionData {

  /* Identity */

  id: number;

  documentId: string;

  title: string;

  slug: string;

  /* Content */

  description?: unknown;

  icon?: Media | null;

  /* Configuration */

  order?: number;

  active?: boolean;

  /* Relations */

  categories?: ProductCategoryData[];

  products?: ProductData[];

  /* SEO */

  seo: SEO[];

}