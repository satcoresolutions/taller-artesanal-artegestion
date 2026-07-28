import type {
  Media,
} from "./media.types";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type SeoRobots =
  | "index-follow"
  | "index-nofollow"
  | "noindex-follow"
  | "noindex-nofollow";



export type TwitterCard =
  | "summary"
  | "summary_large_image";

/* -------------------------------------------------------------------------- */
/*                                     SEO                                    */
/* -------------------------------------------------------------------------- */

export interface SEO {

  metaTitle?: string;

  metaDescription?: string;

  keywords?: string;

  canonicalUrl?: string;

  robots?: SeoRobots;

  ogTitle?: string;

  ogDescription?: string;

  ogImage?: Media | null;

  twitterCard?: TwitterCard;

  structuredData?: Record<string, unknown>;

}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: "summary" | "summary_large_image";
}
