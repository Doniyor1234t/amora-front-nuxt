<script setup lang="ts">
import { computed } from "vue";
import Banner from "@/components/shared/Banner.vue";
import ProductsSlider from "@/components/shared/ProductsSlider.vue";
import YandexMap from "@/components/shared/YandexMap.vue";
import AppCallBackModal from "@/components/ui/AppCallBackModal.vue";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type {
  StrapiEntity,
  StrapiListResponse,
  StrapiMediaRelation,
  StrapiRelationValue,
  StrapiSingleResponse,
} from "@/types/strapi";
import {
  type Product,
  type ProductsResponse,
  type StrapiProductAttributes,
  mapProductEntity,
  mapProductsResponse,
  type MediaNormalizer,
  type CollectionEntity,
  type StrapiCollectionAttributes,
} from "@/utils/catalogMappers";
import { useLikesStore } from "@/stores/likes";

interface BannerSlide {
  id?: number;
  img: string;
  mobileImg?: string | null;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
}

interface StrapiBannerAttributes {
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  image?: StrapiMediaRelation;
  mobile_image?: StrapiMediaRelation;
}

type BannerEntity =
  | StrapiEntity<StrapiBannerAttributes>
  | (StrapiBannerAttributes & { id?: number });

type ProductEntity =
  | StrapiEntity<StrapiProductAttributes>
  | (StrapiProductAttributes & { id?: number });

interface StrapiHomepageAttributes {
  hero_banners?: BannerEntity[] | StrapiRelationValue<BannerEntity>;
  featured_products?: ProductEntity[] | StrapiRelationValue<ProductEntity>;
  products?: ProductEntity[] | StrapiRelationValue<ProductEntity>;
  single_banner?: BannerEntity | null;
  collections?: CollectionEntity[] | StrapiRelationValue<CollectionEntity>;
}

interface CollectionHighlight {
  id?: number;
  title: string;
  banner: string;
  products: Product[];
}

interface HomepageContent {
  banners: BannerSlide[];
  featureBannerImage?: string | null;
  featureBannerMobileImage?: string | null;
  products: Product[];
  collectionSections: CollectionHighlight[];
}

const defaultHomepageContent: HomepageContent = {
  banners: [],
  featureBannerImage: null,
  featureBannerMobileImage: null,
  products: [],
  collectionSections: [],
};

const hasRelationData = (value: unknown): value is { data: unknown } =>
  typeof value === "object" && value !== null && "data" in value;

