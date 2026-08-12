import type {
  ProductAvailability,
} from "@/types/product.types";


/* -------------------------------------------------------------------------- */
/*                               STOCK FILTER                                 */
/* -------------------------------------------------------------------------- */

export type ProductStockFilter =
  | "in_stock"
  | "out_of_stock";


/* -------------------------------------------------------------------------- */
/*                              FILTER GROUPS                                 */
/* -------------------------------------------------------------------------- */

export type ProductFilterGroup =
  | "categories"
  | "materials"
  | "availability"
  | "stock"
  | "collection"
  | "price";


/* -------------------------------------------------------------------------- */
/*                              FILTER OPTION                                 */
/* -------------------------------------------------------------------------- */

export interface ProductFilterOption {

  id: string;

  label: string;

}


/* -------------------------------------------------------------------------- */
/*                            FILTER GROUP DATA                               */
/* -------------------------------------------------------------------------- */

export interface ProductFilterGroupData {

  id:
    ProductFilterGroup;

  title:
    string;

  options:
    ProductFilterOption[];

}


/* -------------------------------------------------------------------------- */
/*                               PRODUCT FILTERS                              */
/* -------------------------------------------------------------------------- */

export interface ProductFilters {

  categories:
    string[];

  materials:
    string[];

  availability:
    ProductAvailability[];

  stock:
    ProductStockFilter[];

  collection:
    string[];

  price:
    string[];

}