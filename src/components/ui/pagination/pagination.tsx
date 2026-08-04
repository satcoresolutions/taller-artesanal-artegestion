"use client";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Button from "@/components/ui/button";

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

  const variantStyle =
    paginationVariants[variant];

  const goToNext = () => {

    onPageChange(
      Math.min(
        currentPage + 1,
        totalPages,
      ),
    );

  };

  const goToPrev = () => {

    onPageChange(
      Math.max(
        currentPage - 1,
        1,
      ),
    );

  };

  const goToPage = (
    page: number,
  ) => {

    onPageChange(page);

  };

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {

    for (
      let i = 1;
      i <= totalPages;
      i++
    ) {

      pages.push(i);

    }

  } else {

    pages.push(1);

    if (currentPage > 3) {

      pages.push("...");

    }

    const start =
      Math.max(
        2,
        currentPage - 1,
      );

    const end =
      Math.min(
        totalPages - 1,
        currentPage + 1,
      );

    for (
      let i = start;
      i <= end;
      i++
    ) {

      pages.push(i);

    }

    if (
      currentPage <
      totalPages - 2
    ) {

      pages.push("...");

    }

    pages.push(totalPages);

  }

  return (

    <nav
      {...props}
      className={className}
      style={{

        display: "flex",

        gap: "0.5rem",

        alignItems: "center",

        justifyContent: "center",

        flexWrap: "wrap",

        padding: "0.5rem",

        borderRadius:
          "var(--radius-container)",

        ...variantStyle,

        ...style,

      }}
    >

      <Button
        variant="ghost"
        onClick={goToPrev}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} />
      </Button>

      {pages.map(
        (
          page,
          index,
        ) =>

          page === "..."
            ? (

              <span
                key={`dots-${index}`}
                style={{
                  padding:
                    "0 0.5rem",
                }}
              >
                ...
              </span>

            )
            : (

              <Button
                key={page}
                variant={
                  page === currentPage
                    ? "primary"
                    : "ghost"
                }
                onClick={() =>
                  goToPage(page)
                }
              >
                {page}
              </Button>

            ),
      )}

      <Button
        variant="ghost"
        onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={18} />
      </Button>

    </nav>

  );

}