/*
|--------------------------------------------------
| SITE
|--------------------------------------------------
*/

export interface SiteConfig {
  name:        string;
  slug:        string;
  url:         string;
  email:       string;
  locale:      string;
  timezone:    string;
}

/*
|--------------------------------------------------
| COMPANY
|--------------------------------------------------
*/

export interface CompanyConfig {
  name:        string;
  tagline?:     string;
  description?: string;
  email:       string;
  whatsapp:    string;
  website:     string;
  organization: string;
  address: {
        label: string;
        query: string;
  };
}

/*
|--------------------------------------------------
| REPOSITORY
|--------------------------------------------------
*/

export interface RepositoryConfig {
  name:        string;
  description: string;
  packageName: string;
  appId:       string;
  author:      string;
  version:     string;
  license:     string;
}

/*
|--------------------------------------------------
| SOCIALS
|--------------------------------------------------
*/

export interface SocialConfig {
  github?:    string;
  linkedin?:  string;
  twitter?:   string;
  facebook?:  string;
  instagram?: string;
  youtube?:   string;
  discord?:   string;
}

/*
|--------------------------------------------------
| ASSETS
|--------------------------------------------------
*/

export interface AssetsConfig {
  logoPrimary: string;
  logoSecondary: string;
  logoLight: string;
  logoDark: string;
  iconApp: string;
  favicon: string;
  appleTouch: string;
  android192: string;
  android512: string;
  ogImage: string;
  twitterCard: string;
}

/*
|--------------------------------------------------
| NAVIGATION
|--------------------------------------------------
*/

export interface NavigationItem {
  label: string;
  href:  string;
}

export interface NavigationConfig {
  main:   NavigationItem[];
  footer: NavigationItem[];
  legal:  NavigationItem[];
}