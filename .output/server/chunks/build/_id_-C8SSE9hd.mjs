import __nuxt_component_1 from './index-D5HttfMH.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useLikesStore } from './likes-BcVa4PMk.mjs';
import { u as useStrapi, a as useStrapiQuery } from './useApiService-CqdoLQGU.mjs';
import { c as mapCollectionFromResponse, m as mapProductsResponse } from './catalogMappers-C7pu-5Rb.mjs';
import { _ as _export_sfc, c as useRoute } from './server.mjs';
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
import 'pinia';
import '@tanstack/vue-query';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'axios';

const placeholderProductImage = "/images/products/Image.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const likesStore = useLikesStore();
    const collectionSlug = computed(() => route.params.id);
    const isValidCollectionSlug = computed(() => Boolean(collectionSlug.value));
    const { normalizeMediaCollection } = useStrapi();
    const {
      data: collectionResponse,
      isLoading: isCollectionLoading,
      isError: isCollectionError
    } = useStrapiQuery(
      ["collection", collectionSlug],
      () => ({
        path: "/collections",
        query: {
          filters: {
            slug: { $eq: collectionSlug.value },
            isActive: { $eq: true }
          },
          pagination: {
            page: 1,
            pageSize: 1
          },
          populate: {
            images: { populate: "*" },
            cover: { populate: "*" }
          }
        }
      }),
      {
        enabled: isValidCollectionSlug,
        select: (response) => mapCollectionFromResponse(response, normalizeMediaCollection)
      }
    );
    const {
      data: collectionProductsResponse,
      isLoading: isCollectionProductsLoading,
      isError: isCollectionProductsError,
      isFetching: isCollectionProductsFetching
    } = useStrapiQuery(
      ["collection-products", collectionSlug],
      () => ({
        path: "/products",
        query: {
          filters: {
            isActive: { $eq: true },
            collection: {
              slug: { $eq: collectionSlug.value }
            }
          },
          pagination: {
            page: 1,
            pageSize: 60
          },
          populate: {
            images: { populate: "*" },
            variants: { populate: ["size", "image"] }
          },
          sort: ["publishedAt:desc"]
        }
      }),
      {
        enabled: isValidCollectionSlug,
        keepPreviousData: true,
        select: (response) => mapProductsResponse(response, normalizeMediaCollection)
      }
    );
    const collection = computed(() => collectionResponse.value);
    const heroImage = computed(() => {
      const [first] = collection.value?.images ?? [];
      return first?.url ?? first?.path ?? "/images/Collection-bg-3.jpg";
    });
    const collectionName = computed(() => collection.value?.name ?? "Коллекция");
    computed(
      () => collection.value?.description ?? "Коллекция Amora, вдохновленная женственностью и современной эстетикой."
    );
    const collectionProducts = computed(
      () => collectionProductsResponse.value?.items ?? []
    );
    computed(
      () => collectionProductsResponse.value?.total ?? collectionProducts.value.length
    );
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
    const isFavorite = (productId) => likesStore.isLiked(productId);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-5ed99098>`);
      if (!isValidCollectionSlug.value) {
        _push(`<div class="container py-20 text-center" data-v-5ed99098><p class="text-[#C16371] text-lg" data-v-5ed99098> Некорректный идентификатор коллекции. </p></div>`);
      } else {
        _push(`<!--[--><section class="collection-detail-hero" style="${ssrRenderStyle({ backgroundImage: `url(${heroImage.value})` })}" data-v-5ed99098><div class="h-[100vh] w-full relative" data-v-5ed99098><img${ssrRenderAttr("src", heroImage.value)}${ssrRenderAttr("alt", collectionName.value)} class="inset-0 w-full h-full object-contain opacity-0" data-v-5ed99098></div></section><section class="container py-12" data-v-5ed99098><div class="flex flex-wrap items-center justify-between gap-6" data-v-5ed99098><div data-v-5ed99098><h2 class="text-[32px] text-[#0F0F0F]" data-v-5ed99098> Готово к примерке </h2></div></div></section><section class="container pb-20" data-v-5ed99098>`);
        if (unref(isCollectionProductsLoading) && !collectionProducts.value.length) {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12" data-v-5ed99098><!--[-->`);
          ssrRenderList(8, (index) => {
            _push(`<div class="space-y-4" data-v-5ed99098><div class="bg-[#F5F5F5] h-[360px] animate-pulse" data-v-5ed99098></div><div class="h-3 bg-[#E2E2E2] w-3/4 animate-pulse" data-v-5ed99098></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else if (unref(isCollectionProductsError)) {
          _push(`<div class="py-14 text-center text-[#C16371]" data-v-5ed99098> Не удалось загрузить изделия. Попробуйте позже. </div>`);
        } else if (collectionProducts.value.length === 0) {
          _push(`<div class="py-14 text-center text-[#0F0F0F]" data-v-5ed99098> В этой коллекции пока нет изделий. </div>`);
        } else {
          _push(`<div class="relative" data-v-5ed99098><div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 max-md:gap-y-[7px] max-md:gap-x-[16px]" data-v-5ed99098><!--[-->`);
          ssrRenderList(collectionProducts.value, (product) => {
            _push(`<div class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1" data-v-5ed99098><div class="relative overflow-hidden h-[360px] flex items-center justify-center bg-[#F9F9F9]" data-v-5ed99098><button type="button" class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center transition hover:scale-105"${ssrRenderAttr("aria-pressed", isFavorite(product.id))} data-v-5ed99098>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "app-icon:heart-outlined",
              mode: "svg",
              class: isFavorite(product.id) ? "heart--liked" : "",
              color: isFavorite(product.id) ? "#000" : "#0F0F0F",
              size: "20"
            }, null, _parent));
            _push(`</button><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-contain" data-v-5ed99098></div><div class="px-[24px] py-[20px] max-md:p-2 text-[#3D3D3D] flex items-center justify-between gap-4" data-v-5ed99098><div data-v-5ed99098><h2 class="pb-[8px] text-xs tracking-[0.06em] uppercase" data-v-5ed99098>${ssrInterpolate(product.name)}</h2><p class="text-xs text-[#9B9B9B]" data-v-5ed99098>${ssrInterpolate(formatPrice(
              product.price,
              product.currency ? product.currency : void 0
            ))}</p></div></div></div>`);
          });
          _push(`<!--]--></div>`);
          if (unref(isCollectionProductsFetching)) {
            _push(`<div class="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center pointer-events-none" data-v-5ed99098><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 w-full px-2" data-v-5ed99098><!--[-->`);
            ssrRenderList(8, (index) => {
              _push(`<div class="hidden sm:flex flex-col gap-4 animate-pulse" data-v-5ed99098><div class="bg-[#F5F5F5] h-[320px]" data-v-5ed99098></div><div class="px-[24px] py-[12px] space-y-2" data-v-5ed99098><div class="h-3 w-2/3 bg-[#E2E2E2]" data-v-5ed99098></div><div class="h-3 w-1/2 bg-[#E2E2E2]" data-v-5ed99098></div></div></div>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</section><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ed99098"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-C8SSE9hd.mjs.map
