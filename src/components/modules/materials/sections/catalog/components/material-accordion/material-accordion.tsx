"use client";

import {
  useState,
} from "react";

import type {
  MaterialAccordionProps,
} from "./types/material-accordion.types";


export default function MaterialAccordion({
  section,
  defaultOpen = false,
}: MaterialAccordionProps) {

  const [
    open,
    setOpen,
  ] = useState(defaultOpen);


  return (
    <article
      className="
        overflow-hidden
        rounded-xl
        border
        border-surface-secondary
        bg-surface
      "
    >

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >

        <h4
          className="
            flex
            items-center
            gap-3
            text-lg
            font-semibold
          "
        >
          {section.icon && (
            <span>
              {section.icon}
            </span>
          )}

          {section.title}

        </h4>


        <span
          className="
            text-xl
          "
        >
          {open ? "−" : "+"}
        </span>

      </button>


      {open && (

        <div
          className="
            max-h-72
            overflow-y-auto
            border-t
            border-surface-secondary
            px-6
            py-5
          "
        >

          {section.type === "text" && (

            <div
              className="
                space-y-4
              "
            >

              {section.paragraphs.map(
                (paragraph) => (

                  <p
                    key={paragraph}
                    className="
                      leading-7
                      text-text-secondary
                    "
                  >
                    {paragraph}
                  </p>

                ),
              )}

            </div>

          )}



          {section.type === "list" && (

            <ul
              className="
                space-y-3
              "
            >

              {section.items.map(
                (item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-3
                      leading-7
                      text-text-secondary
                    "
                  >

                    <span>
                      ✓
                    </span>

                    <span>
                      {item}
                    </span>

                  </li>

                ),
              )}

            </ul>

          )}



          {section.type === "steps" && (

            <ol
              className="
                space-y-3
                list-decimal
                pl-5
              "
            >

              {section.steps.map(
                (step) => (

                  <li
                    key={step}
                    className="
                      leading-7
                      text-text-secondary
                    "
                  >
                    {step}
                  </li>

                ),
              )}

            </ol>

          )}

        </div>

      )}

    </article>
  );
}