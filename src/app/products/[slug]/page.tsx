import { notFound } from "next/navigation";

import ProductPageClient
  from "@/components/modules/products/[slug]/ProductPageClient";

import {
  getProductBySlug,
} from "@/lib/services/product.service";

interface ProductPageProps {

  params: Promise<{
    slug: string;
  }>;

}

export default async function ProductPage({

  params,

}: ProductPageProps) {

  const {

    slug,

  } = await params;

  const product =
    await getProductBySlug(
      slug,
    );

  if (!product) {

    notFound();

  }

  return (

    <main
      className="
    container
    py-20
  "
    >

      <ProductPageClient
        initialProduct={product}
        slug={slug}
      />

    </main>

  );

}