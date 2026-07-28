"use client";

import Button
  from "@/components/ui/button";

import {
  useLanguage,
} from "@/hooks/use-language";

const content = {
  en: {
    button: "View All Products",
  },

  es: {
    button: "Ver Todos los Productos",
  },

  pt: {
    button: "Ver Todos os Produtos",
  },
} as const;

export default function FeaturedProductsActions() {
  const lang =
    useLanguage();

  return (
    <div
      className="
        mt-12
        flex
        justify-center
      "
    >
      <Button
        href="/products"
        variant="primary"
      >
        {content[lang].button}
      </Button>
    </div>
  );
}