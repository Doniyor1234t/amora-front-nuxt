<script setup lang="ts">
import "swiper/css";
import "swiper/css/pagination";
import { computed, ref, watch } from "vue";
import AppCallBackModal from "@/components/ui/AppCallBackModal.vue";
import { createError } from "h3";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import type { LeadMetadata } from "@/types/leads";
import {
  type Product,
  type StrapiProductAttributes,
  mapProductFromResponse,
} from "@/utils/catalogMappers";
import { useLikesStore } from "@/stores/likes";

definePageMeta({
  layout: "header-only",
});

const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const requestUrl = useRequestURL();
const defaultLocale =
  runtimeConfig.public?.defaultLocale ?? runtimeConfig.public?.strapiLocale ?? "ru";
const currentLocale = computed(
  () => (route.params.locale as string | undefined) ?? defaultLocale
);
const productSlug = computed(() => route.params.id as string);
const productPageUrl = computed(() => {
  try {
    return new URL(`/catalog/${productSlug.value}`, requestUrl.origin).toString();
  } catch {
    return `/catalog/${productSlug.value}`;
  }
});
const { normalizeMediaCollection } = useStrapi();
const likesStore = useLikesStore();

const {
  data: productResponse,
  isLoading: isProductLoading,
  isError: isProductError,
} = useStrapiQuery<
  StrapiListResponse<StrapiProductAttributes>,
  Error,
  Product
>(
  ["product", productSlug, currentLocale],
  () => ({
    path: "/products",
    // Strapi forbids `/products/:id` for public users when i18n is enabled,
    // so we query `/products` with a slug filter, locale, and populated relations instead.
    query: {
      filters: {
        slug: { $eq: productSlug.value },
        isActive: { $eq: true },
      },
      populate: {
        images: { populate: "*" },
        collection: { populate: "*" },
        products: {
          populate: ["images", "collection"],
        },
        variants: {
          populate: ["size", "image"],
        },
      },
      locale: currentLocale.value,
      pagination: {
        page: 1,
        pageSize: 1,
      },
    },
  }),
  {
    enabled: computed(() => Boolean(productSlug.value)),
    select: (response: StrapiListResponse<StrapiProductAttributes>) => {
      if (!response?.data?.length) {
        throw createError({
          statusCode: 404,
          statusMessage: "Product not found",
        });
      }

      const mapped = mapProductFromResponse(response, normalizeMediaCollection);
      if (!mapped) {
        throw createError({
          statusCode: 404,
          statusMessage: "Product not found",
        });
      }
      return mapped;
    },
  }
);

const product = computed(() => productResponse.value);

const placeholderImage = "/images/Product-bg.jpg";
const getProductImageUrl = (images?: Product["images"]) => {
  const [first] = images ?? [];
  return first?.url ?? first?.path ?? placeholderImage;
};
const productImages = computed(() => {
  return (
    product.value?.images?.map((img) => img?.url ?? img?.path ?? placeholderImage) ??
    [placeholderImage]
  );
});

const productLeadMetadata = computed<LeadMetadata>(() => {
  if (!product.value) {
    return {
      photoUrls: productImages.value.slice(0, 3),
    };
  }

  return {
    product: {
      name: product.value.name,
      collectionName: product.value.collection?.name,
      fabric: product.value.fabric ?? null,
      color: product.value.color ?? null,
      size: null,
      url: productPageUrl.value,
    },
    photoUrls: productImages.value.slice(0, 3),
  };
});

const formatPrice = (price?: string, currency?: string): string => {
  if (!price) {
    return "—";
  }
  const currencyLook = new Intl.NumberFormat('fr');
  const formatted = currencyLook.format(Number(price));
  // Remove currency symbol if currency is not provided
  return currency ? `${formatted} ${currency}` : price;
};

const collectionName = computed(
  () => product.value?.collection?.name ?? "Коллекция"
);

const descriptionText = computed(
  () =>
    product.value?.description ??
    "Описание недоступно. Скоро здесь появится дополнительная информация."
);

const parseMultilineField = (value?: string | null): string[] => {
  if (!value) {
    return [];
  }
  return value
    .split(/\r?\n+/)
    .map((entry) => entry.replace(/\/+$/g, "").trim())
    .filter(Boolean);
};

