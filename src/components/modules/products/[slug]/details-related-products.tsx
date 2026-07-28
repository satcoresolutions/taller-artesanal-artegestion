"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { detailsRelatedProductsContent } from "./details/content/details-related-products.content";
import ProductCard from "@/components/modules/products/sections/catalog/product-card";
import type { ProductData } from "@/types/product.types";

interface DetailsRelatedProductsProps {
  product: ProductData;
}

export default function DetailsRelatedProducts({
  product,
}: DetailsRelatedProductsProps) {
  const lang = useLanguage();
  const content = detailsRelatedProductsContent[lang];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
    );

    // Detecta qué card está más visible para el indicador
    const cardWidth = el.firstElementChild?.clientWidth ?? 1;
    const index = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild?.clientWidth ?? 0;
    el.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild?.clientWidth ?? 0;
    el.scrollTo({
      left: index * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  if (product.relatedProducts.length === 0) {
    return null;
  }

  return (
    <Section className="p-10">
      <Card variant="outlined" className="p-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2>{content.title}</h2>
              <p
                className="mt-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {content.description}
              </p>
            </div>

            {/* Flechas de navegación, solo visibles si hay overflow */}
            {(canScrollPrev || canScrollNext) && (
              <div className="hidden shrink-0 gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollByCards(-1)}
                  disabled={!canScrollPrev}
                  aria-label="Anterior"
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border
                  transition-opacity
                  disabled:cursor-not-allowed disabled:opacity-30
                "
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCards(1)}
                  disabled={!canScrollNext}
                  aria-label="Siguiente"
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border
                  transition-opacity
                  disabled:cursor-not-allowed disabled:opacity-30
                "
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Carrusel con scroll-snap nativo */}
          <div
            ref={scrollerRef}
            className="
    -mx-8
    flex
    snap-x
    snap-mandatory
    gap-6
    overflow-x-auto
    px-8
    pb-2
    scrollbar-none
    [&::-webkit-scrollbar]:hidden
  "
          >
            {product.relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="
        flex
        shrink-0
        snap-center
        justify-center
        w-full
      "
              >
                <div
                  className="
          w-full
          max-w-[320px]
          sm:max-w-85
          lg:max-w-90
        "
                >
                  <ProductCard product={relatedProduct} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </Card>
    </Section>
  );
}