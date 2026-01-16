import type {
  NormalizedMedia,
  StrapiEntity,
  StrapiEntityRelation,
  StrapiListResponse,
  StrapiMediaRelation,
  StrapiRelationValue,
  StrapiSingleResponse,
} from "@/types/strapi";

export interface CollectionImage extends NormalizedMedia {}

export interface Collection {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
  images: CollectionImage[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  currency?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  images: NormalizedMedia[];
  collection?: {
    id: number;
    name: string;
    slug: string;
  };
  fabric?: string | null;
  color?: string | null;
  fit?: string | null;
  availableSizes?: string[] | null;
  products?: Product[] | null;
  variants?: ProductVariant[] | null;
  material?: string | null;
  care?: string | null;
}

export interface ProductVariant {
  id: number;
  sku?: string | null;
  price: string;
  stock?: number | null;
  isAvailable?: boolean | null;
  color?: string | null;
  weight?: number | null;
  size?: VariantSize | null;
  image?: NormalizedMedia | null;
}

export interface VariantSize {
  id: number;
  title?: string | null;
  label?: string | null;
  sortOrder?: number | null;
  description?: string | null;
}

export interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}

export interface CollectionsResponse {
  items: Collection[];
  total: number;
  page: number;
  pageSize: number;
}

export interface StrapiCollectionAttributes {
  name: string;
  slug: string;
  description?: string | null;
  isActive?: boolean | null;
  cover?: StrapiMediaRelation;
  images?: StrapiMediaRelation;
  products?: StrapiRelationValue<StrapiEntity<StrapiProductAttributes>>;
}

export type CollectionEntity =
  | StrapiEntity<StrapiCollectionAttributes>
  | (StrapiCollectionAttributes & { id?: number });

export interface StrapiProductAttributes {
  name: string;
  slug: string;
  price?: string | number | null;
  currency?: string | null;
  shortDescription?: string | null;
  description?: string | null;
  images?: StrapiMediaRelation;
  isActive?: boolean | null;
  collection?: StrapiEntityRelation<StrapiCollectionAttributes>;
  fabric?: string | null;
  color?: string | null;
  fit?: string | null;
  availableSizes?: string[] | null;
  sizes?: string | string[] | null;
  products?: StrapiEntityRelation<StrapiProductAttributes>;
  variants?: StrapiProductVariant[];
  material?: string | null;
  care?: string | null;
}

export interface StrapiProductVariant {
  id: number;
  sku?: string | null;
  price?: string | number | null;
  stock?: number | null;
  isAvailable?: boolean | null;
  color?: string | null;
  weight?: number | null;
  size?: StrapiRelationValue<StrapiEntity<StrapiSizeAttributes>>;
  image?: StrapiMediaRelation;
}

export interface StrapiSizeAttributes {
  title?: string | null;
  label?: string | null;
  sortOrder?: number | null;
  isActive?: boolean | null;
  description?: string | null;
}

export type MediaNormalizer = (
  relation?: StrapiMediaRelation
) => NormalizedMedia[];

const getEntityAttributes = <T>(entity: StrapiEntity<T>): T =>
  entity.attributes ?? ((entity as unknown) as T);

const isActiveEntity = <T extends { isActive?: boolean | null }>(
  entity: StrapiEntity<T>
) => getEntityAttributes(entity).isActive ?? true;

const normalizePrice = (price?: string | number | null) => {
  if (price === undefined || price === null) {
    return "";
  }
  return typeof price === "string" ? price : String(price);
};

const normalizeAvailableSizes = (
  rawSizes?: string | string[] | null
): string[] | null => {
  if (!rawSizes) {
    return null;
  }

  if (Array.isArray(rawSizes)) {
    const normalized = rawSizes
      .map((size) =>
        typeof size === "string" ? size.trim() : String(size ?? "").trim()
      )
      .filter((entry) => Boolean(entry));
    return normalized.length ? normalized : null;
  }

  if (typeof rawSizes === "string") {
    const normalized = rawSizes
      .split(/[,;]/)
      .map((entry) => entry.trim())
      .filter((entry) => Boolean(entry));
    return normalized.length ? normalized : null;
  }

  return null;
};

export const mapCollectionEntity = (
  entity: StrapiEntity<StrapiCollectionAttributes>,
  normalize: MediaNormalizer
): Collection => {
  const attributes = getEntityAttributes(entity);
  const galleryImages = normalize(attributes.images);
  const coverImages =
    galleryImages.length > 0 ? galleryImages : normalize(attributes.cover);

  return {
    id: entity.id,
    name: attributes.name,
    slug: attributes.slug,
    description: attributes.description ?? null,
    images: coverImages,
  };
};

