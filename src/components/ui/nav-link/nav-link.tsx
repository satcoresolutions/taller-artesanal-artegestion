import Link from "next/link";

import type {
  NavLinkProps,
} from "./nav-link.types";

import {
  navLinkVariants,
} from "./nav-link.variants";

export default function NavLink({
  href,
  children,
  variant = "default",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-sm
        transition-opacity
        hover:opacity-70
      "
      style={
        navLinkVariants[
          variant
        ]
      }
    >
      {children}
    </Link>
  );
}