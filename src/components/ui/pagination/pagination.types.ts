import type {
  HTMLAttributes,
} from "react";

export type PaginationVariant =
  | "default"
  | "outlined"
  | "subtle"
  | "floating";

export interface PaginationProps
  extends HTMLAttributes<HTMLElement> {
  currentPage: number;

  totalPages: number;

  onPageChange: (
    page: number
  ) => void;

  variant?: PaginationVariant;

  siblingCount?: number;

  previousLabel?: string;

  nextLabel?: string;
}