import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  useMutation,
  useQuery,
  type QueryKey,
  type UseMutationOptions,
  type UseQueryOptions,
  type QueryClient,
} from '@tanstack/vue-query';
import { $fetch, type FetchError, type FetchOptions } from 'ofetch';
import type {
  NormalizedMedia,
  StrapiMedia,
  StrapiMediaRelation,
} from '@/types/strapi';

type ApiQueryOptions<TQueryFnData, TError, TData> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, QueryKey>,
  'queryKey' | 'queryFn'
>;

type ApiRequestConfig = AxiosRequestConfig | (() => AxiosRequestConfig);

type ApiMutationOptions<
  TData,
  TError,
  TVariables extends AxiosRequestConfig
> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

type QueryPrimitive = string | number | boolean | null | undefined;
type QueryValue =
  | QueryPrimitive
  | QueryPrimitive[]
  | { [key: string]: QueryValue };
type QueryParams = Record<string, QueryValue>;

const isPlainObject = (
  value: unknown,
): value is Record<string, QueryValue> =>
  Object.prototype.toString.call(value) === '[object Object]';

const appendQueryValue = (
  result: Record<string, string>,
  key: string,
  value: QueryValue,
) => {
  if (value === undefined || value === null) {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => {
      appendQueryValue(result, `${key}[${index}]`, entry as QueryValue);
    });
    return;
  }

  if (isPlainObject(value)) {
    Object.entries(value).forEach(([childKey, childValue]) => {
      appendQueryValue(result, `${key}[${childKey}]`, childValue);
    });
    return;
  }

  result[key] = typeof value === 'string' ? value : String(value);
};

const encodeStrapiQuery = (query?: QueryParams) => {
  if (!query || !isPlainObject(query)) {
    return query;
  }

  const result: Record<string, string> = {};
  Object.entries(query).forEach(([key, value]) => {
    appendQueryValue(result, key, value);
  });
  return result;
};

const useQueryClientInstance = (): QueryClient => {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp.$queryClient) {
    throw new Error('Vue Query client is not initialized.');
  }

  return nuxtApp.$queryClient;
};

export const useApiClient = (): AxiosInstance => {
  const { $api } = useNuxtApp();
  return $api;
};

export const useApiQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
>(
  key: QueryKey,
  config: ApiRequestConfig,
  options?: ApiQueryOptions<TQueryFnData, TError, TData>,
) => {
  const api = useApiClient();
  const queryClient = useQueryClientInstance();

  return useQuery<TQueryFnData, TError, TData>({
    queryKey: key,
    queryFn: async () => {
      const requestConfig =
        typeof config === 'function' ? config() : config;
      const { data } = await api.request<TQueryFnData>(requestConfig);
      return data;
    },
    ...(options ?? {}),
  }, queryClient);
};

export const useApiMutation = <
  TData = unknown,
  TError = unknown,
  TVariables extends AxiosRequestConfig = AxiosRequestConfig,
>(
  options?: ApiMutationOptions<TData, TError, TVariables>,
) => {
  const api = useApiClient();
  const queryClient = useQueryClientInstance();

  return useMutation<TData, TError, TVariables>({
    mutationFn: async (requestConfig) => {
      const { data } = await api.request<TData>(requestConfig);
      return data;
    },
    ...(options ?? {}),
  }, queryClient);
};


export const useStrapi = () => {
  const config = useRuntimeConfig();

  const sanitizeBaseUrl = (value?: string) =>
    value?.replace(/\/$/, '') ?? '';

  const derivedBase =
    config.public.strapiUrl ||
    config.public.apiBase?.replace(/\/api\/?$/, '') ||
    '';

  const baseUrl = sanitizeBaseUrl(derivedBase);

  const api = $fetch.create({
    baseURL: baseUrl ? `${baseUrl}/api` : '/api',
    headers: {
      Accept: 'application/json',
    },
  });

  const getMediaUrl = (url?: string | null) => {
    if (!url) {
      return '';
    }

    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    const normalizedUrl = url.startsWith('/') ? url : `/${url}`;
    return `${baseUrl}${normalizedUrl}`;
  };

  const extractMediaAttributes = (media?: StrapiMedia | null) =>
    media?.attributes ?? media ?? undefined;

  const normalizeMedia = (
    media?: StrapiMedia | null,
  ): NormalizedMedia | undefined => {
    const attributes = extractMediaAttributes(media);
    if (!attributes?.url) {
      return undefined;
    }

    const mediaUrl = getMediaUrl(attributes.url);
    if (!mediaUrl) {
      return undefined;
    }

    return {
      id: media?.id ?? 0,
      url: mediaUrl,
      path: mediaUrl,
      alternativeText: attributes.alternativeText ?? null,
    };
  };

  const hasRelationData = (value: unknown): value is { data: unknown } =>
    typeof value === 'object' && value !== null && 'data' in value;

  const normalizeMediaCollection = (
    relation?: StrapiMediaRelation,
  ): NormalizedMedia[] => {
    if (!relation) {
      return [];
    }

    let data: StrapiMedia | StrapiMedia[] | null | undefined;
    if (Array.isArray(relation)) {
      data = relation;
    } else if (hasRelationData(relation)) {
      data = relation.data;
    } else {
      data = relation;
    }

    if (!data) {
      return [];
    }

    const mediaList = Array.isArray(data) ? data : [data];
    return mediaList
      .map((item) => normalizeMedia(item))
      .filter((item): item is NormalizedMedia => Boolean(item));
  };

  return { api, getMediaUrl, normalizeMedia, normalizeMediaCollection };
};

type StrapiRequestConfig = {
  path: string;
} & Omit<FetchOptions<'json'>, 'baseURL'>;

export const useStrapiQuery = <
  TQueryFnData = unknown,
  TError = FetchError<unknown>,
  TData = TQueryFnData,
>(
  key: QueryKey,
  request: StrapiRequestConfig | (() => StrapiRequestConfig),
  options?: ApiQueryOptions<TQueryFnData, TError, TData>,
) => {
  const { api } = useStrapi();
  const queryClient = useQueryClientInstance();

  return useQuery<TQueryFnData, TError, TData>({
    queryKey: key,
    queryFn: async () => {
      const resolvedRequest =
        typeof request === 'function' ? request() : request;
      const { path, query, ...fetchOptions } = resolvedRequest;
      const normalizedQuery = encodeStrapiQuery(
        query as QueryParams | undefined,
      );
      return api<TQueryFnData>(path, {
        ...fetchOptions,
        ...(normalizedQuery ? { query: normalizedQuery } : {}),
      });
    },
    ...(options ?? {}),
  }, queryClient);
};
