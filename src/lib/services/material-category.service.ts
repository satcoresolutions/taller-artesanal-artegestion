import {
  getMaterialCategories,
  getMaterialCategoryBySlug,
} from "@/lib/repositories/material-category.repository";


import {
  mapMaterialCategory,
} from "@/lib/mappers/material-category.mapper";


import type {
  MaterialCategoryData,
} from "@/types/material-category.types";



export async function getAllMaterialCategories():

Promise<MaterialCategoryData[]> {


  const response =
    await getMaterialCategories();


  return response.data.map(
    (item:any) =>
      mapMaterialCategory(item),
  );

}



export async function getMaterialCategory(
  slug:string,
):
Promise<MaterialCategoryData | null> {


  const response =
    await getMaterialCategoryBySlug(
      slug,
    );


  const item =
    response.data?.[0];


  if (!item) {

    return null;

  }


  return mapMaterialCategory(item);

}