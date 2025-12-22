<script setup lang="ts">
import { computed } from "vue";
import Banner from "@/components/shared/Banner.vue";
import ProductsSlider from "@/components/shared/ProductsSlider.vue";
import YandexMap from "@/components/shared/YandexMap.vue";
import AppCallBackModal from "@/components/ui/AppCallBackModal.vue";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Product,
  type ProductsResponse,
  type StrapiProductAttributes,
  mapProductsResponse,
} from "@/utils/catalogMappers";

const banners = ref([
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
]);

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

const fallbackCarouselItems = Array.from({ length: 10 }, () => ({
  img: `/images/products/dress-1.png`,
  name: "НАЗВАНИЕ ПЛАТЬЯ",
  price: "200$",
}));

const { normalizeMediaCollection } = useStrapi();

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
    select: (response: StrapiListResponse<StrapiProductAttributes>) => mapProductsResponse(response, normalizeMediaCollection),
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

const collectionSlider = ref<any>(null);

const isCallBackVisible = ref(false);
</script>

<template>
  <div>
    <!-- Баннер слайдер проекта -->

    <Banner :items="banners" />

    <!-- Конец баннера слайдер проекта -->

    <!-- Карусель начало-->
    <ProductsSlider hideHeader :items="productsCarousel" />
    <!-- Карусель конец -->

    <!-- Начало блока коллекций-->
    <div class="grid grid-cols-2 max-sm:grid-cols-1">
      <div class="flex justify-center items-center">
        <div class="w-[40%] max-sm:w-full max-sm:px-6">
          <img
            src="/images/Collection-img-1.png"
            class="rounded-[40px] w-full object-cover aspect-[4/5]"
            alt=""
          />

          <div class="flex flex-col items-center mt-[20px]">
            <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[32px]">
              Resort collection
            </h2>
            <Button
              class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:!px-[12px] max-sm:h-[32px] max-sm:!text-[12px]"
              variant="outlined"
              severity="secondary"
            >
              ПОСМОТРЕТЬ
              <svg
                width="36"
                height="20"
                viewBox="0 0 36 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="max-sm:w-[20px] max-sm:h-[20px]"
              >
                <path d="M0 10L36 10" stroke="#0F0F0F" />
                <path
                  d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                  stroke="#0F0F0F"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div class="relative max-sm:hidden">
        <img
          src="/images/Collection-bg.jpg"
          class="w-full max-h-[100vh] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-2 max-sm:grid-cols-1">
      <div class="relative max-sm:hidden">
        <img
          src="/images/Collection-bg-2.jpg"
          class="w-full max-h-[100vh] object-cover object-top max-sm:!object-cover max-sm:!h-[100%]"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>
      <div class="flex justify-center items-center">
        <div class="w-[40%] relative max-sm:w-[60%]">
          <ProductsSlider
            ref="collectionSlider"
            :items="productsCarousel"
            :hideHeader="true"
            :slidesPerView="1"
            :mobileSlidesPerView="1"
          />

          <button
            @click="collectionSlider?.swiper?.prev()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/5 
            left-0 
            -translate-x-[60%] 
            z-10 
            "
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M36 10L4.76837e-07 10" stroke="#0F0F0F" />
              <path
                d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20"
                stroke="black"
              />
            </svg>
          </button>

          <button
            @click="collectionSlider?.swiper?.next()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/5 
            right-0 
            -translate-x-[-60%] 
            z-10 
            "
          >
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="black"
              />
            </svg>
          </button>

        </div>
      </div>
    </div>
    <!-- Конец блока коллекций-->

    <!-- Начало блока о нас-->

    <div class="w-full">
      <img
        src="/images/About-bg.png"
        alt=""
        class="w-full object-cover h-[560px]"
      />
    </div>

    <div class="container py-[52px] max-sm:py-[20px]">
      <div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[20px]">
        <div>
          <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[32px]">
            AMORA - бренд, рождённый эстетикой женственности
          </h2>
        </div>
        <div>
          <p class="text-[#3D3D3D] text-[14px] max-sm:text-[12px]">
            AMORA — это премиальный fashion-бренд и ателье, основанное на идее
            мягкой женственности, натуральных тканей и утончённых силуэтов.
            Каждое изделие создаётся вручную нашими мастерами — от первых
            эскизов до финальной драпировки, сохраняя couture-подход и
            европейское качество.
          </p>
          <p class="text-[#3D3D3D] text-[14px] mt-[20px]">
            Мы создаём одежду, в которой сочетаются ручная работа, сложный крой
            и современная элегантность
          </p>
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-[24px] max-sm:!px-[12px] max-sm:h-[32px] max-sm:!text-[12px]"
            variant="outlined"
            severity="secondary"
          >
            НАША ИСТОРИЯ
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="#0F0F0F"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>

    <!-- Конец блока о нас-->

    <!-- Начало блока почему мы? -->

    <!-- <div class="container pb-[64px]">
      <div class="flex flex-col items-center py-[64px]">
        <h4 class="text-[#3D3D3D] text-[14px] flex items-center gap-2">
          <svg
            width="6"
            height="6"
            class="shrink-0"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
              fill="#C16371"
            />
          </svg>
          ПОЧЕМУ МЫ?
          <svg
            width="6"
            height="6"
            class="shrink-0"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
              fill="#C16371"
            />
          </svg>
        </h4>

        <h1 class="text-[#0F0F0F] text-[52px] mt-[12px] font-[masvol] max-sm:text-[32px]">
          Мы создаём одежду, а не просто вещи
        </h1>
      </div>

      <div class="grid grid-cols-4 gap-4 h-[400px] max-sm:grid-cols-2 max-sm:h-[200px] max-sm:gap-2">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-[30px] sm:rounded-[40px] flex flex-col justify-between items-center pt-[48px] pb-[32px]"
        >
          <div
            class="rounded-[100px] border-[1px] border-[#0F0F0F] p-[20px] w-[72px] h-[72px] flex justify-center items-center"
            v-html="feature.svg"
          >
          </div>
          <div class="flex flex-col items-center text-center mt-4">
            <h2 class="text-[#0F0F0F] text-[24px] font-[masvol]">
              {{ feature.title }}
            </h2>
            <p class="text-[#3D3D3D] text-[14px] mt-2">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Конец блока почему мы? -->

    <!-- Начао блока "Оставить заявку"-->

    <div class="grid grid-cols-2 max-sm:mt-[300px] max-sm:grid-cols-1">
      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center max-w-[440px]">
          <h4
            class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] "
          >
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
            ИНДИВИДУАЛЬНЫЙ ПОШИВ AMORA
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
          </h4>

          <h2
            class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]"
          >
            Создаём изделия, которые подчёркивают вашу индивидуальность
          </h2>
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6"
            variant="outlined"
            severity="secondary"
            @click="isCallBackVisible = true"
          >
            ПОДРОБНЕЕ
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="#0F0F0F"
              />
            </svg>
          </Button>

          <!-- модальное окно -->
          <AppCallBackModal
            v-model:visible="isCallBackVisible"
            service-type="tailoring"
            title="Записаться на пошив"
          />
        </div>
      </div>

      <div class="relative">
        <img
          src="/images/Request-bg-1.png"
          class="w-full max-h-[100vh] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>
    </div>

    <div class="grid grid-cols-2 max-sm:grid-cols-1">
      <div class="relative">
        <img
          src="/images/Request-bg-2.jpg"
          class="w-full max-h-[100vh] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>

      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center max-w-[440px]">
          <h4
            class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] max-sm:mt-6"
          >
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
            G.T. Factory
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
          </h4>

          <h2
            class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]"
          >
            Премиальное обучение по конструированию и моделированию одежды
          </h2>
          <Button
            class="!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6"
            variant="outlined"
            severity="secondary"
            @click="isCallBackVisible = true"
          >
            ПОДРОБНЕЕ
            <svg
              width="36"
              height="20"
              viewBox="0 0 36 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 10L36 10" stroke="#0F0F0F" />
              <path
                d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
                stroke="#0F0F0F"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
    <!-- Конец блока "Оставить заявку -->

    <!-- Начало блока контактов и карты -->

    <div class="relative max-sm:pb-10 max-sm:flex max-sm:flex-col max-sm:items-center">
      <div
        class="bg-white 
        rounded-[500px] 
        h-[680px] 
        w-[520px] 
        z-[9] 
        absolute 
        top-1/2 
        left-1/6 
        transform 
        -translate-x-1/2 
        -translate-y-1/2 
        p-5
        max-sm:relative
        max-sm:top-0
        max-sm:left-0
        max-sm:translate-x-0
        max-sm:translate-y-0
        max-sm:h-auto
        max-sm:w-full
        max-sm:max-w-[320px]
        max-sm:rounded-[40px]
        max-sm:px-6
        max-sm:my-6
        max-sm:transform-none
      "
      >
        <div
          class="flex flex-col items-center justify-center h-full max-w-[400px] mx-auto max-sm:py-8"
        >
          <div class="flex items-center gap-2 mb-[12px]">
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>

            <h4 class="text-[#3D3D3D] text-center">АДРЕС БУТКИНА AMORA</h4>
            <svg
              width="6"
              height="6"
              class="shrink-0"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z"
                fill="#C16371"
              />
            </svg>
          </div>
          <h2 class="text-[#0F0F0F] text-[52px] text-center font-[masvol] max-sm:text-[34px]">
            +998 (33)-324-44-44
          </h2>
          <p class="text-center text-[#3D3D3D] text-[14px] mb-6 uppercase">
            ПОЗВОНИТЕ НАМ ИЛИ СВЯЖИТЕСЬ С НАМИ В ТЕЛЕГРАМ
          </p>

          <div class="flex items-center gap-6 mb-6">
            <a href="https://www.youtube.com/@brandAmora" target="_blank" class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4985 6.18725C23.2225 5.14794 22.4093 4.32945 21.3766 4.05162C19.505 3.54687 12 3.54688 12 3.54688C12 3.54688 4.49498 3.54687 2.62336 4.05162C1.59075 4.32941 0.777516 5.14794 0.501516 6.18725C0 8.07106 0 12.0014 0 12.0014C0 12.0014 0 15.9318 0.501516 17.8156C0.777516 18.8549 1.59075 19.6734 2.62336 19.9513C4.49498 20.456 12 20.456 12 20.456C12 20.456 19.505 20.456 21.3766 19.9513C22.4093 19.6734 23.2225 18.8549 23.4985 17.8156C24 15.9318 24 12.0014 24 12.0014C24 12.0014 24 8.07106 23.4985 6.18725Z"
                  fill="white"
                />
                <path
                  d="M9.54688 15.5667L15.8196 11.9983L9.54688 8.42969V15.5667Z"
                  fill="#0F0F0F"
                />
              </svg>
            </a>

            <a href="https://t.me/Brand_Amora" target="_blank" class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4678 2.74065C18.4598 3.98625 5.56296 9.32841 1.99944 10.7845C-0.390483 11.7171 1.00848 12.5914 1.00848 12.5914C1.00848 12.5914 3.04848 13.2908 4.79712 13.8154C6.54576 14.3401 7.4784 13.7571 7.4784 13.7571L15.697 8.21961C18.6113 6.23793 17.9119 7.86993 17.2126 8.56929C15.697 10.0849 13.1906 12.4746 11.0923 14.3982C10.1597 15.2142 10.626 15.9138 11.034 16.2634C12.5496 17.5458 16.6879 20.1687 16.9212 20.3437C18.1526 21.2154 20.5747 22.4703 20.9431 19.819L22.4004 10.6678C22.8667 7.57857 23.333 4.72233 23.3914 3.90633C23.5661 1.92465 21.4678 2.74065 21.4678 2.74065Z"
                  fill="white"
                />
              </svg>
            </a>

            <a href="https://www.instagram.com/brand.amora" target="_blank" class="bg-black rounded-[100px] p-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM17.35 7.62C16.8 7.62 16.35 7.17 16.35 6.62C16.35 6.07 16.8 5.62 17.35 5.62C17.9 5.62 18.35 6.07 18.35 6.62C18.35 7.17 17.9 7.62 17.35 7.62Z"
                  fill="white"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>

          <p class="text-center text-[#3D3D3D] text-[14px] mb-2 uppercase">
            на бутик можно найти по адресу:
          </p>
          <p class="text-center text-[#3D3D3D] text-[14px] mb-6 uppercase">
            ул. Исмаилата, 16А
          </p>
        </div>
      </div>

      <YandexMap
        :center="[41.334608, 69.323384]"
        :zoom="17"
        :marker="{
          coordinates: [41.334608, 69.323384],
          hint: 'Бутик AMORA',
          description: 'ул. Исмаилата, 16А',
        }"
        height="800px"
        class="max-sm:min-h-[420px]"
      />
    </div>
    <!-- Конец блока контактов и карты -->
  </div>
</template>

<style>
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
