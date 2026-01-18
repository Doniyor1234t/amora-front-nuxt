<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useLikesStore } from "@/stores/likes";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Collection,
  type Product,
  type ProductsResponse,
  type StrapiCollectionAttributes,
  type StrapiProductAttributes,
  mapCollectionFromResponse,
  mapProductsResponse,
} from "@/utils/catalogMappers";

definePageMeta({
  layout: "default",
});

const route = useRoute();
const router = useRouter();
const likesStore = useLikesStore();
const collectionSlug = computed(() => route.params.id as string);
const isValidCollectionSlug = computed(() => Boolean(collectionSlug.value));

const { normalizeMediaCollection } = useStrapi();

const {
  data: collectionResponse,
  isLoading: isCollectionLoading,
  isError: isCollectionError,
} = useStrapiQuery<
  StrapiListResponse<StrapiCollectionAttributes>,
  Error,
  Collection | null
>(
  ["collection", collectionSlug],
  () => ({
    path: "/collections",
    query: {
      filters: {
        slug: { $eq: collectionSlug.value },
        isActive: { $eq: true },
      },
      pagination: {
        page: 1,
        pageSize: 1,
      },
      populate: {
        images: { populate: "*" },
        cover: { populate: "*" },
      },
    },
  }),
  {
    enabled: isValidCollectionSlug,
    select: (response: StrapiListResponse<StrapiCollectionAttributes>) =>
      mapCollectionFromResponse(response, normalizeMediaCollection),
  }
);

const {
  data: collectionProductsResponse,
  isLoading: isCollectionProductsLoading,
  isError: isCollectionProductsError,
  isFetching: isCollectionProductsFetching,
} = useStrapiQuery<
  StrapiListResponse<StrapiProductAttributes>,
  Error,
  ProductsResponse
>(
  ["collection-products", collectionSlug],
  () => ({
    path: "/products",
    query: {
      filters: {
        isActive: { $eq: true },
        collection: {
          slug: { $eq: collectionSlug.value },
        },
      },
      pagination: {
        page: 1,
        pageSize: 60,
      },
      populate: {
        images: { populate: "*" },
        variants: { populate: ["size", "image"] },
      },
      sort: ["publishedAt:desc"],
    },
  }),
  {
    enabled: isValidCollectionSlug,
    keepPreviousData: true,
    select: (response: StrapiListResponse<StrapiProductAttributes>) =>
      mapProductsResponse(response, normalizeMediaCollection),
  }
);

const collection = computed(() => collectionResponse.value);
const heroImage = computed(() => {
  const [first] = collection.value?.images ?? [];
  return first?.url ?? first?.path ?? "/images/Collection-bg-3.jpg";
});
const collectionName = computed(() => collection.value?.name ?? "Коллекция");
const collectionDescription = computed(
  () =>
    collection.value?.description ??
    "Коллекция Amora, вдохновленная женственностью и современной эстетикой."
);

const collectionProducts = computed(
  () => collectionProductsResponse.value?.items ?? []
);
const totalProducts = computed(
  () =>
    collectionProductsResponse.value?.total ?? collectionProducts.value.length
);

const placeholderProductImage = "/images/products/Image.png";

const getProductImage = (product: Product): string => {
  if (!product.images?.length) {
    return placeholderProductImage;
  }
  const [firstImage] = product.images;
  return firstImage?.url ?? firstImage?.path ?? placeholderProductImage;
};

const formatPrice = (price?: string, currency?: string) => {
  if (!price) {
    return "—";
  }
  return currency ? `${price} ${currency}` : price;
};

const goToProduct = (product: Product) => {
  const identifier = product.slug || String(product.id);
  router.push(`/catalog/${identifier}`);
};

const toggleFavorite = (productId: number) => {
  likesStore.toggle(productId);
};

const isFavorite = (productId: number) => likesStore.isLiked(productId);
</script>

