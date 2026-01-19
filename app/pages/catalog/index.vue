<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch, watchEffect } from "vue";
import { useLikesStore } from "@/stores/likes";
import Drawer from "primevue/drawer";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Product,
  type ProductsResponse,
  type StrapiProductAttributes,
  type StrapiSizeAttributes,
  mapProductsResponse,
} from "@/utils/catalogMappers";

interface StrapiCategoryAttributes {
  id: number;
  name: string;
  slug: string;
  isActive?: boolean | null;
  title: string | null;
}

type CategoryFilterOption = {
  label: string;
  value: string;
};

type SizeFilterOption = {
  label: string;
  value: string;
};

const normalizeSizeOptionValue = (value?: string | null) =>
  typeof value === "string" ? value.trim() : "";

const PAGE_SIZE = 12;
const currentPage = ref(1);

const { normalizeMediaCollection } = useStrapi();

const router = useRouter();
const route = useRoute();
const goToProduct = (product: Product) => {
  // Product detail queries expect a slug because Strapi's public API can't use `/products/:id` with i18n.
  // Fallback to the numeric id only if slug is missing to preserve legacy links.
  const identifier = product.slug || String(product.id);
  router.push(`/catalog/${identifier}`);
};

const filterDrawer = ref(false);
const collectionDrawer = ref(false);

const {
  data: categoriesResponse,
  isLoading: isCategoriesLoading,
  isError: isCategoriesError,
} = useStrapiQuery<
  StrapiListResponse<StrapiCategoryAttributes>,
  Error,
  CategoryFilterOption[]
>(
  ["categories"],
  () => ({
    path: "/categories",
  }),
  {
    select: (response: any) =>
      response.data.map((entity: StrapiCategoryAttributes) => ({
        label: entity?.title ?? `Категория ${entity.id}`,
        value: entity?.slug ?? String(entity.id),
      })),
  }
);

const categoryFilters = computed<CategoryFilterOption[]>(
  () => categoriesResponse.value ?? []
);

const { data: sizeOptionsResponse } = useStrapiQuery<
  StrapiListResponse<StrapiSizeAttributes>,
  Error,
  SizeFilterOption[]
>(
  ["sizes"],
  () => ({
    path: "/sizes",
    query: {
      filters: {
        isActive: { $eq: true },
      },
      sort: ["sortOrder:asc", "label:asc", "title:asc"],
      pagination: {
        page: 1,
        pageSize: 200,
      },
    },
  }),
  {
    select: (response: StrapiListResponse<StrapiSizeAttributes>) =>
      response.data
        .map((entity) => {
          const attributes =
            entity.attributes ?? ((entity as unknown) as StrapiSizeAttributes);
          const normalizedLabel =
            normalizeSizeOptionValue(attributes.label) ||
            normalizeSizeOptionValue(attributes.title);
          const label = normalizedLabel || `Размер ${entity.id}`;
          const value = normalizedLabel || label;
          return {
            label,
            value,
          };
        })
        .filter((option) => Boolean(option.value)),
  }
);

const sizeDropdownOptions = computed<SizeFilterOption[]>(() => [
  { label: "Все размеры", value: "all" },
  ...(sizeOptionsResponse.value ?? []),
]);

const sortDropdownOptions = [
  { label: "Сначала новые", value: "new" },
  { label: "Название А-Я", value: "title-asc" },
  { label: "Название Я-А", value: "title-desc" },
  { label: "Цена по убыванию", value: "price-desc" },
  { label: "Цена по возрастанию", value: "price-asc" },
];

const sizeFilterOptions = computed<SizeFilterOption[]>(() =>
  sizeDropdownOptions.value.filter((option) => option.value !== "all")
);

const selectedCategory = ref("");
const selectedSizeFilter = ref("all");
const selectedSortFilter = ref(sortDropdownOptions[0]?.value ?? "new");
const selectedSizeFilters = ref<string[]>([]);

watch(
  () => sizeFilterOptions.value.map((option) => option.value),
  (availableValues) => {
    if (
      selectedSizeFilter.value !== "all" &&
      !availableValues.includes(selectedSizeFilter.value)
    ) {
      selectedSizeFilter.value = sizeDropdownOptions.value[0]?.value ?? "all";
    }

    selectedSizeFilters.value = selectedSizeFilters.value.filter((size) =>
      availableValues.includes(size)
    );
  },
  { immediate: true }
);
const sizeDropdownOpen = ref(false);
const sortDropdownOpen = ref(false);
const sizeDropdownRef = ref<HTMLElement | null>(null);
const sortDropdownRef = ref<HTMLElement | null>(null);
const likesStore = useLikesStore();

