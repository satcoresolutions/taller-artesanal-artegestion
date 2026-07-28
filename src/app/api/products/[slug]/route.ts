import { NextResponse } from "next/server";

import {
  getProductBySlug,
} from "@/lib/services/product.service";

interface RouteProps {

  params: Promise<{
    slug: string;
  }>;

}

export async function GET(

  request: Request,

  {
    params,
  }: RouteProps,

) {

  const {
    slug,
  } = await params;

  const searchParams =
    new URL(request.url).searchParams;

  const locale =
    searchParams.get(
      "locale",
    ) ?? "es";

  try {

    const product =
      await getProductBySlug(

        slug,

        locale,

      );

    if (!product) {

      return NextResponse.json(

        {

          message:
            "Producto no encontrado",

        },

        {

          status: 404,

        },

      );

    }

    return NextResponse.json(
      product,
    );

  } catch (error) {

    console.error(
      error,
    );

    return NextResponse.json(

      {

        message:
          "Error obteniendo el producto",

      },

      {

        status: 500,

      },

    );

  }

}