<script setup lang="ts">
import { computed } from "vue";
import type { AxiosError } from "axios";
import { useApiQuery } from "@/composables/useApiService";

definePageMeta({
  layout: "header-only",
});

interface ProductImage {
  id: number;
  url?: string;
  path?: string;
}

interface ProductCollection {
  id: number;
  name: string;
  description?: string;
}

interface ProductResponse {
  id: number;
  name: string;
  slug: string;
  price: string;
  currency?: string;
  fabric?: string;
  color?: string;
  fit?: string;
  availableSizes?: string[];
  description?: string;
  collection?: ProductCollection;
  images: ProductImage[];
}

const route = useRoute();
const productId = computed(() => route.params.id as string);

const {
  data: productResponse,
  isLoading: isProductLoading,
  isError: isProductError,
} = useApiQuery<ProductResponse, AxiosError>(
  ["product", productId],
  () => ({
    url: `/products/${productId.value}`,
    method: "GET",
  }),
  {
    enabled: computed(() => Boolean(productId.value)),
  }
);

const product = computed(() => productResponse.value);

const placeholderImage = "/images/Product-bg.jpg";
const productImage = computed(() => {
  const firstImage = product.value?.images?.[0];
  return firstImage?.url ? `https://amora-brand.uz${firstImage?.url}` : firstImage?.path ?? placeholderImage;
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
    : undefined;
  const care = ["Сухая чистка", "Не отбеливать"];

  return [fabric, ...care].filter(Boolean);
});

const availableSizesText = computed(() => {
  const sizes = product.value?.availableSizes;
  return sizes?.length ? sizes.join(", ") : "Размеры уточняйте у менеджера";
});

const fitText = computed(() => product.value?.fit ?? "Параметры уточняйте у менеджера");
</script>

<template>
  <div class="pt-[72px]">
    <div class="grid grid-cols-2 max-sm:grid-cols-1 min-h-[calc(100vh-72px)]">
      <div class="relative">
        <img
          :src="productImage"
          alt="Product image"
          class="w-full h-full object-cover object-top"
        />
        <div class="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        <div
          class="absolute bottom-6 left-6 bg-white/80 px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase text-[#3D3D3D]"
        >
          {{ collectionName }}
        </div>
      </div>
      <div
        class="pt-[100px] pl-[40px] pr-[40px] max-sm:px-4 max-sm:pt-[32px] overflow-y-auto"
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
              {{ formatPrice(product.price, product.currency) }}
            </p>
          </div>

          <div class="flex flex-col gap-2 mt-2">
            <p class="text-xs tracking-[0.2em] text-[#3D3D3D]">Описание</p>
            <p class="text-sm leading-relaxed">
              {{ descriptionText }}
            </p>
          </div>

          <div class="flex flex-col gap-3 mt-4 text-sm">
            <p class="text-xs tracking-[0.2em] text-[#3D3D3D] uppercase">
              Состав и уход
            </p>
            <ul class="flex flex-col gap-2 uppercase">
              <li v-for="(item, index) in composition" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-4 text-sm uppercase max-sm:grid-cols-1">
            <div class="flex flex-col gap-2">
              <span class="text-xs tracking-[0.2em] text-[#3D3D3D]">
                Размеры
              </span>
              <p>{{ availableSizesText }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs tracking-[0.2em] text-[#3D3D3D]">
                Посадка
              </span>
              <p>{{ fitText }}</p>
            </div>
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