const relationToArray = <T>(
  relation?: StrapiRelationValue<T> | T | T[] | null
): T[] => {
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

const isStrapiEntity = <T>(value: unknown): value is StrapiEntity<T> =>
  typeof value === "object" && value !== null && "attributes" in value;

const toProductEntity = (
  entity: ProductEntity
): StrapiEntity<StrapiProductAttributes> => {
  if (isStrapiEntity<StrapiProductAttributes>(entity)) {
    return entity;
  }
  return {
    id: entity.id ?? 0,
    attributes: entity,
  };
};

const fallbackBanners: BannerSlide[] = [
  {
    img: "/images/Slider-bg-1.png",
    title: "NEW COLLECTION",
    subtitle: "Self made woman",
    description:
      "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы",
  },
  {
    img: "/images/Slider-bg-2.png",
    title: "NEW COLLECTION",
    subtitle: "Self made woman",
    description:
      "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы",
  },
  {
    img: "/images/Slider-bg-3.png",
    title: "NEW COLLECTION",
    subtitle: "Self made woman",
    description:
      "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы",
  },
  {
    img: "/images/Slider-bg-4.png",
    title: "NEW COLLECTION",
    subtitle: "Self made woman",
    description:
      "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы",
  },
];

const placeholderBannerImage =
  fallbackBanners[0]?.img ?? "/images/Slider-bg-1.png";

const features = [
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.8281 10.8281L16.0015 16.0015"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6681 5.33203L10.8281 21.172"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.7344 19.7344L26.6677 26.6677"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Сложный крой",
    description: "Уникальные лекала, создающие идеальный силуэт.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3997 20.3997C28.6981 20.697 28.9348 21.0503 29.0963 21.4393C29.2578 21.8282 29.3409 22.2452 29.3409 22.6664C29.3409 23.0876 29.2578 23.5046 29.0963 23.8936C28.9348 24.2825 28.6981 24.6358 28.3997 24.9331L24.9331 28.3997C24.6358 28.6981 24.2825 28.9348 23.8936 29.0963C23.5046 29.2578 23.0876 29.3409 22.6664 29.3409C22.2452 29.3409 21.8282 29.2578 21.4393 29.0963C21.0503 28.9348 20.697 28.6981 20.3997 28.3997L3.59974 11.5997C3.00048 10.9976 2.66406 10.1826 2.66406 9.33307C2.66406 8.48353 3.00048 7.66857 3.59974 7.0664L7.0664 3.59974C7.66857 3.00048 8.48353 2.66406 9.33307 2.66406C10.1826 2.66406 10.9976 3.00048 11.5997 3.59974L28.3997 20.3997Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.3359 16.6667L22.0026 14"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3359 12.6667L18.0026 10"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3359 8.66667L14.0026 6"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.3359 20.6667L26.0026 18"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Индивидуальный пошив",
    description: "Адаптация моделей под ваши параметры.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6899 3.75259C14.7471 3.44673 14.9094 3.17048 15.1487 2.97168C15.3881 2.77288 15.6894 2.66406 16.0006 2.66406C16.3117 2.66406 16.6131 2.77288 16.8525 2.97168C17.0918 3.17048 17.2541 3.44673 17.3113 3.75259L18.7126 11.1633C18.8121 11.6901 19.0682 12.1747 19.4473 12.5539C19.8264 12.933 20.3111 13.1891 20.8379 13.2886L28.2486 14.6899C28.5545 14.7471 28.8307 14.9094 29.0295 15.1487C29.2283 15.3881 29.3371 15.6894 29.3371 16.0006C29.3371 16.3117 29.2283 16.6131 29.0295 16.8525C28.8307 17.0918 28.5545 17.2541 28.2486 17.3113L20.8379 18.7126C20.3111 18.8121 19.8264 19.0682 19.4473 19.4473C19.0682 19.8264 18.8121 20.3111 18.7126 20.8379L17.3113 28.2486C17.2541 28.5545 17.0918 28.8307 16.8525 29.0295C16.6131 29.2283 16.3117 29.3371 16.0006 29.3371C15.6894 29.3371 15.3881 29.2283 15.1487 29.0295C14.9094 28.8307 14.7471 28.5545 14.6899 28.2486L13.2886 20.8379C13.1891 20.3111 12.933 19.8264 12.5539 19.4473C12.1747 19.0682 11.6901 18.8121 11.1633 18.7126L3.75259 17.3113C3.44673 17.2541 3.17048 17.0918 2.97168 16.8525C2.77288 16.6131 2.66406 16.3117 2.66406 16.0006C2.66406 15.6894 2.77288 15.3881 2.97168 15.1487C3.17048 14.9094 3.44673 14.7471 3.75259 14.6899L11.1633 13.2886C11.6901 13.1891 12.1747 12.933 12.5539 12.5539C12.933 12.1747 13.1891 11.6901 13.2886 11.1633L14.6899 3.75259Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26.6641 2.66797V8.0013"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3333 5.33203H24"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33073 29.3333C6.80349 29.3333 7.9974 28.1394 7.9974 26.6667C7.9974 25.1939 6.80349 24 5.33073 24C3.85797 24 2.66406 25.1939 2.66406 26.6667C2.66406 28.1394 3.85797 29.3333 5.33073 29.3333Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Ручная работа",
    description: "Внимание к деталям и ручная отделка.",
  },
  {
    svg: `<svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9974 4L10.6641 12L15.9974 29.3333L21.3307 12L17.9974 4"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.6645 4C23.0785 4 23.4868 4.09639 23.8571 4.28153C24.2274 4.46667 24.5494 4.73548 24.7978 5.06667L28.7978 10.4C29.1409 10.8576 29.3278 11.4133 29.3309 11.9851C29.334 12.557 29.1532 13.1147 28.8152 13.576L18.1618 28.224C17.9148 28.5673 17.5897 28.847 17.2134 29.0398C16.837 29.2327 16.4201 29.3333 15.9972 29.3333C15.5742 29.3333 15.1574 29.2327 14.781 29.0398C14.4046 28.847 14.0795 28.5673 13.8325 28.224L3.17917 13.576C2.84132 13.1146 2.66075 12.5568 2.66411 11.9849C2.66747 11.413 2.85458 10.8574 3.19784 10.4L7.19517 5.07067C7.44342 4.73838 7.76575 4.46858 8.13655 4.28272C8.50735 4.09686 8.9164 4.00005 9.33117 4H22.6645Z"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66406 12H29.3307"
                stroke="#0F0F0F"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>`,
    title: "Премиум качество",
    description: "Только лучшие натуральные ткани мира.",
  }
]

