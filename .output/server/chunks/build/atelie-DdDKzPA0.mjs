import __nuxt_component_1 from './index-BLRKJ3sv.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-BNGPMVI8.mjs';
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
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'axios';
import '@tanstack/vue-query';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "atelie",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        title: "Идеальная посадка",
        description: "Лекала строятся индивидуально под ваши мерки и желания.",
        icon: "ri:ruler-line"
      },
      {
        title: "Эксклюзивный дизайн",
        description: "Возможность создать уникальную вещь, которой не будет ни у кого.",
        icon: "ri:sparkling-2-line"
      },
      {
        title: "Безупречное качество",
        description: "Ручная работа, премиальная обработка, шёлк и витонченность.",
        icon: "ri:scissors-2-line"
      }
    ];
    const steps = [
      {
        title: "Режем ткани",
        description: "Тон-определение и выбор материи."
      },
      {
        title: "Примерка",
        description: "Поиск идеальной формы и силуэта."
      },
      {
        title: "Драпировка",
        description: "Сборка и формирование ткани."
      },
      {
        title: "Детали",
        description: "Съёмка всех швов и оформление."
      },
      {
        title: "Готово",
        description: "Ваш уникальный образ."
      }
    ];
    const faqs = [
      {
        question: "Сколько времени занимает пошив?",
        answer: "Сроки пошива зависят от сложности изделия и загруженности ателье. В среднем процесс длится от 2 до 4 недель, однако мы всегда согласуем желаемые сроки лично."
      },
      {
        question: "Как формируется стоимость?",
        answer: "Стоимость складывается из сложности работы, лекал, технологии обработки и стоимости материалов. На очной встрече мы можем назвать точную конечную сумму."
      },
      {
        question: "Можно ли принести свою ткань?",
        answer: "Да, мы работаем как с нашими материалами, так и с тканью заказчика. Наш специалист предложит лучшее решение и подберёт ткань из внутренней коллекции при необходимости."
      },
      {
        question: "Сколько примерок потребуется?",
        answer: "Обычно требуется 2-3 примерки. Первая для макета, вторая для изделия в ткани и финальная перед выдачей. Мы подстраиваемся под ваш график и можем проводить примерки онлайн."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F6F5F2] pb-20 pt-[104px]" }, _attrs))} data-v-643a5f2b><section class="container mx-auto px-4" data-v-643a5f2b><div class="rounded-[60px] bg-white px-[48px] py-[80px] text-center shadow-[0_45px_120px_rgba(0,0,0,0.08)] max-md:px-[32px]" data-v-643a5f2b><p class="text-xs uppercase tracking-[0.4em] text-[#7F7C77]" data-v-643a5f2b> • Ателье AMORA • </p><h1 class="mt-4 font-[masvol] text-[72px] leading-tight text-[#0F0F0F] max-md:text-[52px]" data-v-643a5f2b> Индивидуальный пошив </h1><p class="mx-auto mt-4 max-w-[520px] text-sm uppercase tracking-[0.2em] text-[#7F7C77]" data-v-643a5f2b> Создаём вещи, отражающие ваш характер и мечты. </p><button type="button" class="mt-10 rounded-[36px] border border-[#0F0F0F] px-[40px] py-[16px] text-[13px] uppercase tracking-[0.25em] text-[#0F0F0F] transition hover:bg-[#0F0F0F] hover:text-white" data-v-643a5f2b> Записаться на консультацию </button></div></section><section class="container mx-auto mt-24 px-4" data-v-643a5f2b><div class="text-center" data-v-643a5f2b><h2 class="mt-3 font-[masvol] text-[56px] text-[#0F0F0F]" data-v-643a5f2b>Искусство быть собой</h2><p class="mx-auto mt-5 max-w-[560px] text-sm uppercase tracking-[0.2em] text-[#7F7C77]" data-v-643a5f2b> Индивидуальный пошив в AMORA — это не просто создание одежды, это процесс воплощения вашей индивидуальности в ткани. </p></div><div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" data-v-643a5f2b><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="rounded-[40px] bg-white px-[40px] h-[320px] py-[48px] text-center shadow-[0_25px_60px_rgba(0,0,0,0.05)] flex flex-col items-center justify-between" data-v-643a5f2b><div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#0F0F0F]" data-v-643a5f2b>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: feature.icon,
          size: "28",
          class: "text-[#0F0F0F]"
        }, null, _parent));
        _push(`</div><div class="" data-v-643a5f2b><h3 class="mt-6 text-lg font-semibold uppercase tracking-[0.15em] text-[#0F0F0F]" data-v-643a5f2b>${ssrInterpolate(feature.title)}</h3><p class="mt-3 text-sm text-[#7F7C77]" data-v-643a5f2b>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="container mx-auto mt-24 flex flex-col gap-12 px-4 lg:flex-row" data-v-643a5f2b><div class="lg:w-1/3" data-v-643a5f2b><p class="text-xs uppercase tracking-[0.02em] text-[#7F7C77]" data-v-643a5f2b>• Процесс пошива •</p><h3 class="mt-4 font-[masvol] text-[48px] leading-snug text-[#0F0F0F]" data-v-643a5f2b> История каждого изделия начинается с рук мастера. </h3></div><div class="lg:w-2/3 space-y-4" data-v-643a5f2b><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="flex font-[masvol] items-center gap-8 rounded-[32px] bg-white px-10 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]" data-v-643a5f2b><div class="text-[52px] w-[72px] text-center font-[0] text-[#0F0F0F]" data-v-643a5f2b>${ssrInterpolate(index + 1)}</div><div data-v-643a5f2b><p class="text-lg font-semibold uppercase tracking-[0.2em] text-[#0F0F0F]" data-v-643a5f2b>${ssrInterpolate(step.title)}</p><p class="mt-1 text-sm text-[#7A7874]" data-v-643a5f2b>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="container mx-auto mt-24 px-4" data-v-643a5f2b><div class="rounded-[60px] bg-[#0F0F0F] px-[48px] py-[72px] text-center text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] max-md:px-[32px]" data-v-643a5f2b><h3 class="mt-6 font-[masvol] text-[52px] leading-tight" data-v-643a5f2b>Готовы создать мечту?</h3><p class="mx-auto mt-4 max-w-[520px] text-sm uppercase tracking-[0.2em] text-[#D0CDC6]" data-v-643a5f2b> Запишитесь на бесплатную консультацию со стилистом, чтобы обсудить ваши желания и мечты. </p><button type="button" class="mx-auto mt-10 rounded-[36px] border border-white px-[40px] py-[16px] text-[13px] uppercase tracking-[0.25em] transition hover:bg-white hover:text-[#0F0F0F]" data-v-643a5f2b> Записаться сейчас </button></div></section><section class="container flex flex-col items-center mx-auto mt-24 px-4" data-v-643a5f2b><div class="text-center" data-v-643a5f2b><h3 class="font-[masvol] text-[48px] text-[#0F0F0F]" data-v-643a5f2b>Вопросы и ответы</h3></div><div class="mt-12 w-[910px] space-y-4" data-v-643a5f2b><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(`<details class="rounded-[28px] bg-white px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.05)]" data-v-643a5f2b><summary class="flex text-[24px] font-zero font-[masvol] cursor-pointer items-center justify-between text-left text-lg text-[#0F0F0F]" data-v-643a5f2b>${ssrInterpolate(faq.question)} <span class="faq-toggle ml-4 text-2xl transition-transform duration-200" data-v-643a5f2b>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ph:arrow-up",
          size: "24"
        }, null, _parent));
        _push(`</span></summary><p class="mt-4 font-[masvol] text-sm text-[#7A7874]" data-v-643a5f2b>${ssrInterpolate(faq.answer)}</p></details>`);
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/atelie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const atelie = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-643a5f2b"]]);

export { atelie as default };
//# sourceMappingURL=atelie-DdDKzPA0.mjs.map
