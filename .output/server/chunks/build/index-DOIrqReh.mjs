import script from './index-DKvodBva.mjs';
import { defineComponent, ref, computed, watchEffect, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import script$1 from './index-CgoId9M7.mjs';
import script$2 from './index-DKhnNHdX.mjs';
import script$3 from './index-DYXoWHPz.mjs';
import { u as useStrapi, a as useStrapiQuery, m as mapProductsResponse } from './catalogMappers-DhRYQROb.mjs';
import { c as useRouter } from './server.mjs';
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
import '@primeuix/utils/zindex';
import './index-tNm0a1Rf.mjs';
import './index-i6azE7xM.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import '@primeuix/styles/drawer';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/radiobutton';
import './index-BxmMWS2F.mjs';
import './index-CVUSfSgB.mjs';
import '@primeuix/styles/checkbox';
import '@tanstack/vue-query';
import '../nitro/nitro.mjs';
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

const PAGE_SIZE = 12;
const placeholderProductImage = "/images/products/Image.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    const { normalizeMediaCollection } = useStrapi();
    const productsQueryKey = computed(() => ["products", currentPage.value]);
    const {
      data: productsResponse,
      isLoading: isProductsLoading,
      isFetching: isProductsFetching,
      isError: isProductsError
    } = useStrapiQuery(
      productsQueryKey,
      () => ({
        path: "/products",
        query: {
          filters: {
            isActive: { $eq: true }
          },
          pagination: {
            page: currentPage.value,
            pageSize: PAGE_SIZE
          },
          sort: ["publishedAt:desc"],
          populate: ["images", "collection"]
        }
      }),
      {
        keepPreviousData: true,
        select: (response) => mapProductsResponse(response, normalizeMediaCollection)
      }
    );
    const skeletonItems = computed(
      () => Array.from({ length: PAGE_SIZE }, (_, index) => index)
    );
    const showSkeletonGrid = computed(
      () => isProductsLoading.value && !products.value.length
    );
    const isUpdatingPage = computed(
      () => !showSkeletonGrid.value && isProductsFetching.value
    );
    const products = computed(() => productsResponse.value?.items ?? []);
    const getProductImage = (product) => {
      if (!product.images?.length) {
        return placeholderProductImage;
      }
      const [firstImage] = product.images;
      return firstImage?.url ?? firstImage?.path ?? placeholderProductImage;
    };
    const formatPrice = (price, currency) => {
      if (!price) {
        return "—";
      }
      return currency ? `${price} ${currency}` : price;
    };
    const totalItems = computed(() => productsResponse.value?.total ?? 0);
    const totalPages = computed(
      () => Math.max(1, Math.ceil(totalItems.value / PAGE_SIZE))
    );
    watchEffect(() => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = totalPages.value;
      }
    });
    const paginationItems = computed(() => {
      const total = totalPages.value;
      const current = currentPage.value;
      const delta = 2;
      if (total <= 1) {
        return [1];
      }
      const pages = [];
      for (let i = 1; i <= total; i++) {
        if (i === 1 || i === total || i >= current - delta && i <= current + delta) {
          pages.push(i);
        }
      }
      const result = [];
      let previous;
      for (const page of pages) {
        if (previous !== void 0) {
          if (page - previous === 2) {
            result.push(previous + 1);
          } else if (page - previous > 2) {
            result.push("dots");
          }
        }
        result.push(page);
        previous = page;
      }
      return result;
    });
    useRouter();
    const collectionDrawer = ref(false);
    const filterDrawer = ref(false);
    const collectionRadio = ref("");
    const filterRadio = ref("");
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[72px]" }, _attrs))}><div class="container mb-[32px] mt-[48px]"><h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]">Изделя</h2><div class="flex items-center justify-between mt-[24px]">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => collectionDrawer.value = true,
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[32px]",
        variant: "outlined",
        severity: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОДРОБНЕЕ <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" ПОДРОБНЕЕ "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "11",
                viewBox: "0 0 20 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999",
                  stroke: "#0F0F0F"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[32px]",
        variant: "outlined",
        severity: "secondary",
        onClick: ($event) => filterDrawer.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ФИЛЬТР <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" ФИЛЬТР "),
              (openBlock(), createBlock("svg", {
                width: "20",
                height: "11",
                viewBox: "0 0 20 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999",
                  stroke: "#0F0F0F"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="container mx-auto mt-[32px]">`);
      if (showSkeletonGrid.value) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"><!--[-->`);
        ssrRenderList(skeletonItems.value, (index) => {
          _push(`<div class="w-full flex flex-col gap-4"><div class="bg-[#F5F5F5] rounded-3xl overflow-hidden h-[360px] animate-pulse"></div><div class="px-[24px] py-[20px] space-y-3"><div class="h-3 w-3/4 bg-[#E2E2E2] rounded-full animate-pulse"></div><div class="h-3 w-1/2 bg-[#E2E2E2] rounded-full animate-pulse"></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (unref(isProductsError)) {
        _push(`<div class="py-10 text-center text-[#C16371] text-[18px]"> Не удалось загрузить изделия. Попробуйте позже. </div>`);
      } else if (products.value.length === 0) {
        _push(`<div class="py-10 text-center text-[#0F0F0F]"> Пока нет доступных изделий. </div>`);
      } else {
        _push(`<div class="relative"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<div class="w-full flex flex-col justify-center cursor-pointer"><div class="bg-[#F5F5F5] rounded-3xl overflow-hidden"><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-contain"></div><div class="px-[24px] py-[20px] text-[#3D3D3D]"><h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase">${ssrInterpolate(product.name)}</h2><p class="text-xs text-[#9B9B9B]">${ssrInterpolate(formatPrice(product.price, product.currency ? product.currency : void 0))}</p></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (isUpdatingPage.value) {
          _push(`<div class="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center pointer-events-none"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 w-full px-2"><!--[-->`);
          ssrRenderList(skeletonItems.value, (index) => {
            _push(`<div class="hidden sm:flex flex-col gap-4 animate-pulse"><div class="bg-[#F5F5F5] rounded-3xl h-[320px]"></div><div class="px-[24px] py-[12px] space-y-2"><div class="h-3 w-2/3 bg-[#E2E2E2] rounded-full"></div><div class="h-3 w-1/2 bg-[#E2E2E2] rounded-full"></div></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="w-full flex justify-center mb-[100px] max-sm:mb-[20px] max-sm:mx-auto"><nav class="flex items-center gap-12 text-sm text-[#3D3D3D]"><button class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} type="button"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><ul class="flex items-center gap-10 max-sm:gap-5"><!--[-->`);
      ssrRenderList(paginationItems.value, (item, index) => {
        _push(`<li>`);
        if (item === "dots") {
          _push(`<span class="cursor-default">…</span>`);
        } else {
          _push(`<button type="button" class="${ssrRenderClass([
            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            item === currentPage.value ? "bg-black text-white" : "text-[#3D3D3D] hover:bg-black/5"
          ])}">${ssrInterpolate(item)}</button>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><button class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} type="button"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></nav></div>`);
      _push(ssrRenderComponent(unref(script$1), {
        visible: collectionDrawer.value,
        "onUpdate:visible": ($event) => collectionDrawer.value = $event,
        header: "Коллекция",
        position: "right",
        class: "!w-[45%] max-sm:!w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-between h-full"${_scopeId}><div class="flex flex-col gap-2 w-full gap-[24px]"${_scopeId}><h2 class="text-[#0F0F0F] text-[14px] font-[300]"${_scopeId}> Список коллекции </h2><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: collectionRadio.value,
              "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
              inputId: "collect1",
              value: "Все коллекции"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect1"${_scopeId}>Все коллекции</label></div><div class="flex items-center gap-2 text-[14px]uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: collectionRadio.value,
              "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
              inputId: "collect2",
              value: "Self Made woman"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect2"${_scopeId}>Self Made woman</label></div><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: collectionRadio.value,
              "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
              inputId: "collect3",
              value: "Resort Collection"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect3"${_scopeId}>Resort Collection</label></div><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: collectionRadio.value,
              "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
              inputId: "collect4",
              value: "Autumn collection"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect4"${_scopeId}>Autumn collection</label></div></div><div class="w-full grid grid-cols-2 gap-[24px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => collectionDrawer.value = false,
              class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]",
              variant: "outlined",
              severity: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` СБРОСИТЬ `);
                } else {
                  return [
                    createTextVNode(" СБРОСИТЬ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => collectionDrawer.value = false,
              class: "!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]",
              variant: "outlined",
              severity: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ПРИМЕНИТЬ `);
                } else {
                  return [
                    createTextVNode(" ПРИМЕНИТЬ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-between h-full" }, [
                createVNode("div", { class: "flex flex-col gap-2 w-full gap-[24px]" }, [
                  createVNode("h2", { class: "text-[#0F0F0F] text-[14px] font-[300]" }, " Список коллекции "),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: collectionRadio.value,
                      "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
                      inputId: "collect1",
                      value: "Все коллекции"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect1" }, "Все коллекции")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px]uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: collectionRadio.value,
                      "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
                      inputId: "collect2",
                      value: "Self Made woman"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect2" }, "Self Made woman")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: collectionRadio.value,
                      "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
                      inputId: "collect3",
                      value: "Resort Collection"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect3" }, "Resort Collection")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: collectionRadio.value,
                      "onUpdate:modelValue": ($event) => collectionRadio.value = $event,
                      inputId: "collect4",
                      value: "Autumn collection"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect4" }, "Autumn collection")
                  ])
                ]),
                createVNode("div", { class: "w-full grid grid-cols-2 gap-[24px]" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => collectionDrawer.value = false,
                    class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]",
                    variant: "outlined",
                    severity: "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" СБРОСИТЬ ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    onClick: ($event) => collectionDrawer.value = false,
                    class: "!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]",
                    variant: "outlined",
                    severity: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" ПРИМЕНИТЬ ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(script$1), {
        visible: filterDrawer.value,
        "onUpdate:visible": ($event) => filterDrawer.value = $event,
        header: "Фильтр",
        position: "right",
        class: "!w-[45%] max-sm:!w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-between h-full"${_scopeId}><div class="flex flex-col gap-2 w-full gap-[24px]"${_scopeId}><h2 class="text-[#0F0F0F] text-[14px] font-[300]"${_scopeId}>Сортировать по:</h2><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: filterRadio.value,
              "onUpdate:modelValue": ($event) => filterRadio.value = $event,
              inputId: "collect1",
              value: "Все коллекции"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect1"${_scopeId}>Название изделия А-Я</label></div><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: filterRadio.value,
              "onUpdate:modelValue": ($event) => filterRadio.value = $event,
              inputId: "collect2",
              value: "Self Made woman"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect2"${_scopeId}>Название изделия Я-А</label></div><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: filterRadio.value,
              "onUpdate:modelValue": ($event) => filterRadio.value = $event,
              inputId: "collect3",
              value: "Resort Collection"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect3"${_scopeId}>Самые дорогие</label></div><div class="flex items-center gap-2 text-[14px] uppercase"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              modelValue: filterRadio.value,
              "onUpdate:modelValue": ($event) => filterRadio.value = $event,
              inputId: "collect4",
              value: "Autumn collection"
            }, null, _parent2, _scopeId));
            _push2(`<label for="collect4"${_scopeId}>Самые дешевые</label></div><div${_scopeId}><div class="flex flex-col gap-3"${_scopeId}><span class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]"${_scopeId}> РАЗМЕР: </span><div class="flex flex-wrap gap-3"${_scopeId}><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-s"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-s" class="size-label"${_scopeId}>S</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-sm"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-sm" class="size-label"${_scopeId}>S/M</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-m"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-m" class="size-label"${_scopeId}>M</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-l"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-l" class="size-label"${_scopeId}>L</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-lxl"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-lxl" class="size-label"${_scopeId}>L/XL</label></div></div><div class="flex flex-wrap gap-3"${_scopeId}><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-32"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-32" class="size-label"${_scopeId}>32</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-34"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-34" class="size-label"${_scopeId}>34</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-35"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-35" class="size-label"${_scopeId}>35</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-36"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-36" class="size-label"${_scopeId}>36</label></div><div class="size-pill"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              binary: "",
              inputId: "size-38"
            }, null, _parent2, _scopeId));
            _push2(`<label for="size-38" class="size-label"${_scopeId}>38</label></div></div></div></div></div><div class="w-full grid grid-cols-2 gap-[24px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => filterDrawer.value = false,
              class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]",
              variant: "outlined",
              severity: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` СБРОСИТЬ `);
                } else {
                  return [
                    createTextVNode(" СБРОСИТЬ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => filterDrawer.value = false,
              class: "!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]",
              variant: "outlined",
              severity: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` ПРИМЕНИТЬ `);
                } else {
                  return [
                    createTextVNode(" ПРИМЕНИТЬ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col justify-between h-full" }, [
                createVNode("div", { class: "flex flex-col gap-2 w-full gap-[24px]" }, [
                  createVNode("h2", { class: "text-[#0F0F0F] text-[14px] font-[300]" }, "Сортировать по:"),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: filterRadio.value,
                      "onUpdate:modelValue": ($event) => filterRadio.value = $event,
                      inputId: "collect1",
                      value: "Все коллекции"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect1" }, "Название изделия А-Я")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: filterRadio.value,
                      "onUpdate:modelValue": ($event) => filterRadio.value = $event,
                      inputId: "collect2",
                      value: "Self Made woman"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect2" }, "Название изделия Я-А")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: filterRadio.value,
                      "onUpdate:modelValue": ($event) => filterRadio.value = $event,
                      inputId: "collect3",
                      value: "Resort Collection"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect3" }, "Самые дорогие")
                  ]),
                  createVNode("div", { class: "flex items-center gap-2 text-[14px] uppercase" }, [
                    createVNode(unref(script$2), {
                      modelValue: filterRadio.value,
                      "onUpdate:modelValue": ($event) => filterRadio.value = $event,
                      inputId: "collect4",
                      value: "Autumn collection"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "collect4" }, "Самые дешевые")
                  ]),
                  createVNode("div", null, [
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("span", { class: "text-xs tracking-[0.16em] uppercase text-[#7D7D7D]" }, " РАЗМЕР: "),
                      createVNode("div", { class: "flex flex-wrap gap-3" }, [
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-s"
                          }),
                          createVNode("label", {
                            for: "size-s",
                            class: "size-label"
                          }, "S")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-sm"
                          }),
                          createVNode("label", {
                            for: "size-sm",
                            class: "size-label"
                          }, "S/M")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-m"
                          }),
                          createVNode("label", {
                            for: "size-m",
                            class: "size-label"
                          }, "M")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-l"
                          }),
                          createVNode("label", {
                            for: "size-l",
                            class: "size-label"
                          }, "L")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-lxl"
                          }),
                          createVNode("label", {
                            for: "size-lxl",
                            class: "size-label"
                          }, "L/XL")
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-wrap gap-3" }, [
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-32"
                          }),
                          createVNode("label", {
                            for: "size-32",
                            class: "size-label"
                          }, "32")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-34"
                          }),
                          createVNode("label", {
                            for: "size-34",
                            class: "size-label"
                          }, "34")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-35"
                          }),
                          createVNode("label", {
                            for: "size-35",
                            class: "size-label"
                          }, "35")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-36"
                          }),
                          createVNode("label", {
                            for: "size-36",
                            class: "size-label"
                          }, "36")
                        ]),
                        createVNode("div", { class: "size-pill" }, [
                          createVNode(unref(script$3), {
                            binary: "",
                            inputId: "size-38"
                          }),
                          createVNode("label", {
                            for: "size-38",
                            class: "size-label"
                          }, "38")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full grid grid-cols-2 gap-[24px]" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => filterDrawer.value = false,
                    class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px]",
                    variant: "outlined",
                    severity: "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" СБРОСИТЬ ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(_component_Button, {
                    onClick: ($event) => filterDrawer.value = false,
                    class: "!rounded-[80px] !text-[#FFFFFF] !px-[28px] !h-[44px] !bg-[#0F0F0F]",
                    variant: "outlined",
                    severity: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" ПРИМЕНИТЬ ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DOIrqReh.mjs.map
