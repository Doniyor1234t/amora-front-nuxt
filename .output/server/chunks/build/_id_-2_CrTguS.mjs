import __nuxt_component_1 from './index-mhtzWv5E.mjs';
import script from './index-DKvodBva.mjs';
import { defineComponent, computed, ref, watch, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { A as AppCallBackModal } from './AppCallBackModal-CnBHqkDY.mjs';
import { e as createError, z as getRequestURL } from '../nitro/nitro.mjs';
import { u as useStrapi, a as useStrapiQuery, b as mapProductFromResponse } from './catalogMappers-DTYkDLs1.mjs';
import { u as useLikesStore } from './likes-BcVa4PMk.mjs';
import { _ as _export_sfc, b as useRoute, c as useRuntimeConfig, u as useNuxtApp } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-DFRB4_gd.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
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
import './nuxt-link-DzpVeWIF.mjs';
import './index-56hkwXh9.mjs';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/inputtext';
import './index-Beuqix8B.mjs';
import '@primeuix/utils/zindex';
import './index-tNm0a1Rf.mjs';
import './index-i6azE7xM.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import '@primeuix/styles/dialog';
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
import '@tanstack/vue-query';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import 'axios';

function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const placeholderImage = "/images/Product-bg.jpg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig();
    const requestUrl = useRequestURL();
    const defaultLocale = runtimeConfig.public?.defaultLocale ?? runtimeConfig.public?.strapiLocale ?? "ru";
    const currentLocale = computed(
      () => route.params.locale ?? defaultLocale
    );
    const productSlug = computed(() => route.params.id);
    const productPageUrl = computed(() => {
      try {
        return new URL(`/catalog/${productSlug.value}`, requestUrl.origin).toString();
      } catch {
        return `/catalog/${productSlug.value}`;
      }
    });
    const { normalizeMediaCollection } = useStrapi();
    const likesStore = useLikesStore();
    const {
      data: productResponse,
      isLoading: isProductLoading,
      isError: isProductError
    } = useStrapiQuery(
      ["product", productSlug, currentLocale],
      () => ({
        path: "/products",
        // Strapi forbids `/products/:id` for public users when i18n is enabled,
        // so we query `/products` with a slug filter, locale, and populated relations instead.
        query: {
          filters: {
            slug: { $eq: productSlug.value },
            isActive: { $eq: true }
          },
          populate: ["images", "collection"],
          locale: currentLocale.value,
          pagination: {
            page: 1,
            pageSize: 1
          }
        }
      }),
      {
        enabled: computed(() => Boolean(productSlug.value)),
        select: (response) => {
          if (!response?.data?.length) {
            throw createError({
              statusCode: 404,
              statusMessage: "Product not found"
            });
          }
          const mapped = mapProductFromResponse(response, normalizeMediaCollection);
          if (!mapped) {
            throw createError({
              statusCode: 404,
              statusMessage: "Product not found"
            });
          }
          return mapped;
        }
      }
    );
    const product = computed(() => productResponse.value);
    const productImages = computed(() => {
      return product.value?.images?.map(
        (img) => img?.url ?? img?.path ?? placeholderImage
      ) ?? [placeholderImage];
    });
    const productLeadMetadata = computed(() => {
      if (!product.value) {
        return {
          photoUrls: productImages.value.slice(0, 3)
        };
      }
      return {
        product: {
          name: product.value.name,
          collectionName: product.value.collection?.name,
          fabric: product.value.fabric ?? null,
          color: product.value.color ?? null,
          size: null,
          url: productPageUrl.value
        },
        photoUrls: productImages.value.slice(0, 3)
      };
    });
    const formatPrice = (price, currency) => {
      if (!price) {
        return "—";
      }
      return currency ? `${price} ${currency}` : price;
    };
    const collectionName = computed(
      () => product.value?.collection?.name ?? "Коллекция"
    );
    const descriptionText = computed(
      () => product.value?.description ?? "Описание недоступно. Скоро здесь появится дополнительная информация."
    );
    const composition = computed(() => {
      const fabric = product.value?.fabric ? `${product.value.fabric}` : "Состав уточняйте у менеджера";
      return [fabric];
    });
    const careInstructions = computed(() => [
      "Только химчистка",
      "Деликатная стирка",
      "Не отбеливать"
    ]);
    const availableSizesText = computed(() => {
      const sizes = product.value?.availableSizes;
      return sizes?.length ? sizes.join(", ") : "Размеры уточняйте у менеджера";
    });
    const sizeOptions = computed(() => {
      const sizes = product.value?.availableSizes;
      if (!sizes?.length) {
        return [];
      }
      return sizes.map(
        (size) => typeof size === "string" ? size.trim() : String(size ?? "")
      ).filter((size) => Boolean(size));
    });
    const hasSizeOptions = computed(() => sizeOptions.value.length > 0);
    const selectedSize = ref(null);
    watch(
      sizeOptions,
      (sizes) => {
        selectedSize.value = sizes[0] ?? null;
      },
      { immediate: true }
    );
    const detailsSections = ref({
      composition: false,
      care: false,
      description: false
    });
    const isFavorite = computed(() => {
      if (!product.value) {
        return false;
      }
      return likesStore.isLiked(product.value.id);
    });
    const isCallbackModalOpen = ref(false);
    const openCallbackModal = () => {
      isCallbackModalOpen.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><div class="pt-[72px]" data-v-0deb1b15><div class="grid grid-cols-2 overflow-hidden min-h-[calc(100vh-72px)] max-lg:grid-cols-[1.1fr_0.9fr] max-md:grid-cols-1" data-v-0deb1b15><div class="flex overflow-y-auto no-scrollbar flex-col h-[calc(100vh-72px)] bg-[#fff]" data-v-0deb1b15><!--[-->`);
      ssrRenderList(productImages.value, (value, index) => {
        _push(`<div class="relative min-h-[calc(100vh-72px)] flex items-center justify-center" data-v-0deb1b15><img${ssrRenderAttr("src", value)} alt="Product image" class="h-full w-full object-cover object-top max-xl:object-contain" data-v-0deb1b15></div>`);
      });
      _push(`<!--]--></div><div class="h-[calc(100vh-72px)] overflow-y-auto px-[72px] py-[80px] bg-white max-xl:px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 max-sm:py-8" data-v-0deb1b15>`);
      if (unref(isProductLoading)) {
        _push(`<div class="text-center text-[#0F0F0F] py-10" data-v-0deb1b15> Загрузка информации о товаре... </div>`);
      } else if (unref(isProductError) || !product.value) {
        _push(`<div class="text-center text-[#C16371] py-10" data-v-0deb1b15> Не удалось загрузить информацию о товаре. Попробуйте позже. </div>`);
      } else {
        _push(`<div class="flex flex-col gap-8 w-full max-w-[620px] text-[#0F0F0F]" data-v-0deb1b15><div class="flex flex-col gap-3" data-v-0deb1b15><span class="text-xs tracking-[0.4em] text-[#C16371] uppercase flex items-center gap-3" data-v-0deb1b15>${ssrInterpolate(collectionName.value)} <span class="w-1 h-1 rounded-full bg-[#C16371]" data-v-0deb1b15></span></span><h1 class="text-[72px] font-[masvol] leading-[1] max-lg:text-[56px] max-md:text-[46px] max-sm:text-[36px]" data-v-0deb1b15>${ssrInterpolate(product.value.name)}</h1><p class="font-semibold text-[26px] max-sm:text-[20px]" data-v-0deb1b15>${ssrInterpolate(formatPrice(product.value.price, product.value.currency ? product.value.currency : void 0))}</p></div><div class="flex flex-col gap-4" data-v-0deb1b15><div class="flex items-center justify-between" data-v-0deb1b15><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]" data-v-0deb1b15>Размер</p>`);
        if (selectedSize.value) {
          _push(`<span class="text-xs uppercase tracking-[0.3em] text-[#C16371]" data-v-0deb1b15>${ssrInterpolate(selectedSize.value ? selectedSize.value.toUpperCase() : "")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (hasSizeOptions.value) {
          _push(`<div class="flex flex-wrap gap-3" data-v-0deb1b15><!--[-->`);
          ssrRenderList(sizeOptions.value, (size) => {
            _push(`<button type="button" class="${ssrRenderClass([[
              selectedSize.value === size ? "!bg-[#0F0F0F] !text-white !border-[#0F0F0F]" : "bg-transparent border-[#E3DED7] text-[#3D3D3D]"
            ], "px-6 h-[44px] rounded-full border text-[13px] uppercase tracking-[0.25em] transition-all"])}" data-v-0deb1b15>${ssrInterpolate(size.toUpperCase())}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<p class="text-[15px] uppercase tracking-[0.2em] text-[#CDC6BF]" data-v-0deb1b15>${ssrInterpolate(availableSizesText.value)}</p>`);
        }
        _push(`</div><div class="flex gap-5" data-v-0deb1b15>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[999px] !text-white !px-[48px] !h-[54px] !bg-[#0F0F0F] !border-[#0F0F0F] uppercase tracking-[0.25em] w-full max-w-[280px]",
          variant: "outlined",
          severity: "primary",
          onClick: openCallbackModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Купить `);
            } else {
              return [
                createTextVNode(" Купить ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button type="button" class="h-12 w-12 rounded-full border border-[#E4E0DA] flex items-center justify-center hover:bg-[#F7F5F0] transition-colors"${ssrRenderAttr("aria-pressed", isFavorite.value)} data-v-0deb1b15>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "app-icon:heart-outlined",
          mode: "svg",
          class: isFavorite.value ? "heart--liked" : "",
          color: isFavorite.value ? "#C16371" : "#0F0F0F",
          size: "24"
        }, null, _parent));
        _push(`</button></div><div class="flex flex-col border-t border-b border-[#E8E2DC] divide-y divide-[#E8E2DC]" data-v-0deb1b15><div class="py-6" data-v-0deb1b15><button type="button" class="w-full flex items-center justify-between" data-v-0deb1b15><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]" data-v-0deb1b15>Состав</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: detailsSections.value.composition ? "ph:caret-up" : "ph:caret-down",
          size: "20",
          color: "#0F0F0F"
        }, null, _parent));
        _push(`</button>`);
        if (detailsSections.value.composition) {
          _push(`<div class="mt-4" data-v-0deb1b15><ul class="flex flex-col gap-1 uppercase text-[#3D3D3D] text-[15px]" data-v-0deb1b15><!--[-->`);
          ssrRenderList(composition.value, (item, index) => {
            _push(`<li data-v-0deb1b15>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="py-6" data-v-0deb1b15><button type="button" class="w-full flex items-center justify-between" data-v-0deb1b15><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]" data-v-0deb1b15>Уход</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: detailsSections.value.care ? "ph:caret-up" : "ph:caret-down",
          size: "20",
          color: "#0F0F0F"
        }, null, _parent));
        _push(`</button>`);
        if (detailsSections.value.care) {
          _push(`<div class="mt-4" data-v-0deb1b15><ul class="flex flex-col gap-1 uppercase text-[#3D3D3D] text-[15px]" data-v-0deb1b15><!--[-->`);
          ssrRenderList(careInstructions.value, (item, index) => {
            _push(`<li data-v-0deb1b15>${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="py-6" data-v-0deb1b15><button type="button" class="w-full flex items-center justify-between" data-v-0deb1b15><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]" data-v-0deb1b15>Описание</p>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: detailsSections.value.description ? "ph:caret-up" : "ph:caret-down",
          size: "20",
          color: "#0F0F0F"
        }, null, _parent));
        _push(`</button>`);
        if (detailsSections.value.description) {
          _push(`<div class="mt-4" data-v-0deb1b15><p class="text-[15px] leading-relaxed tracking-[0.05em] text-[#3D3D3D]" data-v-0deb1b15>${ssrInterpolate(descriptionText.value)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(AppCallBackModal, {
        visible: isCallbackModalOpen.value,
        "onUpdate:visible": ($event) => isCallbackModalOpen.value = $event,
        "service-type": "collection",
        metadata: productLeadMetadata.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0deb1b15"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-2_CrTguS.mjs.map
