import { u as useRouter, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DHonv4x8.mjs';
import __nuxt_component_1 from './index-D5HttfMH.mjs';
import script from './index-DKvodBva.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useStrapi, a as useStrapiQuery } from './useApiService-CqdoLQGU.mjs';
import { m as mapProductsResponse, a as mapProductEntity } from './catalogMappers-C7pu-5Rb.mjs';
import { u as useLikesStore } from './likes-BcVa4PMk.mjs';
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
import '@iconify/utils/lib/css/icon';
import './composables-B5CMdwHf.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import './index-I6kJA5l7.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';

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
      products: [],
      collectionSections: []
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
      img: `/images/products/Image.png`,
      name: "НАЗВАНИЕ ПЛАТЬЯ",
      price: "200$"
    }));
    const { normalizeMediaCollection } = useStrapi();
    const getBannerAttributes = (entity) => isStrapiEntity(entity) ? entity.attributes ?? entity : entity;
    const isBannerActive = (entity) => getBannerAttributes(entity).isActive ?? true;
    const getProductAttributes = (entity) => isStrapiEntity(entity) ? entity.attributes ?? entity : entity;
    const getCollectionAttributes = (entity) => isStrapiEntity(entity) ? entity.attributes ?? entity : entity;
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
      const collectionEntries = relationToArray(
        attributes.collections ?? null
      ).filter((entity) => Boolean(entity));
      const collectionSections = collectionEntries.map((collectionEntity) => {
        const collectionAttributes = getCollectionAttributes(collectionEntity);
        const [coverImage] = normalize(collectionAttributes.cover ?? collectionAttributes.images) ?? [];
        const collectionProducts = relationToArray(
          collectionAttributes.products ?? null
        ).filter((entity) => Boolean(entity)).map((entity) => mapProductEntity(toProductEntity(entity), normalize));
        if (!collectionProducts.length && !coverImage) {
          return null;
        }
        const bannerImage = coverImage?.url ?? coverImage?.path ?? collectionProducts[0]?.images?.[0]?.url ?? collectionProducts[0]?.images?.[0]?.path ?? placeholderBannerImage;
        return {
          id: isStrapiEntity(collectionEntity) ? collectionEntity.id : collectionEntity.id,
          title: collectionAttributes.name,
          banner: bannerImage,
          products: collectionProducts
        };
      }).filter((section) => Boolean(section));
      const fallbackBanner = heroBanners.at(-1) ?? null;
      const featureBannerImage = singleBanner?.img ?? fallbackBanner?.img ?? null;
      const featureBannerMobileImage = singleBanner?.mobileImg ?? fallbackBanner?.mobileImg ?? featureBannerImage ?? null;
      return {
        banners: heroBanners,
        featureBannerImage,
        featureBannerMobileImage,
        products: homepageProducts2,
        collectionSections
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
            },
            collections: {
              populate: {
                cover: { populate: "*" },
                images: { populate: "*" },
                products: {
                  populate: ["images"]
                }
              }
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
    const collectionHighlights = computed(
      () => homepageContent.value.collectionSections ?? []
    );
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
    computed(() => {
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
    const router = useRouter();
    const requestCards = [
      {
        title: "Индивидуальный пошив",
        description: "Создаём изделия, которые подчёркивают вашу индивидуальность",
        image: "https://cms.amora-brand.uz/uploads/Individualnyj_poshiv_0419872da8.png",
        action: () => router.push("/atelie")
      },
      {
        title: "G.T. Factory",
        description: "Премиальное обучение по конструированию и моделированию одежды",
        image: "https://cms.amora-brand.uz/uploads/G_T_Factory_abfbfb686a.png",
        action: () => router.push("/school")
      }
    ];
    ref(null);
    ref(null);
    const likesStore = useLikesStore();
    const isProductLiked = (productId) => likesStore.isLiked(productId);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slides-scroll" }, _attrs))}><section class="slide-section--banner"><div class="slide-section__fill">`);
      _push(ssrRenderComponent(_sfc_main$1, { items: banners.value }, null, _parent));
      _push(`</div></section><section class="slide-section"><div class="slide-section__inner">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section>`);
      if (!!featureBannerImageSrc.value) {
        _push(`<section class="slide-section max-md:mb-[-120px]"><div class="slide-section__inner"><div class="relative w-full h-[100vh]"><picture class="block w-full h-full"><source media="(max-width: 767px)"${ssrRenderAttr("srcset", featureBannerMobileSrc.value)}><img${ssrRenderAttr("src", featureBannerImageSrc.value)} alt="" class="object-cover object-top w-full h-full max-sm:object-[70%]"></picture></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(collectionHighlights.value, (highlight) => {
        _push(`<section class="slide-section--banner"><div class="flex-col gap-10"><div class="relative w-full h-[100vh] overflow-hidden"><img${ssrRenderAttr("src", highlight.banner)}${ssrRenderAttr("alt", highlight.title)} class="h-full w-full object-cover"></div><div class="w-full relative z-1000 bg-[#FBFAF9] px-6 py-12 text-black lg:px-12"><div class="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4"><h3 class="text-3xl font-light">${ssrInterpolate(highlight.title)}</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/collections",
          class: "text-xs uppercase tracking-[0.3em] text-white/70 underline-offset-4 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Смотреть все коллекции `);
            } else {
              return [
                createTextVNode(" Смотреть все коллекции ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="mt-8 grid gap-6 max-md:gap-2 max-md:grid-cols-2 xl:grid-cols-4"><!--[-->`);
        ssrRenderList(highlight.products.slice(0, 4), (product) => {
          _push(`<article class="collection-card"><div class="collection-card__image"><img${ssrRenderAttr("src", getProductImage(product))}${ssrRenderAttr("alt", product.name)} loading="lazy"><button type="button" class="${ssrRenderClass([{ "collection-card__favorite--active": isProductLiked(product.id) }, "collection-card__favorite"])}"${ssrRenderAttr("aria-pressed", isProductLiked(product.id))} aria-label="Добавить в избранное">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "app-icon:heart-outlined",
            mode: "svg",
            size: "22",
            class: isProductLiked(product.id) ? "heart--liked" : ""
          }, null, _parent));
          _push(`</button></div><div class="collection-card__info"><p class="collection-card__title">${ssrInterpolate(product.name)}</p><span class="collection-card__price">${ssrInterpolate(formatPrice(product.price, product.currency ?? void 0))}</span></div></article>`);
        });
        _push(`<!--]--></div></div></div></section>`);
      });
      _push(`<!--]--><section class="slide-section"><div class="slide-section__inner"><div class="grid grid-cols-1 lg:grid-cols-2 w-full"><!--[-->`);
      ssrRenderList(requestCards, (card) => {
        _push(`<article class="relative isolate flex min-h-[100vh] max-md:min-h-[468px] items-end overflow-hidden bg-black/70"><img${ssrRenderAttr("src", card.image)}${ssrRenderAttr("alt", card.title)} class="absolute inset-0 h-full w-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div><div class="relative flex flex-col justify-center z-10 w-full px-10 py-12 max-md:px-7 text-white max-md:text-center"><h2 class="text-[58px] max-md:text-[28px] text-center leading-tight">${ssrInterpolate(card.title)}</h2><p class="mt-4 text-lg max-md:text-[12px] text-center text-white/80">${ssrInterpolate(card.description)}</p>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[0] mx-auto text-center mt-8 text-[#FFF]! !border !border-white !bg-transparent !px-7 !py-3 !text-xs !uppercase tracking-[0.3em] transition hover:!bg-white hover:!text-black",
          variant: "outlined",
          severity: "secondary",
          onClick: ($event) => card.action()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ПОДРОБНЕЕ `);
            } else {
              return [
                createTextVNode(" ПОДРОБНЕЕ ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="slide-section"><div class="slide-section__inner max-md:p-0!"><div class="contact-layout"><div class="contact-map max-md:order-1">`);
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
//# sourceMappingURL=index-dJ8Ffc3r.mjs.map
