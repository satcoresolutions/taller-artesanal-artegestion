interface FunctionalityItemProps {
  title: string;

  description: string;
}

export default function FunctionalityItem({
  title,
  description,
}: FunctionalityItemProps) {
  return (
    <div
      className="
        flex
        gap-4
      "
    >
      <div
        className="
          mt-2
          h-2
          w-2
          shrink-0
          rounded-full
        "
        style={{
          background:
            "var(--color-primary)",
        }}
      />

      <div>
        <h3
          className="
            text-base
            font-semibold
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            text-sm
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}