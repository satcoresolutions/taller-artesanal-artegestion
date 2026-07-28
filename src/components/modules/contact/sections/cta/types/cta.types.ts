import type {
  ActionLink,
} from "@/components/ui/nav-link";

export interface CTAContent {
  badge: string;

  title: string;

  description: string;

  primaryAction: ActionLink;

  secondaryAction?: ActionLink;

  microcopy?: string;
}