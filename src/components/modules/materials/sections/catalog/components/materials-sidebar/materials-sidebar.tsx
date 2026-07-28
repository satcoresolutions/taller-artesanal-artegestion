"use client";

import { useMemo } from "react";

import clsx from "clsx";

import type {
  MaterialsSidebarProps,
} from "./types/materials-sidebar.types";


import useMaterialsCatalog
  from "../../hooks/use-materials-catalog";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  materialsSidebarContent,
} from "./content/materials-sidebar.content";

export default function MaterialsSidebar({

  className,

}: MaterialsSidebarProps) {

  const lang =
    useLanguage();

  const content =
    materialsSidebarContent[lang];

  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedGroup,
    setSelectedGroup,
    selectedMaterial,
    setSelectedMaterial,
  }
    = useMaterialsCatalog();

  const sortedCategories = useMemo(() => {

    return categories
      .filter((category) => (category.groups?.length ?? 0) > 0)
      .sort((a, b) =>
        a.title.localeCompare(
          b.title,
          "es",
          {
            sensitivity: "base",
          },
        ),
      );

  }, [categories]);

  return (

    <aside

      className={clsx(

        `
        rounded-xl
        border
        border-surface-secondary
        bg-surface
        p-6
        space-y-8

        xl:sticky
        xl:top-24
        xl:h-[calc(100vh-8rem)]
        xl:overflow-y-auto
        `,

        className,

      )}

    >

      <div>


        <h3

          className="
          text-xl
          font-semibold
          text-center
          "

        >

          {content.title}

        </h3>


        <p

          className="
          mt-2
          text-sm
          text-text-muted
          "

        >

          {content.description}

        </p>


      </div>



      <div

        className="
        space-y-6
        "

      >


        {sortedCategories.map((category) => (


          <div

            key={category.id}

            className="
            space-y-4
            "

          >


            <button

              type="button"

              onClick={() =>
                setSelectedCategory(category)
              }

              className="
              text-sm
              font-semibold
              uppercase
              text-text-secondary
              "

            >

              {category.title}


            </button>



            {selectedCategory?.id === category.id && (


              <div

                className="
                space-y-3
                border-l
                border-surface-secondary
                pl-4
                "

              >


                {[...(selectedCategory?.groups ?? [])]
                  .sort((a, b) =>
                    a.title.localeCompare(
                      b.title,
                      "es",
                      {
                        sensitivity: "base",
                      },
                    ),
                  )
                  .map((group) => (


                    <div

                      key={group.id}

                      className="
                    space-y-2
                    "

                    >


                      <button

                        type="button"

                        onClick={() =>
                          setSelectedGroup(
                            selectedGroup?.id === group.id
                              ? null
                              : group,
                          )
                        }

                        className="
                      flex
                      w-full
                      items-center
                      justify-between
                      text-left
                      text-sm
                      font-medium
                      text-text-primary
                      "

                      >

                        <span>

                          {group.title}

                        </span>


                        <span>

                          {
                            selectedGroup?.id === group.id
                              ? "−"
                              : "+"
                          }

                        </span>


                      </button>



                      {selectedGroup?.id === group.id && (


                        <div

                          className="
                        max-h-72
                        overflow-y-auto
                        space-y-2
                        pl-4
                        "

                        >


                          {[...(selectedGroup?.materials ?? [])]
                            .sort((a, b) =>
                              a.title.localeCompare(
                                b.title,
                                "es",
                                {
                                  sensitivity: "base",
                                },
                              ),
                            )
                            .map((material) => (


                              <button

                                key={material.id}

                                type="button"

                                onClick={() =>
                                  setSelectedMaterial(material)
                                }

                                className={clsx(

                                  `
                              block
                              w-full
                              text-left
                              text-sm
                              `,

                                  selectedMaterial?.id === material.id

                                    ?

                                    `
                                font-semibold
                                text-text-primary
                                `

                                    :

                                    `
                                text-text-secondary
                                `,

                                )}

                              >

                                {material.title}


                              </button>


                            ))}


                        </div>


                      )}


                    </div>


                  ))}


              </div>


            )}


          </div>


        ))}


      </div>


    </aside>


  );

}