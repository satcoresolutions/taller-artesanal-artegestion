

import type {
  ProductCategoryData,
} from "@/types/product.types";


export function mapProductCategory(
  data:any,
):ProductCategoryData {


  return {

    id:
      data.id,

    documentId:
      data.documentId,

    slug:
      data.slug,

    title:
      data.title,

  };

}