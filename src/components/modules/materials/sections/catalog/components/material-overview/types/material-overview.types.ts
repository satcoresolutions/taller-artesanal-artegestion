import type {
  Media,
} from "@/types/media.types";


import type {
  Property,
} from "@/types/property.types";



export interface MaterialOverviewProps {


  image?: Media | null;


  imageAlt?: string;


  properties: Property[];


  showProductsButton?: boolean;


  onProductsClick?: () => void;


}