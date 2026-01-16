const getEntityAttributes = (entity) => entity.attributes ?? entity;
const isActiveEntity = (entity) => getEntityAttributes(entity).isActive ?? true;
const normalizePrice = (price) => {
  if (price === void 0 || price === null) {
    return "";
  }
  return typeof price === "string" ? price : String(price);
};
const normalizeAvailableSizes = (rawSizes) => {
  if (!rawSizes) {
    return null;
  }
  if (Array.isArray(rawSizes)) {
    const normalized = rawSizes.map(
      (size) => typeof size === "string" ? size.trim() : String(size ?? "").trim()
    ).filter((entry) => Boolean(entry));
    return normalized.length ? normalized : null;
  }
  if (typeof rawSizes === "string") {
    const normalized = rawSizes.split(/[,;]/).map((entry) => entry.trim()).filter((entry) => Boolean(entry));
    return normalized.length ? normalized : null;
  }
  return null;
};
const mapCollectionEntity = (entity, normalize) => {
  const attributes = getEntityAttributes(entity);
  const galleryImages = normalize(attributes.images);
  const coverImages = galleryImages.length > 0 ? galleryImages : normalize(attributes.cover);
  return {
    id: entity.id,
    name: attributes.name,
    slug: attributes.slug,
    description: attributes.description ?? null,
    images: coverImages
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
  const normalizedAvailableSizes = normalizeAvailableSizes(
    attributes.availableSizes ?? attributes.sizes ?? null
  );
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
    availableSizes: normalizedAvailableSizes,
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

export { mapProductEntity as a, mapProductFromResponse as b, mapCollectionFromResponse as c, mapCollectionsResponse as d, mapProductsResponse as m };
//# sourceMappingURL=catalogMappers-C7pu-5Rb.mjs.map
