export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;

  title: string;

  description: string;

  features: string[];

  primaryAction: HeroAction;

  secondaryAction: HeroAction;
}