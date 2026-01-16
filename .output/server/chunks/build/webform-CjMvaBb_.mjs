import script$1 from './index-DKvodBva.mjs';
import script from './index-56hkwXh9.mjs';
import { defineComponent, ref, withCtx, createVNode, createBlock, toDisplayString, openBlock, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as __nuxt_component_0$1 } from './server.mjs';
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
import './index-xRlVhXwl.mjs';
import './index-BDpKneMc.mjs';
import '@primeuix/styles/inputtext';
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
import '@tanstack/vue-query';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "YandexMap",
  __ssrInlineRender: true,
  props: {
    center: {},
    zoom: { default: 16 },
    marker: {},
    height: { default: "600px" }
  },
  setup(__props) {
    const props = __props;
    computed(() => ({
      location: {
        center: props.center,
        zoom: props.zoom
      },
      behaviors: ["drag", "scrollZoom", "touch"]
    }));
    computed(() => ({
      minHeight: props.height,
      height: props.height
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/YandexMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const YandexMap = Object.assign(_sfc_main$1, { __name: "SharedYandexMap" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "webform",
  __ssrInlineRender: true,
  setup(__props) {
    const isSubmitted = ref(false);
    const isSubmitting = ref(false);
    const submitError = ref("");
    const form = ref({
      name: "",
      phone: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputText = script;
      const _component_Button = script$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-center items-center h-[calc(90vh-72px)]"><div class="p-[40px] bg-white rounded-[60px]">`);
      if (!isSubmitted.value) {
        _push(`<div class="w-[446px]"><div><h2 class="text-[52px] text-center"> Открытие нового пространства AMORA </h2><p class="text-[14px] text-center mt-[16px] uppercase"> Пройдите регистрацию на мини-лекцию со стилистом в ателье Amora </p></div><form class="flex flex-col gap-[20px] mt-[32px]">`);
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: form.value.name,
          "onUpdate:modelValue": ($event) => form.value.name = $event,
          placeholder: "ИМЯ ФАМИЛИЯ",
          class: "w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
        }, null, _parent));
        _push(ssrRenderComponent(_component_InputText, {
          modelValue: form.value.phone,
          "onUpdate:modelValue": ($event) => form.value.phone = $event,
          placeholder: "+998  00 000 00 00",
          class: "w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
        }, null, _parent));
        if (submitError.value) {
          _push(`<p class="text-sm text-[#C16371]">${ssrInterpolate(submitError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Button, {
          type: "submit",
          class: "w-full mt-[24px] !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2 disabled:opacity-60",
          disabled: isSubmitting.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(isSubmitting.value ? "ОТПРАВКА…" : "ОТПРАВИТЬ")}</span><svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M0 10L36 10" stroke="white"${_scopeId}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="white"${_scopeId}></path></svg>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(isSubmitting.value ? "ОТПРАВКА…" : "ОТПРАВИТЬ"), 1),
                (openBlock(), createBlock("svg", {
                  width: "36",
                  height: "20",
                  viewBox: "0 0 36 20",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createVNode("path", {
                    d: "M0 10L36 10",
                    stroke: "white"
                  }),
                  createVNode("path", {
                    d: "M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20",
                    stroke: "white"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form></div>`);
      } else {
        _push(`<div class="text-center w-[446px]"><div class="flex justify-center mb-6"><svg width="80" height="57" viewBox="0 0 80 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2668 56.3342L0 29.0674L3.60108 25.4663L27.2668 49.1321L76.3989 0L80 3.60108L27.2668 56.3342Z" fill="#C16371"></path></svg></div><h2 class="text-[52px]">Ваша заявка принята.</h2><p class="mt-4 text-[14px] leading-relaxed"> Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда </p><div class="flex justify-center items-center gap-4 my-6"><div class="bg-black rounded-[100px] p-[10px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4985 6.18725C23.2225 5.14794 22.4093 4.32945 21.3766 4.05162C19.505 3.54687 12 3.54688 12 3.54688C12 3.54688 4.49498 3.54687 2.62336 4.05162C1.59075 4.32941 0.777516 5.14794 0.501516 6.18725C0 8.07106 0 12.0014 0 12.0014C0 12.0014 0 15.9318 0.501516 17.8156C0.777516 18.8549 1.59075 19.6734 2.62336 19.9513C4.49498 20.456 12 20.456 12 20.456C12 20.456 19.505 20.456 21.3766 19.9513C22.4093 19.6734 23.2225 18.8549 23.4985 17.8156C24 15.9318 24 12.0014 24 12.0014C24 12.0014 24 8.07106 23.4985 6.18725Z" fill="white"></path><path d="M9.54688 15.5667L15.8196 11.9983L9.54688 8.42969V15.5667Z" fill="#0F0F0F"></path></svg></div><div class="bg-black rounded-[100px] p-[10px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.4678 2.74065C18.4598 3.98625 5.56296 9.32841 1.99944 10.7845C-0.390483 11.7171 1.00848 12.5914 1.00848 12.5914C1.00848 12.5914 3.04848 13.2908 4.79712 13.8154C6.54576 14.3401 7.4784 13.7571 7.4784 13.7571L15.697 8.21961C18.6113 6.23793 17.9119 7.86993 17.2126 8.56929C15.697 10.0849 13.1906 12.4746 11.0923 14.3982C10.1597 15.2142 10.626 15.9138 11.034 16.2634C12.5496 17.5458 16.6879 20.1687 16.9212 20.3437C18.1526 21.2154 20.5747 22.4703 20.9431 19.819L22.4004 10.6678C22.8667 7.57857 23.333 4.72233 23.3914 3.90633C23.5661 1.92465 21.4678 2.74065 21.4678 2.74065Z" fill="white"></path></svg></div><div class="bg-black rounded-[100px] p-[10px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM17.35 7.62C16.8 7.62 16.35 7.17 16.35 6.62C16.35 6.07 16.8 5.62 17.35 5.62C17.9 5.62 18.35 6.07 18.35 6.62C18.35 7.17 17.9 7.62 17.35 7.62Z" fill="white"></path><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"></path></svg></div></div><p class="mt-6 text-[12px] uppercase leading-relaxed"> на бутик можно найти по адресу: </p><p class="mt-2 text-[12px] uppercase leading-relaxed"> ул. Исмаилата, 16А </p></div>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(YandexMap, {
        center: [41.334608, 69.323384],
        zoom: 17,
        marker: {
          coordinates: [41.334608, 69.323384],
          hint: "Бутик AMORA",
          description: "ул. Исмаилата, 16А"
        },
        height: "560px",
        class: "rounded-[40px]"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webform.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=webform-CjMvaBb_.mjs.map
