"use client";

import Link from "next/link";
import { navigationConfig } from "@/config/navigation.config";
import { navigationContent } from "@/i18n/navigation.content";
import { useLanguage } from "@/hooks/use-language";
import { Events } from "@/integrations/google/analytics";

export default function NavbarMobileNavigation() {
  const lang = useLanguage();
  const t = navigationContent[lang];

  return (
    <nav className="flex flex-col gap-3">
      {navigationConfig.main.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => Events.navClick(link.key)}
          className="
            text-sm
            font-medium
            text-zinc-300
            hover:text-white
            transition
          "
        >
          {t[link.key]}
        </Link>
      ))}
    </nav>
  );
}