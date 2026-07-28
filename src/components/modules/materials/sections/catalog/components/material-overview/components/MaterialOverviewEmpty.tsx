"use client";

import {
  Gem,
} from "lucide-react";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  materialOverviewContent,
} from "../content/material-overview.content";

export default function MaterialOverviewEmpty() {

  const lang =
    useLanguage();

  const content =
    materialOverviewContent[lang];

  return (

    <Card
      className="
        flex
        min-h-150
        flex-col
        items-center
        justify-center
        gap-6
        p-10
        text-center
      "
    >

      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-surface-secondary
        "
      >

        <Gem
          className="
            h-10
            w-10
            text-text-muted
          "
        />

      </div>

      <div
        className="
          max-w-lg
          space-y-3
        "
      >

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {content.emptyTitle}
        </h2>

        <p
          className="
            leading-7
            text-text-muted
          "
        >
          {content.emptyDescription}
        </p>

      </div>

    </Card>

  );

}