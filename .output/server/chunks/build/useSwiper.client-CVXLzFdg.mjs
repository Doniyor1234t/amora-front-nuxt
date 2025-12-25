import { ref, computed, watch } from 'vue';

function useSwiper(swiperContainerRef, options) {
  const swiper = ref();
  const isBeginning = computed(() => swiper.value?.isBeginning ?? true);
  const isEnd = computed(() => swiper.value?.isEnd ?? false);
  const activeIndex = computed(() => swiper.value?.activeIndex ?? 0);
  const realIndex = computed(() => swiper.value?.realIndex ?? 0);
  const slides = computed(() => swiper.value?.slides ?? []);
  const slidesPerView = computed(() => swiper.value?.slidesPerViewDynamic() ?? 0);
  const progress = computed(() => swiper.value?.progress ?? 0);
  const getNumberOfSlides = computed(() => swiper.value?.slides.length ?? 0);
  const next = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideNext();
    else swiper.value.slideNext(...params);
  };
  const to = (...params) => {
    if (!swiper.value)
      return;
    swiper.value.slideTo(...params);
  };
  const reset = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slideReset();
    else swiper.value.slideReset(...params);
  };
  const prev = (...params) => {
    if (!swiper.value)
      return;
    if (params.length === 0)
      swiper.value.slidePrev();
    else swiper.value.slidePrev(...params);
  };
  const checkSwiperRef = () => {
    const isSwiperContainer = swiperContainerRef.value?.nodeName === "SWIPER-CONTAINER";
    if (!isSwiperContainer && swiper.value !== null && true) {
      console.warn(
        '"useSwiper()" requires a ref and is tied to the %c`<swiper-container ref="swiperContainerRef"></swiper-container>` element.',
        "font-weight: bold;"
      );
    }
  };
  watch(swiper, () => checkSwiperRef());
  return {
    // Instance
    instance: swiper,
    // Reactive state
    isBeginning,
    isEnd,
    activeIndex,
    realIndex,
    slides,
    slidesPerView,
    progress,
    getNumberOfSlides,
    // Navigation methods
    next,
    prev,
    to,
    reset
  };
}

export { useSwiper as u };
//# sourceMappingURL=useSwiper.client-CVXLzFdg.mjs.map
