import {
  getMaterials,
  getMaterialBySlug,
  getMaterialsByCategory,
  getMaterialsByGroup,
} from "@/lib/repositories/material.repository";


import {
  mapMaterial,
} from "@/lib/mappers/material.mapper";


import type {
  MaterialData,
} from "@/types/material.types";



export async function getAllMaterials():
  Promise<MaterialData[]> {

  const response =
    await getMaterials();


  return response.data.map(
    (item: any) =>
      mapMaterial(item),
  );

}



export async function getMaterial(
  slug: string,
):
  Promise<MaterialData | null> {


  const response =
    await getMaterialBySlug(
      slug,
    );


  const item =
    response.data?.[0];


  if (!item) {

    return null;

  }


  return mapMaterial(item);

}




export async function getMaterialsByCategorySlug(
  slug: string,
):
  Promise<MaterialData[]> {


  const response =
    await getMaterialsByCategory(
      slug,
    );


  return response.data.map(
    (item: any) =>
      mapMaterial(item),
  );

}




export async function getMaterialsByGroupSlug(
  slug: string,
):
  Promise<MaterialData[]> {


  const response =
    await getMaterialsByGroup(
      slug,
    );


  return response.data.map(
    (item: any) =>
      mapMaterial(item),
  );

}