import type {
  HTMLAttributes,
} from "react";

export interface SidebarProps
  extends HTMLAttributes<HTMLElement> {
  variant?:
    | "default"
    | "floating"
    | "glass";
}