const hasRelationData = (value: unknown): value is { data: unknown } =>
  typeof value === "object" && value !== null && "data" in value;

const relationToArray = <T>(relation?: StrapiRelationValue<T>): T[] => {
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

const getFirstRelationItem = <T>(
  relation?: StrapiRelationValue<T>
): T | null => {
  const [first] = relationToArray(relation);
  return first ?? null;
};

export const mapProductEntity = (
  entity: StrapiEntity<StrapiProductAttributes>,
  normalize: MediaNormalizer
): Product => {
  const attributes = getEntityAttributes(entity);
  const normalizedAvailableSizes = normalizeAvailableSizes(
    attributes.availableSizes ?? attributes.sizes ?? null
  );
  const collectionEntity = getFirstRelationItem(attributes.collection);
  const collectionAttributes = collectionEntity
    ? getEntityAttributes(collectionEntity)
    : null;

  const relatedProducts = relationToArray(attributes.products)
    .filter(isActiveEntity)
    .map((productEntity) => mapProductEntity(productEntity, normalize));

  const productVariants =
    attributes.variants?.map((variant) => {
      const sizeEntity = getFirstRelationItem(variant.size);
      const sizeAttributes = sizeEntity
        ? getEntityAttributes(sizeEntity)
        : null;
      const [variantImage] = normalize(variant.image);

      return {
        id: variant.id,
        sku: variant.sku ?? null,
        price: normalizePrice(variant.price),
        stock: variant.stock ?? null,
        isAvailable: variant.isAvailable ?? null,
        color: variant.color ?? null,
        weight: variant.weight ?? null,
        size:
          sizeEntity && sizeAttributes
            ? {
                id: sizeEntity.id,
                title: sizeAttributes.title ?? null,
                label: sizeAttributes.label ?? null,
                sortOrder: sizeAttributes.sortOrder ?? null,
                description: sizeAttributes.description ?? null,
              }
            : null,
        image: variantImage ?? null,
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
    collection:
      collectionEntity && collectionAttributes
        ? {
            id: collectionEntity.id,
            name: collectionAttributes.name,
            slug: collectionAttributes.slug,
          }
      : undefined,
    fabric: attributes.fabric ?? null,
    color: attributes.color ?? null,
    fit: attributes.fit ?? null,
    availableSizes: normalizedAvailableSizes,
    products: relatedProducts.length ? relatedProducts : null,
    variants: productVariants.length ? productVariants : null,
    material: attributes.material ?? null,
    care: attributes.care ?? null,
  };
};

export const mapCollectionsResponse = (
  response: StrapiListResponse<StrapiCollectionAttributes>,
  normalize: MediaNormalizer
): CollectionsResponse => ({
  items: response.data
    .filter(isActiveEntity)
    .map((entity) => mapCollectionEntity(entity, normalize)),
  total: response.meta?.pagination?.total ?? response.data.length,
  page: response.meta?.pagination?.page ?? 1,
  pageSize: response.meta?.pagination?.pageSize ?? response.data.length,
});

export const mapProductsResponse = (
  response: StrapiListResponse<StrapiProductAttributes>,
  normalize: MediaNormalizer
): ProductsResponse => ({
  items: response.data
    .filter(isActiveEntity)
    .map((entity) => mapProductEntity(entity, normalize)),
  total: response.meta?.pagination?.total ?? response.data.length,
  page: response.meta?.pagination?.page ?? 1,
  pageSize: response.meta?.pagination?.pageSize ?? response.data.length,
});

const isProductListResponse = (
  response:
    | StrapiListResponse<StrapiProductAttributes>
    | StrapiSingleResponse<StrapiProductAttributes>
): response is StrapiListResponse<StrapiProductAttributes> =>
  Array.isArray(response.data);

const extractFirstActiveProduct = (
  response:
    | StrapiListResponse<StrapiProductAttributes>
    | StrapiSingleResponse<StrapiProductAttributes>
) => {
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

export const mapProductFromResponse = (
  response:
    | StrapiListResponse<StrapiProductAttributes>
    | StrapiSingleResponse<StrapiProductAttributes>,
  normalize: MediaNormalizer
): Product | null => {
  const entity = extractFirstActiveProduct(response);
  return entity ? mapProductEntity(entity, normalize) : null;
};

export const mapCollectionFromResponse = (
  response: StrapiListResponse<StrapiCollectionAttributes>,
  normalize: MediaNormalizer
): Collection | null => {
  const entity = response.data.find(isActiveEntity);
  return entity ? mapCollectionEntity(entity, normalize) : null;
};
