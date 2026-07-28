import type {
  Media,
} from "./media.types";

export type ContentSectionType =
  | "text"
  | "list"
  | "steps";

export interface ContentSection {

  title: string;

  type: ContentSectionType;

  icon: string;

  paragraphs: string[];

  items: string[];

  steps: string[];

  image: Media | null;

  order: number;

  active: boolean;

}