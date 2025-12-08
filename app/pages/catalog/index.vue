<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";
import Drawer from "primevue/drawer";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import type { AxiosError } from "axios";
import { useApiQuery } from "@/composables/useApiService";

interface ProductImage {
  id: number;
  url?: string;
  path?: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string;
  currency?: string;
  description?: string;
  images: ProductImage[];
}

interface ProductsResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}

const PAGE_SIZE = 12;
const currentPage = ref(1);

const {
  data: productsResponse,
  isLoading: isProductsLoading,
  isError: isProductsError,
} = useApiQuery<ProductsResponse, AxiosError>(
  ["products", currentPage],
  () => ({
    url: "/products",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    method: "GET",
    params: {
      page: currentPage.value,
      pageSize: PAGE_SIZE,
    },
  }),
  {
    keepPreviousData: true,
  }
);

const products = computed(() => productsResponse.value?.items ?? []);
const placeholderProductImage = "/images/products/Image.png";

const getProductImage = (product: Product): string => {
  if (!product.images?.length) {
    return placeholderProductImage;
  }
  const [firstImage] = product.images;
  if (firstImage?.url) {
    return `https://amora-brand.uz${firstImage.url}`;
  }
  return firstImage?.path ?? placeholderProductImage;
};

const formatPrice = (price?: string, currency?: string): string => {
  if (!price) {
    return "—";
  }
  return currency ? `${price} ${currency}` : price;
};

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

const router = useRouter();
const goToProduct = (product: Product) => {
  const slugOrId = product.id || product.slug;
  router.push(`/catalog/${slugOrId}`);
};

const collectionDrawer = ref(false);
const filterDrawer = ref(false);

const collectionRadio = ref("");
const filterRadio = ref("");
const sizeChecked = ref([]);
</script>

<template>
  <div class="pt-[72px]">
    <div class="container mb-[32px] mt-[48px]">
      <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]">Изделя</h2>

      <!-- Фильтры -->
      <div class="flex items-center justify-between mt-[24px]">
        <Button
          @click="collectionDrawer = true"
          class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[32px]"
          variant="outlined"
          severity="secondary"
        >
          ПОДРОБНЕЕ
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
          class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[32px]"
          variant="outlined"
          severity="secondary"
          @click="filterDrawer = true"
        >
          ФИЛЬТР
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
      <!-- Список продуктов -->
      <div class="container mx-auto mt-[32px]">
        <div v-if="isProductsLoading" class="py-10 text-center text-[#0F0F0F]">
          Загрузка изделий...
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
        <div
          v-else
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
        >
          <div
            v-for="product in products"
            :key="product.id"
            class="w-full flex flex-col justify-center cursor-pointer"
            @click="goToProduct(product)"
          >
            <div class="bg-[#F5F5F5] rounded-3xl overflow-hidden">
              <img
                :src="getProductImage(product)"
                :alt="product.name"
                class="w-full h-full object-contain"
              />
            </div>

            <div class="px-[24px] py-[20px] text-[#3D3D3D]">
              <h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase">
                {{ product.name }}
              </h2>
              <p class="text-xs text-[#9B9B9B]">
                {{ formatPrice(product.price, product.currency) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <div
      class="w-full flex justify-center mb-[100px] max-sm:mb-[20px] max-sm:mx-auto"
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
                'w-8 h-8 rounded-full flex items-center justify-center transition-colors',
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

    <Drawer
      v-model:visible="collectionDrawer"
      header="Коллекция"
      position="right"
      class="!w-[45%] max-sm:!w-[100%]"
    >
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col gap-2 w-full gap-[24px]">
          <h2 class="text-[#0F0F0F] text-[14px] font-[300]">
            Список коллекции
          </h2>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="collectionRadio"
              inputId="collect1"
              value="Все коллекции"
            />
            <label for="collect1">Все коллекции</label>
          </div>
          <div class="flex items-center gap-2 text-[14px]uppercase">
            <RadioButton
              v-model="collectionRadio"
              inputId="collect2"
              value="Self Made woman"
            />
            <label for="collect2">Self Made woman</label>
          </div>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="collectionRadio"
              inputId="collect3"
              value="Resort Collection"
            />
            <label for="collect3">Resort Collection</label>
          </div>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="collectionRadio"
              inputId="collect4"
              value="Autumn collection"
            />
            <label for="collect4">Autumn collection</label>
          </div>
        </div>

        <div class="w-full grid grid-cols-2 gap-[24px]">
          <Button
            @click="collectionDrawer = false"
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]"
            variant="outlined"
            severity="secondary"
          >
            СБРОСИТЬ
          </Button>
          <Button
            @click="collectionDrawer = false"
            class="!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]"
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
        <div class="flex flex-col gap-2 w-full gap-[24px]">
          <h2 class="text-[#0F0F0F] text-[14px] font-[300]">Сортировать по:</h2>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="filterRadio"
              inputId="collect1"
              value="Все коллекции"
            />
            <label for="collect1">Название изделия А-Я</label>
          </div>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="filterRadio"
              inputId="collect2"
              value="Self Made woman"
            />
            <label for="collect2">Название изделия Я-А</label>
          </div>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="filterRadio"
              inputId="collect3"
              value="Resort Collection"
            />
            <label for="collect3">Самые дорогие</label>
          </div>
          <div class="flex items-center gap-2 text-[14px] uppercase">
            <RadioButton
              v-model="filterRadio"
              inputId="collect4"
              value="Autumn collection"
            />
            <label for="collect4">Самые дешевые</label>
          </div>

          <div>
            <div class="flex flex-col gap-3">
    <span class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]">
      РАЗМЕР:
    </span>

    
    <div class="flex flex-wrap gap-3">
      <div class="size-pill">
        <Checkbox binary inputId="size-s" />
        <label for="size-s" class="size-label">S</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-sm" />
        <label for="size-sm" class="size-label">S/M</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-m" />
        <label for="size-m" class="size-label">M</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-l" />
        <label for="size-l" class="size-label">L</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-lxl" />
        <label for="size-lxl" class="size-label">L/XL</label>
      </div>
    </div>

   
    <div class="flex flex-wrap gap-3">
      <div class="size-pill">
        <Checkbox binary inputId="size-32" />
        <label for="size-32" class="size-label">32</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-34" />
        <label for="size-34" class="size-label">34</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-35" />
        <label for="size-35" class="size-label">35</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-36" />
        <label for="size-36" class="size-label">36</label>
      </div>

      <div class="size-pill">
        <Checkbox binary inputId="size-38" />
        <label for="size-38" class="size-label">38</label>
      </div>
    </div>
  </div>
          </div>
        </div>

        <div class="w-full grid grid-cols-2 gap-[24px]">
          <Button
            @click="filterDrawer = false"
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]"
            variant="outlined"
            severity="secondary"
          >
            СБРОСИТЬ
          </Button>
          <Button
            @click="filterDrawer = false"
            class="!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]"
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

</style>
