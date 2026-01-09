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
  const hasRelationData2 = (value) => typeof value === "object" && value !== null && "data" in value;
  const normalizeMediaCollection = (relation) => {
    if (!relation) {
      return [];
    }
    let data;
    if (Array.isArray(relation)) {
      data = relation;
    } else if (hasRelationData2(relation)) {
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
const getEntityAttributes = (entity) => entity.attributes ?? entity;
const isActiveEntity = (entity) => getEntityAttributes(entity).isActive ?? true;
const normalizePrice = (price) => {
  if (price === void 0 || price === null) {
    return "";
  }
  return typeof price === "string" ? price : String(price);
};
const mapCollectionEntity = (entity, normalize) => {
  const attributes = getEntityAttributes(entity);
  return {
    id: entity.id,
    name: attributes.name,
    slug: attributes.slug,
    description: attributes.description ?? null,
    images: normalize(attributes.images)
  };
};
const hasRelationData = (value) => typeof value === "object" && value !== null && "data" in value;
const relationToArray = (relation) => {
  if (!relation) {
    return [];
  }
  if (Array.isArray(relation)) {
    return relation;
  }
  if (hasRelationData(relation)) {
    const data = relation.data;
    if (!data) {
      return [];
    }
    return Array.isArray(data) ? data : [data];
  }
  return [relation];
};
const getFirstRelationItem = (relation) => {
  const [first] = relationToArray(relation);
  return first ?? null;
};
const mapProductEntity = (entity, normalize) => {
  const attributes = getEntityAttributes(entity);
  const collectionEntity = getFirstRelationItem(attributes.collection);
  const collectionAttributes = collectionEntity ? getEntityAttributes(collectionEntity) : null;
  const relatedProducts = relationToArray(attributes.products).filter(isActiveEntity).map((productEntity) => mapProductEntity(productEntity, normalize));
  const productVariants = attributes.variants?.map((variant) => {
    const sizeEntity = getFirstRelationItem(variant.size);
    const sizeAttributes = sizeEntity ? getEntityAttributes(sizeEntity) : null;
    const [variantImage] = normalize(variant.image);
    return {
      id: variant.id,
      sku: variant.sku ?? null,
      price: normalizePrice(variant.price),
      stock: variant.stock ?? null,
      isAvailable: variant.isAvailable ?? null,
      color: variant.color ?? null,
      weight: variant.weight ?? null,
      size: sizeEntity && sizeAttributes ? {
        id: sizeEntity.id,
        title: sizeAttributes.title ?? null,
        label: sizeAttributes.label ?? null,
        sortOrder: sizeAttributes.sortOrder ?? null,
        description: sizeAttributes.description ?? null
      } : null,
      image: variantImage ?? null
    };
  }) ?? [];
  return {
    id: entity.id,
    name: attributes.name,
    slug: attributes.slug,
    price: normalizePrice(attributes.price),
    currency: attributes.currency ?? null,
    shortDescription: attributes.shortDescription ?? null,
    description: attributes.description ?? null,
    images: normalize(attributes.images),
    collection: collectionEntity && collectionAttributes ? {
      id: collectionEntity.id,
      name: collectionAttributes.name,
      slug: collectionAttributes.slug
    } : void 0,
    fabric: attributes.fabric ?? null,
    color: attributes.color ?? null,
    fit: attributes.fit ?? null,
    availableSizes: attributes.availableSizes ?? null,
    products: relatedProducts.length ? relatedProducts : null,
    variants: productVariants.length ? productVariants : null,
    material: attributes.material ?? null,
    care: attributes.care ?? null
  };
};
const mapCollectionsResponse = (response, normalize) => ({
  items: response.data.filter(isActiveEntity).map((entity) => mapCollectionEntity(entity, normalize)),
  total: response.meta?.pagination?.total ?? response.data.length,
  page: response.meta?.pagination?.page ?? 1,
  pageSize: response.meta?.pagination?.pageSize ?? response.data.length
});
const mapProductsResponse = (response, normalize) => ({
  items: response.data.filter(isActiveEntity).map((entity) => mapProductEntity(entity, normalize)),
  total: response.meta?.pagination?.total ?? response.data.length,
  page: response.meta?.pagination?.page ?? 1,
  pageSize: response.meta?.pagination?.pageSize ?? response.data.length
});
const isProductListResponse = (response) => Array.isArray(response.data);
const extractFirstActiveProduct = (response) => {
  if (!response) {
    return null;
  }
  if (isProductListResponse(response)) {
    return response.data.find(isActiveEntity) ?? null;
  }
  const single = response.data;
  if (!single || !isActiveEntity(single)) {
    return null;
  }
  return single;
};
const mapProductFromResponse = (response, normalize) => {
  const entity = extractFirstActiveProduct(response);
  return entity ? mapProductEntity(entity, normalize) : null;
};
const mapCollectionFromResponse = (response, normalize) => {
  const entity = response.data.find(isActiveEntity);
  return entity ? mapCollectionEntity(entity, normalize) : null;
};

export { useStrapiQuery as a, mapProductEntity as b, mapProductFromResponse as c, mapCollectionFromResponse as d, mapCollectionsResponse as e, mapProductsResponse as m, useStrapi as u };
//# sourceMappingURL=catalogMappers-QA2PDDPy.mjs.map
