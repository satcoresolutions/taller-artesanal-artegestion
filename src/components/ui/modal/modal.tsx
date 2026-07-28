import type {
  ModalProps,
} from "./modal.types";

import {
  modalVariants,
} from "./modal.variants";

export default function Modal({
  open,
  children,
  variant = "default",
  onClose,
}: ModalProps) {
  if (!open) {
    return null;
  }

  const variantStyle =
    modalVariants[variant];

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
      "
    >
      {/* BACKDROP */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background:
            "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClose}
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-lg
          p-6
        "
        style={{
          borderRadius:
            "var(--radius-modal)",

          ...variantStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
}