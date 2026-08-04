import type {
  MaterialData,
} from "./material.types";

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

/* -------------------------------------------------------------------------- */
/*                                    ENUMS                                   */
/* -------------------------------------------------------------------------- */

export type ProductType =
  | "craft"
  | "clothing"
  | "decoration"
  | "souvenir"
  | "other";

export type ProductAvailability =
  | "in_stock"
  | "made_to_order"
  | "one_of_a_kind"
  | "coming_soon"
  | "discontinued";

/* -------------------------------------------------------------------------- */
/*                              RELATED ENTITIES                              */
/* -------------------------------------------------------------------------- */

export interface ProductCategoryData {

  id: number;

  documentId: string;

  slug: string;

  title: string;

}



export interface ProductSectionData {

  id: number;

  documentId: string;

  slug: string;

  title: string;

}

/* -------------------------------------------------------------------------- */
/*                                  PRODUCT                                   */
/* -------------------------------------------------------------------------- */

export interface ProductData {

  /* ---------------------------------------------------------------------- */
  /* Identity                                                               */
  /* ---------------------------------------------------------------------- */

  id: number;

  documentId: string;

  sku: string;

  code?: string;

  barcode?: string;

  slug: string;

  /* ---------------------------------------------------------------------- */
  /* Content                                                                */
  /* ---------------------------------------------------------------------- */

  title: string;

  subtitle?: string;

  shortDescription?: string;

  description: unknown;

  /* ---------------------------------------------------------------------- */
  /* Media                                                                  */
  /* ---------------------------------------------------------------------- */

  cover: Media | null;

  gallery: Media[];

  /* ---------------------------------------------------------------------- */
  /* Physical Dimensions                                                    */
  /* ---------------------------------------------------------------------- */

  length?: number;

  width?: number;

  height?: number;

  weight?: number;

  /* ---------------------------------------------------------------------- */
  /* Pricing                                                                */
  /* ---------------------------------------------------------------------- */

  priceUsd?: number;

  priceCop?: number;

  comparePriceUsd?: number;

  comparePriceCop?: number;

  cost?: number;

  /* ---------------------------------------------------------------------- */
  /* Inventory                                                              */
  /* ---------------------------------------------------------------------- */

  stock?: number;

  reserved?: number;

  sold?: number;

  minStock?: number;

  /* ---------------------------------------------------------------------- */
  /* Commercial                                                             */
  /* ---------------------------------------------------------------------- */

  availability: ProductAvailability;

  allowBackorders: boolean;

  productionDays?: number;

  canReproduce: boolean;

  craftYear?: number;

  /* ---------------------------------------------------------------------- */
  /* Visibility                                                             */
  /* ---------------------------------------------------------------------- */

  visibleStore: boolean;

  visibleGallery: boolean;

  featured: boolean;

  newArrival: boolean;

  bestSeller: boolean;

  customizable: boolean;

  sortOrder: number;

  published: boolean;

  /* ---------------------------------------------------------------------- */
  /* Shared Components                                                      */
  /* ---------------------------------------------------------------------- */

  properties: Property[];

  sections: ContentSection[];

  seo: SEO[];

  variants: ProductVariant[];

  /* ---------------------------------------------------------------------- */
  /* Relations                                                              */
  /* ---------------------------------------------------------------------- */

  materials: MaterialData[];

  category: ProductCategoryData | null;

  section: ProductSectionData | null;

  relatedProducts: ProductData[];

  relatedTo: ProductData[];

}

/* -------------------------------------------------------------------------- */
/*                                  VARIANT                                   */
/* -------------------------------------------------------------------------- */

export interface ProductVariant {

  id: number;

  variant: string;

  cover: Media | null;

  gallery: Media[];

  stock: number;

  sortOrder?: number;

  active: boolean;

}