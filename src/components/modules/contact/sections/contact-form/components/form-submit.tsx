interface FormSubmitProps {
  label: string;
}

export default function FormSubmit({
  label,
}: FormSubmitProps) {
  return (
    <button
      type="submit"
      className="
        rounded-xl
        px-5
        py-3
        font-medium
      "
      style={{
        background:
          "var(--accent)",
      }}
    >
      {label}
    </button>
  );
}