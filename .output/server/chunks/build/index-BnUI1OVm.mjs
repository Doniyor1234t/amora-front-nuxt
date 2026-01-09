import __nuxt_component_1 from './index-DR-npUW2.mjs';
import script from './index-DKvodBva.mjs';
import { defineComponent, ref, computed, watchEffect, watch, mergeProps, unref, withCtx, createTextVNode, createBlock, openBlock, createVNode, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useLikesStore } from './likes-BcVa4PMk.mjs';
import script$1 from './index-BHZ1kb_G.mjs';
import script$2 from './index-DKhnNHdX.mjs';
import script$3 from './index-DYXoWHPz.mjs';
import { u as useStrapi, a as useStrapiQuery, m as mapProductsResponse } from './catalogMappers-QA2PDDPy.mjs';
import { u as useRouter } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-B5CMdwHf.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import '@primeuix/utils/object';
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
import '@primeuix/styles/button';
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
import '@primeuix/styles/badge';
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
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import '@primeuix/utils';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/utils/dom';
import './index-I6kJA5l7.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';
import 'pinia';
import '@primeuix/utils/zindex';
import './index-tNm0a1Rf.mjs';
import './index-i6azE7xM.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import './index-BxmMWS2F.mjs';
import './index-CVUSfSgB.mjs';
import '@tanstack/vue-query';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import 'axios';

