"use client";

import {
  useState,
} from "react";

export default function useProductsSearch() {
  const [
    search,
    setSearch,
  ] = useState("");

  return {
    search,
    setSearch,
  };
}