<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Product,
  type ProductsResponse,
  type StrapiProductAttributes,
  mapProductsResponse,
} from "@/utils/catalogMappers";
import { useLikesStore } from "@/stores/likes";

const likesStore = useLikesStore();
const likedIds = computed(() => likesStore.likedIds);
const hasFavorites = computed(() => likedIds.value.length > 0);

const { normalizeMediaCollection } = useStrapi();

const productsQueryKey = computed(() => [
  "favorite-products",
  likedIds.value.slice().join(","),
]);

const {
  data: favoritesResponse,
  isLoading,
  isError,
} = useStrapiQuery<
  StrapiListResponse<StrapiProductAttributes>,
  Error,
  ProductsResponse
>(
  productsQueryKey,
  () => ({
    path: "/products",
    query: {
      filters: {
        id: { $in: likedIds.value },
        isActive: { $eq: true },
      },
      populate: {
        images: { populate: "*" },
        collection: { populate: "*" },
        variants: { populate: ["size", "image"] },
      },
      pagination: {
        page: 1,
        pageSize: likedIds.value.length || 1,
      },
    },
  }),
  {
    enabled: computed(() => likedIds.value.length > 0),
    select: (response) =>
      mapProductsResponse(response, normalizeMediaCollection),
  }
);

const favoriteProducts = computed(() => {
  const items = favoritesResponse.value?.items ?? [];
  if (!items.length) {
    return [];
  }
  const order = likedIds.value.map((id) => String(id));
  return [...items].sort((a, b) => {
    const indexA = order.indexOf(String(a.id));
    const indexB = order.indexOf(String(b.id));
    const safeA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
    const safeB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
    return safeA - safeB;
  });
});

const router = useRouter();
const goToProduct = (product: Product) => {
  const identifier = product.slug || String(product.id);
  router.push(`/catalog/${identifier}`);
};

const getProductImage = (product: Product) => {
  if (!product.images?.length) {
    return placeholderProductImage;
  }
  return (
    product.images[0]?.url ??
    product.images[0]?.path ??
    placeholderProductImage
  );
};

const toggleFavorite = (productId: number | string) => {
  likesStore.toggle(productId);
};

const isFavorite = (productId: number | string) =>
  likesStore.isLiked(productId);

const placeholderProductImage = "/images/products/Image.png";

const formatPrice = (price?: string, currency?: string) => {
  if (!price) {
    return "—";
  }
  return currency ? `${price} ${currency}` : price;
};
</script>

<template>
  <div class="pt-[72px] min-h-screen">
    <div class="container py-12">
      <div class="flex flex-col gap-4 mb-10">
        <p class="text-xs tracking-[0.4em] uppercase text-[#C16371]">Избранное</p>
        <h1 class="text-[52px] font-[masvol] max-sm:text-[34px]">Любимые изделия</h1>
        <p class="text-[#7D7D7D] text-sm max-w-[520px]">
          Здесь собраны все изделия, которые вы отметили ❤. Продолжайте выбирать и возвращайтесь к ним позже.
        </p>
      </div>

      <div v-if="isLoading" class="py-20 text-center text-[#7D7D7D]">
        Загружаем избранные изделия...
      </div>

      <div v-else-if="!hasFavorites">
        <div class="py-20 text-center text-[#0F0F0F] space-y-4">
          <p class="text-[20px] uppercase tracking-[0.2em]">Вы еще не отметили изделия</p>
          <p class="text-sm text-[#7D7D7D]">Перейдите в каталог и добавьте понравившиеся вещи в избранное.</p>
          <NuxtLink
            to="/catalog"
            class="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#0F0F0F] text-xs tracking-[0.3em] uppercase hover:bg-[#0F0F0F] hover:text-white transition"
          >
            В каталог
          </NuxtLink>
        </div>
      </div>

      <div v-else-if="isError" class="py-20 text-center text-[#C16371]">
        Не удалось загрузить избранные изделия. Попробуйте позже.
      </div>

      <div v-else-if="favoriteProducts.length === 0" class="py-20 text-center text-[#7D7D7D]">
        Похоже, выбранные ранее изделия недоступны. Попробуйте выбрать другие модели в каталоге.
      </div>

      <div v-else>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <div
            v-for="product in favoriteProducts"
            :key="product.id"
            class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1"
            @click="goToProduct(product)"
          >
            <div class="relative overflow-hidden h-[360px] flex items-center justify-center">
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
                  :color="isFavorite(product.id) ? '#C16371' : '#0F0F0F'"
                  size="20"
                />
              </button>
              <img
                :src="getProductImage(product)"
                :alt="product.name"
                class="w-full h-full object-contain"
              />
            </div>

            <div class="px-[24px] py-[20px] text-[#3D3D3D] flex items-center justify-between gap-4">
              <div>
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
  </div>
</template>

<style scoped>
.heart--liked g {
  fill: #c16371 !important;
}
</style>