const fallbackCarouselItems = Array.from({ length: 10 }, (_, idx) => ({
  id: `fallback-${idx}`,
  img: `/images/products/Image.png`,
  name: "НАЗВАНИЕ ПЛАТЬЯ",
  price: "200$",
}));

const { normalizeMediaCollection } = useStrapi();

const getBannerAttributes = (entity: BannerEntity) =>
  isStrapiEntity<StrapiBannerAttributes>(entity)
    ? entity.attributes ?? ((entity as unknown) as StrapiBannerAttributes)
    : entity;

const isBannerActive = (entity: BannerEntity) =>
  getBannerAttributes(entity).isActive ?? true;

const getProductAttributes = (entity: ProductEntity) =>
  isStrapiEntity<StrapiProductAttributes>(entity)
    ? entity.attributes ?? ((entity as unknown) as StrapiProductAttributes)
    : entity;

const getCollectionAttributes = (entity: CollectionEntity) =>
  isStrapiEntity<StrapiCollectionAttributes>(entity)
    ? entity.attributes ?? ((entity as unknown) as StrapiCollectionAttributes)
    : entity;

const isProductActive = (entity: ProductEntity) =>
  getProductAttributes(entity).isActive ?? true;

const mapBannerEntity = (entity?: BannerEntity | null): BannerSlide | null => {
  if (!entity) {
    return null;
  }
  const attributes = getBannerAttributes(entity);
  const [image] = normalizeMediaCollection(attributes.image);
  const [mobileImage] = normalizeMediaCollection(attributes.mobile_image);
  const bannerId = isStrapiEntity<StrapiBannerAttributes>(entity)
    ? entity.id
    : entity.id;

  return {
    id: bannerId,
    img: image?.url ?? image?.path ?? placeholderBannerImage,
    mobileImg:
      mobileImage?.url ??
      mobileImage?.path ??
      image?.url ??
      image?.path ??
      placeholderBannerImage,
    title: attributes.title ?? null,
    subtitle: attributes.subtitle ?? null,
    description: attributes.description ?? null,
  };
};

