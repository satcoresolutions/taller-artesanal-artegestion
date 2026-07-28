import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import FeaturedProductsContent
  from "./components/featured-products-content";

import FeaturedProductsGrid
  from "./components/featured-products-grid";

import FeaturedProductsActions
  from "./components/featured-products-actions";

import {
  getAllProducts,
} from "@/lib/services/product.service";

export default async function FeaturedProducts() {

  const products =
    await getAllProducts();
  console.log("TOTAL:", products.length);

  console.log(
    products.map((p) => ({
      title: p.title,
      featured: p.featured,
    })),
  );
  const featuredProducts =
    products
      .filter(
        (product) => product.featured,
      )
      .slice(0, 4);

  return (

    <Section
      id="featured-products"
      spacing="xl"
      className="my-10"
    >

      <Container>

        <FeaturedProductsContent />

        <FeaturedProductsGrid
          products={featuredProducts}
        />

        <FeaturedProductsActions />

      </Container>

    </Section>

  );

}