import type { ReactNode, MouseEventHandler } from "react";

export interface NavLinkProps {
  href: string;

  children: ReactNode;

  onClick?: MouseEventHandler<HTMLAnchorElement>;

  variant?:
    | "default"
    | "active";
}

export interface ActionLink {
  label: string;
  href: string;
}