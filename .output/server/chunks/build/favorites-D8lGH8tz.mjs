import { _ as __nuxt_component_0 } from './nuxt-link-DHonv4x8.mjs';
import __nuxt_component_1 from './index-D5HttfMH.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useStrapi, a as useStrapiQuery } from './useApiService-CqdoLQGU.mjs';
import { m as mapProductsResponse } from './catalogMappers-C7pu-5Rb.mjs';
import { u as useLikesStore } from './likes-BcVa4PMk.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-B5CMdwHf.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import '@tanstack/vue-query';
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'axios';

const placeholderProductImage = "/images/products/Image.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "favorites",
  __ssrInlineRender: true,
  setup(__props) {
    const likesStore = useLikesStore();
    const likedIds = computed(() => likesStore.likedIds);
    const hasFavorites = computed(() => likedIds.value.length > 0);
    const { normalizeMediaCollection } = useStrapi();
    const productsQueryKey = computed(() => [
      "favorite-products",
      likedIds.value.slice().join(",")
    ]);
    const {
      data: favoritesResponse,
      isLoading,
      isError
    } = useStrapiQuery(
      productsQueryKey,
      () => ({
        path: "/products",
        query: {
          filters: {
            id: { $in: likedIds.value },
            isActive: { $eq: true }
          },
          populate: {
            images: { populate: "*" },
            collection: { populate: "*" },
            variants: { populate: ["size", "image"] }
          },
          pagination: {
            page: 1,
            pageSize: likedIds.value.length || 1
          }
        }
      }),
      {
        enabled: computed(() => likedIds.value.length > 0),
        select: (response) => mapProductsResponse(response, normalizeMediaCollection)
      }
    );
    const favoriteProducts = computed(() => {
      const items = favoritesResponse.value?.items ?? [];
      if (!items.length) {
        return [];
      }
      const order = likedIds.value.map((id) => String(id));
      return [...items].sort((a, b) => {
        const indexA = order.indexOf(String(a.id));
        const indexB = order.indexOf(String(b.id));
        const safeA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
        const safeB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
        return safeA - safeB;
      });
    });
    useRouter();
    const getProductImage = (product) => {
      if (!product.images?.length) {
        return placeholderProductImage;
      }
      return product.images[0]?.url ?? product.images[0]?.path ?? placeholderProductImage;
    };
    const isFavorite = (productId) => likesStore.isLiked(productId);
    const formatPrice = (price, currency) => {
      if (!price) {
        return "—";
      }
      return currency ? `${price} ${currency}` : price;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[72px] min-h-screen" }, _attrs))} data-v-836cee10><div class="container py-12" data-v-836cee10><div class="flex flex-col gap-4 mb-10" data-v-836cee10><p class="text-xs tracking-[0.4em] uppercase text-[#C16371]" data-v-836cee10>Избранное</p><h1 class="text-[52px] max-sm:text-[34px]" data-v-836cee10>Любимые изделия</h1><p class="text-[#7D7D7D] text-sm max-w-[520px]" data-v-836cee10> Здесь собраны все изделия, которые вы отметили ❤. Продолжайте выбирать и возвращайтесь к ним позже. </p></div>`);
      if (unref(isLoading)) {
        _push(`<div class="py-20 text-center text-[#7D7D7D]" data-v-836cee10> Загружаем избранные изделия... </div>`);
      } else if (!hasFavorites.value) {
        _push(`<div data-v-836cee10><div class="py-20 text-center text-[#0F0F0F] space-y-4" data-v-836cee10><p class="text-[20px] uppercase tracking-[0.2em]" data-v-836cee10>Вы еще не отметили изделия</p><p class="text-sm text-[#7D7D7D]" data-v-836cee10>Перейдите в каталог и добавьте понравившиеся вещи в избранное.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/catalog",
          class: "inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#0F0F0F] text-xs tracking-[0.3em] uppercase hover:bg-[#0F0F0F] hover:text-white transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` В каталог `);
            } else {
              return [
                createTextVNode(" В каталог ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (unref(isError)) {
        _push(`<div class="py-20 text-center text-[#C16371]" data-v-836cee10> Не удалось загрузить избранные изделия. Попробуйте позже. </div>`);
      } else if (favoriteProducts.value.length === 0) {
        _push(`<div class="py-20 text-center text-[#7D7D7D]" data-v-836cee10> Похоже, выбранные ранее изделия недоступны. Попробуйте выбрать другие модели в каталоге. </div>`);
      } else {
        _push(`<div data-v-836cee10><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12" data-v-836cee10><!--[-->`);
        ssrRenderList(favoriteProducts.value, (product) => {
          _push(`<div class="w-full flex flex-col justify-between cursor-pointer transition-transform hover:-translate-y-1" data-v-836cee10><div class="relative overflow-hidden h-[360px] flex items-center justify-center" data-v-836cee10><button type="button" class="absolute right-5 top-5 flex h-10 w-10 items-center justify-center transition hover:scale-105"${ssrRenderAttr("aria-pressed", isFavorite(product.id))} data-v-836cee10>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "app-icon:heart-outlined",
            mode: "svg",
            class: isFavorite(product.id) ? "heart--liked" : "",
            color: isFavorite(product.id) ? "#C16371" : "#0F0F0F",
            size: "20"
          }, null, _parent));
          _push(`</button><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-contain" data-v-836cee10></div><div class="px-[24px] py-[20px] text-[#3D3D3D] flex items-center justify-between gap-4" data-v-836cee10><div data-v-836cee10><h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase" data-v-836cee10>${ssrInterpolate(product.name)}</h2><p class="text-xs text-[#9B9B9B]" data-v-836cee10>${ssrInterpolate(formatPrice(product.price, product.currency ? product.currency : void 0))}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const favorites = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-836cee10"]]);

export { favorites as default };
//# sourceMappingURL=favorites-D8lGH8tz.mjs.map
