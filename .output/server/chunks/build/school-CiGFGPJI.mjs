import script from './index-DKvodBva.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createTextVNode, createBlock, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-UkdBiBMI.mjs';
import './index-DxKIPVaB.mjs';
import './index-DI7ROuCk.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import './server.mjs';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@iconify/vue';
import 'axios';
import '@tanstack/vue-query';
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
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import './index-I6kJA5l7.mjs';
import './index-BVmCEVFM.mjs';
import './index-DA3RQQMs.mjs';
import '@primeuix/utils/uuid';

const _imports_0 = publicAssetsURL("/images/Request-bg-1.png");
const _imports_1 = publicAssetsURL("/images/Request-bg-2.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "school",
  __ssrInlineRender: true,
  setup(__props) {
    const isCallBackVisible = ref(false);
    const hero = {
      badge: "C.T. Factory",
      title: "Школа дизайна",
      description: "Освойте профессию дизайнера одежды и создавайте уникальные коллекции под руководством экспертов.",
      cta: "Выбрать курс"
    };
    const courses = [
      {
        badge: "Конструирование и моделирование",
        title: "Art of Fashion",
        description: "Полный цикл создания изделия: от эскиза до посадки по фигуре. Изучение премиальной обработки, авторских техник и построения сложных форм. Практика на базе ателье AMORA с реальными тканями.",
        note: "Подходит для будущих дизайнеров и владельцев брендов.",
        button: "Оставить заявку",
        image: "/images/Collection-bg-3.jpg"
      },
      {
        badge: "Gerber цифровое моделирование",
        title: "Digital Fashion",
        description: "Быстрое и точное создание лекал в профессиональной среде Gerber. Моделирование, градация размеров, оптимизация производства.",
        note: "Полный разбор инструментов с нуля до Pro. Для технологов, конструкторов и тех, кто хочет открыть своё производство.",
        button: "Оставить заявку",
        image: "/images/Collection-bg-2.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_AppCallBackModal = resolveComponent("AppCallBackModal");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#F6F4F1] pb-20 pt-[88px] text-[#1F1B16]" }, _attrs))}><section class="container mx-auto px-4"><div class="rounded-[60px] bg-white px-6 py-67 text-center shadow-[0_40px_120px_rgba(35,31,27,0.08)]"><p class="text-xs uppercase tracking-[0.5em] text-[#C79D9B]">• ${ssrInterpolate(hero.badge)} •</p><h1 class="mt-6 font-[masvol] text-[68px] text-[#1F1B16] max-md:text-[48px]">${ssrInterpolate(hero.title)}</h1><p class="mx-auto mt-4 max-w-3xl text-sm uppercase tracking-[0.2em] text-[#8F8982]">${ssrInterpolate(hero.description)}</p><button type="button" class="mx-auto mt-8 inline-flex items-center gap-3 rounded-[80px] border border-[#1F1B16] px-10 py-3 text-[12px] tracking-[0.3em] text-[#1F1B16] transition hover:bg-[#1F1B16] hover:text-white">${ssrInterpolate(hero.cta)} <span class="text-lg">→</span></button></div></section><!--[-->`);
      ssrRenderList(courses.slice(0, 1), (value) => {
        _push(`<div class="grid mt-[64px] grid-cols-2 max-sm:mt-[300px] max-sm:grid-cols-1"><div class="flex justify-center items-center"><div class="flex flex-col items-center max-w-[440px]"><h4 class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px]"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg> ${ssrInterpolate(value.badge)} <svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></h4><h2 class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]">${ssrInterpolate(value.title)}</h2><p>${ssrInterpolate(value.description)}</p>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6",
          variant: "outlined",
          severity: "secondary",
          onClick: ($event) => isCallBackVisible.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ПОДРОБНЕЕ <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 10L36 10" stroke="#0F0F0F"${_scopeId}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="#0F0F0F"${_scopeId}></path></svg>`);
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
                    stroke: "#0F0F0F"
                  }),
                  createVNode("path", {
                    d: "M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20",
                    stroke: "#0F0F0F"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_AppCallBackModal, {
          visible: isCallBackVisible.value,
          "onUpdate:visible": ($event) => isCallBackVisible.value = $event,
          "service-type": "training",
          title: "Записаться на обучение"
        }, null, _parent));
        _push(`</div></div><div class="relative"><img${ssrRenderAttr("src", _imports_0)} class="w-full max-h-[100vh] object-cover object-top" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(courses.slice(1, 2), (value) => {
        _push(`<div class="grid grid-cols-2 max-sm:grid-cols-1"><div class="relative"><img${ssrRenderAttr("src", _imports_1)} class="w-full max-h-[100vh] object-cover object-top" alt=""><div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div></div><div class="flex justify-center items-center"><div class="flex flex-col items-center max-w-[440px]"><h4 class="text-[#0F0F0F] text-[14px] flex items-center gap-2 mb-[12px] max-sm:mt-6"><svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg> ${ssrInterpolate(value.badge)} <svg width="6" height="6" class="shrink-0" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.59814 0L3.17109 2.00762L5.19622 1.5L3.74404 3L5.19622 4.5L3.17109 3.99238L2.59814 6L2.0252 3.99238L6.84261e-05 4.5L1.45225 3L6.84261e-05 1.5L2.0252 2.00762L2.59814 0Z" fill="#C16371"></path></svg></h4><h2 class="text-[#0F0F0F] text-[52px] text-center pb-[24px] font-[masvol] max-sm:text-[34px]">${ssrInterpolate(value.title)}</h2><p>${ssrInterpolate(value.description)}</p>`);
        _push(ssrRenderComponent(_component_Button, {
          class: "!rounded-[80px] !text-[#0F0F0F] !px-[28px] h-[44px] mt-5 max-sm:mb-6",
          variant: "outlined",
          severity: "secondary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ПОДРОБНЕЕ <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 10L36 10" stroke="#0F0F0F"${_scopeId}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="#0F0F0F"${_scopeId}></path></svg>`);
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
                    stroke: "#0F0F0F"
                  }),
                  createVNode("path", {
                    d: "M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20",
                    stroke: "#0F0F0F"
                  })
                ]))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
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
//# sourceMappingURL=school-CiGFGPJI.mjs.map
