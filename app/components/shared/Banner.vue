<script setup>
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const modules = [Scrollbar];

const containerRef = ref(null);

const swiper = useSwiper(containerRef);
</script>

<template>
  <ClientOnly>
    <swiper-container
      :scrollbar="{
        hide: false,
      }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="banner h-full max-sm:max-h-[450px]"
      ref="containerRef"
    >
      <swiper-slide v-for="(slide, idx) in props.items" :key="idx">
        <img
          :src="slide.img"
          alt=""
          class="object-cover object-top w-full h-full max-sm:object-[70%]"
        />

        <!-- <div
          class="bg-white 
          rounded-[500px] 
          h-[680px] 
          w-[520px] 
          z-[11] 
          absolute 
          top-1/2 
          left-1/3 
          transform 
          -translate-x-1/2 
          -translate-y-1/2 
          p-5 
          max-sm:h-[300px] 
          max-sm:w-[200px]
          max-sm:rounded-[200px]
          max-sm:top-1/2
          max-sm:-translate-y-1/2
          max-sm:mt-6"
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

              <h4 class="text-[#3D3D3D] text-center max-sm:text-[12px]">{{ slide.title }}</h4>
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
            <h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol] max-sm:text-[24px]">
              {{ slide.subtitle }}
            </h2>
            <p class="text-center text-[#3D3D3D] text-[14px] mb-[24px] max-sm:text-[12px]">
              {{ slide.description }}
            </p>
            <Button
              variant="outlined"
              severity="secondary"
              class="!rounded-[80px] 
              !text-[#0F0F0F] 
              !px-[28px] 
              !py-[14px] 
              max-sm:!text-[12px] 
              max-sm:!px-[12px] 
              max-sm:!py-[6px]"
            >
              ПОСМОТРЕТЬ
            </Button>
          </div>
        </div> -->
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>
