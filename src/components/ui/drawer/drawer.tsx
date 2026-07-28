import type { DrawerProps } from "./drawer.types";

import { drawerVariants } from "./drawer.variants";

export default function Drawer({
  children,
  variant = "default",
  className = "",
  style,
  ...props
}: DrawerProps) {
  const variantStyle = drawerVariants[variant];

  return (
    <aside
      {...props}
      className={`
        flex
        h-full
        flex-col
        ${className}
      `}
      style={{
        borderRadius: "var(--radius-sidebar)",
        ...variantStyle,
        ...style,
      }}
    >
      {children}
    </aside>
  );
}