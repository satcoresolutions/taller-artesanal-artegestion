"use client";

import { useLanguage } from "@/hooks/use-language";

import Button from "@/components/ui/button";

import { paginationContent } from "./pagination.content";

import type { PaginationProps } from "./pagination.types";

import { paginationVariants } from "./pagination.variants";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = "default",
  className = "",
  style,
  ...props
}: PaginationProps) {
  const lang = useLanguage();

  const content = paginationContent[lang];

  const variantStyle = paginationVariants[variant];

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const goToNext = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPrev = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const goToPage = (page: number) => {
    onPageChange(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <nav
      {...props}
      className={className}
      style={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",

        padding: "0.5rem",

        borderRadius: "var(--radius-container)",

        ...variantStyle,
        ...style,
      }}
    >
      {/* Prev */}
      <Button
        variant="ghost"
        onClick={goToPrev}
        disabled={currentPage === 1}
      >
        {content.previous}
      </Button>

      {/* Pages */}
      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "primary" : "ghost"}
          onClick={() => goToPage(page)}
        >
          {page}
        </Button>
      ))}

      {/* Next */}
      <Button
        variant="ghost"
        onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        {content.next}
      </Button>
    </nav>
  );
}