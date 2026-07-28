export const POPULATE = {

  material: {

    cover: true,

    gallery: true,

    category: true,

    group: true,

    products: true,

    properties: true,

    sections: true,

    seo: true,

  },

  materialCategory: {

    icon: true,

    groups: {

      populate: {

        materials: {

          populate: {

            cover: true,

            gallery: true,

            properties: true,

            sections: true,

          },

        },

      },

    },

    seo: true,

  },

  materialGroup: {

    category: true,

    materials: true,

    seo: true,

  },

 product: {
  cover: true,
  gallery: true,
  category: true,
  section: true,
  materials: true,

  relatedProducts: {
    populate: {
      cover: true,
      gallery: true,
      category: true,
      section: true,
      materials: true,
      properties: true,
      sections: true,
      seo: true,
    },
  },

  relatedTo: {
    populate: {
      cover: true,
      gallery: true,
      category: true,
      section: true,
      materials: true,
      properties: true,
      sections: true,
      seo: true,
    },
  },

  properties: true,
  sections: true,
  seo: true,
},

  productCategory: {

    icon: true,

    products: true,

    seo: true,

  },

  productSection: {

    products: true,

    seo: true,

  },

} as const;