const composition = computed(() => {
  const materialItems = parseMultilineField(product.value?.material);
  if (materialItems.length) {
    return materialItems;
  }
  const fallback = product.value?.fabric
    ? [`${product.value.fabric}`]
    : ["Состав уточняйте у менеджера"];
  return fallback;
});

const careInstructions = computed(() => {
  const careItems = parseMultilineField(product.value?.care);
  if (careItems.length) {
    return careItems;
  }
  return ["Только химчистка", "Деликатная стирка", "Не отбеливать"];
});

type SizeOption = {
  value: string;
  label: string;
  available: boolean;
  variantId?: number | null;
};

const normalizeSizeLabel = (value?: string | null) => {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  return trimmed || null;
};

const variantSizeOptions = computed<SizeOption[]>(() => {
  const variants = product.value?.variants;
  if (!variants?.length) {
    return [];
  }

  const seen = new Set<string>();
  const sortedVariants = [...variants].sort((a, b) => {
    const aOrder = a.size?.sortOrder ?? Number.MAX_SAFE_INTEGER;
    const bOrder = b.size?.sortOrder ?? Number.MAX_SAFE_INTEGER;
    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }
    const aLabel = a.size?.label ?? a.size?.title ?? "";
    const bLabel = b.size?.label ?? b.size?.title ?? "";
    return aLabel.localeCompare(bLabel);
  });

  return sortedVariants
    .map((variant) => {
      const label = normalizeSizeLabel(variant.size?.label ?? variant.size?.title ?? null);
      if (!label) {
        return null;
      }
      const value = label.toUpperCase();
      if (seen.has(value)) {
        return null;
      }
      seen.add(value);
      return {
        value,
        label: value,
        available: variant.isAvailable !== false,
        variantId: variant.id,
      };
    })
    .filter((option): option is SizeOption => Boolean(option));
});

const fallbackSizeOptions = computed<SizeOption[]>(() => {
  const sizes = product.value?.availableSizes;
  if (!sizes?.length) {
    return [];
  }
  const seen = new Set<string>();
  return sizes
    .map((size) => {
      const raw = typeof size === "string" ? size.trim() : String(size ?? "");
      if (!raw) {
        return null;
      }
      const value = raw.toUpperCase();
      if (seen.has(value)) {
        return null;
      }
      seen.add(value);
      return {
        value,
        label: value,
        available: true,
      };
    })
    .filter((option): option is SizeOption => Boolean(option));
});

const sizeOptions = computed<SizeOption[]>(() => {
  if (variantSizeOptions.value.length) {
    return variantSizeOptions.value;
  }
  return fallbackSizeOptions.value;
});

const availableSizesText = computed(() => {
  if (variantSizeOptions.value.length) {
    return variantSizeOptions.value.map((option) => option.label).join(", ");
  }
  const fallback = product.value?.availableSizes;
  return fallback?.length ? fallback.join(", ") : "Размеры уточняйте у менеджера";
});

const hasSizeOptions = computed(() => sizeOptions.value.length > 0);

const selectedSize = ref<string | null>(null);

watch(
  sizeOptions,
  (sizes) => {
    const firstAvailable = sizes.find((option) => option.available);
    selectedSize.value = firstAvailable?.value ?? sizes[0]?.value ?? null;
  },
  { immediate: true }
);

type DetailSectionKey = "composition" | "care" | "description";
type ComplementaryProductCard = {
  id: number;
  slug?: string;
  name: string;
  price: string;
  image: string;
};

const detailsSections = ref<Record<DetailSectionKey, boolean>>({
  composition: false,
  care: false,
  description: false,
});

const toggleSection = (key: DetailSectionKey) => {
  detailsSections.value[key] = !detailsSections.value[key];
};

const toggleFavorite = () => {
  if (!product.value) {
    return;
  }
  likesStore.toggle(product.value.id);
};

const isFavorite = computed(() => {
  if (!product.value) {
    return false;
  }
  return likesStore.isLiked(product.value.id);
});

