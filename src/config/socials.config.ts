export type SocialKey =
  | "facebook"
  | "instagram"
  | "tiktok";

export interface SocialItem {
  href: string;
  icon: string;
}

export type SocialConfig = Record<SocialKey, SocialItem>;

export const socialsConfig: SocialConfig = {
  facebook: {
    href: "https://www.facebook.com/4rteGestion",
    icon: "/images/socials/facebook.png",
  },

  instagram: {
    href: "https://www.instagram.com/4rte.gestion/",
    icon: "/images/socials/instagram.png",
  },

  tiktok: {
    href: "https://tiktok.com/@artegestion",
    icon: "/images/socials/tiktok.png",
  },
};