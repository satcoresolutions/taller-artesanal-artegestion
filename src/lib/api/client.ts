import axios from "axios";
import qs from "qs";

const STRAPI_URL = process.env.STRAPI_URL;

if (!STRAPI_URL) {
  throw new Error(
    "STRAPI_URL no está definida.",
  );
}

export const api = axios.create({

  baseURL: `${STRAPI_URL}/api`,

  headers: {

    "Content-Type": "application/json",

  },

  timeout: 30000,

  paramsSerializer: {

    serialize: (params) => {

      return qs.stringify(
        params,
        {
          encodeValuesOnly: true,
        },
      );

    },

  },

});