const isCallbackModalOpen = ref(false);
const openCallbackModal = () => {
  isCallbackModalOpen.value = true;
};
const complementaryProducts = computed(() => product.value?.products ?? []);
const complementaryProductCards = computed<ComplementaryProductCard[]>(() =>
  complementaryProducts.value.map((item) => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    price: formatPrice(item.price, item.currency ?? undefined),
    image: getProductImageUrl(item.images),
  }))
);
const hasComplementaryProducts = computed(
  () => complementaryProductCards.value.length > 0
);
const complementarySliderRef = ref<HTMLElement | null>(null);
const slideComplementaryProducts = (direction: "prev" | "next") => {
  const swiperEl = complementarySliderRef.value as (HTMLElement & {
    swiper?: { slidePrev: () => void; slideNext: () => void };
  }) | null;
  if (!swiperEl?.swiper) {
    return;
  }
  if (direction === "prev") {
    swiperEl.swiper.slidePrev();
  } else {
    swiperEl.swiper.slideNext();
  }
};
const goToComplementaryProduct = (item: ComplementaryProductCard) => {
  const identifier = item?.slug ?? item.id;
  if (!identifier) {
    return;
  }
  router.push(`/catalog/${identifier}`);
};
const toggleFavoriteProduct = (productId: number) => {
  likesStore.toggle(productId);
};
const isProductLiked = (productId: number) => likesStore.isLiked(productId);
</script>

