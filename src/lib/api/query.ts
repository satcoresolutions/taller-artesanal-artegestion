export interface QueryOptions {

  locale?: string;

  populate?: unknown;

  filters?: Record<string, unknown>;

  sort?: string[];

  pagination?: {

    page: number;

    pageSize: number;

  };

}

export function buildQuery(
  options: QueryOptions = {},
) {

  const params: Record<string, unknown> = {};

  if (options.locale) {

    params.locale = options.locale;

  }

  if (options.populate) {

    params.populate = options.populate;

  }

  if (options.filters) {

    params.filters = options.filters;

  }

  if (options.sort) {

    params.sort = options.sort;

  }

  if (options.pagination) {

    params.pagination = options.pagination;

  }

  return params;

}