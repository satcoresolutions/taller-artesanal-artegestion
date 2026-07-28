import type {
  LucideIcon,
} from "lucide-react";

export interface CatalogFeature {
  icon: LucideIcon;

  title: string;

  description: string;
}

export interface CatalogTrustContent {
  badge?: string;

  title: string;

  description: string;

  features: CatalogFeature[];
}