import Container
  from "@/components/ui/container";

import NavbarBrand
  from "./components/navbar-brand";

import NavbarNavigation
  from "./components/navbar-navigation";

import NavbarActions
  from "./components/navbar-actions";

import ThemeModeToggle
  from "./components/theme-mode-toggle";

import NavbarMobile
  from "./components/navbar-mobile";

import LanguageSwitcher
  from "./components/navbar-lenguage";

export default function Navbar() {

  return (

    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50

        border-b

        backdrop-blur-xl

        transition-all
        duration-300
      "
      style={{

        background:
          "color-mix(in srgb, var(--background) 82%, transparent)",

        borderColor:
          "color-mix(in srgb, var(--glass-border) 65%, transparent)",

        boxShadow:
          "0 10px 40px color-mix(in srgb, black 10%, transparent)",

      }}
    >

      <Container padding="py-2 px-8">

        <div
          className="
            flex
            min-h-4
            items-center
            justify-between
            gap-8
          "
        >

          {/* ---------------------------------------------------------------- */}
          {/* Brand                                                            */}
          {/* ---------------------------------------------------------------- */}

          <div
            className="
              shrink-0
            "
          >

            <NavbarBrand />

          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Desktop Navigation                                               */}
          {/* ---------------------------------------------------------------- */}

          <div
            className="
              hidden
              flex-1
              justify-center
              lg:flex
            "
          >

            <NavbarNavigation />

          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Desktop Actions                                                  */}
          {/* ---------------------------------------------------------------- */}

          <div
            className="
              hidden
              items-center
              gap-5
              lg:flex
            "
          >

            <NavbarActions />

            <div
              className="
                h-6
                w-px
              "
              style={{
                background:
                  "var(--glass-border)",
              }}
            />

            <ThemeModeToggle />

            <LanguageSwitcher />

          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Mobile                                                           */}
          {/* ---------------------------------------------------------------- */}

          <div
            className="
              lg:hidden
            "
          >

            <NavbarMobile />

          </div>

        </div>

      </Container>

    </header>

  );

}