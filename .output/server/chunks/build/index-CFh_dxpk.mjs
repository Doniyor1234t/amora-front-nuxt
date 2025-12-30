import { a as __nuxt_component_0$1 } from './server.mjs';
import script from './index-DKvodBva.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useSwiper } from './useSwiper.client-BP2iX_YN.mjs';
import { A as AppCallBackModal } from './AppCallBackModal-DSYfLQzH.mjs';
import { u as useStrapi, a as useStrapiQuery, m as mapProductsResponse, b as mapProductEntity } from './catalogMappers-D-z-7ZFg.mjs';
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
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@iconify/vue';
import 'axios';
import '@tanstack/vue-query';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import './index-I6kJA5l7.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';
import './nuxt-link-B5t6I5Wz.mjs';
import './index-DPBqQuRR.mjs';
import '@iconify/utils/lib/css/icon';
import './composables-DFRB4_gd.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './index-Bv9eBuis.mjs';
import '@primeuix/utils/zindex';
import './index-tNm0a1Rf.mjs';
import './index-i6azE7xM.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';

const _sfc_main$1 = {
  __name: "SharedBanner",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const containerRef = ref(null);
    useSwiper(containerRef);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const placeholderProductImage = "/images/products/Image.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultHomepageContent = {
      banners: [],
      featureBannerImage: null,
      featureBannerMobileImage: null,
      products: []
    };
    const hasRelationData = (value) => typeof value === "object" && value !== null && "data" in value;
    const relationToArray = (relation) => {
      if (!relation) {
        return [];
      }
      if (Array.isArray(relation)) {
        return relation;
      }
      if (hasRelationData(relation)) {
        const data = relation.data;
        if (!data) {
          return [];
        }
        return Array.isArray(data) ? data : [data];
      }
      return [relation];
    };
    const isStrapiEntity = (value) => typeof value === "object" && value !== null && "attributes" in value;
    const toProductEntity = (entity) => {
      if (isStrapiEntity(entity)) {
        return entity;
      }
      return {
        id: entity.id ?? 0,
        attributes: entity
      };
    };
    const fallbackBanners = [
      {
        img: "/images/Slider-bg-1.png",
        title: "NEW COLLECTION",
        subtitle: "Self made woman",
        description: "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы"
      },
      {
        img: "/images/Slider-bg-2.png",
        title: "NEW COLLECTION",
        subtitle: "Self made woman",
        description: "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы"
      },
      {
        img: "/images/Slider-bg-3.png",
        title: "NEW COLLECTION",
        subtitle: "Self made woman",
        description: "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы"
      },
      {
        img: "/images/Slider-bg-4.png",
        title: "NEW COLLECTION",
        subtitle: "Self made woman",
        description: "Нежная палитра в комбинации с нарочито объемными фасонами подчеркивают женственность их обладательницы"
      }
    ];
    const placeholderBannerImage = fallbackBanners[0]?.img ?? "/images/Slider-bg-1.png";
    const fallbackCarouselItems = Array.from({ length: 10 }, (_, idx) => ({
      id: `fallback-${idx}`,
      img: `/images/products/dress-1.png`,
      name: "НАЗВАНИЕ ПЛАТЬЯ",
      price: "200$"
    }));
    const { normalizeMediaCollection } = useStrapi();
    const getBannerAttributes = (entity) => isStrapiEntity(entity) ? entity.attributes ?? entity : entity;
    const isBannerActive = (entity) => getBannerAttributes(entity).isActive ?? true;
    const getProductAttributes = (entity) => isStrapiEntity(entity) ? entity.attributes ?? entity : entity;
    const isProductActive = (entity) => getProductAttributes(entity).isActive ?? true;
    const mapBannerEntity = (entity) => {
      if (!entity) {
        return null;
      }
      const attributes = getBannerAttributes(entity);
      const [image] = normalizeMediaCollection(attributes.image);
      const [mobileImage] = normalizeMediaCollection(attributes.mobile_image);
      const bannerId = isStrapiEntity(entity) ? entity.id : entity.id;
      return {
        id: bannerId,
        img: image?.url ?? image?.path ?? placeholderBannerImage,
        mobileImg: mobileImage?.url ?? mobileImage?.path ?? image?.url ?? image?.path ?? placeholderBannerImage,
        title: attributes.title ?? null,
        subtitle: attributes.subtitle ?? null,
        description: attributes.description ?? null
      };
    };
    const mapHomepageResponse = (response, normalize) => {
      const rawData = response.data;
      const attributes = rawData ? isStrapiEntity(rawData) ? rawData.attributes : rawData : null;
      if (!attributes) {
        return {
          ...defaultHomepageContent
        };
      }
      const heroBanners = relationToArray(
        attributes.hero_banners ?? null
      ).filter((entity) => Boolean(entity)).filter(isBannerActive).map((entity) => mapBannerEntity(entity)).filter((banner) => Boolean(banner));
      const singleBanner = mapBannerEntity(attributes.single_banner ?? null);
      const productCandidates = [attributes.featured_products, attributes.products];
      let productEntries = [];
      for (const candidate of productCandidates) {
        const normalized = relationToArray(candidate ?? null).filter(
          (entry) => Boolean(entry)
        );
        if (normalized.length) {
          productEntries = normalized;
          break;
        }
      }
      const homepageProducts2 = productEntries.filter(isProductActive).map((entity) => mapProductEntity(toProductEntity(entity), normalize));
      const fallbackBanner = heroBanners.at(-1) ?? null;
      const featureBannerImage = singleBanner?.img ?? fallbackBanner?.img ?? null;
      const featureBannerMobileImage = singleBanner?.mobileImg ?? fallbackBanner?.mobileImg ?? featureBannerImage ?? null;
      return {
        banners: heroBanners,
        featureBannerImage,
        featureBannerMobileImage,
        products: homepageProducts2
      };
    };
    const {
      data: homepageResponse,
      isLoading: isHomepageLoading,
      isError: isHomepageError
    } = useStrapiQuery(
      ["homepage"],
      {
        path: "/homepage",
        query: {
          populate: {
            hero_banners: {
              populate: ["image", "mobile_image"]
            },
            single_banner: {
              populate: ["image", "mobile_image"]
            },
            featured_products: {
              populate: ["images"]
            },
            products: {
              populate: ["images"]
            }
          }
        }
      },
      {
        select: (response) => mapHomepageResponse(response, normalizeMediaCollection)
      }
    );
    const homepageContent = computed(
      () => homepageResponse.value ?? defaultHomepageContent
    );
    const homepageBanners = computed(() => homepageContent.value.banners ?? []);
    const banners = computed(() => {
      if (homepageBanners.value.length) {
        return homepageBanners.value;
      }
      return fallbackBanners;
    });
    const homepageProducts = computed(() => homepageContent.value.products ?? []);
    const shouldFetchRecentProducts = computed(() => {
      if (isHomepageError.value) {
        return true;
      }
      if (isHomepageLoading.value && !homepageResponse.value) {
        return false;
      }
      if (!homepageResponse.value) {
        return false;
      }
      return homepageProducts.value.length === 0;
    });
    const featureBannerImageSrc = computed(() => {
      if (homepageContent.value.featureBannerImage) {
        return homepageContent.value.featureBannerImage;
      }
      if (homepageBanners.value.length) {
        const last = homepageBanners.value[homepageBanners.value.length - 1];
        return last?.img ?? last?.mobileImg ?? placeholderBannerImage;
      }
      const fallbackLast = fallbackBanners[fallbackBanners.length - 1];
      return fallbackLast?.img ?? placeholderBannerImage;
    });
    const featureBannerMobileSrc = computed(() => {
      if (homepageContent.value.featureBannerMobileImage) {
        return homepageContent.value.featureBannerMobileImage;
      }
      if (homepageBanners.value.length) {
        const last = homepageBanners.value[homepageBanners.value.length - 1];
        return last?.mobileImg ?? last?.img ?? placeholderBannerImage;
      }
      const fallbackLast = fallbackBanners[fallbackBanners.length - 1];
      return fallbackLast?.mobileImg ?? fallbackLast?.img ?? placeholderBannerImage;
    });
    const {
      data: recentProductsResponse,
      isLoading: isRecentLoading,
      isError: isRecentError
    } = useStrapiQuery(
      ["recent-products"],
      {
        path: "/products",
        query: {
          // filters: {
          //   isActive: { $eq: true },
          // },
          sort: ["publishedAt:desc"],
          // pagination: {
          //   page: 1,
          //   pageSize: 10,
          // },
          // populate: ["images"],
          populate: "*"
        }
      },
      {
        enabled: shouldFetchRecentProducts,
        select: (response) => mapProductsResponse(response, normalizeMediaCollection)
      }
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
    const recentProducts = computed(() => recentProductsResponse.value?.items ?? []);
    const productsCarousel = computed(() => {
      if (homepageProducts.value.length) {
        return homepageProducts.value.map((product) => ({
          id: product.id,
          slug: product.slug,
          img: getProductImage(product),
          name: product.name,
          price: formatPrice(
            product.price,
            product.currency ? product.currency : void 0
          )
        }));
      }
      if (isRecentLoading.value || isRecentError.value || !recentProducts.value.length) {
        return fallbackCarouselItems;
      }
      return recentProducts.value.map((product) => ({
        id: product.id,
        slug: product.slug,
        img: getProductImage(product),
        name: product.name,
        price: formatPrice(product.price, product.currency ? product.currency : void 0)
      }));
    });
    ref(null);
    const isCallBackVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slides-scroll" }, _attrs))}><section class="slide-section--banner"><div class="slide-section__fill">`);
      _push(ssrRenderComponent(_sfc_main$1, { items: banners.value }, null, _parent));
      _push(`</div></section><section class="slide-section"><div class="slide-section__inner">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="max-md:grid md:hidden"><!--[-->`);
      ssrRenderList(productsCarousel.value.slice(0, 6), (item, idx) => {
        _push(`<div class="products-grid__item"><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)} class="products-grid__image" loading="lazy"></div>`);
      });
      _push(`<!--]--></div></div></section><section class="slide-section max-md:mb-[-120px]"><div class="slide-section__inner"><div class="relative w-full h-[100vh]"><picture class="block w-full h-full"><source media="(max-width: 767px)"${ssrRenderAttr("srcset", featureBannerMobileSrc.value)}><img${ssrRenderAttr("src", featureBannerImageSrc.value)} alt="" class="object-cover object-top w-full h-full max-sm:object-[70%]"></picture></div></div></section><section class="slide-section"><div class="slide-section__inner"><div class="grid grid-cols-2 w-full max-lg:gap-6 max-md:grid-cols-1 max-md:mt-10"><div class="flex justify-center items-center max-md:order-2"><div class="flex flex-col items-center max-w-[592px] text-center max-md:px-6"><h4 class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px]"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg> ИНДИВИДУАЛЬНЫЙ ПОШИВ AMORA <svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></h4><h2 class="text-[#0F0F0F] text-[52px] text-center pb-[24px] tracking-[0.05em] font-[masvol] max-sm:text-[34px]"> Создаём изделия, которые подчёркивают вашу индивидуальность </h2>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "!rounded-[80px] !bg-black !text-white !px-[28px] h-[44px] mt-5 max-sm:mb-6",
        variant: "outlined",
        severity: "secondary",
        onClick: ($event) => isCallBackVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОДРОБНЕЕ <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 10L36 10" stroke="#fff"${_scopeId}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="#fff"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" ПОДРОБНЕЕ "),
              (openBlock(), createBlock("svg", {
                width: "36",
                height: "20",
                viewBox: "0 0 36 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0 10L36 10",
                  stroke: "#fff"
                }),
                createVNode("path", {
                  d: "M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20",
                  stroke: "#fff"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppCallBackModal, {
        visible: unref(isCallBackVisible),
        "onUpdate:visible": ($event) => isRef(isCallBackVisible) ? isCallBackVisible.value = $event : null,
        "service-type": "tailoring",
        title: "Записаться на пошив"
      }, null, _parent));
      _push(`</div></div><div class="relative h-full max-md:min-h-[420px] max-md:order-1"><img src="https://cms.amora-brand.uz/uploads/Individualnyj_poshiv_5ae71b9238.png" class="w-full h-full max-h-[100vh] object-cover object-top" alt=""></div></div></div></section><section class="slide-section"><div class="slide-section__inner"><div class="grid grid-cols-2 w-full max-lg:gap-6 max-md:grid-cols-1"><div class="relative h-full max-md:min-h-[420px] max-md:order-1"><img src="https://cms.amora-brand.uz/uploads/G_T_Factory_f86b905c07.png" class="w-full h-full max-h-[100vh] object-cover object-top" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div><div class="flex justify-center items-center max-md:order-2"><div class="flex flex-col items-center max-w-[592px] text-center max-md:px-6"><h4 class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] max-sm:mt-6"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg> G.T. Factory <svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></h4><h2 class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]"> Премиальное обучение по конструированию и моделированию одежды </h2>`);
      _push(ssrRenderComponent(_component_Button, {
        class: "!rounded-[80px] !bg-black !text-white !px-[28px] h-[44px] mt-5 max-sm:mb-6",
        variant: "outlined",
        severity: "secondary",
        onClick: ($event) => isCallBackVisible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ПОДРОБНЕЕ <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 10L36 10" stroke="#fff"${_scopeId}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="#fff"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" ПОДРОБНЕЕ "),
              (openBlock(), createBlock("svg", {
                width: "36",
                height: "20",
                viewBox: "0 0 36 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M0 10L36 10",
                  stroke: "#fff"
                }),
                createVNode("path", {
                  d: "M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20",
                  stroke: "#fff"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section><section class="slide-section"><div class="slide-section__inner"><div class="contact-layout"><div class="contact-map max-md:order-1">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CFh_dxpk.mjs.map