const mapHomepageResponse = (
  response: StrapiSingleResponse<StrapiHomepageAttributes>,
  normalize: MediaNormalizer
): HomepageContent => {
  const rawData = response.data;
  const attributes = rawData
    ? (isStrapiEntity<StrapiHomepageAttributes>(rawData)
        ? rawData.attributes
        : (rawData as unknown as StrapiHomepageAttributes))
    : null;

  if (!attributes) {
    return {
      ...defaultHomepageContent,
    };
  }

  const heroBanners = relationToArray<BannerEntity>(
    attributes.hero_banners ?? null
  )
    .filter((entity): entity is BannerEntity => Boolean(entity))
    .filter(isBannerActive)
    .map((entity) => mapBannerEntity(entity))
    .filter((banner): banner is BannerSlide => Boolean(banner));

  const singleBanner = mapBannerEntity(attributes.single_banner ?? null);

  const productCandidates: Array<
    ProductEntity[] | StrapiRelationValue<ProductEntity> | undefined | null
  > = [attributes.featured_products, attributes.products];

  let productEntries: ProductEntity[] = [];
  for (const candidate of productCandidates) {
    const normalized = relationToArray<ProductEntity>(candidate ?? null).filter(
      (entry): entry is ProductEntity => Boolean(entry)
    );
    if (normalized.length) {
      productEntries = normalized;
      break;
    }
  }

  const homepageProducts = productEntries
    .filter(isProductActive)
    .map((entity) => mapProductEntity(toProductEntity(entity), normalize));

  const collectionEntries = relationToArray<CollectionEntity>(
    attributes.collections ?? null
  ).filter((entity): entity is CollectionEntity => Boolean(entity));

  const collectionSections = collectionEntries
    .map((collectionEntity) => {
      const collectionAttributes = getCollectionAttributes(collectionEntity);
      const [coverImage] =
        normalize(collectionAttributes.cover ?? collectionAttributes.images) ?? [];
      const collectionProducts = relationToArray<ProductEntity>(
        collectionAttributes.products ?? null
      )
        .filter((entity): entity is ProductEntity => Boolean(entity))
        .map((entity) => mapProductEntity(toProductEntity(entity), normalize));

      if (!collectionProducts.length && !coverImage) {
        return null;
      }

      const bannerImage =
        coverImage?.url ??
        coverImage?.path ??
        collectionProducts[0]?.images?.[0]?.url ??
        collectionProducts[0]?.images?.[0]?.path ??
        placeholderBannerImage;
      return {
        id: isStrapiEntity<StrapiCollectionAttributes>(collectionEntity)
          ? collectionEntity.id
          : collectionEntity.id,
        title: collectionAttributes.name,
        banner: bannerImage,
        products: collectionProducts,
      };
    })
    .filter((section): section is CollectionHighlight => Boolean(section));

  const fallbackBanner = heroBanners.at(-1) ?? null;
  const featureBannerImage =
    singleBanner?.img ?? fallbackBanner?.img ?? null;
  const featureBannerMobileImage =
    singleBanner?.mobileImg ??
    fallbackBanner?.mobileImg ??
    featureBannerImage ??
    null;

  return {
    banners: heroBanners,
    featureBannerImage,
    featureBannerMobileImage,
    products: homepageProducts,
    collectionSections,
  };
};

const {
  data: homepageResponse,
  isLoading: isHomepageLoading,
  isError: isHomepageError,
} = useStrapiQuery<
  StrapiSingleResponse<StrapiHomepageAttributes>,
  Error,
  HomepageContent
>(
  ["homepage"],
  {
    path: "/homepage",
    query: {
      populate: {
        hero_banners: {
          populate: ["image", "mobile_image"],
        },
        single_banner: {
          populate: ["image", "mobile_image"],
        },
        featured_products: {
          populate: ["images"],
        },
        products: {
          populate: ["images"],
        },
        collections: {
          populate: {
            cover: { populate: "*" },
            images: { populate: "*" },
            products: {
              populate: ["images"],
            },
          },
        },
      },
    },
  },
  {
    select: (response: StrapiSingleResponse<StrapiHomepageAttributes>) =>
      mapHomepageResponse(response, normalizeMediaCollection),
  }
);

const homepageContent = computed(
  () => homepageResponse.value ?? defaultHomepageContent
);

const homepageBanners = computed(() => homepageContent.value.banners ?? []);

const banners = computed(() => {
  if (homepageBanners.value.length) {
    return homepageBanners.value;
  }

  return fallbackBanners;
});

const homepageProducts = computed(() => homepageContent.value.products ?? []);

const collectionHighlights = computed(
  () => homepageContent.value.collectionSections ?? []
);

const shouldFetchRecentProducts = computed(() => {
  if (isHomepageError.value) {
    return true;
  }

  if (isHomepageLoading.value && !homepageResponse.value) {
    return false;
  }

  if (!homepageResponse.value) {
    return false;
  }

  return homepageProducts.value.length === 0;
});

const featureBannerImageSrc = computed(() => {
  if (homepageContent.value.featureBannerImage) {
    return homepageContent.value.featureBannerImage;
  }

  if (homepageBanners.value.length) {
    const last = homepageBanners.value[homepageBanners.value.length - 1];
    return last?.img ?? last?.mobileImg ?? placeholderBannerImage;
  }

  const fallbackLast = fallbackBanners[fallbackBanners.length - 1];
  return fallbackLast?.img ?? placeholderBannerImage;
});

const featureBannerMobileSrc = computed(() => {
  if (homepageContent.value.featureBannerMobileImage) {
    return homepageContent.value.featureBannerMobileImage;
  }

  if (homepageBanners.value.length) {
    const last = homepageBanners.value[homepageBanners.value.length - 1];
    return last?.mobileImg ?? last?.img ?? placeholderBannerImage;
  }

  const fallbackLast = fallbackBanners[fallbackBanners.length - 1];
  return fallbackLast?.mobileImg ?? fallbackLast?.img ?? placeholderBannerImage;
});

