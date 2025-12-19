import script from './index-DKvodBva.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { e as createError } from '../nitro/nitro.mjs';
import { u as useStrapi, a as useStrapiQuery, b as mapProductFromResponse } from './catalogMappers-DhRYQROb.mjs';
import { u as useRoute, b as useRuntimeConfig } from './server.mjs';
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
import '@tanstack/vue-query';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@iconify/vue';
import 'axios';

const placeholderImage = "/images/Product-bg.jpg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig();
    const defaultLocale = runtimeConfig.public?.defaultLocale ?? runtimeConfig.public?.strapiLocale ?? "ru";
    const currentLocale = computed(
      () => route.params.locale ?? defaultLocale
    );
    const productSlug = computed(() => route.params.id);
    const { normalizeMediaCollection } = useStrapi();
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
      return product.value?.images?.map((img) => img?.url ?? img?.path ?? placeholderImage) ?? [placeholderImage];
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
    const careInstructions = computed(() => ["Сухая чистка", "Не отбеливать"]);
    const availableSizesText = computed(() => {
      const sizes = product.value?.availableSizes;
      return sizes?.length ? sizes.join(", ") : "Размеры уточняйте у менеджера";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[72px]" }, _attrs))}><div class="grid grid-cols-2 overflow-hidden max-sm:grid-cols-1 min-h-[calc(100vh-72px)]"><div class="flex overflow-y-auto no-scrollbar flex-col h-[calc(100vh-72px)]"><!--[-->`);
      ssrRenderList([...productImages.value], (value) => {
        _push(`<div class="relative min-h-[calc(100vh-72px)]"><img${ssrRenderAttr("src", value)} alt="Product image" class="h-full w-full object-cover object-top"><div class="absolute top-0 left-0 w-full h-full"></div><div class="absolute bottom-6 left-6 bg-white/80 px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase text-[#3D3D3D]">${ssrInterpolate(collectionName.value)}</div></div>`);
      });
      _push(`<!--]--></div><div class="h-[calc(100vh-72px)] overflow-y-auto pt-[100px] pl-[40px] pr-[40px] max-sm:px-4 max-sm:pt-[32px]">`);
      if (unref(isProductLoading)) {
        _push(`<div class="text-center text-[#0F0F0F] py-10"> Загрузка информации о товаре... </div>`);
      } else if (unref(isProductError) || !product.value) {
        _push(`<div class="text-center text-[#C16371] py-10"> Не удалось загрузить информацию о товаре. Попробуйте позже. </div>`);
      } else {
        _push(`<div class="flex flex-col gap-4 w-full max-w-[600px] text-[#0F0F0F]"><div class="flex flex-col gap-2"><span class="text-xs tracking-[0.2em] text-[#C16371] uppercase">${ssrInterpolate(collectionName.value)}</span><h1 class="text-[64px] font-[masvol] leading-[1.1] max-sm:text-[38px]">${ssrInterpolate(product.value.name)}</h1><p class="font-bold text-[20px] max-sm:text-[18px]">${ssrInterpolate(formatPrice(product.value.price, product.value.currency ? product.value.currency : void 0))}</p></div><div class="flex flex-col gap-2"><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Размер</p><p class="text-[15px] uppercase tracking-[0.2em] text-[#EEE9E4]">${ssrInterpolate(availableSizesText.value)}</p></div><div class="flex flex-col gap-3"><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Описание</p><p class="text-[15px] leading-relaxed tracking-[0.05em] text-[#3D3D3D]">${ssrInterpolate(descriptionText.value)}</p></div><div class="flex flex-col gap-4 text-[15px] text-[#C9C5C0]"><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Состав</p><ul class="flex flex-col gap-1 uppercase text-[#3D3D3D]"><!--[-->`);
        ssrRenderList(composition.value, (item, index) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="flex flex-col gap-4 text-[15px]"><p class="text-xs uppercase tracking-[0.6em] text-[#3D3D3D]">Уход</p><ul class="flex flex-col gap-1 uppercase"><!--[-->`);
        ssrRenderList(careInstructions.value, (item, index) => {
          _push(`<li>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="w-full grid grid-cols-2 gap-4 mt-[32px] max-sm:grid-cols-1 max-sm:mb-10">`);
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[80px] !text-white !px-[28px] !h-[48px] !bg-[#0F0F0F] uppercase",
          variant: "outlined",
          severity: "primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Оставить заявку `);
            } else {
              return [
                createTextVNode(" Оставить заявку ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] !h-[48px] uppercase",
          variant: "outlined",
          severity: "secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Добавить в корзину `);
            } else {
              return [
                createTextVNode(" Добавить в корзину ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Cnso12-W.mjs.map
