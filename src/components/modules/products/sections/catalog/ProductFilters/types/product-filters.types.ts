import type {
  ProductFilterGroup,
  ProductFilterGroupData,
  ProductFilters,
} from "../../catalog/types/catalog.types";


export interface ProductFiltersProps {

  groups:
    ProductFilterGroupData[];

  selectedFilters:
    ProductFilters;

  onFilterChange: (
    groupId: ProductFilterGroup,
    filterId: string,
  ) => void;

}