const sortMapping: Record<string, string[]> = {
  new: ["publishedAt:desc"],
  "title-asc": ["name:asc"],
  "title-desc": ["name:desc"],
  "price-desc": ["price:desc"],
  "price-asc": ["price:asc"],
};

const activeSortQuery = computed(
  () => sortMapping[selectedSortFilter.value] ?? sortMapping.new
);

const normalizedSizeSelection = computed(() => {
  const sizes = new Set<string>();
  const dropdownSize = selectedSizeFilter.value;
  if (dropdownSize && dropdownSize !== "all") {
    sizes.add(dropdownSize);
  }
  selectedSizeFilters.value.forEach((size) => {
    if (size) {
      sizes.add(size);
    }
  });
  return Array.from(sizes);
});

const productFilters = computed(() => {
  const filters: Record<string, unknown> = {
    isActive: { $eq: true },
  };

  if (selectedCategory.value) {
    filters.category = {
      slug: { $eqi: selectedCategory.value },
    };
  }

  const sizeSelections = normalizedSizeSelection.value;
  if (sizeSelections.length === 1) {
    filters.sizes = {
      $containsi: sizeSelections[0],
    };
  } else if (sizeSelections.length > 1) {
    const existingAnd = Array.isArray(
      (filters as Record<string, unknown>)["$and"]
    )
      ? ((filters as Record<string, unknown>)["$and"] as object[])
      : [];
    (filters as Record<string, unknown>)["$and"] = [
      ...existingAnd,
      {
        $or: sizeSelections.map((size) => ({
          sizes: { $containsi: size },
        })),
      },
    ];
  }

  return filters;
});

const productsQueryKey = computed(() => [
  "products",
  currentPage.value,
  selectedCategory.value || "all",
  selectedSizeFilter.value || "all",
  selectedSortFilter.value,
  normalizedSizeSelection.value.slice().sort().join("|"),
]);

const {
  data: productsResponse,
  isLoading: isProductsLoading,
  isFetching: isProductsFetching,
  isError: isProductsError,
  error: productsError,
} = useStrapiQuery<
  StrapiListResponse<StrapiProductAttributes>,
  Error,
  ProductsResponse
>(
  productsQueryKey,
  () => ({
    path: "/products",
    query: {
      filters: productFilters.value,
      pagination: {
        page: currentPage.value,
        pageSize: PAGE_SIZE,
      },
      sort: activeSortQuery.value,
      populate: {
        images: { populate: "*" },
        collection: { populate: "*" },
        variants: { populate: ["size", "image"] },
      },
    },
  }),
  {
    keepPreviousData: true,
    select: (response: StrapiListResponse<StrapiProductAttributes>) =>
      mapProductsResponse(response, normalizeMediaCollection),
  }
);
watch(
  () => productsError.value,
  (error) => {
    if (error) {
      console.error("Failed to load products:", error);
    }
  }
);

const skeletonItems = computed(() =>
  Array.from({ length: PAGE_SIZE }, (_, index) => index)
);

const products = computed(() => productsResponse.value?.items ?? []);

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

const showSkeletonGrid = computed(
  () => isProductsLoading.value && !products.value.length
);

const isUpdatingPage = computed(
  () => !showSkeletonGrid.value && isProductsFetching.value
);

const totalItems = computed(() => productsResponse.value?.total ?? 0);
const totalPages = computed(() =>
  Math.max(1, Math.ceil(totalItems.value / PAGE_SIZE))
);

watchEffect(() => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value;
  }
});

const paginationItems = computed<(number | "dots")[]>(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 2;

  if (total <= 1) {
    return [1];
  }

  const pages: number[] = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i);
    }
  }

  const result: (number | "dots")[] = [];
  let previous: number | undefined;

  for (const page of pages) {
    if (previous !== undefined) {
      if (page - previous === 2) {
        result.push(previous + 1);
      } else if (page - previous > 2) {
        result.push("dots");
      }
    }
    result.push(page);
    previous = page;
  }

  return result;
});

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) {
    return;
  }
  currentPage.value = page;
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const activeSizeLabel = computed(
  () =>
    sizeDropdownOptions.value.find(
      (option) => option.value === selectedSizeFilter.value
    )?.label ?? "Размер"
);

