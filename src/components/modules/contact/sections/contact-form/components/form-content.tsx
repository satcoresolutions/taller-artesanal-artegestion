"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  formContent,
} from "../content/form.content";

import FormFields
  from "./form-fields";

import FormSubmit
  from "./form-submit";

export default function FormContent() {
  const lang =
    useLanguage();

  const content =
    formContent[lang];

  return (
    <div
      className="
        mx-auto
        max-w-2xl
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          text-center
          mb-10
        "
      >
        <span
          className="
            text-sm
            uppercase
            tracking-widest
          "
          style={{
            color:
              "var(--accent)",
          }}
        >
          {content.badge}
        </span>

        <h2>
          {content.title}
        </h2>

        <p
          style={{
            color:
              "var(--color-text-muted)",
          }}
        >
          {content.description}
        </p>
      </div>

      <form
        className="
          flex
          flex-col
          gap-4
        "
      >
        <FormFields
          content={content}
        />

        <FormSubmit
          label={content.submit}
        />
      </form>
    </div>
  );
}