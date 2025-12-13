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
  hideHeader: {
    type: Boolean,
    default: false,
  },
  // для десктопа
  slidesPerView: {
    type: Number,
    default: 5,
  },
  // сколько показывать на мобилке
  mobileSlidesPerView: {
    type: Number,
    default: 2, // по макету: 2 товара
  },
});

const breakpoints = computed(() => ({
  0: {
    slidesPerView: props.mobileSlidesPerView,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: props.slidesPerView,
    spaceBetween: 16,
  },
}));

const containerRef = ref(null);

const swiper = useSwiper(containerRef);

const router = useRouter();

const goToProduct = (item) => {
  const identifier = item?.slug ?? item?.id;
  if (!identifier) {
    return;
  }
  router.push(`/catalog/${identifier}`);
};

defineExpose({
    swiper,
});
</script>

<template>
  <div class="flex flex-col py-[64px] max-sm:py-[20px] px-4">
    <div v-if="!props.hideHeader" class="container flex items-center justify-between mb-[38px] max-sm:mb-[20px]">
      <h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[22px]">Новые поступления</h2>

      <div class="flex items-center gap-2 h-[44px]">

        <button
          @click="swiper.prev()"
          class="px-[28px] 
          py-[12px] 
          rounded-[80px] 
          border 
          border-[#CAC9C8] 
          cursor-pointer 
          max-sm:px-[14px] 
          max-sm:py-[8px]"
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
        
        <button
          @click="swiper.next()"
          class="px-[28px] 
          py-[12px] 
          rounded-[80px] 
          border 
          border-[#CAC9C8] 
          cursor-pointer 
          max-sm:px-[14px] 
          max-sm:py-[8px]"
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
      </div>
    </div>

    <ClientOnly>
    <swiper-container 
    ref="containerRef"
    :loop="true"
      :space-between="16"
      :slides-per-view="props.slidesPerView"
      class="w-full"
      :breakpoints="breakpoints"
    >
      <SwiperSlide v-for="(item, idx) in props.items" :key="idx">
        <div
          class="w-full flex flex-col justify-center"
          @click="goToProduct(item)"
        >
          <div class="bg-[#F5F5F5] rounded-3xl h-[360px] p-[25px]">
            <img :src="item.img" alt="" class="w-full h-full object-contain"/>
          </div>
          <div class="px-[24px] py-[20px] text-[#3D3D3D]">
            <h2 class="pb-[8px]">{{ item.name }}</h2>
            <p>{{ item.price }}</p>
          </div>
        </div>
      </SwiperSlide>
    </swiper-container >
  </ClientOnly>


  </div>



  
</template>