<template>
  <div class="bg-[#FBFAF9]">
    <div
      class="flex min-h-[calc(100vh-72px)] max-md:flex-col max-lg:flex md:basis-[50%]"
    >
      <div
        class="flex overflow-y-auto no-scrollbar flex-col bg-[#fff] flex-1"
      >
        <div
          class="md:flex max-md:hidden overflow-y-auto no-scrollbar flex-col h-full"
        >
          <div
            v-for="(value, index) in productImages"
            :key="`product-image-${index}`"
            class="relative min-h-[calc(100vh)] flex items-center justify-center"
          >
            <img
              :src="value"
              alt="Product image"
              class="h-full w-full object-cover object-top max-xl:object-cover"
            />
          </div>
        </div>

        <div class="md:hidden w-full h-full px-4 py-6">
          <ClientOnly>
            <swiper-container
              class="product-mobile-gallery"
              :slides-per-view="1"
              :space-between="12"
              :pagination="{ clickable: true }"
            >
              <swiper-slide
                v-for="(value, index) in productImages"
                :key="index"
              >
                <div class="product-mobile-gallery__image">
                  <img :src="value" alt="Product image" />
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
      <div
        class="h-[calc(100vh-72px)] overflow-y-auto px-[72px] py-[80px] bg-[#FBFAF9] max-xl:px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 max-sm:py-8 max-md:h-auto max-md:relative md:sticky md:top-[72px] md:basis-[50%]"
      >
        <div v-if="isProductLoading" class="text-center text-[#0F0F0F] py-10">
          Загрузка информации о товаре...
        </div>

        <div v-else-if="isProductError || !product" class="text-center text-[#C16371] py-10">
          Не удалось загрузить информацию о товаре. Попробуйте позже.
        </div>

        <div v-else class="flex flex-col gap-8 w-full max-w-[620px] text-[#0F0F0F]">

          <div class="flex flex-col gap-3">
            <span class="text-xs text-[#C16371] flex items-center gap-3">
              {{ collectionName }}
            </span>
            <h1 class="text-[72px] font-[masvol] leading-[1] max-lg:text-[56px] max-md:text-[46px] max-sm:text-[36px]">
              {{ product.name }}
            </h1>
            <p class="font-semibold text-[20px] max-sm:text-[20px]">
              {{ formatPrice(product.price, product.currency ? product.currency : undefined) }}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <p class="font-bold uppercase text-[14px] text-[#0F0F0F]">Размер</p>
              <span
                v-if="selectedSize"
                class="text-xs uppercase text-[#C16371]"
              >
                {{ selectedSize ? selectedSize.toUpperCase() : "" }}
              </span>
            </div>
            <div v-if="hasSizeOptions" class="flex flex-wrap gap-3">
              <button
                v-for="option in sizeOptions"
                :key="option.value"
                type="button"
                class="px-3 h-[22px] rounded-full border text-[14px] uppercase transition-all"
                :class="[
                  selectedSize === option.value
                    ? '!bg-[#0F0F0F] !text-white !border-[#0F0F0F]'
                    : 'bg-transparent border-[#E3DED7] text-[#3D3D3D]',
                ]"
                @click="selectedSize = option.value"
              >
                {{ option.value.toUpperCase() }}
              </button>
            </div>
            <p
              v-else
              class="text-[15px] uppercase tracking-[0.2em] text-[#CDC6BF]"
            >
              {{ availableSizesText }}
            </p>
          </div>
          <div class="flex gap-5">
            <Button
              class="!rounded-[999px] !text-white !px-[48px] !h-[54px] !bg-[#0F0F0F] !border-[#0F0F0F] uppercase w-full max-w-[280px]"
              variant="outlined"
              severity="primary"
              @click="openCallbackModal"
            >
              Купить
            </Button>
  
            <button
              type="button"
              class="h-12 w-12 rounded-full border border-[#E4E0DA] flex items-center justify-center hover:bg-[#F7F5F0] transition-colors"
              :aria-pressed="isFavorite"
              @click="toggleFavorite"
            >
              <Icon
                name="app-icon:heart-outlined"
                mode="svg"
                :class="isFavorite ? 'heart--liked' : ''"
                :color="isFavorite ? '#000' : '#0F0F0F'"
                size="24"
              />
            </button>
          </div>

          <div class="flex flex-col border-[#E8E2DC] divide-y divide-[#E8E2DC]">
            <div class="py-6">
              <button
                type="button"
                class="w-full flex items-center justify-between"
                @click="toggleSection('composition')"
              >
                <p class="text-[14px] leading-5 uppercase font-bold text-[#0F0F0F]">Состав</p>
                <Icon
                  :name="detailsSections.composition ? 'ph:caret-up' : 'ph:caret-down'"
                  size="20"
                  color="#0F0F0F"
                />
              </button>
              <div v-if="detailsSections.composition" class="mt-4">
                <ul class="flex flex-col gap-1">
                  <li v-for="(item, index) in composition" class="font-300 uppercase text-[#3D3D3D] text-[14px]" :key="`composition-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="py-6">
              <button
                type="button"
                class="w-full flex items-center justify-between"
                @click="toggleSection('care')"
              >
                <p class="text-[14px] uppercase tracking-[0.05em] font-semibold text-[#0F0F0F] ">Уход</p>
                <Icon
                  :name="detailsSections.care ? 'ph:caret-up' : 'ph:caret-down'"
                  size="20"
                  color="#0F0F0F"
                />
              </button>
              <div v-if="detailsSections.care" class="mt-4">
                <ul class="flex font-300 flex-col gap-1 uppercase text-[#3D3D3D] text-[14px]">
                  <li v-for="(item, index) in careInstructions" :key="`care-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="py-6">
              <button
                type="button"
                class="w-full flex items-center justify-between"
                @click="toggleSection('description')"
              >
                <p class="text-[14px] uppercase tracking-[0.05em] font-semibold text-[#0F0F0F] ">Описание</p>
                <Icon
                  :name="detailsSections.description ? 'ph:caret-up' : 'ph:caret-down'"
                  size="20"
                  color="#0F0F0F"
                />
              </button>
              <div v-if="detailsSections.description" class="mt-4">
                <p class="text-[15px] leading-relaxed tracking-[0.05em] text-[#3D3D3D]">
                  {{ descriptionText }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-if="hasComplementaryProducts"
    class="complementary-products-section px-4 py-16 max-sm:py-10 bg-[#FBFAF9]"
  >
    <div class="complementary-products container mx-auto">
      <div
        class="complementary-products__header flex items-center justify-between mb-10 max-sm:mb-2.5 max-sm:flex-col max-sm:items-start max-sm:gap-6"
      >
        <h2 class="text-[44px] font-[masvol] text-[#0F0F0F] max-sm:text-[32px]">
          Дополните образ
        </h2>
        <div class="max-md:hidden complementary-products__controls flex gap-4">
          <button
            type="button"
            class="complementary-products__control"
            @click="slideComplementaryProducts('prev')"
          >
            <Icon name="ph:arrow-left" size="16" />
          </button>
          <button
            type="button"
            class="complementary-products__control"
            @click="slideComplementaryProducts('next')"
          >
            <Icon name="ph:arrow-right" size="16" />
          </button>
        </div>
      </div>
      <ClientOnly>
        <swiper-container
          ref="complementarySliderRef"
          class="complementary-products__slider max-md:hidden"
          :space-between="24"
          :slides-per-view="1.05"
          :breakpoints="{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.2 }
          }"
        >
          <swiper-slide
            v-for="item in complementaryProductCards"
            :key="item.id"
            class="complementary-products__slide"
          >
            <div
              class="complementary-card"
              @click="goToComplementaryProduct(item)"
            >
              <div class="complementary-card__image">
                <img :src="item.image" :alt="item.name" />
                <button
                  type="button"
                  class="complementary-card__favorite"
                  :aria-pressed="isProductLiked(item.id)"
                  @click.stop="toggleFavoriteProduct(item.id)"
                >
                  <Icon
                    name="app-icon:heart-outlined"
                    mode="svg"
                    :color="isProductLiked(item.id) ? '#000' : '#0F0F0F'"
                    :class="isProductLiked(item.id) ? 'heart--liked' : ''"
                    size="22"
                  />
                </button>
              </div>
              <div class="complementary-card__info">
                <p class="complementary-card__title">
                  {{ item.name }}
                </p>
                <span class="complementary-card__price">
                  {{ item.price }}
                </span>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <div class="md:hidden flex flex-wrap gap-x-2">
        <div v-for="item in complementaryProductCards" :key="item.id" class="mb-8 shrink-0 grow-0 basis-[48%] ">
          <div
            class="complementary-card"
            @click="goToComplementaryProduct(item)"
          >
            <div class="complementary-card__image">
              <img :src="item.image" :alt="item.name" />
              <button
                type="button"
                class="complementary-card__favorite"
                :aria-pressed="isProductLiked(item.id)"
                @click.stop="toggleFavoriteProduct(item.id)"
              >
                <Icon
                  name="app-icon:heart-outlined"
                  mode="svg"
                  :color="isProductLiked(item.id) ? '#000' : '#0F0F0F'"
                  :class="isProductLiked(item.id) ? 'heart--liked' : ''"
                  size="22"
                />
              </button>
            </div>
            <div class="complementary-card__info">
              <p class="complementary-card__title">
                {{ item.name }}
              </p>
              <span class="complementary-card__price">
                {{ item.price }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <AppCallBackModal
    v-model:visible="isCallbackModalOpen"
    service-type="collection"
    :metadata="productLeadMetadata"
  />
</template>

<style scoped>
.product-mobile-gallery {
  width: 100%;
  min-height: 360px;
}

.product-mobile-gallery__image {
  width: 100%;
  height: 100%;
}

.product-mobile-gallery__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.product-mobile-gallery .swiper-pagination-bullet) {
  background-color: #0f0f0f;
  opacity: 0.3;
}

