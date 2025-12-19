<script setup lang="ts">
import { computed } from "vue";
import { createError } from "h3";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Product,
  type StrapiProductAttributes,
  mapProductFromResponse,
} from "@/utils/catalogMappers";

definePageMeta({
  layout: "header-only",
});

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const defaultLocale =
  runtimeConfig.public?.defaultLocale ?? runtimeConfig.public?.strapiLocale ?? "ru";
const currentLocale = computed(
  () => (route.params.locale as string | undefined) ?? defaultLocale
);
const productSlug = computed(() => route.params.id as string);
const { normalizeMediaCollection } = useStrapi();

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
      populate: ["images", "collection"],
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
const productImages = computed(() => {
  return product.value?.images?.map(img => img?.url ?? img?.path ?? placeholderImage) ?? [placeholderImage];
});

const formatPrice = (price?: string, currency?: string): string => {
  if (!price) {
    return "—";
  }
  return currency ? `${price} ${currency}` : price;
};

const collectionName = computed(
  () => product.value?.collection?.name ?? "Коллекция"
);

const descriptionText = computed(
  () =>
    product.value?.description ??
    "Описание недоступно. Скоро здесь появится дополнительная информация."
);

const composition = computed(() => {
  const fabric = product.value?.fabric
    ? `${product.value.fabric}`
    : "Состав уточняйте у менеджера";
  return [fabric];
});

const careInstructions = computed(() => ["Сухая чистка", "Не отбеливать"]);

const availableSizesText = computed(() => {
  const sizes = product.value?.availableSizes;
  return sizes?.length ? sizes.join(", ") : "Размеры уточняйте у менеджера";
});
</script>

<template>
  <div class="pt-[72px]">
    <div class="grid grid-cols-2 overflow-hidden max-sm:grid-cols-1 min-h-[calc(100vh-72px)]">
      <div class="flex overflow-y-auto no-scrollbar flex-col h-[calc(100vh-72px)]">
        <div class="relative min-h-[calc(100vh-72px)]" v-for="value in [...productImages]">
          <img
            :src="value"
            alt="Product image"
            class="h-full w-full object-cover object-top"
          />
          <div class="absolute top-0 left-0 w-full h-full"></div>
          <div
            class="absolute bottom-6 left-6 bg-white/80 px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase text-[#3D3D3D]"
          >
            {{ collectionName }}
          </div>
        </div>
      </div>
      <div
        class="h-[calc(100vh-72px)] overflow-y-auto pt-[100px] pl-[40px] pr-[40px] max-sm:px-4 max-sm:pt-[32px]"
      >
        <div
          v-if="isProductLoading"
          class="text-center text-[#0F0F0F] py-10"
        >
          Загрузка информации о товаре...
        </div>

        <div
          v-else-if="isProductError || !product"
          class="text-center text-[#C16371] py-10"
        >
          Не удалось загрузить информацию о товаре. Попробуйте позже.
        </div>

        <div
          v-else
          class="flex flex-col gap-4 w-full max-w-[600px] text-[#0F0F0F]"
        >
          <div class="flex flex-col gap-2">
            <span class="text-xs tracking-[0.2em] text-[#C16371] uppercase">
              {{ collectionName }}
            </span>
            <h1 class="text-[64px] font-[masvol] leading-[1.1] max-sm:text-[38px]">
              {{ product.name }}
            </h1>
            <p class="font-bold text-[20px] max-sm:text-[18px]">
              {{ formatPrice(product.price, product.currency ? product.currency : undefined) }}
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Размер</p>
            <p class="text-[15px] uppercase tracking-[0.2em] text-[#EEE9E4]">
              {{ availableSizesText }}
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Описание</p>
            <p class="text-[15px] leading-relaxed tracking-[0.05em] text-[#3D3D3D]">
              {{ descriptionText }}
            </p>
          </div>

          <div class="flex flex-col gap-4 text-[15px] text-[#C9C5C0]">
            <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Состав</p>
            <ul class="flex flex-col gap-1 uppercase text-[#3D3D3D]">
              <li v-for="(item, index) in composition" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-4 text-[15px]">
            <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Уход</p>
            <ul class="flex flex-col gap-1 uppercase">
              <li v-for="(item, index) in careInstructions" :key="`care-${index}`">
                {{ item }}
              </li>
            </ul>
          </div>

          <div
            class="w-full grid grid-cols-2 gap-4 mt-[32px] max-sm:grid-cols-1 max-sm:mb-10"
          >
            <Button
              class="!rounded-[80px] !text-white !px-[28px] !h-[48px] !bg-[#0F0F0F] uppercase"
              variant="outlined"
              severity="primary"
            >
              Оставить заявку
            </Button>

            <Button
              class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] !h-[48px] uppercase"
              variant="outlined"
              severity="secondary"
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
