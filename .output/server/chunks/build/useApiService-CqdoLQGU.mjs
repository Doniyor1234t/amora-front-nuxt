import { useQuery } from '@tanstack/vue-query';
import { $ as $fetch } from '../nitro/nitro.mjs';
import { d as useRuntimeConfig, b as useNuxtApp } from './server.mjs';

const isPlainObject = (value) => Object.prototype.toString.call(value) === "[object Object]";
const appendQueryValue = (result, key, value) => {
  if (value === void 0 || value === null) {
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((entry, index) => {
      appendQueryValue(result, `${key}[${index}]`, entry);
    });
    return;
  }
  if (isPlainObject(value)) {
    Object.entries(value).forEach(([childKey, childValue]) => {
      appendQueryValue(result, `${key}[${childKey}]`, childValue);
    });
    return;
  }
  result[key] = typeof value === "string" ? value : String(value);
};
const encodeStrapiQuery = (query) => {
  if (!query || !isPlainObject(query)) {
    return query;
  }
  const result = {};
  Object.entries(query).forEach(([key, value]) => {
    appendQueryValue(result, key, value);
  });
  return result;
};
const useQueryClientInstance = () => {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp.$queryClient) {
    throw new Error("Vue Query client is not initialized.");
  }
  return nuxtApp.$queryClient;
};
const useStrapi = () => {
  const config = useRuntimeConfig();
  const sanitizeBaseUrl = (value) => value?.replace(/\/$/, "") ?? "";
  const derivedBase = config.public.strapiUrl || config.public.apiBase?.replace(/\/api\/?$/, "") || "";
  const baseUrl = sanitizeBaseUrl(derivedBase);
  const api = $fetch.create({
    baseURL: baseUrl ? `${baseUrl}/api` : "/api",
    headers: {
      Accept: "application/json"
    }
  });
  const getMediaUrl = (url) => {
    if (!url) {
      return "";
    }
    if (/^https?:\/\//i.test(url)) {
      return url;
    }
    const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
    return `${baseUrl}${normalizedUrl}`;
  };
  const extractMediaAttributes = (media) => media?.attributes ?? media ?? void 0;
  const normalizeMedia = (media) => {
    const attributes = extractMediaAttributes(media);
    if (!attributes?.url) {
      return void 0;
    }
    const mediaUrl = getMediaUrl(attributes.url);
    if (!mediaUrl) {
      return void 0;
    }
    return {
      id: media?.id ?? 0,
      url: mediaUrl,
      path: mediaUrl,
      alternativeText: attributes.alternativeText ?? null
    };
  };
  const hasRelationData = (value) => typeof value === "object" && value !== null && "data" in value;
  const normalizeMediaCollection = (relation) => {
    if (!relation) {
      return [];
    }
    let data;
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
    return mediaList.map((item) => normalizeMedia(item)).filter((item) => Boolean(item));
  };
  return { api, getMediaUrl, normalizeMedia, normalizeMediaCollection };
};
const useStrapiQuery = (key, request, options) => {
  const { api } = useStrapi();
  const queryClient = useQueryClientInstance();
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const resolvedRequest = typeof request === "function" ? request() : request;
      const { path, query, ...fetchOptions } = resolvedRequest;
      const normalizedQuery = encodeStrapiQuery(
        query
      );
      return api(path, {
        ...fetchOptions,
        ...normalizedQuery ? { query: normalizedQuery } : {}
      });
    },
    ...options ?? {}
  }, queryClient);
};

export { useStrapiQuery as a, useStrapi as u };
//# sourceMappingURL=useApiService-CqdoLQGU.mjs.map