:deep(.product-mobile-gallery .swiper-pagination-bullet-active) {
  opacity: 1;
}

.heart--liked g {
  fill: #000 !important;
}

.complementary-products-section {
  background: #FBFAF9;
}

.complementary-products__slider {
  width: 100%;
}

.complementary-products__control {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid #d7d1ca;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0f0f0f;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.complementary-products__control:hover {
  background-color: #0f0f0f;
  color: #fff;
}

.complementary-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: #0f0f0f;
  @media (max-width: 767px) {
    gap: 12px;
  }
}

.complementary-card__image {
  background: #fff;
  padding: 32px;
  min-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 767px) {
    padding: 16px;
    min-height: 194px;
  }
}

.complementary-card__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.complementary-card__favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(15, 15, 15, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: background-color 0.2s ease;
  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
  }
}

.complementary-card__favorite:hover {
  background-color: #f7f5f0;
}

.complementary-card__info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.complementary-card__title {
  font-weight: 500;
  @media (width < 768px) {
    font-weight: 300;
    font-size: 12px;
  }
}

.complementary-card__price {
  color: #6a6967;
  @media (width < 768px) {
    font-size: 12px;
    color: #3D3D3D;
    font-weight: 500;
  }
}

.size-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #e3ded7;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 13px;
  color: #3d3d3d;
  background-color: transparent;
  transition: all 0.2s ease;
}

.size-badge--selected {
  background-color: #0f0f0f;
  border-color: #0f0f0f;
  color: #fff;
}

.size-badge--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.size-badge__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: #39b28c;
}

.size-badge__dot--unavailable {
  background-color: #d6cfc6;
}

.size-badge__label {
  text-transform: uppercase;
}
</style>
