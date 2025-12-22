import { _ as _export_sfc, d as useRouter, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-slider px-4 py-[72px] max-sm:py-[36px]" }, _attrs))} data-v-59270ded>`);
      if (!props.hideHeader) {
        _push(`<div class="products-slider__header container mb-[38px] max-sm:mb-[20px]" data-v-59270ded><h2 class="products-slider__title" data-v-59270ded>Новые поступления</h2><div class="products-slider__controls" data-v-59270ded><button type="button" class="products-slider__control" aria-label="Предыдущий слайд" data-v-59270ded><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden" data-v-59270ded><path d="M36 10L4.76837e-07 10" stroke="currentColor" data-v-59270ded></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="currentColor" data-v-59270ded></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden" data-v-59270ded><path d="M36 10L4.76837e-07 10" stroke="currentColor" data-v-59270ded></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="currentColor" data-v-59270ded></path></svg></button><button type="button" class="products-slider__control" aria-label="Следующий слайд" data-v-59270ded><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden" data-v-59270ded><path d="M0 10L36 10" stroke="currentColor" data-v-59270ded></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="currentColor" data-v-59270ded></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden" data-v-59270ded><path d="M0 10L36 10" stroke="currentColor" data-v-59270ded></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="currentColor" data-v-59270ded></path></svg></button></div></div>`);
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
const ProductsSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59270ded"]]);

export { ProductsSlider as P, useSwiper as u };
//# sourceMappingURL=ProductsSlider-Cqd25s8m.mjs.map