const {
  data: recentProductsResponse,
  isLoading: isRecentLoading,
  isError: isRecentError,
} = useStrapiQuery<
  StrapiListResponse<StrapiProductAttributes>,
  Error,
  ProductsResponse
>(
  ["recent-products"],
  {
    path: "/products",
    query: {
      // filters: {
      //   isActive: { $eq: true },
      // },
      sort: ["publishedAt:desc"],
      // pagination: {
      //   page: 1,
      //   pageSize: 10,
      // },
      // populate: ["images"],
      populate: "*",
    },
  },
  {
    enabled: shouldFetchRecentProducts,
    select: (response: StrapiListResponse<StrapiProductAttributes>) =>
      mapProductsResponse(response, normalizeMediaCollection),
  }
);

const placeholderProductImage = "/images/products/Image.png";

const getProductImage = (product: Product): string => {
  if (!product.images?.length) {
    return placeholderProductImage;
  }
  const [firstImage] = product.images;
  return firstImage?.url ?? firstImage?.path ?? placeholderProductImage;
};

const formatPrice = (price?: string, currency?: string): string => {
  if (!price) {
    return "—";
  }
  return currency ? `${price} ${currency}` : price;
};

const recentProducts = computed(() => recentProductsResponse.value?.items ?? []);

const productsCarousel = computed(() => {
  if (homepageProducts.value.length) {
    return homepageProducts.value.map((product: Product) => ({
      id: product.id,
      slug: product.slug,
      img: getProductImage(product),
      name: product.name,
      price: formatPrice(
        product.price,
        product.currency ? product.currency : undefined
      ),
    }));
  }

  if (isRecentLoading.value || isRecentError.value || !recentProducts.value.length) {
    return fallbackCarouselItems;
  }

  return recentProducts.value.map((product: Product) => ({
    id: product.id,
    slug: product.slug,
    img: getProductImage(product),
    name: product.name,
    price: formatPrice(product.price, product.currency ? product.currency : undefined),
  }));
});


const router = useRouter();

const requestCards = [
  {
    title: "Индивидуальный пошив",
    description: "Создаём изделия, которые подчёркивают вашу индивидуальность",
    image: "https://cms.amora-brand.uz/uploads/Individualnyj_poshiv_0419872da8.png",
    action: () => router.push("/atelie"),
  },
  {
    title: "G.T. Factory",
    description: "Премиальное обучение по конструированию и моделированию одежды",
    image: "https://cms.amora-brand.uz/uploads/G_T_Factory_abfbfb686a.png",
    action: () => router.push("/school"),
  },
];

const goToProduct = (item) => {
  const identifier = item?.slug ?? item?.id;
  if (!identifier) {
    return;
  }
  router.push(`/catalog/${identifier}`);
};

const collectionSlider = ref<any>(null);
const mobileProductsSliderRef = ref<any>(null);

const likesStore = useLikesStore();

const toggleProductLike = (productId: number) => {
  likesStore.toggle(productId);
};

const isProductLiked = (productId: number) => likesStore.isLiked(productId);

const callMobileSlider = (direction: "next" | "prev") => {
  const sliderInstance = mobileProductsSliderRef.value?.swiper;

  if (!sliderInstance) {
    return;
  }

  if (typeof sliderInstance[direction] === "function") {
    sliderInstance[direction]();
    return;
  }

  const fallbackMethod = direction === "next" ? "slideNext" : "slidePrev";

  if (typeof sliderInstance[fallbackMethod] === "function") {
    sliderInstance[fallbackMethod]();
    return;
  }

  if (sliderInstance.value && typeof sliderInstance.value[fallbackMethod] === "function") {
    sliderInstance.value[fallbackMethod]();
  }
};

const handleMobileSliderPrev = () => callMobileSlider("prev");
const handleMobileSliderNext = () => callMobileSlider("next");

const isCallBackVisible = ref(false);
</script>


