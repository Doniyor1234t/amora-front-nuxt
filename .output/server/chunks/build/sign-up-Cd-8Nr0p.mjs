import __nuxt_component_1 from './index-DqgBJCIA.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DHonv4x8.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import 'axios';
import '@tanstack/vue-query';
import './composables-B5CMdwHf.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const inputClass = "w-full rounded-[80px] border border-[#CFCFCF] bg-transparent px-[28px] py-[14px] text-[14px] tracking-[0.02em] text-[#0F0F0F] placeholder:text-[#0F0F0F] focus:border-[#0F0F0F] focus:outline-none";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sign-up",
  __ssrInlineRender: true,
  setup(__props) {
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const subscribeNews = ref(true);
    const acceptPrivacy = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center bg-[#F7F6F4] px-4 py-10 min-h-[calc(100vh-72px)]" }, _attrs))}><div class="w-full max-w-[526px] rounded-[60px] bg-white px-[40px] py-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] max-md:px-[40px] max-sm:px-[28px]"><div class="text-center"><h1 class="font-[masvol] text-[52px] leading-none text-[#0F0F0F] max-sm:text-[44px]"> Регистрация </h1></div><form class="mt-[32px] space-y-[20px]"><label class="block"><span class="sr-only">Имя и фамилия</span><input type="text" placeholder="ИМЯ ФАМИЛИЯ" class="${ssrRenderClass(inputClass)}"></label><label class="block"><span class="sr-only">Номер телефона</span><input type="tel" placeholder="+998  00 000 00 00" class="${ssrRenderClass(inputClass)}"></label><label class="block"><span class="sr-only">Пароль</span><div class="relative"><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="ПАРОЛЬ" class="${ssrRenderClass(inputClass)}"><button type="button" class="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#0F0F0F] transition hover:text-[#4C4C4C]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: showPassword.value ? "ph:eye-slash" : "ph:eye",
        size: "22"
      }, null, _parent));
      _push(`</button></div></label><label class="block"><span class="sr-only">Подтверждение пароля</span><div class="relative"><input${ssrRenderAttr("type", showConfirmPassword.value ? "text" : "password")} placeholder="ПОДТВЕРЖДЕНИЕ ПАРОЛЯ" class="${ssrRenderClass(inputClass)}"><button type="button" class="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#0F0F0F] transition hover:text-[#4C4C4C]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: showConfirmPassword.value ? "ph:eye-slash" : "ph:eye",
        size: "22"
      }, null, _parent));
      _push(`</button></div></label><div class="space-y-[14px] pt-[8px] text-[14px] text-[#0F0F0F]"><label class="flex items-center gap-[12px] leading-[1.4] tracking-[0.02em]"><input${ssrIncludeBooleanAttr(Array.isArray(subscribeNews.value) ? ssrLooseContain(subscribeNews.value, null) : subscribeNews.value) ? " checked" : ""} type="checkbox" class="mt-[2px] h-[20px] w-[20px] p-[4px] shrink-0 cursor-pointer rounded-[6px] border border-[#0F0F0F] bg-white accent-[#0F0F0F]"><span class="uppercase text-[12px]">Получать новости AMORA и приглашения на события</span></label><label class="flex items-center gap-[12px] leading-[1.4] tracking-[0.02em] text-[#5A5A5A]"><input${ssrIncludeBooleanAttr(Array.isArray(acceptPrivacy.value) ? ssrLooseContain(acceptPrivacy.value, null) : acceptPrivacy.value) ? " checked" : ""} type="checkbox" class="mt-[2px] h-[20px] w-[20px] shrink-0 cursor-pointer rounded-[6px] border border-[#BBBBBB] bg-white accent-[#0F0F0F]"><span class="uppercase text-[12px]"> Регистрируясь, вы соглашаетесь с политикой конфиденциальности </span></label></div><button type="submit" class="mt-[22px] w-full rounded-[80px] bg-[#0F0F0F] py-[16px] text-[14px] font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#2B2B2B]"> Создать аккаунт </button></form><p class="mt-[28px] text-center text-[14px] uppercase tracking-[0.08em] text-[#0F0F0F]"> Уже есть аккаунт? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth",
        class: "underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Войти`);
          } else {
            return [
              createTextVNode("Войти")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/sign-up.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sign-up-Cd-8Nr0p.mjs.map
