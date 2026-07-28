import clsx
  from "clsx";

import type {
  MaterialsContentProps,
} from "./types/materials-content.types";


export default function MaterialsContent({
  children,
  className,
}: MaterialsContentProps) {

  return (
    <div
      className={clsx(
        `
          min-w-0
          h-[calc(130vh-8rem)]
          overflow-y-auto
          space-y-10
          pr-2
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}