<template>
  <div class="slides-scroll">
    <section class="slide-section--banner">
      <div class="slide-section__fill">
        <!-- Баннер слайдер проекта -->
        <Banner :items="banners" />
        <!-- Конец баннера слайдер проекта -->
      </div>
    </section>
    <section class="slide-section">
      <div class="slide-section__inner">
        <!-- Карусель начало-->
        <ClientOnly>
          <div class="hidden md:block w-full">
            <ProductsSlider hideHeader :items="productsCarousel" />
          </div>
          <div class="md:hidden w-full">
            <!-- <div class="flex items-center justify-end gap-3 px-4 mb-4">
              <button
                type="button"
                class="flex h-12 w-12 items-center justify-center border border-[#e2e1df] bg-white/80 text-[#2f2e2c]"
                aria-label="Предыдущие товары"
                @click="handleMobileSliderPrev"
              >
                <svg
                  width="32"
                  height="18"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M36 10L0 10" stroke="currentColor" />
                  <path
                    d="M10 0C10 4.82759 5.59322 10 0 10C5.59322 10 10 15.1724 10 20"
                    stroke="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="flex h-12 w-12 items-center justify-center border border-[#e2e1df] bg-white/80 text-[#2f2e2c]"
                aria-label="Следующие товары"
                @click="handleMobileSliderNext"
              >
                <svg
                  width="32"
                  height="18"
                  viewBox="0 0 36 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 10L36 10" stroke="currentColor" />
                  <path
                    d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </div> -->
            <ProductsSlider
              hideHeader
              :items="productsCarousel"
              :slides-per-view="2"
              :mobile-slides-per-view="2"
              ref="mobileProductsSliderRef"
            />
          </div>
        </ClientOnly>
        <!-- Карусель конец -->
      </div>
    </section>

    <section v-if="!!featureBannerImageSrc" class="slide-section max-md:mb-[-120px]">
      <div class="slide-section__inner">
        <div class="relative w-full h-[100vh]">
          <picture class="block w-full h-full">
            <source
              media="(max-width: 767px)"
              :srcset="featureBannerMobileSrc"
            />
            <img
              :src="featureBannerImageSrc"
              alt=""
              class="object-cover object-top w-full h-full max-sm:object-[70%]"
            />
          </picture>
        </div>
      </div>
    </section>

    <section
      v-for="highlight in collectionHighlights"
      :key="highlight.id ?? highlight.title"
      class="slide-section--banner"
    >
      <div class="flex-col gap-10">
        <div class="relative w-full h-[100vh] overflow-hidden">
          <img
            :src="highlight.banner"
            :alt="highlight.title"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="w-full relative z-1000 bg-[#FBFAF9] px-6 py-12 text-black lg:px-12">
          <div class="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
            <h3 class="text-3xl font-light">
              {{ highlight.title }}
            </h3>
            <NuxtLink
              to="/collections"
              class="text-xs uppercase tracking-[0.3em] text-white/70 underline-offset-4 hover:underline"
            >
              Смотреть все коллекции
            </NuxtLink>
          </div>
          <div class="mt-8 grid gap-6 max-md:gap-2 max-md:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="product in highlight.products.slice(0, 4)"
              :key="product.id"
              class="collection-card"
              @click="goToProduct(product)"
            >
              <div class="collection-card__image">
                <img
                  :src="getProductImage(product)"
                  :alt="product.name"
                  loading="lazy"
                />
                <button
                  type="button"
                  class="collection-card__favorite"
                  :class="{ 'collection-card__favorite--active': isProductLiked(product.id) }"
                  :aria-pressed="isProductLiked(product.id)"
                  aria-label="Добавить в избранное"
                  @click.stop="toggleProductLike(product.id)"
                >
                  <Icon
                    name="app-icon:heart-outlined"
                    mode="svg"
                    size="22"
                    :class="isProductLiked(product.id) ? 'heart--liked' : ''"
                  />
                </button>
              </div>
              <div class="collection-card__info">
                <p class="collection-card__title">
                  {{ product.name }}
                </p>
                <span class="collection-card__price">
                  {{ formatPrice(product.price, product.currency ?? undefined) }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="slide-section">
      <div class="slide-section__inner">
        <!-- Начао блока "Оставить заявку"-->
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
          <article
            v-for="card in requestCards"
            :key="card.title"
            class="relative isolate flex min-h-[100vh] max-md:min-h-[468px] items-end overflow-hidden bg-black/70"
          >
            <img
              :src="card.image"
              :alt="card.title"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div class="relative flex flex-col justify-center z-10 w-full px-10 py-12 max-md:px-7 text-white max-md:text-center">
              <h2 class="text-[58px] max-md:text-[28px] text-center leading-tight ">
                {{ card.title }}
              </h2>
              <p class="mt-4 text-lg max-md:text-[12px] text-center text-white/80">
                {{ card.description }}
              </p>
              <Button
                class="!rounded-[0] mx-auto text-center mt-8 text-[#FFF]! !border !border-white !bg-transparent !px-7 !py-3 !text-xs !uppercase tracking-[0.3em] transition hover:!bg-white hover:!text-black"
                variant="outlined"
                severity="secondary"
                @click="card.action()"
              >
                ПОДРОБНЕЕ
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- Конец блока "Оставить заявку -->

    <section class="slide-section">
      <div class="slide-section__inner max-md:p-0!">
        <div class="contact-layout">
          <div class="contact-map max-md:order-1">
            <ClientOnly>
              <YandexMap
                :center="[69.323135, 41.334772]"
                :zoom="17"
                :marker="{
                  coordinates: [69.323135, 41.334772],
                  hint: 'Бутик AMORA',
                  description: 'ул. Амира Темура 107/1, ТЦ «Паркент» 2 этаж'
                }"
                height="800px"
                class="contact-map__canvas"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style>
.slides-scroll {
  position: relative;
}

.products-grid {
  display: none;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
  width: 100%;
  padding: 0 24px;
}

.products-grid__item {
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.products-grid__image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.slide-section {
  position: sticky;
  top: 0;
  /* min-height: 100vh; */
  display: flex;
  align-items: stretch;
  background-color: #FBFAF9;
}

.slide-section--banner {
  padding: 0;
}

.slide-section__inner,
.slide-section__fill {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-section__inner {
  /* padding: 80px 0; */
}

.slide-section__inner > * {
  width: 100%;
}

.collection-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.collection-card__image {
  background: #fff;
  padding: 32px;
  min-height: 360px;
  max-height: 382px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    padding: 20px;
    min-height: 220px;
  }
}

.collection-card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.collection-card__favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  z-index: 100;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  color: #0f0f0f;
  @media (max-width: 767px) {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;
  }
}

.collection-card__favorite:hover,
.collection-card__favorite--active {
  /* background-color: #f7f5f0; */
}

.collection-card__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
}

