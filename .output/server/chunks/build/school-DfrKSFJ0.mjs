import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AppCallBackModal } from './AppCallBackModal-BPIwsley.mjs';
import './nuxt-link-DHonv4x8.mjs';
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
import './server.mjs';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@iconify/vue';
import 'axios';
import '@tanstack/vue-query';
import './index-DR-npUW2.mjs';
import '@iconify/utils/lib/css/icon';
import './composables-B5CMdwHf.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';
import './index-56hkwXh9.mjs';
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import './index-DI7ROuCk.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "school",
  __ssrInlineRender: true,
  setup(__props) {
    const isCallBackVisible = ref(false);
    const hero = {
      image: "https://cms.amora-brand.uz/uploads/2_Banner_18ee12192d.png"
    };
    const courses = [
      {
        title: "Конструирование и моделирование",
        description: [
          "Полный цикл создания изделий: от эскиза до посадки по фигуре.",
          "Изучение премиальной обработки, авторских техник и построения сложных форм.",
          "Практика на базе Ателье AMORA с реальными тканями.",
          "Подходит для будущих дизайнеров и владельцев брендов."
        ],
        note: "Подходит для будущих дизайнеров и владельцев брендов.",
        imageDesktop: "https://cms.amora-brand.uz/uploads/Image_89b9b69e47.png",
        imageMobile: "https://cms.amora-brand.uz/uploads/Image_2_c052a9824e.png"
      },
      {
        title: "Gerber - цифровое моделирование",
        description: [
          "Быстрое и точное создание лекал в профессиональной среде Gerber.",
          "Моделирование, градация размеров, оптимизация производства.",
          "Полный разбор инструментария с нуля до PRO.",
          "Для технологов, конструкторов и тех, кто хочет открыть свое производство."
        ],
        note: "Полный разбор инструментов с нуля до PRO. Для технологов, конструкторов и тех, кто хочет открыть своё производство.",
        imageDesktop: "https://cms.amora-brand.uz/uploads/Image_1_6c5e136ef3.png",
        imageMobile: "https://cms.amora-brand.uz/uploads/Image_3_b504b9e40c.png"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-[#FBFAF9] text-[#1F1B16]"><section class="relative isolate flex min-h-[100vh] w-full items-end overflow-hidden bg-black/40"><img${ssrRenderAttr("src", hero.image)} alt="G.T. Factory" class="absolute inset-0 h-full w-full object-cover"></section><!--[-->`);
      ssrRenderList(courses, (course, index) => {
        _push(`<section class="mx-auto grid gap-0 lg:grid-cols-2"><div class="${ssrRenderClass([
          "order-2 flex flex-col justify-center items-center bg-[#FBFAF9] max-md:py-[64px] max-md:px-[16px] text-center lg:px-16 lg:py-20 lg:text-left",
          index % 2 === 0 ? "lg:order-1 max-md:order-1" : "lg:order-2 max-md:order-1"
        ])}"><h2 class="mt-6 text-[48px] text-center leading-tight text-[#0F0F0F] max-md:text-[32px]">${ssrInterpolate(course.title)}</h2><div class="mt-6 space-y-4"><!--[-->`);
        ssrRenderList(course.description, (paragraph, pIndex) => {
          _push(`<p class="text-sm leading-relaxed max-md:text-[14px] text-center">${ssrInterpolate(paragraph)}</p>`);
        });
        _push(`<!--]--></div><button type="button" class="mt-8 w-fit border border-[#0F0F0F] px-10 py-3 text-[12px] uppercase tracking-[0.3em] text-[#0F0F0F] transition hover:bg-[#0F0F0F] hover:text-white lg:w-auto"> Оставить заявку </button></div><div class="${ssrRenderClass([
          "relative order-1 h-[420px] overflow-hidden lg:h-full",
          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
        ])}"><picture><source${ssrRenderAttr("srcset", course.imageMobile)} media="(max-width: 768px)"><img${ssrRenderAttr("src", course.imageDesktop)}${ssrRenderAttr("alt", course.title)} class="h-full w-full object-cover"></picture><div class="absolute inset-0 bg-black/25"></div></div></section>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(AppCallBackModal, {
        visible: isCallBackVisible.value,
        "onUpdate:visible": ($event) => isCallBackVisible.value = $event,
        "service-type": "training",
        title: "Записаться на обучение"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/school.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=school-DfrKSFJ0.mjs.map
