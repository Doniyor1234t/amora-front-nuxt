import script from './index-DKvodBva.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, c as useRouter, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useSwiper } from './useSwiper.client-BP2iX_YN.mjs';
import { u as useStrapi, a as useStrapiQuery, d as mapCollectionsResponse } from './catalogMappers-S_FIH8-3.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import './index-I6kJA5l7.mjs';
import '@primeuix/styles/badge';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/button';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@iconify/vue';
import 'axios';
import '@tanstack/vue-query';

const _imports_0 = publicAssetsURL("/images/Slider-bg-1.png");
const _imports_1 = publicAssetsURL("/images/Collection-bg-3.jpg");
const _imports_2 = publicAssetsURL("/images/Slider-bg-2.png");
const _imports_3 = publicAssetsURL("/images/Collection-bg-4.jpg");
const _imports_4 = publicAssetsURL("/images/Slider-bg-3.png");
const _imports_5 = publicAssetsURL("/images/Collection-bg-5.jpg");
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ProductsSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductsSlider = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-59270ded"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productsCarousel = ref(
      Array.from({ length: 10 }, (_, i) => ({
        img: `/images/collections/Collection-product-1.png`,
        name: "НАЗВАНИЕ ПЛАТЬЯ",
        price: "200$"
      }))
    );
    const { normalizeMediaCollection } = useStrapi();
    const {
      data,
      isLoading: isCollectionsLoading,
      isError: isCollectionsError
    } = useStrapiQuery(
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
          populate: "*"
        }
      },
      {
        select: (response) => mapCollectionsResponse(response, normalizeMediaCollection)
      }
    );
    computed(() => data.value?.items ?? []);
    const collectionSlider = ref(null);
    const collectionSlider2 = ref(null);
    const collectionSlider3 = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[112px]" }, _attrs))}><div class="container"><div class="w-full flex items-center"><h2 class="text-[52px] font-[masvol] max-sm:text-[32px]">Коллекции</h2></div></div><div class="relative mt-[40px]"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full max-h-[900px] object-cover object-top"><div class="bg-white rounded-[500px] h-[680px] w-[520px] z-[9] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"><div class="flex flex-col items-center justify-center h-full"><div class="flex items-center gap-2 mb-[12px]"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg><h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></div><h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]"> Self made woman </h2><p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]"> Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы </p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outlined",
        severity: "secondary",
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] !py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОСМОТРЕТЬ `);
          } else {
            return [
              createTextVNode(" ПОСМОТРЕТЬ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 max-sm:grid-cols-1"><div class="flex justify-center items-center max-h-[900px] max-sm:relative"><div class="w-[40%] relative max-sm:w-full mb-[62px]">`);
      _push(ssrRenderComponent(ProductsSlider, {
        ref_key: "collectionSlider",
        ref: collectionSlider,
        items: productsCarousel.value,
        hideHeader: true,
        slidesPerView: 1
      }, null, _parent));
      _push(`<button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-1/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 left-0 -translate-x-[60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-2/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 right-0 -translate-x-[-60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></div></div><div class="relative"><img${ssrRenderAttr("src", _imports_1)} class="w-full object-cover object-top max-h-[900px]" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div></div><div class="relative"><img${ssrRenderAttr("src", _imports_2)} alt="" class="w-full max-h-[900px] object-cover object-top"><div class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"><div class="flex flex-col items-center justify-center h-full"><div class="flex items-center gap-2 mb-[12px]"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg><h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></div><h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]"> Self made woman </h2><p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]"> Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы </p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outlined",
        severity: "secondary",
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] !py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОСМОТРЕТЬ `);
          } else {
            return [
              createTextVNode(" ПОСМОТРЕТЬ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mb-[60px]"><div class="relative max-h-[900px]"><img${ssrRenderAttr("src", _imports_3)} class="w-full max-h-[100vh] object-cover object-top max-h-[900px]" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div><div class="flex justify-center items-center"><div class="w-[40%] relative max-sm:w-full">`);
      _push(ssrRenderComponent(ProductsSlider, {
        ref_key: "collectionSlider2",
        ref: collectionSlider2,
        items: productsCarousel.value,
        hideHeader: true,
        slidesPerView: 1
      }, null, _parent));
      _push(`<button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-1/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 left-0 -translate-x-[60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-2/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 right-0 -translate-x-[-60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></div></div></div><div class="relative"><img${ssrRenderAttr("src", _imports_4)} alt="" class="w-full max-h-[900px] object-cover object-top"><div class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 p-5 ml-[100px] max-sm:hidden"><div class="flex flex-col items-center justify-center h-full"><div class="flex items-center gap-2 mb-[12px]"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg><h4 class="text-[#3D3D3D] text-center">NEW COLLECTION</h4><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></div><h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]"> Self made woman </h2><p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]"> Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы </p>`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "outlined",
        severity: "secondary",
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] !py-[14px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОСМОТРЕТЬ `);
          } else {
            return [
              createTextVNode(" ПОСМОТРЕТЬ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="grid grid-cols-2 max-sm:grid-cols-1"><div class="flex justify-center items-center max-sm:mb-[62px]"><div class="w-[40%] relative max-h-[900px] max-sm:w-full">`);
      _push(ssrRenderComponent(ProductsSlider, {
        ref_key: "collectionSlider3",
        ref: collectionSlider3,
        items: productsCarousel.value,
        hideHeader: true,
        slidesPerView: 1
      }, null, _parent));
      _push(`<button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-1/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 left-0 -translate-x-[60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/2 left-2/3 -translate-x-[60%] z-10 md:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button><button class="px-[28px] py-[12px] rounded-[80px] border border-[#CAC9C8] cursor-pointer absolute top-2/5 right-0 -translate-x-[-60%] z-10 max-sm:hidden"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></div></div><div class="relative max-h-[900px]"><img${ssrRenderAttr("src", _imports_5)} class="w-full max-h-[900px] object-cover object-top" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DrooFDQM.mjs.map