<template>
  <div class="">
    <div v-if="!isValidCollectionSlug" class="container py-20 text-center">
      <p class="text-[#C16371] text-lg">
        Некорректный идентификатор коллекции.
      </p>
    </div>
    <template v-else>
      <section class="collection-detail-hero" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="h-[100vh] w-full relative">
          <img
            :src="heroImage"
            :alt="collectionName"
            class="inset-0 w-full h-full object-contain opacity-0"
          />
        </div>
        <!-- <div class="collection-detail-hero__overlay" /> -->
        <!-- <div class="collection-detail-hero__content container">
          <h1 class="collection-detail-hero__title">
            {{
              isCollectionLoading
                ? "Загрузка…"
                : isCollectionError
                  ? "Коллекция недоступна"
                  : collectionName
            }}
          </h1>
          <p class="collection-detail-hero__description">
            {{
              isCollectionLoading || isCollectionError
                ? ""
                : collectionDescription
            }}
          </p>
        </div> -->
      </section>

      <section class="container py-12">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 class="text-[32px] text-[#0F0F0F]">
              Готово к примерке
            </h2>
            <!-- <p class="text-[#7D7D7D] text-sm tracking-[0.2em] uppercase">
              {{ totalProducts }} изделий
            </p> -->
          </div>

        </div>
      </section>

      <section class="container pb-20">
        <div
          v-if="isCollectionProductsLoading && !collectionProducts.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <div v-for="index in 8" :key="`skeleton-${index}`" class="space-y-4">
            <div class="bg-[#F5F5F5] h-[360px] animate-pulse" />
            <div class="h-3 bg-[#E2E2E2] w-3/4 animate-pulse" />
          </div>
        </div>
        <div
          v-else-if="isCollectionProductsError"
          class="py-14 text-center text-[#C16371]"
        >
          Не удалось загрузить изделия. Попробуйте позже.
        </div>
        <div
          v-else-if="collectionProducts.length === 0"
          class="py-14 text-center text-[#0F0F0F]"
        >
          В этой коллекции пока нет изделий.
        </div>
        <div v-else class="relative">
          <div
            class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 max-md:gap-y-[7px] max-md:gap-x-[16px]"
          >
            <div
              v-for="product in collectionProducts"
              :key="product.id"
              class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1"
              @click="goToProduct(product)"
            >
              <div
                class="relative overflow-hidden h-[360px] flex items-center justify-center bg-[#F9F9F9]"
              >
                <button
                  type="button"
                  class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center transition hover:scale-105"
                  :aria-pressed="isFavorite(product.id)"
                  @click.stop="toggleFavorite(product.id)"
                >
                  <Icon
                    name="app-icon:heart-outlined"
                    mode="svg"
                    :class="isFavorite(product.id) ? 'heart--liked' : ''"
                    :color="isFavorite(product.id) ? '#000' : '#0F0F0F'"
                    size="20"
                  />
                </button>
                <img
                  :src="getProductImage(product)"
                  :alt="product.name"
                  class="w-full h-full object-contain"
                />
              </div>

              <div
                class="px-[24px] py-[20px] max-md:p-2 text-[#3D3D3D] flex items-center justify-between gap-4"
              >
                <div>
                  <h2 class="pb-[8px] text-xs tracking-[0.06em] uppercase">
                    {{ product.name }}
                  </h2>
                  <p class="text-xs text-[#9B9B9B]">
                    {{
                      formatPrice(
                        product.price,
                        product.currency ? product.currency : undefined
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-if="isCollectionProductsFetching"
            class="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
          >
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 w-full px-2"
            >
              <div
                v-for="index in 8"
                :key="`overlay-skeleton-${index}`"
                class="hidden sm:flex flex-col gap-4 animate-pulse"
              >
                <div class="bg-[#F5F5F5] h-[320px]" />
                <div class="px-[24px] py-[12px] space-y-2">
                  <div class="h-3 w-2/3 bg-[#E2E2E2]" />
                  <div class="h-3 w-1/2 bg-[#E2E2E2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.collection-detail-hero {
  position: relative;
  min-height: 90vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.collection-detail-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.collection-detail-hero__content {
  position: relative;
  z-index: 2;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 96px 0 72px;
  color: #ffffff;
  gap: 16px;
}

.collection-detail-hero__eyebrow {
  letter-spacing: 0.3em;
  font-size: 12px;
  text-transform: uppercase;
}

.collection-detail-hero__title {
  font-size: 54px;
  max-width: 720px;
}

.collection-detail-hero__description {
  max-width: 640px;
  color: rgba(255, 255, 255, 0.85);
}

@media (max-width: 768px) {
  .collection-detail-hero {
    min-height: 70vh;
  }

  .collection-detail-hero__content {
    padding: 64px 0 48px;
  }

  .collection-detail-hero__title {
    font-size: 36px;
  }
}
</style>
