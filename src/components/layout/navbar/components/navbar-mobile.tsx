"use client";

import { useState } from "react";

import Drawer from "@/components/ui/drawer";
import Button from "@/components/ui/button";

import NavbarActions from "./navbar-actions";
import ThemeModeToggle from "./theme-mode-toggle";
import LanguageSwitcher from "./navbar-lenguage";
import NavbarMobileNavigation from "./navbar-navigation-mobile";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <Button
        variant="secondary"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          lg:hidden
        "
        onClick={() => setIsOpen(true)}
      >
        ☰
      </Button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          lg:hidden
          fixed inset-0 z-50
          bg-black/30 backdrop-blur-[2px]
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Drawer container */}
      <div
        className={`
          lg:hidden
          fixed top-0 right-0 z-60
          h-full w-80
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <Drawer
          variant="surface"
          className="
            h-screen
            w-80

            bg-(--color-surface)
            opacity-100

            border-l
            border-white/10
            shadow-2xl

            p-6

            flex
            flex-col
          "
        >
          {/* Close button */}
          <button
            type="button"
            className="
              self-end
              text-sm
              font-medium
              text-zinc-200
              hover:text-white
              transition
            "
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <div className="mt-8 flex flex-col gap-8">
            {/* NAV MOBILE (IMPORTANTE) */}
            <NavbarMobileNavigation />

            <NavbarActions />
            <ThemeModeToggle />
            <LanguageSwitcher />
          </div>
        </Drawer>
      </div>
    </>
  );
} 