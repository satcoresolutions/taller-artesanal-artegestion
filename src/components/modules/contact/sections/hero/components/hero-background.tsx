import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20">
        <Image
          fill
          priority
          src="/images/hero/hero-contact.png"
          alt="Hero Background"
          className="object-cover"
        />
      </div>

      <div
        className="
          absolute
          inset-0
          -z-10
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.55) 40%, rgba(0,0,0,.25) 100%)",
        }}
      />
    </>
  );
}