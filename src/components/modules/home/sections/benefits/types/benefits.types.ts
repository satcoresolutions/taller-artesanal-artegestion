export interface BenefitItem {
  icon:
    | "shield"
    | "heart"
    | "truck"
    | "message-circle";

  title: string;

  description: string;
}

export interface BenefitsContent {
  badge: string;

  title: string;

  description: string;

  items: BenefitItem[];
}