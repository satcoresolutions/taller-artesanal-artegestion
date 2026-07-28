import type {
    DropdownLabelProps,
} from "./dropdown.types";

export default function DropdownLabel({
    children,
    className = "",
    ...props
}: DropdownLabelProps) {
    return (
        <div
            className={`
        px-4
  py-2

  text-xs
  font-medium
  uppercase
  tracking-wide

  text-text-muted

        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
}