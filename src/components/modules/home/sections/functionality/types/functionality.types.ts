/*
|------------------------------------------------
| INCLUDED ITEMS
|------------------------------------------------
*/

export interface IncludedItem {
  title: string;

  description: string;
}

/*
|------------------------------------------------
| TECHNOLOGIES
|------------------------------------------------
*/

export interface TechnologyItem {
  name: string;
}

/*
|------------------------------------------------
| CONTENT
|------------------------------------------------
*/

export interface FunctionalityContent {
  badge: string;

  title: string;

  description: string;

   highlight: {
    text: string;
  };

  includes: IncludedItem[];

  technologies?: TechnologyItem[];
}