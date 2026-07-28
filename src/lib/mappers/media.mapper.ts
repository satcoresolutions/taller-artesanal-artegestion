import type {
  Media,
} from "@/types/media.types";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.STRAPI_URL ??
  "";

export function mapMedia(
  data: any,
): Media | null {

  if (!data) {

    return null;

  }

  console.log("================================");
  console.log("mapMedia ejecutado");
  console.log("STRAPI_URL:", STRAPI_URL);
  console.log("URL original:", data.url);
  console.log("URL final:", `${STRAPI_URL}${data.url}`);
  console.log("================================");

  return {

    ...data,

    url:
      data.url
        ? `${STRAPI_URL}${data.url}`
        : "",

    formats:
      data.formats
        ? Object.fromEntries(

            Object.entries(data.formats).map(

              ([key, format]: any) => [

                key,

                {

                  ...format,

                  url:
                    `${STRAPI_URL}${format.url}`,

                },

              ],

            ),

          )
        : null,

  };

}