import { c as useRouter, a as __nuxt_component_0$1 } from './server.mjs';
import { computed, ref, mergeProps, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

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
const _sfc_main = {
  __name: "SharedProductsSlider",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    // для десктопа
    slidesPerView: {
      type: Number,
      default: 5
    },
    // сколько показывать на мобилке
    mobileSlidesPerView: {
      type: Number,
      default: 2
      // по макету: 2 товара
    }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    computed(() => ({
      0: {
        slidesPerView: props.mobileSlidesPerView,
        spaceBetween: 16
      },
      768: {
        slidesPerView: props.slidesPerView,
        spaceBetween: 16
      }
    }));
    const containerRef = ref(null);
    const swiper = useSwiper(containerRef);
    useRouter();
    __expose({
      swiper
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col py-[64px] max-sm:py-[20px] px-4" }, _attrs))}>`);
      if (!props.hideHeader) {
        _push(`<div class="container flex items-center justify-between mb-[38px] max-sm:mb-[20px]"><h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[22px]">Новые поступления</h2><div class="flex items-center gap-2 h-[44px]"><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer max-sm:px-[14px] max-sm:py-[8px]"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer max-sm:px-[14px] max-sm:py-[8px]"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductsSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useSwiper as u };
//# sourceMappingURL=ProductsSlider-BjBHt1mk.mjs.map
