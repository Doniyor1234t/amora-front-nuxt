<script setup lang="ts">
import { computed } from "vue";
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
  layout: "header-only",
});

const route = useRoute();
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
      populate: ["images"],
    },
  }),
  {
    enabled: isValidCollectionSlug,
    select: (response: StrapiListResponse<StrapiCollectionAttributes>) => mapCollectionFromResponse(response, normalizeMediaCollection),
  }
);

const {
  data: collectionProductsResponse,
  isLoading: isCollectionProductsLoading,
  isError: isCollectionProductsError,
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
        pageSize: 40,
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
    select: (response: StrapiListResponse<StrapiProductAttributes>) => mapProductsResponse(response, normalizeMediaCollection),
  }
);

const collection = computed(() => collectionResponse.value);
const collectionProducts = computed(
  () => collectionProductsResponse.value?.items ?? []
);
const totalProducts = computed(
  () => collectionProductsResponse.value?.total ?? collectionProducts.value.length
);

const placeholderCollectionImages = [
  "/images/Collection-bg-3.jpg",
  "/images/Collection-bg-6.jpg",
];

const heroImages = computed(() => {
  const images = collection.value?.images ?? [];
  return [images[0]?.url, images[1]?.url].map(
    (img, index) => img ?? placeholderCollectionImages[index] ?? placeholderCollectionImages[0]
  );
});

const collectionName = computed(() => collection.value?.name ?? "Коллекция");
const collectionDescription = computed(
  () =>
    collection.value?.description ??
    "Коллекция Amora, вдохновленная женственностью и современной эстетикой."
);

const placeholderProductImage = "/images/products/dress-1.png";

const getProductImage = (product: Product) => {
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
</script>

<template>
  <div class="pt-[72px]">
    <div v-if="!isValidCollectionSlug" class="container py-20 text-center">
      <p class="text-[#C16371] text-lg">
        Некорректный идентификатор коллекции.
      </p>
    </div>
    <div v-else>
      <div class="relative">
        <div class="grid grid-cols-2 relative max-h-[900px]">
          <div class="relative">
            <img
              :src="heroImages[0]"
              alt=""
              class="w-full max-h-[900px] object-cover"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
          </div>
          <div class="relative">
            <img
              :src="heroImages[1]"
              alt=""
              class="w-full max-h-[900px] object-cover"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
          </div>
        </div>

        <div
          class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-sm:hidden"
        >
          <div class="flex flex-col items-center justify-center h-full px-8 text-center">
            <div v-if="isCollectionLoading" class="text-[#0F0F0F]">
              Загрузка коллекции...
            </div>
            <div v-else-if="isCollectionError" class="text-[#C16371]">
              Не удалось загрузить коллекцию.
            </div>
            <div v-else>
              <div class="flex items-center gap-2 mb-[12px] text-xs tracking-[0.3em] text-[#C16371] uppercase">
                новая коллекция
              </div>
              <h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]">
                {{ collectionName }}
              </h2>
              <p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]">
                {{ collectionDescription }}
              </p>
              <Button
                variant="outlined"
                severity="secondary"
                class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] !py-[14px]"
              >
                ПОСМОТРЕТЬ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container flex items-center justify-between mb-[32px] mt-[48px]"
      >
        <div>
          <p class="text-xs tracking-[0.3em] text-[#C16371] uppercase mb-2">
            коллекция
          </p>
          <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]">
            {{ collectionName }}
          </h2>
        </div>

        <div class="flex items-center gap-2 h-[44px]">
          <span class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]">
            ({{ totalProducts }})
          </span>
        </div>
      </div>

      <div class="container mx-auto">
        <div v-if="isCollectionProductsLoading" class="py-10 text-center text-[#0F0F0F]">
          Загрузка изделий...
        </div>
        <div v-else-if="isCollectionProductsError" class="py-10 text-center text-[#C16371] text-lg">
          Не удалось загрузить изделия коллекции.
        </div>
        <div v-else-if="collectionProducts.length === 0" class="py-10 text-center text-[#0F0F0F]">
          В этой коллекции пока нет изделий.
        </div>
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <div
            v-for="product in collectionProducts"
            :key="product.id"
            class="w-full flex flex-col justify-center"
          >
            <div class="bg-[#F5F5F5] rounded-3xl overflow-hidden">
              <img
                :src="getProductImage(product)"
                :alt="product.name"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="px-[24px] py-[20px] text-[#3D3D3D]">
              <h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase">
                {{ product.name }}
              </h2>
              <p class="text-xs text-[#9B9B9B]">
                {{ formatPrice(product.price, product.currency ? product.currency : undefined) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
