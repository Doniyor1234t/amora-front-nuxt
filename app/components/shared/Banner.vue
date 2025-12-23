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
      class="banner h-full max-sm:max-h-[100vh]"
      ref="containerRef"
    >
      <swiper-slide v-for="(slide, idx) in props.items" :key="idx">
        <div class="relative w-full h-full">
          <img
            :src="slide.img"
            alt=""
            class="object-cover object-top w-full h-full max-sm:object-[70%]"
          />
          <!-- <div
            class="absolute inset-0 flex items-center justify-start px-[8%] max-lg:px-[6%] max-md:px-6 max-md:hidden"
          >
            <div
              class="max-w-[480px] bg-transparent text-center rounded-[48px] px-10 py-12 max-md:rounded-[32px] max-md:px-6 max-md:py-8"
            >
              <div class="flex items-center text-center content-center mx-auto gap-3 text-xs tracking-[0.4em] text-[#8F8985] uppercase">
                <span>•</span>
                <span>{{ slide.title }}</span>
                <span>•</span>
              </div>
              <h2
                class="mt-4 text-[62px] leading-[1.1] text-[#0F0F0F] font-[masvol] max-md:text-[40px]"
              >
                {{ slide.subtitle }}
              </h2>
              <p
                class="mt-4 text-[14px] uppercase tracking-[0.2em] text-[#6A6967] max-md:text-[12px]"
              >
                {{ slide.description }}
              </p>
              <NuxtLink to="/collections">
                <Button
                  variant="outlined"
                  severity="secondary"
                  class="mt-8 !rounded-[80px] !text-[#0F0F0F] !px-[32px] !py-[14px] max-md:!py-[10px] max-md:!text-[12px]"
                >
                  ПОСМОТРЕТЬ
                </Button>
              </NuxtLink>
            </div>
          </div> -->
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>
