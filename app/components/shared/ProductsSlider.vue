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
  <div class="products-slider px-4 py-[72px] max-sm:py-[36px]">
    <div
      v-if="!props.hideHeader"
      class="products-slider__header container mb-[38px] max-sm:mb-[20px]"
    >
      <h2 class="products-slider__title">Новые поступления</h2>

      <div class="products-slider__controls">
        <button
          type="button"
          class="products-slider__control"
          aria-label="Предыдущий слайд"
          @click="swiper.prev()"
        >
          <svg
            width="36"
            height="20"
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="max-sm:hidden"
          >
            <path d="M36 10L4.76837e-07 10" stroke="currentColor" />
            <path
              d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20"
              stroke="currentColor"
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
            <path d="M36 10L4.76837e-07 10" stroke="currentColor" />
            <path
              d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20"
              stroke="currentColor"
            />
          </svg>
        </button>

        <button
          type="button"
          class="products-slider__control"
          aria-label="Следующий слайд"
          @click="swiper.next()"
        >
          <svg
            width="36"
            height="20"
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="max-sm:hidden"
          >
            <path d="M0 10L36 10" stroke="currentColor" />
            <path
              d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
              stroke="currentColor"
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
            <path d="M0 10L36 10" stroke="currentColor" />
            <path
              d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>

    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :loop="true"
        :space-between="32"
        :slides-per-view="props.slidesPerView"
        class="products-slider__swiper"
        :breakpoints="breakpoints"
      >
        <SwiperSlide
          v-for="(item, idx) in props.items"
          :key="idx"
          class="products-slider__slide"
        >
          <div class="products-slider__item" @click="goToProduct(item)">
            <div class="¢">
              <img :src="item.img" :alt="item.name" />
            </div>

            <!-- <div class="products-slider__meta">
              <h3>{{ item.name }}</h3>
              <span>{{ item.price }}</span>
            </div> -->
          </div>
        </SwiperSlide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<style scoped>
.products-slider {
  background: linear-gradient(180deg, #f8f6f2 0%, #ffffff 65%);
  color: #0f0f0f;
}

.products-slider__header {
  display: flex;
 	align-items: center;
  justify-content: space-between;
}

 .products-slider__title {
   font-family: var(--font-masvol, inherit);
   font-size: clamp(24px, 5vw, 48px);
   letter-spacing: 0.08em;
 }

.products-slider__controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.products-slider__control {
  border: 1px solid #e2e1df;
  border-radius: 999px;
  padding: 10px 22px;
  color: #2f2e2c;
  transition: background 0.2s ease, color 0.2s ease;
  background: rgba(255, 255, 255, 0.8);
}

.products-slider__control:hover {
  background: #111;
  color: #fff;
}

.products-slider__swiper {
  width: 100%;
}

.products-slider__slide {
  display: flex;
  justify-content: center;
}

.products-slider__item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  user-select: none;
}

.products-slider__image {
  width: 100%;
  height: clamp(240px, 36vw, 360px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.products-slider__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.products-slider__meta {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(15, 15, 15, 0.6);
}

.products-slider__meta h3 {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.18em;
}
</style>
