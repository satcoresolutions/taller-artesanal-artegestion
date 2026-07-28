"use client";

interface Props {

  steps: any[];

}

export default function SectionSteps({

  steps,

}: Props) {

  if (
    !steps?.length
  ) {

    return null;

  }

  return (

    <ol
      className="
        flex
        flex-col
        gap-4
      "
    >

      {steps.map(

        (
          step,
          index,
        ) => (

          <li
            key={index}
          >

            <strong>

              {index + 1}.

            </strong>{" "}

            {step}

          </li>

        ),

      )}

    </ol>

  );

}