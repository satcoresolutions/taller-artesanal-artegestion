"use client";

interface Props {

  paragraphs: any[];

}

export default function SectionParagraphs({

  paragraphs,

}: Props) {

  if (
    !paragraphs?.length
  ) {

    return null;

  }

  return (

    <div
      className="
        flex
        flex-col
        gap-5
      "
    >

      {paragraphs.map(

        (
          paragraph,
          index,
        ) => (

          <p
            key={index}
            className="
              leading-8
            "
            style={{
              color:
                "var(--color-text-secondary)",
            }}
          >

            {paragraph}

          </p>

        ),

      )}

    </div>

  );

}