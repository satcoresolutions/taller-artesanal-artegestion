import {
  getProductSections,
  getProductSectionBySlug,
} from "@/lib/repositories/product-section.repository";


import {
  mapProductSection,
} from "@/lib/mappers/product-section.mapper";


import type {
  ProductSectionData,
} from "@/types/product.types";



export async function getAllProductSections():

Promise<ProductSectionData[]> {


  const response =
    await getProductSections();


  return response.data.map(
    (item:any) =>
      mapProductSection(item),
  );

}




export async function getProductSection(
  slug:string,
):
Promise<ProductSectionData | null> {


  const response =
    await getProductSectionBySlug(
      slug,
    );


  const item =
    response.data?.[0];


  if (!item) {

    return null;

  }


  return mapProductSection(
    item,
  );

}