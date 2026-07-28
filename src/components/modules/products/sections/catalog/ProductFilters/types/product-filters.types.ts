export interface FilterOption {
  id: string;

  label: string;
}

export interface FilterGroup {
  id: string;

  title: string;

  options: readonly FilterOption[];
}

export interface ProductFiltersProps {
  groups: readonly FilterGroup[];

  selectedFilters: string[];

  onFilterChange: (
    filterId: string
  ) => void;
}