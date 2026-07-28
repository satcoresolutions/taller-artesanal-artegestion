"use client";

import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

import type {
  FAQItem,
} from "../types/faq.types";

interface Props {
  item: FAQItem;
}

export default function FAQItem({
  item,
}: Props) {
  const [
    open,
    setOpen,
  ] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-card
        border
        transition-all
        duration-300
      "
      style={{
        backgroundColor:
          "var(--color-surface)",

        borderColor:
          "var(--color-surface-secondary)",
      }}
    >
      <button
        type="button"
        className="
          flex
          w-full
          items-center
          justify-between
          gap-6
          p-6
          text-left
          transition-colors
        "
        onClick={() =>
          setOpen(
            (prev) => !prev
          )
        }
      >
        <span
          className="
            text-lg
            font-semibold
          "
          style={{
            color:
              "var(--color-text-primary)",
          }}
        >
          {item.question}
        </span>

        <ChevronDown
          className={`
            h-5
            w-5
            shrink-0
            transition-transform
            duration-300
            ${
              open
                ? "rotate-180"
                : ""
            }
          `}
          style={{
            color:
              "var(--color-primary)",
          }}
        />
      </button>

      <div
        className={`
          grid
          overflow-hidden
          transition-all
          duration-300
          ${
            open
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div
          className="
            overflow-hidden
          "
        >
          <p
            className="
              px-6
              pb-6
              leading-relaxed
            "
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}