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

    // Productos utilizados en el catálogo
    productCard: {
        cover: true,
        category: true,
        section: true,
        materials: true,
    },

    // Productos relacionados
    productRelation: {
        cover: true,
        category: true,
        section: true,
    },

    // Producto completo
    productDetail: {
        cover: true,
        gallery: true,
        category: true,
        section: true,
        materials: true,

        variants: {
            populate: {
                cover: true,
                gallery: true,
            },
        },

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