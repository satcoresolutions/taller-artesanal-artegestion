"use client";

import {
  useState,
} from "react";

export default function useProductsSorting() {
  const [
    sorting,
    setSorting,
  ] = useState("featured");

  return {
    sorting,
    setSorting,
  };
}