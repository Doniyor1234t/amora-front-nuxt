import __nuxt_component_1 from './index-DqgBJCIA.mjs';
import { defineComponent, ref, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AppCallBackModal } from './AppCallBackModal-BoVqvuBg.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import './nuxt-link-DHonv4x8.mjs';
import './index-56hkwXh9.mjs';
import '@primeuix/utils';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/utils/dom';
import './index-DKvodBva.mjs';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-I6kJA5l7.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';
import './index-Bv9eBuis.mjs';
import '@primeuix/utils/zindex';
import './index-tNm0a1Rf.mjs';
import './index-i6azE7xM.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import 'axios';
import '@tanstack/vue-query';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "atelie",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Примерка с выездом",
        description: "Персональная примерка в удобном для вас месте",
        icon: "app-icon:ruller-icon"
      },
      {
        title: "Экспресс пошив за 2 дня",
        description: "Ускоренный пошив изделия с сохранением качества",
        icon: "app-icon:star-icon"
      },
      {
        title: "Онлайн заказ",
        description: "Возможность заказа онлайн, без визита на примерку",
        icon: "app-icon:scissors-icon"
      }
    ];
    const priceList = [
      {
        title: "Легкие платья ",
        price: "170$"
      },
      {
        title: "Сарафаны",
        price: "130$"
      },
      {
        title: "Жакеты по фигуре",
        price: "250$"
      },
      {
        title: "Пиджаки",
        price: "350$"
      },
      {
        title: "Брюки ,  Юбки , Блузки",
        price: "130$"
      },
      {
        title: "Двойки",
        price: "220$"
      },
      {
        title: "Корсет",
        price: "300$"
      },
      {
        title: "Нарядное платье",
        price: "350$"
      },
      {
        title: "Авторское платье",
        price: "500$"
      },
      {
        title: "Корсетное платье",
        price: "700$"
      },
      {
        title: "Драпированное платье",
        price: "1 200$"
      },
      {
        title: "Платье от Дизайнера ",
        price: "1 500$"
      }
    ];
    const faqs = [
      {
        question: "Сколько времени занимает пошив?",
        answer: "Сроки пошива зависят от сложности изделия и загруженности ателье. В среднем процесс занимает от 2 до 4 недель. Срочный пошив возможен за дополнительную плату."
      },
      {
        question: "Как формируется стоимость?",
        answer: "Стоимость складывается из сложности работы (фасон, технология обработки) и стоимости материалов. Точную цену мы можем назвать только после обсуждения эскиза."
      },
      {
        question: "Можно ли прийти со своей тканью?",
        answer: "Да, мы работаем как с нашими материалами, так и с тканью заказчика. Наш специалист проконсультирует вас по пригодности ткани для выбранной модели."
      },
      {
        question: "Сколько примерок потребуется?",
        answer: "Обычно требуется 2-3 примерки: первая для макета, вторая для изделия в ткани и финальная перед сдачей. Для сложных изделий может потребоваться больше встреч."
      }
    ];
    const isCallBackVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<!--[--><div class="bg-[#FBFAF9] pb-24" data-v-50f697ab><section class="relative isolate mx-auto flex min-h-[100vh] w-full items-end overflow-hidden bg-black/60" data-v-50f697ab><img src="https://cms.amora-brand.uz/uploads/2_Banner_18ee12192d.png" alt="Ателье AMORA" class="absolute inset-0 h-full w-full object-cover" data-v-50f697ab></section><section class="container mx-auto mt-16 px-4 md:hidden" data-v-50f697ab><h2 class="mb-6 text-[30px] font-light text-center leading-tight text-[#14120F] max-md:text-[30px]" data-v-50f697ab> Индивидуальный пошив в ателье </h2><div class="bg-white px-5 py-5 max-md:px-6 lg:px-14" data-v-50f697ab><div class="grid gap-4 md:grid-cols-2" data-v-50f697ab><!--[-->`);
      ssrRenderList(priceList, (item) => {
        _push(`<div class="flex items-center justify-between pb-4 text-[#14120F]" data-v-50f697ab><p class="text-sm tracking-[0.05em]" data-v-50f697ab>${ssrInterpolate(item.title)}</p><span class="font-light tracking-[0.15em]" data-v-50f697ab>${ssrInterpolate(item.price)}</span></div>`);
      });
      _push(`<!--]--></div></div></section><section class="container mx-auto mt-16 px-4" data-v-50f697ab><div class="text-center" data-v-50f697ab><h3 class="mt-4 text-[52px] font-light text-[#0F0F0F] max-md:text-[30px]" data-v-50f697ab> Дополнительные услуги: </h3></div><div class="mt-12 max-md:mt-6 grid gap-6 md:grid-cols-3" data-v-50f697ab><!--[-->`);
      ssrRenderList(services, (service) => {
        _push(`<article class="bg-[#fff] p-8 text-center" data-v-50f697ab><span class="flex mx-auto h-18 w-18 items-center justify-center rounded-full border border-[#D0CBC4] text-[#14120F]" data-v-50f697ab>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: service.icon,
          size: "28"
        }, null, _parent));
        _push(`</span><h4 class="mt-24 text-2xl text-[#0F0F0F]" data-v-50f697ab>${ssrInterpolate(service.title)}</h4><p class="mt-2 text-sm text-[#3D3D3D]" data-v-50f697ab>${ssrInterpolate(service.description)}</p></article>`);
      });
      _push(`<!--]--></div></section><section class="container mx-auto mt-20 px-4" data-v-50f697ab><div class="flex flex-col items-center text-center" data-v-50f697ab><h3 class="mt-3 text-[52px] text-[#0F0F0F] max-md:text-[30px]" data-v-50f697ab> Вопросы и ответы </h3></div><div class="mx-auto mt-10 max-w-[640px] space-y-4" data-v-50f697ab><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(`<details class="bg-white px-6 py-5 max-md:px-4 max-md:py-4" data-v-50f697ab><summary class="flex cursor-pointer items-center justify-between text-left text-lg text-[#0F0F0F]" data-v-50f697ab><span class="text-[26px] font-light max-md:text-[18px]" data-v-50f697ab>${ssrInterpolate(faq.question)}</span><span class="faq-toggle ml-4 text-2xl text-[#B86F62] transition-transform duration-200" data-v-50f697ab>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "app-icon:arrow-bottom",
          size: "12"
        }, null, _parent));
        _push(`</span></summary><p class="mt-3 text-sm max-md:text-[12px] text-[#3D3D3D]" data-v-50f697ab>${ssrInterpolate(faq.answer)}</p></details>`);
      });
      _push(`<!--]--></div></section><section class="container mx-auto mt-20 px-4" data-v-50f697ab><div class="bg-[#CF998D] px-8 py-24 text-center text-white max-md:px-6" data-v-50f697ab><h3 class="mt-4 text-[52px] leading-tight max-md:text-[36px]" data-v-50f697ab> Готовы создать мечту? </h3><p class="mx-auto max-w-[662px] mt-3 font-light text-[18px] tracking-[0.05em] text-white/80" data-v-50f697ab> Запишитесь на бесплатную консультацию со стилистом, чтобы обсудить ваш будущий наряд </p><button type="button" class="mx-auto mt-8 border border-white px-10 py-3 text-[13px] uppercase tracking-[0.3em] transition hover:bg-white hover:text-[#B86F62]" data-v-50f697ab> Записаться сейчас </button></div></section></div>`);
      _push(ssrRenderComponent(AppCallBackModal, {
        visible: unref(isCallBackVisible),
        "onUpdate:visible": ($event) => isRef(isCallBackVisible) ? isCallBackVisible.value = $event : null,
        "service-type": "tailoring",
        title: "Записаться на пошив"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/atelie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const atelie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50f697ab"]]);

export { atelie as default };
//# sourceMappingURL=atelie-fQj5UvEg.mjs.map
