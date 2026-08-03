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

  // Productos para tarjetas (catálogo)
  productCard: {
    cover: true,
    category: true,
    section: true,
  },

  // Productos que aparecen como relacionados
  productRelation: {
    cover: true,
    category: true,
    section: true,
  },

  // Producto completo (detalle)
  productDetail: {
    cover: true,
    gallery: true,
    category: true,
    section: true,
    materials: true,

    relatedProducts: {
      populate: {
        cover: true,
        category: true,
        section: true,
      },
    },

    relatedTo: {
      populate: {
        cover: true,
        category: true,
        section: true,
      },
    },

    properties: true,
    sections: true,
    seo: true,
  },

  productCategory: {
    icon: true,
    products: {
      populate: {
        cover: true,
      },
    },
    seo: true,
  },

  productSection: {
    products: {
      populate: {
        cover: true,
      },
    },
    seo: true,
  },

} as const;