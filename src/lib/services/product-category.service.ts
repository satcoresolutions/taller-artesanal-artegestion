import {
  getProductCategories,
  getProductCategoryBySlug,
} from "@/lib/repositories/product-category.repository";


import {
  mapProductCategory,
} from "@/lib/mappers/product-category.mapper";


import type {
  ProductCategoryData,
} from "@/types/product.types";


export async function getAllProductCategories():

Promise<ProductCategoryData[]> {


  const response =
    await getProductCategories();


  return response.data.map(
    (item:any) =>
      mapProductCategory(item),
  );

}



export async function getProductCategory(
  slug:string,
):
Promise<ProductCategoryData | null> {


  const response =
    await getProductCategoryBySlug(
      slug,
    );


  const item =
    response.data?.[0];


  if (!item) {

    return null;

  }


  return mapProductCategory(
    item,
  );

}