const activeSortLabel = computed(
  () =>
    sortDropdownOptions.find(
      (option) => option.value === selectedSortFilter.value
    )?.label ?? "Сортировать"
);

const toggleSizeFilter = (sizeValue: string) => {
  if (selectedSizeFilters.value.includes(sizeValue)) {
    selectedSizeFilters.value = selectedSizeFilters.value.filter(
      (item) => item !== sizeValue
    );
    return;
  }

  selectedSizeFilters.value = [...selectedSizeFilters.value, sizeValue];
};

const isSizeSelected = (sizeValue: string) =>
  selectedSizeFilters.value.includes(sizeValue);

watch(
  [
    () => selectedCategory.value,
    () => selectedSizeFilter.value,
    () => selectedSortFilter.value,
    () => normalizedSizeSelection.value.join("|"),
  ],
  () => {
    currentPage.value = 1;
  }
);

const selectCategory = (value: string) => {
  if (selectedCategory.value === value) {
    selectedCategory.value = "";
    return;
  }
  selectedCategory.value = value;
};

const toggleSizeDropdown = () => {
  sizeDropdownOpen.value = !sizeDropdownOpen.value;
  if (sizeDropdownOpen.value) {
    sortDropdownOpen.value = false;
  }
};

const toggleSortDropdown = () => {
  sortDropdownOpen.value = !sortDropdownOpen.value;
  if (sortDropdownOpen.value) {
    sizeDropdownOpen.value = false;
  }
};

const selectSizeOption = (value: string) => {
  selectedSizeFilter.value = value;
  sizeDropdownOpen.value = false;
};

const selectSortOption = (value: string) => {
  selectedSortFilter.value = value;
  sortDropdownOpen.value = false;
};

const resetCategoryFilter = () => {
  const [first] = categoryFilters.value;
  selectedCategory.value = first ? first.value : "";
};

const resetProductFilters = () => {
  selectedSortFilter.value = sortDropdownOptions[0]?.value ?? "new";
  selectedSizeFilters.value = [];
  selectedSizeFilter.value = sizeDropdownOptions.value[0]?.value ?? "all";
};

const handleDocumentClick = (event: MouseEvent) => {
  const target = event.target as Node;

  if (
    sizeDropdownOpen.value &&
    sizeDropdownRef.value &&
    !sizeDropdownRef.value.contains(target)
  ) {
    sizeDropdownOpen.value = false;
  }

  if (
    sortDropdownOpen.value &&
    sortDropdownRef.value &&
    !sortDropdownRef.value.contains(target)
  ) {
    sortDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});

const toggleFavorite = (productId: number) => {
  likesStore.toggle(productId);
};

const isFavorite = (productId: number) => likesStore.isLiked(productId);

const syncCategoryFromRoute = () => {
  const categoryQuery = route.query.category;
  const normalizedCategory = Array.isArray(categoryQuery)
    ? categoryQuery[0]
    : categoryQuery;
  const nextValue =
    typeof normalizedCategory === "string" ? normalizedCategory : "";

  if (selectedCategory.value === nextValue) {
    return;
  }

  selectedCategory.value = nextValue;
};

syncCategoryFromRoute();

watch(
  () => route.query.category,
  () => {
    syncCategoryFromRoute();
  }
);
</script>

