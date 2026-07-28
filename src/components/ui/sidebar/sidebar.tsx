import type {
  SidebarProps,
} from "./sidebar.types";

import {
  sidebarVariants,
} from "./sidebar.variants";

export default function Sidebar({
  children,
  variant = "default",
  className = "",
  style,
  ...props
}: SidebarProps) {
  const variantStyle =
    sidebarVariants[variant];

  return (
    <aside
      {...props}
      className={`
        flex
        flex-col
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-sidebar)",

        ...variantStyle,

        ...style,
      }}
    >
      {children}
    </aside>
  );
}