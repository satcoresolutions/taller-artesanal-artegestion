export interface ProductsHeaderProps {
    count: number;

    sorting: string;

    onSortingChange: (
        value: string
    ) => void;

    search: string;

    onSearchChange: (
        value: string
    ) => void;
}