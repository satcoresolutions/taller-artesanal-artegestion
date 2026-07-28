"use client";

import Image from "next/image";
import { Events } from "@/integrations/google/analytics";

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
}

export default function WhatsAppButton({
  phone,
  message = "Hola, me gustaría obtener más información.",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => Events.whatsappClick()}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-14 w-14
        rounded-full
        bg-[#25D366]
        shadow-lg shadow-[#25D366]/40
        transition-transform duration-200
        hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50
        active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
      "
    >
      <div className="relative h-8 w-8">
        <Image
          src="/images/socials/whatsapp.png"
          alt="WhatsApp SatCore"
          fill
          className="object-contain"
        />
      </div>
    </a>
  );
}