.heart--liked g {
  fill: #000 !important;
}

.collection-card__title {
  font-size: 14px;
  color: #3D3D3D;
  letter-spacing: 0.18em;
  @media (width < 768px) {
    font-size: 12px;
  }
}

.collection-card__price {
  font-size: 12px;
  font-weight: 500;
  color: #3D3D3D;
}

.slide-section__fill {
  padding: 0;
}

.slide-section__fill > * {
  flex: 1;
  width: 100%;
  height: 100%;
}

.contact-layout {
  display: flex;
  width: 100%;
  gap: 32px;
  align-items: stretch;
}

.contact-map {
  flex: 1 1 55%;
  overflow: hidden;
}

.contact-map__canvas {
  border-radius: 0;
  min-height: 480px;
  overflow: hidden;
}

.contact-card {
  flex: 1 1 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-card__inner {
  background: #fff;
  border-radius: 0;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 100%;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.06);
}

.contact-card__social {
  background: #0f0f0f;
  border-radius: 0;
  padding: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .slide-section {
    position: static;
    min-height: auto;
  }

  .slide-section__inner {
    padding: 40px 0;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 16px;
  }

  .contact-layout {
    flex-direction: column;
    gap: 24px;
  }

  .contact-map__canvas {
    min-height: 360px;
  }

  .contact-card__inner {
    border-radius: 0;
    padding: 32px 24px;
  }
}

.banner {
  height: 100vh;

  /* делаем белый скроллбар */
  --swiper-scrollbar-drag-bg-color: #ffffff;
  /* при желании можно поменять фон дорожки */
  --swiper-scrollbar-bg-color: rgba(247, 247, 247, 0.233);
}
.banner::part(scrollbar) {
  bottom: 20px; /* по умолчанию 0, делаем отступ от нижнего края */
}
</style>
