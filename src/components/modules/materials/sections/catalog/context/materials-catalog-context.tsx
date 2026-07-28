"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import type {
  ReactNode,
} from "react";

import type {
  MaterialData,
} from "@/types/material.types";

import type {
  MaterialCategoryData,
} from "@/types/material-category.types";

import type {
  MaterialGroupData,
} from "@/types/material-group.types";

interface MaterialsCatalogContextType {

  categories: MaterialCategoryData[];

  selectedCategory:
    MaterialCategoryData | null;

  setSelectedCategory:
    (
      category: MaterialCategoryData | null,
    ) => void;

  selectedGroup:
    MaterialGroupData | null;

  setSelectedGroup:
    (
      group: MaterialGroupData | null,
    ) => void;

  selectedMaterial:
    MaterialData | null;

  setSelectedMaterial:
    (
      material: MaterialData | null,
    ) => void;

}

const MaterialsCatalogContext =
  createContext<
    MaterialsCatalogContextType | undefined
  >(undefined);

interface ProviderProps {

  categories: MaterialCategoryData[];

  initialMaterialSlug?: string | null;

  children: ReactNode;

}

export function MaterialsCatalogProvider({

  categories,

  initialMaterialSlug,

  children,

}: ProviderProps) {

  const router =
    useRouter();

  const pathname =
    usePathname();

  const initialSelection =
    useMemo(() => {

      if (!initialMaterialSlug) {

        return null;

      }

      for (const category of categories) {

        for (const group of category.groups ?? []) {

          for (const material of group.materials ?? []) {

            if (

              material.slug === initialMaterialSlug

            ) {

              return {

                category,

                group,

                material,

              };

            }

          }

        }

      }

      return null;

    }, [

      categories,

      initialMaterialSlug,

    ]);

  const [

    selectedCategory,

    setSelectedCategory,

  ] =
    useState<MaterialCategoryData | null>(

      initialSelection?.category

      ??

      categories[0]

      ??

      null,

    );

  const [

    selectedGroup,

    setSelectedGroup,

  ] =
    useState<MaterialGroupData | null>(

      initialSelection?.group

      ??

      categories[0]?.groups?.[0]

      ??

      null,

    );

  const [

    selectedMaterial,

    internalSetSelectedMaterial,

  ] =
    useState<MaterialData | null>(

      initialSelection?.material

      ??

      categories[0]
        ?.groups?.[0]
        ?.materials?.[0]

      ??

      null,

    );

  function setSelectedMaterial(

    material: MaterialData | null,

  ) {

    internalSetSelectedMaterial(
      material,
    );

    if (!material) {

      return;

    }

    router.replace(

      `${pathname}?material=${material.slug}`,

      {

        scroll: false,

      },

    );

  }

  return (

    <MaterialsCatalogContext.Provider

      value={{

        categories,

        selectedCategory,

        setSelectedCategory,

        selectedGroup,

        setSelectedGroup,

        selectedMaterial,

        setSelectedMaterial,

      }}

    >

      {children}

    </MaterialsCatalogContext.Provider>

  );

}

export function useMaterialsCatalogContext() {

  const context =
    useContext(
      MaterialsCatalogContext,
    );

  if (!context) {

    throw new Error(
      "useMaterialsCatalogContext must be used inside MaterialsCatalogProvider",
    );

  }

  return context;

}