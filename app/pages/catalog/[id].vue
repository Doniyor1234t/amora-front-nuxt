<script setup lang="ts">
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
  return (
    product.value?.images?.map(
      (img) => img?.url ?? img?.path ?? placeholderImage
    ) ?? [placeholderImage]
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

const careInstructions = computed(() => [
  "Только химчистка",
  "Деликатная стирка",
  "Не отбеливать",
]);

const availableSizesText = computed(() => {
  const sizes = product.value?.availableSizes;
  return sizes?.length ? sizes.join(", ") : "Размеры уточняйте у менеджера";
});

const sizeOptions = computed(() => {
  const sizes = product.value?.availableSizes;
  if (!sizes?.length) {
    return [];
  }
  return sizes
    .map((size) =>
      typeof size === "string" ? size.trim() : String(size ?? "")
    )
    .filter((size): size is string => Boolean(size));
});

const hasSizeOptions = computed(() => sizeOptions.value.length > 0);

const selectedSize = ref<string | null>(null);

watch(
  sizeOptions,
  (sizes) => {
    selectedSize.value = sizes[0] ?? null;
  },
  { immediate: true }
);

type DetailSectionKey = "composition" | "care" | "description";

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
</script>

<template>
  <div class="pt-[72px]">
    <div
      class="grid grid-cols-2 overflow-hidden min-h-[calc(100vh-72px)] max-lg:grid-cols-[1.1fr_0.9fr] max-md:grid-cols-1"
    >
      <div
        class="flex overflow-y-auto no-scrollbar flex-col h-[calc(100vh-72px)] bg-[#fff]"
      >
        <div
          v-for="(value, index) in productImages"
          :key="`product-image-${index}`"
          class="relative min-h-[calc(100vh-72px)] flex items-center justify-center"
        >
          <img
            :src="value"
            alt="Product image"
            class="h-full w-full object-cover object-top max-xl:object-contain"
          />
        </div>
      </div>
      <div
        class="h-[calc(100vh-72px)] overflow-y-auto px-[72px] py-[80px] bg-white max-xl:px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 max-sm:py-8"
      >
        <div v-if="isProductLoading" class="text-center text-[#0F0F0F] py-10">
          Загрузка информации о товаре...
        </div>

        <div v-else-if="isProductError || !product" class="text-center text-[#C16371] py-10">
          Не удалось загрузить информацию о товаре. Попробуйте позже.
        </div>

        <div v-else class="flex flex-col gap-8 w-full max-w-[620px] text-[#0F0F0F]">

          <div class="flex flex-col gap-3">
            <span class="text-xs tracking-[0.4em] text-[#C16371] uppercase flex items-center gap-3">
              {{ collectionName }}
              <span class="w-1 h-1 rounded-full bg-[#C16371]" />
            </span>
            <h1 class="text-[72px] font-[masvol] leading-[1] max-lg:text-[56px] max-md:text-[46px] max-sm:text-[36px]">
              {{ product.name }}
            </h1>
            <p class="font-semibold text-[26px] max-sm:text-[20px]">
              {{ formatPrice(product.price, product.currency ? product.currency : undefined) }}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Размер</p>
              <span
                v-if="selectedSize"
                class="text-xs uppercase tracking-[0.3em] text-[#C16371]"
              >
                {{ selectedSize ? selectedSize.toUpperCase() : "" }}
              </span>
            </div>
            <div v-if="hasSizeOptions" class="flex flex-wrap gap-3">
              <button
                v-for="size in sizeOptions"
                :key="size"
                type="button"
                class="px-6 h-[44px] rounded-full border text-[13px] uppercase tracking-[0.25em] transition-all"
                :class="[
                  selectedSize === size
                    ? '!bg-[#0F0F0F] !text-white !border-[#0F0F0F]'
                    : 'bg-transparent border-[#E3DED7] text-[#3D3D3D]',
                ]"
                @click="selectedSize = size"
              >
                {{ size.toUpperCase() }}
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
              class="!rounded-[999px] !text-white !px-[48px] !h-[54px] !bg-[#0F0F0F] !border-[#0F0F0F] uppercase tracking-[0.25em] w-full max-w-[280px]"
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
                :color="isFavorite ? '#C16371' : '#0F0F0F'"
                size="24"
              />
            </button>
          </div>

          <div class="flex flex-col border-t border-b border-[#E8E2DC] divide-y divide-[#E8E2DC]">
            <div class="py-6">
              <button
                type="button"
                class="w-full flex items-center justify-between"
                @click="toggleSection('composition')"
              >
                <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Состав</p>
                <Icon
                  :name="detailsSections.composition ? 'ph:caret-up' : 'ph:caret-down'"
                  size="20"
                  color="#0F0F0F"
                />
              </button>
              <div v-if="detailsSections.composition" class="mt-4">
                <ul class="flex flex-col gap-1 uppercase text-[#3D3D3D] text-[15px]">
                  <li v-for="(item, index) in composition" :key="`composition-${index}`">
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
                <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Уход</p>
                <Icon
                  :name="detailsSections.care ? 'ph:caret-up' : 'ph:caret-down'"
                  size="20"
                  color="#0F0F0F"
                />
              </button>
              <div v-if="detailsSections.care" class="mt-4">
                <ul class="flex flex-col gap-1 uppercase text-[#3D3D3D] text-[15px]">
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
                <p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Описание</p>
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
  <AppCallBackModal
    v-model:visible="isCallbackModalOpen"
    service-type="collection"
    :metadata="productLeadMetadata"
  />
</template>

<style scoped>
.heart--liked g {
  fill: #000 !important;
}
</style>
