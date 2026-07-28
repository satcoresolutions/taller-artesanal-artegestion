export interface NavbarLink {
  label: string;

  href: string;
}

export interface NavbarAction {
  label: string;

  href: string;
}

export interface NavbarContent {
  logo: {
    src: string;

    alt: string;
  };

  links: NavbarLink[];

  action: NavbarAction;
}