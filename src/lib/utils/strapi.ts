const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? "";

export {
  STRAPI_URL,
};

/**
 * Convierte una URL de Strapi en una URL absoluta.
 *
 * Ejemplos:
 * "/uploads/image.jpg"
 * → http://localhost:1337/uploads/image.jpg
 *
 * "https://otro-dominio.com/image.jpg"
 * → https://otro-dominio.com/image.jpg
 */
export function getStrapiMedia(
  url?: string | null,
): string {

  if (!url) {

    return "";

  }

  // Si ya es una URL absoluta, la devuelve tal cual
  if (
    url.startsWith("http://") ||
    url.startsWith("https://")
  ) {

    return url;

  }

  return `${STRAPI_URL}${url}`;

}