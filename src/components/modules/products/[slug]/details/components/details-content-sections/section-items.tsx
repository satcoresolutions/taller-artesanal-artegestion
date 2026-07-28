"use client";

interface Props {

  items: any[];

}

export default function SectionItems({

  items,

}: Props) {

  if (
    !items?.length
  ) {

    return null;

  }

  return (

    <ul
      className="
        flex
        flex-col
        gap-3
      "
    >

      {items.map(

        (
          item,
          index,
        ) => (

          <li
            key={index}
          >

            • {item}

          </li>

        ),

      )}

    </ul>

  );

}