interface FormFieldsProps {
  content: {
    name: string;
    email: string;
    message: string;
  };
}

export default function FormFields({
  content,
}: FormFieldsProps) {
  return (
    <>
      <input
        type="text"
        placeholder={content.name}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
        "
      />

      <input
        type="email"
        placeholder={content.email}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
        "
      />

      <textarea
        rows={6}
        placeholder={content.message}
        className="
          w-full
          rounded-xl
          px-4
          py-3
          border
          resize-none
        "
      />
    </>
  );
}