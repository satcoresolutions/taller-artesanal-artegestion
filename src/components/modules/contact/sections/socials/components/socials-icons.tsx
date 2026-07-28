"use client";

import Link from "next/link";

import Icon
  from "@/components/ui/icon";

import {
  socialsConfig,
} from "@/config/socials.config";

const socials = Object.entries(
  socialsConfig,
).map(([key, value]) => ({
  key,
  href: value.href,
  icon: value.icon,
}));

export default function SocialsIcons() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-3
      "
    >
      {socials.map((social) => (
        <Link
          key={social.key}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src={social.icon}
            alt={social.key}
            size="md"
            variant="social"
          />
        </Link>
      ))}
    </div>
  );
}