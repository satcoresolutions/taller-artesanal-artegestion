import type {
  MaterialPropertiesProps,
} from "./types/material-properties.types";

export default function MaterialProperties({
  properties,
}: MaterialPropertiesProps) {
  return (
    <div
      className="
        rounded-xl
        border
        border-surface-secondary
        bg-surface
        p-6
      "
    >
      <div
        className="
          divide-y
          divide-surface-secondary
        "
      >
        {properties.map((property) => (
          <div
            key={property.label}
            className="
              flex
              items-center
              justify-between
              gap-6
              py-4
            "
          >
            <span
              className="
                font-medium
                text-text-secondary
              "
            >
              {property.label}
            </span>

            <span
              className="
                text-right
                text-text-primary
              "
            >
              {property.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}