<template>
  <div class="pt-[72px] bg-[#FBFAF9]">
    <div class="container mb-[32px] mt-[48px]">
      <h2 class="text-[#0F0F0F] text-[52px]  max-sm:text-[32px]">
        Каталог
      </h2>

      <div class="mt-[40px] max-lg:mt-[20px] flex flex-col gap-[32px] lg:flex-row">
        <aside class="hidden lg:block w-[260px] xl:w-[300px] shrink-0">
          <div class="sticky top-[120px] flex flex-col gap-10">
            <div>
              <p class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]">
                Категории
              </p>
              <div class="mt-5 space-y-4">
                <div
                  v-if="isCategoriesLoading"
                  class="text-xs uppercase tracking-[0.16em] text-[#9B9B9B]"
                >
                  Загрузка категорий…
                </div>
                <div
                  v-else-if="isCategoriesError"
                  class="text-xs uppercase tracking-[0.16em] text-[#C16371]"
                >
                  Не удалось загрузить категории
                </div>
                <div v-else class="space-y-3">
                  <button
                    type="button"
                    class="w-full text-left text-sm uppercase tracking-[0.12em] transition-colors hover:text-[#0F0F0F]"
                    :class="[
                      selectedCategory === ''
                        ? 'text-[#0F0F0F]'
                        : 'text-[#9B9B9B]'
                    ]"
                    @click="selectCategory('')"
                  >
                    Все категории
                  </button>
                  <template v-if="categoryFilters.length">
                    <button
                      v-for="category in categoryFilters"
                      :key="category.value"
                      type="button"
                      class="w-full text-left text-sm uppercase tracking-[0.12em] transition-colors hover:text-[#0F0F0F]"
                      :class="[
                        selectedCategory === category.value
                          ? 'text-[#0F0F0F]'
                          : 'text-[#9B9B9B]'
                      ]"
                      @click="selectCategory(category.value)"
                    >
                      {{ category.label }}
                    </button>
                  </template>
                  <p
                    v-else
                    class="text-xs uppercase tracking-[0.16em] text-[#9B9B9B]"
                  >
                    Список категорий пуст
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div class="flex-1">
          <div class="hidden md:flex items-center justify-between gap-6">
            <div class="flex flex-wrap gap-4">
              <div ref="sizeDropdownRef" class="relative">
                <button
                  type="button"
                  class="flex items-center gap-2 border border-[#DADADA] px-7 py-3 text-xs tracking-[0.16em] uppercase text-[#0F0F0F]"
                  @click.stop="toggleSizeDropdown"
                >
                  {{ activeSizeLabel }}
                  <svg
                    width="20"
                    height="11"
                    viewBox="0 0 20 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="[sizeDropdownOpen ? 'rotate-180' : '', 'transition-transform']"
                  >
                    <path
                      d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999"
                      stroke="#0F0F0F"
                    />
                  </svg>
                </button>

                <Transition
                  enter-active-class="transition ease-out duration-150"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div
                    v-if="sizeDropdownOpen"
                    class="absolute left-0 z-20 mt-2 w-56 border border-[#E6E6E6] bg-white py-2 shadow-2xl"
                  >
                    <button
                      v-for="option in sizeDropdownOptions"
                      :key="`size-option-${option.value}`"
                      type="button"
                      class="block w-full px-5 py-2 text-left text-sm uppercase tracking-[0.16em]"
                      :class="[
                        option.value === selectedSizeFilter
                          ? 'text-[#0F0F0F] bg-[#F7F7F7]'
                          : 'text-[#7D7D7D]'
                      ]"
                      @click="selectSizeOption(option.value)"
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </Transition>
              </div>

              <div ref="sortDropdownRef" class="relative">
                <button
                  type="button"
                  class="flex items-center gap-2 border border-[#DADADA] px-7 py-3 text-xs tracking-[0.16em] uppercase text-[#0F0F0F]"
                  @click.stop="toggleSortDropdown"
                >
                  {{ activeSortLabel }}
                  <svg
                    width="20"
                    height="11"
                    viewBox="0 0 20 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    :class="[sortDropdownOpen ? 'rotate-180' : '', 'transition-transform']"
                  >
                    <path
                      d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999"
                      stroke="#0F0F0F"
                    />
                  </svg>
                </button>

                <Transition
                  enter-active-class="transition ease-out duration-150"
                  enter-from-class="opacity-0 scale-95"
                  enter-to-class="opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="opacity-100 scale-100"
                  leave-to-class="opacity-0 scale-95"
                >
                  <div
                    v-if="sortDropdownOpen"
                    class="absolute left-0 z-20 mt-2 w-60 border border-[#E6E6E6] bg-white py-2 shadow-2xl"
                  >
                    <button
                      v-for="option in sortDropdownOptions"
                      :key="`sort-option-${option.value}`"
                      type="button"
                      class="block w-full px-5 py-2 text-left text-sm uppercase tracking-[0.16em]"
                      :class="[
                        option.value === selectedSortFilter
                          ? 'text-[#0F0F0F] bg-[#F7F7F7]'
                          : 'text-[#7D7D7D]'
                      ]"
                      @click="selectSortOption(option.value)"
                    >
                      {{ option.label }}
                    </button>
                  </div>
                </Transition>
              </div>
            </div>

            <div class="text-xs text-[#9B9B9B] uppercase tracking-[0.2em]">
              {{ totalItems }} изделий
            </div>
          </div>

          <div class="flex items-center justify-between gap-3 md:hidden">
            <Button
              @click="collectionDrawer = true"
              class="!rounded-[0] !text-[#0F0F0F] !px-[24px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[36px] w-1/2"
              variant="outlined"
              severity="secondary"
            >
              Категории
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999"
                  stroke="#0F0F0F"
                />
              </svg>
            </Button>

            <Button
              class="!rounded-[0] !text-[#0F0F0F] !px-[24px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[36px] w-1/2"
              variant="outlined"
              severity="secondary"
              @click="filterDrawer = true"
            >
              Фильтры
              <svg
                width="20"
                height="11"
                viewBox="0 0 20 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999"
                  stroke="#0F0F0F"
                />
              </svg>
            </Button>
          </div>

          <div class="mt-[32px]">
            <div
              v-if="showSkeletonGrid"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
            >
              <div
                v-for="index in skeletonItems"
                :key="`skeleton-${index}`"
                class="w-full flex flex-col gap-4"
              >
                <div class="bg-[#F5F5F5] overflow-hidden h-[360px] animate-pulse" />
                <div class="px-[24px] py-[20px] space-y-3">
                  <div class="h-3 w-3/4 bg-[#E2E2E2] animate-pulse" />
                  <div class="h-3 w-1/2 bg-[#E2E2E2] animate-pulse" />
                </div>
              </div>
            </div>
            <div
              v-else-if="isProductsError"
              class="py-10 text-center text-[#C16371] text-[18px]"
            >
              Не удалось загрузить изделия. Попробуйте позже.
            </div>
            <div
              v-else-if="products.length === 0"
              class="py-10 text-center text-[#0F0F0F]"
            >
              Пока нет доступных изделий.
            </div>
            <div v-else class="relative">
              <div
                class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
              >
                <div
                  v-for="product in products"
                  :key="product.id"
                  class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1"
                  @click="goToProduct(product)"
                >
                  <div
                    class="relative  overflow-hidden h-[360px] flex items-center justify-center"
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
                    class="px-[24px] py-[20px] text-[#3D3D3D] flex items-center justify-between gap-4"
                  >
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

              <div
                v-if="isUpdatingPage"
                class="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"
              >
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 w-full px-2"
                >
                  <div
                    v-for="index in skeletonItems"
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
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <div class="container">
      <div
        class="w-full flex justify-center pb-[100px] max-sm:pb-[20px] max-sm:mx-auto"
      >
        <nav class="flex items-center gap-12 text-sm text-[#3D3D3D]">
          <button
            class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="currentPage === 1"
            type="button"
            @click="goToPreviousPage"
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="max-sm:hidden"
            >
              <path d="M36 10L4.76837e-07 10" stroke="#0F0F0F" />
              <path
                d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20"
                stroke="black"
              />
            </svg>
            <svg
              width="26"
              height="10"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="md:hidden"
            >
              <path d="M36 10L4.76837e-07 10" stroke="#0F0F0F" />
              <path
                d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20"
                stroke="black"
              />
            </svg>
          </button>

          <ul class="flex items-center gap-10 max-sm:gap-5">
            <li
              v-for="(item, index) in paginationItems"
              :key="item === 'dots' ? `dots-${index}` : `page-${item}`"
            >
              <span v-if="item === 'dots'" class="cursor-default">…</span>
              <button
                v-else
                type="button"
                @click="goToPage(item)"
                :class="[
                  'w-8 h-8 flex items-center justify-center transition-colors',
                  item === currentPage
                    ? 'bg-black text-white'
                    : 'text-[#3D3D3D] hover:bg-black/5'
                ]"
              >
                {{ item }}
              </button>
            </li>
          </ul>

          <button
            class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            :disabled="currentPage === totalPages"
            type="button"
            @click="goToNextPage"
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="max-sm:hidden"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="black"
              />
            </svg>
            <svg
              width="26"
              height="10"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="md:hidden"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="black"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>

    <Drawer
      v-model:visible="collectionDrawer"
      header="Категории"
      position="right"
      class="!w-[45%] max-sm:!w-[100%]"
    >
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col gap-[16px]">
          <h2 class="text-[#0F0F0F] text-[14px] font-[300] uppercase">
            Список категорий
          </h2>
          <div
            v-if="isCategoriesLoading"
            class="text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"
          >
            Загрузка категорий…
          </div>
          <div
            v-else-if="isCategoriesError"
            class="text-[12px] uppercase tracking-[0.2em] text-[#C16371]"
          >
            Не удалось загрузить категории
          </div>
          <template v-else>
            <div class="flex items-center gap-3 text-[14px] uppercase">
              <RadioButton
                v-model="selectedCategory"
                inputId="mobile-category-all"
                name="mobile-category"
                value=""
              />
              <label for="mobile-category-all">Все категории</label>
            </div>
            <template v-if="categoryFilters.length">
              <div
                v-for="category in categoryFilters"
                :key="`mobile-category-${category.value}`"
                class="flex items-center gap-3 text-[14px] uppercase"
              >
                <RadioButton
                  v-model="selectedCategory"
                  :inputId="`mobile-category-${category.value}`"
                  name="mobile-category"
                  :value="category.value"
                />
                <label :for="`mobile-category-${category.value}`">
                  {{ category.label }}
                </label>
              </div>
            </template>
            <p
              v-else
              class="text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"
            >
              Список категорий пуст
            </p>
          </template>
        </div>

        <div class="w-full grid grid-cols-2 gap-[24px]">
          <Button
            @click="resetCategoryFilter(); collectionDrawer = false"
            class="!rounded-[0] !text-[#0F0F0F] !px-[28px] h-[44px]"
            variant="outlined"
            severity="secondary"
          >
            СБРОСИТЬ
          </Button>
          <Button
            @click="collectionDrawer = false"
            class="!rounded-[0] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]"
            variant="outlined"
            severity="primary"
          >
            ПРИМЕНИТЬ
          </Button>
        </div>
      </div>
    </Drawer>

    <Drawer
      v-model:visible="filterDrawer"
      header="Фильтр"
      position="right"
      class="!w-[45%] max-sm:!w-[100%]"
    >
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col gap-[24px]">
          <div>
            <h2 class="text-[#0F0F0F] text-[14px] font-[300] uppercase">
              Сортировать по:
            </h2>
            <div
              v-for="option in sortDropdownOptions"
              :key="`drawer-sort-${option.value}`"
              class="mt-3 flex items-center gap-3 text-[14px] uppercase"
            >
              <RadioButton
                v-model="selectedSortFilter"
                :inputId="`drawer-sort-${option.value}`"
                name="drawer-sort"
                :value="option.value"
              />
              <label :for="`drawer-sort-${option.value}`">
                {{ option.label }}
              </label>
            </div>
          </div>

          <div>
            <span class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]">
              Размер:
            </span>

            <div class="mt-4 flex flex-wrap gap-3">
              <div
                v-for="size in sizeFilterOptions"
                :key="`drawer-size-${size.value}`"
                class="size-pill"
              >
                <Checkbox
                  v-model="selectedSizeFilters"
                  :inputId="`drawer-size-${size.value}`"
                  name="drawer-size"
                  :value="size.value"
                />
                <label
                  :for="`drawer-size-${size.value}`"
                  class="size-label"
                  :class="{
                    'size-label--active': isSizeSelected(size.value)
                  }"
                >
                  {{ size.label }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full grid grid-cols-2 gap-[24px]">
          <Button
            @click="resetProductFilters(); filterDrawer = false"
            class="!rounded-[0] !text-[#0F0F0F] !px-[28px] h-[44px]"
            variant="outlined"
            severity="secondary"
          >
            СБРОСИТЬ
          </Button>
          <Button
            @click="filterDrawer = false"
            class="!rounded-[0] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]"
            variant="outlined"
            severity="primary"
          >
            ПРИМЕНИТЬ
          </Button>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<style>
.size-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.size-pill .p-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.size-label {
  min-width: 64px;
  padding: 6px 20px;
  border-radius: 9999px;
  border: 1px solid #e2e2e2;
  background-color: #ffffff;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  color: #3d3d3d;
  user-select: none;
}

.size-label--active {
  background-color: #0f0f0f;
  color: #ffffff;
  border-color: #0f0f0f;
}

.heart--liked g {
  fill: #000 !important;
}

</style>
