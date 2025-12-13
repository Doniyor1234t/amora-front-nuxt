<script setup lang="ts">
import ProductsSlider from "@/components/shared/ProductsSlider.vue";
import { useStrapi, useStrapiQuery } from "@/composables/useApiService";
import type { StrapiListResponse } from "@/types/strapi";
import {
  type Collection,
  type CollectionsResponse,
  type StrapiCollectionAttributes,
  mapCollectionsResponse,
} from "@/utils/catalogMappers";
import { computed, ref } from "vue";

const productsCarousel = ref(
  Array.from({ length: 10 }, (_, i) => ({
    img: `/images/collections/Collection-product-1.png`,
    name: "НАЗВАНИЕ ПЛАТЬЯ",
    price: "200$",
  }))
);

const { normalizeMediaCollection } = useStrapi();

const {
  data,
  isLoading: isCollectionsLoading,
  isError: isCollectionsError,
} = useStrapiQuery<
  StrapiListResponse<StrapiCollectionAttributes>,
  Error,
  CollectionsResponse
>(
  ["collections"],
  {
    path: "/collections",
    query: {
      // filters: {
      //   isActive: { $eq: true },
      // },
      // pagination: {
      //   page: 1,
      //   pageSize: 20,
      // },
      populate: "*",
    },
  },
  {
    select: (response: StrapiListResponse<StrapiCollectionAttributes>) => mapCollectionsResponse(response, normalizeMediaCollection),
  }
);

const collections = computed(() => data.value?.items ?? []);
const placeholderCollectionImage = "/images/collections/Collection-product-1.png";
const getCollectionImage = (collection: Collection): string => {
  if (!collection.images?.length) {
    return placeholderCollectionImage;
  }
  const [firstImage] = collection.images;
  return firstImage?.url ?? firstImage?.path ?? placeholderCollectionImage;
};

const collectionSlider = ref<any>(null);
const collectionSlider2 = ref<any>(null);
const collectionSlider3 = ref<any>(null);
</script>

<template>
  <div class="pt-[112px]">
    <div class="container">
      <div class="w-full flex items-center">
        <h2 class="text-[52px] font-[masvol] max-sm:text-[32px]">Коллекции</h2>
      </div>
    </div>

    <!-- BANNER BLOCK -->
    <div class="relative mt-[40px]">
      <img
        src="/images/Slider-bg-1.png"
        alt=""
        class="w-full max-h-[900px] object-cover object-top"
      />
      <div
        class="bg-white rounded-[500px] h-[680px] w-[520px] z-[9] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"
      >
        <div class="flex flex-col items-center justify-center h-full">
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

            <h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4>
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
          <h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]">
            Self made woman
          </h2>
          <p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]">
            Нежная палитра в комбинации с нарочито объемными фасонами
            подчеркивают женственность их обладательницы
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
    <!-- END BANNER BLOCK -->

     <!-- PRODUCTS BLOCK -->
    
    <div class="grid grid-cols-2 max-sm:grid-cols-1">

      <div class="flex justify-center items-center max-h-[900px] max-sm:relative ">
          
        <div class="w-[40%] relative max-sm:w-full mb-[62px]">
        
          <ProductsSlider
            ref="collectionSlider"
            :items="productsCarousel"
            :hideHeader="true"
            :slidesPerView="1"
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
            top-2/2
            left-1/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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
            max-sm:hidden"
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
            top-2/2
            left-2/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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
            max-sm:hidden"
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
      
      <div class="relative">
        <img
          src="/images/Collection-bg-3.jpg"
          class="w-full object-cover object-top max-h-[900px] "
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>

      
    </div>
    <!-- END PRODUCTS BLOCK -->

    <!-- BANNER BLOCK 2-->
    <div class="relative">
      <img
        src="/images/Slider-bg-2.png"
        alt=""
        class="w-full max-h-[900px] object-cover object-top"
      />
      <div
        class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"
      >
        <div class="flex flex-col items-center justify-center h-full">
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

            <h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4>
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
          <h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]">
            Self made woman
          </h2>
          <p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]">
            Нежная палитра в комбинации с нарочито объемными фасонами
            подчеркивают женственность их обладательницы
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
    <!-- END BANNER BLOCK 2 -->

     <!-- PRODUCTS BLOCK 2-->
    
    <div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mb-[60px]">

        <div class="relative max-h-[900px]">
        <img
          src="/images/Collection-bg-4.jpg"
          class="w-full max-h-[100vh] object-cover object-top max-h-[900px]"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>

        <div class="flex justify-center items-center">
        <div class="w-[40%] relative max-sm:w-full">
          <ProductsSlider
            ref="collectionSlider2"
            :items="productsCarousel"
            :hideHeader="true"
            :slidesPerView="1"
          />

          <button
            @click="collectionSlider2?.swiper?.prev()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/2
            left-1/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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
            @click="collectionSlider2?.swiper?.prev()"
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
            max-sm:hidden"
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
            @click="collectionSlider2?.swiper?.next()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/2
            left-2/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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

          <button
            @click="collectionSlider2?.swiper?.next()"
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
            max-sm:hidden"
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
    <!-- END PRODUCTS BLOCK 2-->

    <!-- BANNER BLOCK 3-->
    <div class="relative ">
      <img
        src="/images/Slider-bg-3.png"
        alt=""
        class="w-full max-h-[900px] object-cover object-top"
      />
      <div
        class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"
      >
        <div class="flex flex-col items-center justify-center h-full">
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

            <h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4>
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
          <h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]">
            Self made woman
          </h2>
          <p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]">
            Нежная палитра в комбинации с нарочито объемными фасонами
            подчеркивают женственность их обладательницы
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
    <!-- END BANNER BLOCK 3 -->

     <!-- PRODUCTS BLOCK 3-->
    
    <div class="grid grid-cols-2 max-sm:grid-cols-1 ">

        <div class="flex justify-center items-center max-sm:mb-[62px]">
        <div class="w-[40%] relative max-h-[900px] max-sm:w-full">
          <ProductsSlider
            ref="collectionSlider3"
            :items="productsCarousel"
            :hideHeader="true"
            :slidesPerView="1"
          />

          <button
            @click="collectionSlider3?.swiper?.prev()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/2
            left-1/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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
            @click="collectionSlider3?.swiper?.prev()"
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
            max-sm:hidden"
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
            @click="collectionSlider3?.swiper?.next()"
            class="px-[28px] 
            py-[12px] 
            rounded-[80px] 
            border 
            border-[#CAC9C8] 
            cursor-pointer 
            absolute 
            top-2/2
            left-2/3
            -translate-x-[60%] 
            z-10 
            md:hidden"
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

          <button
            @click="collectionSlider3?.swiper?.next()"
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
            max-sm:hidden"
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

       <div class="relative max-h-[900px]">
        <img
          src="/images/Collection-bg-5.jpg"
          class="w-full max-h-[900px] object-cover object-top"
          alt=""
        />
        <div
          class="absolute top-0 left-0 w-full h-full bg-black opacity-25"
        ></div>
      </div>

    </div>
    <!-- END PRODUCTS BLOCK 3-->
  </div>
</template>
