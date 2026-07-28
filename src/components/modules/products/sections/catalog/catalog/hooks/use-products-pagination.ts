"use client";

import {
  useState,
} from "react";

interface UseProductsPaginationProps {
  totalItems: number;

  itemsPerPage?: number;
}

export default function useProductsPagination({
  totalItems,
  itemsPerPage = 6,
}: UseProductsPaginationProps) {
  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        totalItems /
          itemsPerPage
      )
    );

  const startIndex =
    (currentPage - 1) *
    itemsPerPage;

  const endIndex =
    startIndex +
    itemsPerPage;

  return {
    currentPage,
    setCurrentPage,

    totalPages,

    startIndex,
    endIndex,

    itemsPerPage,
  };
}