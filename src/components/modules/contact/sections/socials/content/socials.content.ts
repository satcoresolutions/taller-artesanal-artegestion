import type {
  SocialsContent,
} from "../types/socials.types";

export const socialsContent: Record<
  string,
  SocialsContent
> = {
  en: {
    title: "Connect with us",

    description:
      "Follow us on our social platforms to discover our latest projects, services, and updates.",
  },

  es: {
    title: "Conecta con nosotros",

    description:
      "Síguenos en nuestras redes sociales para conocer nuestros últimos proyectos, servicios y novedades.",
  },

  pt: {
    title: "Conecte-se conosco",

    description:
      "Siga-nos em nossas redes sociais para conhecer nossos últimos projetos, serviços e novidades.",
  },
} as const;