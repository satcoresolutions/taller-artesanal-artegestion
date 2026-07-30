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

  return {

    ...data,

    url:
  !data.url
    ? ""
    : data.url.startsWith("http")
      ? data.url
      : `${STRAPI_URL}${data.url}`,

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