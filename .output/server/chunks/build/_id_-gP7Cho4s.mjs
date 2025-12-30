import script from './index-DKvodBva.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useStrapi, a as useStrapiQuery, d as mapCollectionFromResponse, m as mapProductsResponse } from './catalogMappers-D-z-7ZFg.mjs';
import { b as useRoute } from './server.mjs';
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

const placeholderProductImage = "/images/products/dress-1.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
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
          populate: ["images"]
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
      isError: isCollectionProductsError
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
            pageSize: 40
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
    const collectionProducts = computed(
      () => collectionProductsResponse.value?.items ?? []
    );
    const totalProducts = computed(
      () => collectionProductsResponse.value?.total ?? collectionProducts.value.length
    );
    const placeholderCollectionImages = [
      "/images/Collection-bg-3.jpg",
      "/images/Collection-bg-6.jpg"
    ];
    const heroImages = computed(() => {
      const images = collection.value?.images ?? [];
      return [images[0]?.url, images[1]?.url].map(
        (img, index) => img ?? placeholderCollectionImages[index] ?? placeholderCollectionImages[0]
      );
    });
    const collectionName = computed(() => collection.value?.name ?? "Коллекция");
    const collectionDescription = computed(
      () => collection.value?.description ?? "Коллекция Amora, вдохновленная женственностью и современной эстетикой."
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[72px]" }, _attrs))}>`);
      if (!isValidCollectionSlug.value) {
        _push(`<div class="container py-20 text-center"><p class="text-[#C16371] text-lg"> Некорректный идентификатор коллекции. </p></div>`);
      } else {
        _push(`<div><div class="relative"><div class="grid grid-cols-2 relative max-h-[900px]"><div class="relative"><img${ssrRenderAttr("src", heroImages.value[0])} alt="" class="w-full max-h-[900px] object-cover"><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div><div class="relative"><img${ssrRenderAttr("src", heroImages.value[1])} alt="" class="w-full max-h-[900px] object-cover"><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div></div><div class="bg-white rounded-[500px] h-[680px] w-[520px] z-[11] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 max-sm:hidden"><div class="flex flex-col items-center justify-center h-full px-8 text-center">`);
        if (unref(isCollectionLoading)) {
          _push(`<div class="text-[#0F0F0F]"> Загрузка коллекции... </div>`);
        } else if (unref(isCollectionError)) {
          _push(`<div class="text-[#C16371]"> Не удалось загрузить коллекцию. </div>`);
        } else {
          _push(`<div><div class="flex items-center gap-2 mb-[12px] text-xs tracking-[0.3em] text-[#C16371] uppercase"> новая коллекция </div><h2 class="text-[#0F0F0F] text-[55px] text-center font-[masvol]">${ssrInterpolate(collectionName.value)}</h2><p class="text-center text-[#3D3D3D] text-[14px] mb-[24px]">${ssrInterpolate(collectionDescription.value)}</p>`);
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
          _push(`</div>`);
        }
        _push(`</div></div></div><div class="container flex items-center justify-between mb-[32px] mt-[48px]"><div><p class="text-xs tracking-[0.3em] text-[#C16371] uppercase mb-2"> коллекция </p><h2 class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]">${ssrInterpolate(collectionName.value)}</h2></div><div class="flex items-center gap-2 h-[44px]"><span class="text-[#0F0F0F] text-[52px] font-[masvol] max-sm:text-[34px]"> (${ssrInterpolate(totalProducts.value)}) </span></div></div><div class="container mx-auto">`);
        if (unref(isCollectionProductsLoading)) {
          _push(`<div class="py-10 text-center text-[#0F0F0F]"> Загрузка изделий... </div>`);
        } else if (unref(isCollectionProductsError)) {
          _push(`<div class="py-10 text-center text-[#C16371] text-lg"> Не удалось загрузить изделия коллекции. </div>`);
        } else if (collectionProducts.value.length === 0) {
          _push(`<div class="py-10 text-center text-[#0F0F0F]"> В этой коллекции пока нет изделий. </div>`);
        } else {
          _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"><!--[-->`);
          ssrRenderList(collectionProducts.value, (product) => {
            _push(`<div class="w-full flex flex-col justify-center"><div class="bg-[#F5F5F5] rounded-3xl overflow-hidden"><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} class="w-full h-full object-cover"></div><div class="px-[24px] py-[20px] text-[#3D3D3D]"><h2 class="pb-[8px] text-xs tracking-[0.16em] uppercase">${ssrInterpolate(product.name)}</h2><p class="text-xs text-[#9B9B9B]">${ssrInterpolate(formatPrice(product.price, product.currency ? product.currency : void 0))}</p></div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-gP7Cho4s.mjs.map
