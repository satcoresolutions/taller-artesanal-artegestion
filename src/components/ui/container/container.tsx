import type {
  ContainerProps,
} from "./container.types";

export default function Container({

  children,

  className = "",

  fluid = false,

  padding = "p-6",

}: ContainerProps) {

  return (

    <div
      className={`
        mx-auto
        w-full
        ${fluid ? "" : "max-w-screen-2xl"}
        ${padding}
        ${className}
      `}
      style={{
        borderRadius:
          "var(--radius-container)",
      }}
    >

      {children}

    </div>

  );

}