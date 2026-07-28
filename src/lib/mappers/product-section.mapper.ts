import type {
  ProductSectionData,
} from "@/types/product.types";


export function mapProductSection(
  data:any,
):ProductSectionData {


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