const PAGE_SIZE = 12;
const placeholderProductImage = "/images/products/Image.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPage = ref(1);
    const { normalizeMediaCollection } = useStrapi();
    useRouter();
    const filterDrawer = ref(false);
    const collectionDrawer = ref(false);
    const {
      data: categoriesResponse,
      isLoading: isCategoriesLoading,
      isError: isCategoriesError
    } = useStrapiQuery(
      ["categories"],
      () => ({
        path: "/categories"
      }),
      {
        select: (response) => response.data.map((entity) => ({
          label: entity?.title ?? `Категория ${entity.id}`,
          value: entity?.slug ?? String(entity.id)
        }))
      }
    );
    const categoryFilters = computed(
      () => categoriesResponse.value ?? []
    );
    const sizeDropdownOptions = [
      { label: "Все размеры", value: "all" },
      { label: "XXS", value: "xxs" },
      { label: "XS", value: "xs" },
      { label: "S", value: "s" },
      { label: "S/M", value: "sm" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "L/XL", value: "lxl" },
      { label: "XL", value: "xl" },
      { label: "32", value: "32" },
      { label: "34", value: "34" },
      { label: "36", value: "36" },
      { label: "38", value: "38" }
    ];
    const sortDropdownOptions = [
      { label: "Сначала новые", value: "new" },
      { label: "Название А-Я", value: "title-asc" },
      { label: "Название Я-А", value: "title-desc" },
      { label: "Цена по убыванию", value: "price-desc" },
      { label: "Цена по возрастанию", value: "price-asc" }
    ];
    const sizeFilterOptions = sizeDropdownOptions.filter(
      (option) => option.value !== "all"
    );
    const selectedCategory = ref("");
    const selectedSizeFilter = ref(sizeDropdownOptions[0]?.value ?? "all");
    const selectedSortFilter = ref(sortDropdownOptions[0]?.value ?? "new");
    const selectedSizeFilters = ref([]);
    const sizeDropdownOpen = ref(false);
    const sortDropdownOpen = ref(false);
    ref(null);
    ref(null);
    const likesStore = useLikesStore();
    const sortMapping = {
      new: ["publishedAt:desc"],
      "title-asc": ["name:asc"],
      "title-desc": ["name:desc"],
      "price-desc": ["price:desc"],
      "price-asc": ["price:asc"]
    };
    const activeSortQuery = computed(
      () => sortMapping[selectedSortFilter.value] ?? sortMapping.new
    );
    const normalizedSizeSelection = computed(() => {
      const sizes = /* @__PURE__ */ new Set();
      const dropdownSize = selectedSizeFilter.value;
      if (dropdownSize && dropdownSize !== "all") {
        sizes.add(dropdownSize);
      }
      selectedSizeFilters.value.forEach((size) => {
        if (size) {
          sizes.add(size);
        }
      });
      return Array.from(sizes);
    });
    const productFilters = computed(() => {
      const filters = {
        isActive: { $eq: true }
      };
      if (selectedCategory.value) {
        filters.categories = {
          slug: { $eqi: selectedCategory.value }
        };
      }
      const sizeSelections = normalizedSizeSelection.value;
      if (sizeSelections.length === 1) {
        filters.availableSizes = {
          $containsi: sizeSelections[0]
        };
      } else if (sizeSelections.length > 1) {
        const existingAnd = Array.isArray(
          filters["$and"]
        ) ? filters["$and"] : [];
        filters["$and"] = [
          ...existingAnd,
          {
            $or: sizeSelections.map((size) => ({
              availableSizes: { $containsi: size }
            }))
          }
        ];
      }
      return filters;
    });
    const productsQueryKey = computed(() => [
      "products",
      currentPage.value,
      selectedCategory.value || "all",
      selectedSizeFilter.value || "all",
      selectedSortFilter.value,
      normalizedSizeSelection.value.slice().sort().join("|")
    ]);
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
          filters: productFilters.value,
          pagination: {
            page: currentPage.value,
            pageSize: PAGE_SIZE
          },
          sort: activeSortQuery.value,
          populate: {
            images: { populate: "*" },
            collection: { populate: "*" },
            variants: { populate: ["size", "image"] }
          }
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
    const showSkeletonGrid = computed(
      () => isProductsLoading.value && !products.value.length
    );
    const isUpdatingPage = computed(
      () => !showSkeletonGrid.value && isProductsFetching.value
    );
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
    const activeSizeLabel = computed(
      () => sizeDropdownOptions.find(
        (option) => option.value === selectedSizeFilter.value
      )?.label ?? "Размер"
    );
    const activeSortLabel = computed(
      () => sortDropdownOptions.find(
        (option) => option.value === selectedSortFilter.value
      )?.label ?? "Сортировать"
    );
    const isSizeSelected = (sizeValue) => selectedSizeFilters.value.includes(sizeValue);
    watch(
      [
        () => selectedCategory.value,
        () => selectedSizeFilter.value,
        () => selectedSortFilter.value,
        () => normalizedSizeSelection.value.join("|")
      ],
      () => {
        currentPage.value = 1;
      }
    );
    const resetCategoryFilter = () => {
      const [first] = categoryFilters.value;
      selectedCategory.value = first ? first.value : "";
    };
    const resetProductFilters = () => {
      selectedSortFilter.value = sortDropdownOptions[0]?.value ?? "new";
      selectedSizeFilters.value = [];
      selectedSizeFilter.value = sizeDropdownOptions[0]?.value ?? "all";
    };
    const isFavorite = (productId) => likesStore.isLiked(productId);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[72px]" }, _attrs))}><div class="container mb-[32px] mt-[48px]"><h2 class="text-[#0F0F0F] text-[52px] max-sm:text-[34px]"> Каталог </h2><div class="mt-[40px] flex flex-col gap-[32px] lg:flex-row"><aside class="hidden lg:block w-[260px] xl:w-[300px] shrink-0"><div class="sticky top-[120px] flex flex-col gap-10"><div><p class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]"> Категории </p><div class="mt-5 space-y-4">`);
      if (unref(isCategoriesLoading)) {
        _push(`<div class="text-xs uppercase tracking-[0.16em] text-[#9B9B9B]"> Загрузка категорий… </div>`);
      } else if (unref(isCategoriesError)) {
        _push(`<div class="text-xs uppercase tracking-[0.16em] text-[#C16371]"> Не удалось загрузить категории </div>`);
      } else {
        _push(`<div class="space-y-3"><button type="button" class="${ssrRenderClass([[
          selectedCategory.value === "" ? "text-[#0F0F0F]" : "text-[#9B9B9B]"
        ], "w-full text-left text-sm uppercase tracking-[0.12em] transition-colors hover:text-[#0F0F0F]"])}"> Все категории </button>`);
        if (categoryFilters.value.length) {
          _push(`<!--[-->`);
          ssrRenderList(categoryFilters.value, (category) => {
            _push(`<button type="button" class="${ssrRenderClass([[
              selectedCategory.value === category.value ? "text-[#0F0F0F]" : "text-[#9B9B9B]"
            ], "w-full text-left text-sm uppercase tracking-[0.12em] transition-colors hover:text-[#0F0F0F]"])}">${ssrInterpolate(category.label)}</button>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<p class="text-xs uppercase tracking-[0.16em] text-[#9B9B9B]"> Список категорий пуст </p>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div></div></aside><div class="flex-1"><div class="hidden md:flex items-center justify-between gap-6"><div class="flex flex-wrap gap-4"><div class="relative"><button type="button" class="flex items-center gap-2 rounded-full border border-[#DADADA] px-7 py-3 text-xs tracking-[0.16em] uppercase text-[#0F0F0F]">${ssrInterpolate(activeSizeLabel.value)} <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([sizeDropdownOpen.value ? "rotate-180" : "", "transition-transform"])}"><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"></path></svg></button>`);
      if (sizeDropdownOpen.value) {
        _push(`<div class="absolute left-0 z-20 mt-2 w-56 rounded-3xl border border-[#E6E6E6] bg-white py-2 shadow-2xl"><!--[-->`);
        ssrRenderList(sizeDropdownOptions, (option) => {
          _push(`<button type="button" class="${ssrRenderClass([[
            option.value === selectedSizeFilter.value ? "text-[#0F0F0F] bg-[#F7F7F7]" : "text-[#7D7D7D]"
          ], "block w-full px-5 py-2 text-left text-sm uppercase tracking-[0.16em]"])}">${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative"><button type="button" class="flex items-center gap-2 rounded-full border border-[#DADADA] px-7 py-3 text-xs tracking-[0.16em] uppercase text-[#0F0F0F]">${ssrInterpolate(activeSortLabel.value)} <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([sortDropdownOpen.value ? "rotate-180" : "", "transition-transform"])}"><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"></path></svg></button>`);
      if (sortDropdownOpen.value) {
        _push(`<div class="absolute left-0 z-20 mt-2 w-60 rounded-3xl border border-[#E6E6E6] bg-white py-2 shadow-2xl"><!--[-->`);
        ssrRenderList(sortDropdownOptions, (option) => {
          _push(`<button type="button" class="${ssrRenderClass([[
            option.value === selectedSortFilter.value ? "text-[#0F0F0F] bg-[#F7F7F7]" : "text-[#7D7D7D]"
          ], "block w-full px-5 py-2 text-left text-sm uppercase tracking-[0.16em]"])}">${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-xs text-[#9B9B9B] uppercase tracking-[0.2em]">${ssrInterpolate(totalItems.value)} изделий </div></div><div class="flex items-center justify-between gap-3 md:hidden">`);
      _push(ssrRenderComponent(_component_Button, {
        onClick: ($event) => collectionDrawer.value = true,
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[24px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[36px] w-1/2",
        variant: "outlined",
        severity: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Категории <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Категории "),
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
        class: "!rounded-[80px] !text-[#0F0F0F] !px-[24px] h-[44px] max-sm:!text-[12px] max-sm:!px-[16px] max-sm:h-[36px] w-1/2",
        variant: "outlined",
        severity: "secondary",
        onClick: ($event) => filterDrawer.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Фильтры <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M20 0.5C15.1724 0.499996 10 4.90678 10 10.5C10 4.90678 4.82759 0.499996 0 0.499999" stroke="#0F0F0F"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Фильтры "),
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
      _push(`</div><div class="mt-[32px]">`);
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
          _push(`<div class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1"><div class="relative overflow-hidden h-[360px] flex items-center justify-center"><button type="button" class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center transition hover:scale-105"${ssrRenderAttr("aria-pressed", isFavorite(product.id))}>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "app-icon:heart-outlined",
            mode: "svg",
            class: isFavorite(product.id) ? "heart--liked" : "",
            color: isFavorite(product.id) ? "#000" : "#0F0F0F",
            size: "20"
          }, null, _parent));
          _push(`</button><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-contain"></div><div class="px-[24px] py-[20px] text-[#3D3D3D] flex items-center justify-between gap-4"><div><h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase">${ssrInterpolate(product.name)}</h2><p class="text-xs text-[#9B9B9B]">${ssrInterpolate(formatPrice(product.price, product.currency ? product.currency : void 0))}</p></div></div></div>`);
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
      _push(`</div></div></div></div><div class="container"><div class="w-full flex justify-center mb-[100px] max-sm:mb-[20px] max-sm:mx-auto"><nav class="flex items-center gap-12 text-sm text-[#3D3D3D]"><button class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} type="button"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M36 10L4.76837e-07 10" stroke="#0F0F0F"></path><path d="M10 0C10 4.82759 5.59322 10 -4.76836e-07 10C5.59322 10 10 15.1724 10 20" stroke="black"></path></svg></button><ul class="flex items-center gap-10 max-sm:gap-5"><!--[-->`);
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
      _push(`<!--]--></ul><button class="cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} type="button"><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="max-sm:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg><svg width="26" height="10" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="md:hidden"><path d="M0 10L36 10" stroke="#0F0F0F"></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="black"></path></svg></button></nav></div></div>`);
      _push(ssrRenderComponent(unref(script$1), {
        visible: collectionDrawer.value,
        "onUpdate:visible": ($event) => collectionDrawer.value = $event,
        header: "Категории",
        position: "right",
        class: "!w-[45%] max-sm:!w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col justify-between h-full"${_scopeId}><div class="flex flex-col gap-[16px]"${_scopeId}><h2 class="text-[#0F0F0F] text-[14px] font-[300] uppercase"${_scopeId}> Список категорий </h2>`);
            if (unref(isCategoriesLoading)) {
              _push2(`<div class="text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"${_scopeId}> Загрузка категорий… </div>`);
            } else if (unref(isCategoriesError)) {
              _push2(`<div class="text-[12px] uppercase tracking-[0.2em] text-[#C16371]"${_scopeId}> Не удалось загрузить категории </div>`);
            } else {
              _push2(`<!--[--><div class="flex items-center gap-3 text-[14px] uppercase"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$2), {
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                inputId: "mobile-category-all",
                name: "mobile-category",
                value: ""
              }, null, _parent2, _scopeId));
              _push2(`<label for="mobile-category-all"${_scopeId}>Все категории</label></div>`);
              if (categoryFilters.value.length) {
                _push2(`<!--[-->`);
                ssrRenderList(categoryFilters.value, (category) => {
                  _push2(`<div class="flex items-center gap-3 text-[14px] uppercase"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(script$2), {
                    modelValue: selectedCategory.value,
                    "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                    inputId: `mobile-category-${category.value}`,
                    name: "mobile-category",
                    value: category.value
                  }, null, _parent2, _scopeId));
                  _push2(`<label${ssrRenderAttr("for", `mobile-category-${category.value}`)}${_scopeId}>${ssrInterpolate(category.label)}</label></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<p class="text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"${_scopeId}> Список категорий пуст </p>`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</div><div class="w-full grid grid-cols-2 gap-[24px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => {
                resetCategoryFilter();
                collectionDrawer.value = false;
              },
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
                createVNode("div", { class: "flex flex-col gap-[16px]" }, [
                  createVNode("h2", { class: "text-[#0F0F0F] text-[14px] font-[300] uppercase" }, " Список категорий "),
                  unref(isCategoriesLoading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"
                  }, " Загрузка категорий… ")) : unref(isCategoriesError) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "text-[12px] uppercase tracking-[0.2em] text-[#C16371]"
                  }, " Не удалось загрузить категории ")) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode("div", { class: "flex items-center gap-3 text-[14px] uppercase" }, [
                      createVNode(unref(script$2), {
                        modelValue: selectedCategory.value,
                        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                        inputId: "mobile-category-all",
                        name: "mobile-category",
                        value: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("label", { for: "mobile-category-all" }, "Все категории")
                    ]),
                    categoryFilters.value.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(categoryFilters.value, (category) => {
                      return openBlock(), createBlock("div", {
                        key: `mobile-category-${category.value}`,
                        class: "flex items-center gap-3 text-[14px] uppercase"
                      }, [
                        createVNode(unref(script$2), {
                          modelValue: selectedCategory.value,
                          "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                          inputId: `mobile-category-${category.value}`,
                          name: "mobile-category",
                          value: category.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                        createVNode("label", {
                          for: `mobile-category-${category.value}`
                        }, toDisplayString(category.label), 9, ["for"])
                      ]);
                    }), 128)) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-[12px] uppercase tracking-[0.2em] text-[#9B9B9B]"
                    }, " Список категорий пуст "))
                  ], 64))
                ]),
                createVNode("div", { class: "w-full grid grid-cols-2 gap-[24px]" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => {
                      resetCategoryFilter();
                      collectionDrawer.value = false;
                    },
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
            _push2(`<div class="flex flex-col justify-between h-full"${_scopeId}><div class="flex flex-col gap-[24px]"${_scopeId}><div${_scopeId}><h2 class="text-[#0F0F0F] text-[14px] font-[300] uppercase"${_scopeId}> Сортировать по: </h2><!--[-->`);
            ssrRenderList(sortDropdownOptions, (option) => {
              _push2(`<div class="mt-3 flex items-center gap-3 text-[14px] uppercase"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$2), {
                modelValue: selectedSortFilter.value,
                "onUpdate:modelValue": ($event) => selectedSortFilter.value = $event,
                inputId: `drawer-sort-${option.value}`,
                name: "drawer-sort",
                value: option.value
              }, null, _parent2, _scopeId));
              _push2(`<label${ssrRenderAttr("for", `drawer-sort-${option.value}`)}${_scopeId}>${ssrInterpolate(option.label)}</label></div>`);
            });
            _push2(`<!--]--></div><div${_scopeId}><span class="text-xs tracking-[0.16em] uppercase text-[#7D7D7D]"${_scopeId}> Размер: </span><div class="mt-4 flex flex-wrap gap-3"${_scopeId}><!--[-->`);
            ssrRenderList(unref(sizeFilterOptions), (size) => {
              _push2(`<div class="size-pill"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$3), {
                modelValue: selectedSizeFilters.value,
                "onUpdate:modelValue": ($event) => selectedSizeFilters.value = $event,
                inputId: `drawer-size-${size.value}`,
                name: "drawer-size",
                value: size.value
              }, null, _parent2, _scopeId));
              _push2(`<label${ssrRenderAttr("for", `drawer-size-${size.value}`)} class="${ssrRenderClass([{
                "size-label--active": isSizeSelected(size.value)
              }, "size-label"])}"${_scopeId}>${ssrInterpolate(size.label)}</label></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="w-full grid grid-cols-2 gap-[24px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              onClick: ($event) => {
                resetProductFilters();
                filterDrawer.value = false;
              },
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
                createVNode("div", { class: "flex flex-col gap-[24px]" }, [
                  createVNode("div", null, [
                    createVNode("h2", { class: "text-[#0F0F0F] text-[14px] font-[300] uppercase" }, " Сортировать по: "),
                    (openBlock(), createBlock(Fragment, null, renderList(sortDropdownOptions, (option) => {
                      return createVNode("div", {
                        key: `drawer-sort-${option.value}`,
                        class: "mt-3 flex items-center gap-3 text-[14px] uppercase"
                      }, [
                        createVNode(unref(script$2), {
                          modelValue: selectedSortFilter.value,
                          "onUpdate:modelValue": ($event) => selectedSortFilter.value = $event,
                          inputId: `drawer-sort-${option.value}`,
                          name: "drawer-sort",
                          value: option.value
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                        createVNode("label", {
                          for: `drawer-sort-${option.value}`
                        }, toDisplayString(option.label), 9, ["for"])
                      ]);
                    }), 64))
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "text-xs tracking-[0.16em] uppercase text-[#7D7D7D]" }, " Размер: "),
                    createVNode("div", { class: "mt-4 flex flex-wrap gap-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeFilterOptions), (size) => {
                        return openBlock(), createBlock("div", {
                          key: `drawer-size-${size.value}`,
                          class: "size-pill"
                        }, [
                          createVNode(unref(script$3), {
                            modelValue: selectedSizeFilters.value,
                            "onUpdate:modelValue": ($event) => selectedSizeFilters.value = $event,
                            inputId: `drawer-size-${size.value}`,
                            name: "drawer-size",
                            value: size.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: `drawer-size-${size.value}`,
                            class: ["size-label", {
                              "size-label--active": isSizeSelected(size.value)
                            }]
                          }, toDisplayString(size.label), 11, ["for"])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full grid grid-cols-2 gap-[24px]" }, [
                  createVNode(_component_Button, {
                    onClick: ($event) => {
                      resetProductFilters();
                      filterDrawer.value = false;
                    },
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
//# sourceMappingURL=index-BnUI1OVm.mjs.map
