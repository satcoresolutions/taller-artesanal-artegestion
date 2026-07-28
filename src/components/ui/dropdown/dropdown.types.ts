import type {
  ReactNode,
  CSSProperties,
  HTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

/*
|--------------------------------------------------------------------------
| SHARED
|--------------------------------------------------------------------------
*/

export type DropdownVariant =
  | "default"
  | "floating"
  | "glass";

export type DropdownAlign =
  | "start"
  | "center"
  | "end";

/*
|--------------------------------------------------------------------------
| ROOT
|--------------------------------------------------------------------------
*/

export interface DropdownProps {
  children: ReactNode;

  defaultOpen?: boolean;
}

/*
|--------------------------------------------------------------------------
| TRIGGER
|--------------------------------------------------------------------------
*/

export interface DropdownTriggerProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;
}

/*
|--------------------------------------------------------------------------
| CONTENT
|--------------------------------------------------------------------------
*/

export interface DropdownContentProps
  extends HTMLAttributes<HTMLDivElement> {

  children: ReactNode;

  variant?: DropdownVariant;

  align?: DropdownAlign;

  sideOffset?: number;

  className?: string;

  style?: CSSProperties;
}

/*
|--------------------------------------------------------------------------
| ITEM
|--------------------------------------------------------------------------
*/

export interface DropdownItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

  danger?: boolean;

  disabled?: boolean;

  shortcut?: string;

  icon?: ReactNode;
}

/*
|--------------------------------------------------------------------------
| LABEL
|--------------------------------------------------------------------------
*/

export interface DropdownLabelProps
  extends HTMLAttributes<HTMLDivElement> {

  children: ReactNode;
}

/*
|--------------------------------------------------------------------------
| DIVIDER
|--------------------------------------------------------------------------
*/

export interface DropdownDividerProps
  extends HTMLAttributes<HTMLDivElement> {}