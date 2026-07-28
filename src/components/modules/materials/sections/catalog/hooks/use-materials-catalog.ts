"use client";

import {
  useMaterialsCatalogContext,
} from "../context/materials-catalog-context";


export default function useMaterialsCatalog() {

  return useMaterialsCatalogContext();

}