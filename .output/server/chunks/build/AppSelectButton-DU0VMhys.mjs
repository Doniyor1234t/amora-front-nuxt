import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSelectButton",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: { default: () => [
      { label: "UZ", value: "uz" },
      { label: "RU", value: "ru" }
    ] }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center rounded-full border p-[1px] border-[#dedede] bg-white text-[11px] font-regular select-none" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<button type="button" class="${ssrRenderClass([[
          __props.modelValue === option.value ? "bg-[#E8E7E6] text-black shadow-sm" : "bg-transparent text-[#c0c0c0]"
        ], "flex-1 rounded-full h-[28px] px-[9.5px] max-sm:h-[36px] max-sm:px-[9px] text-center transition-all duration-150 cursor-pointer text-sm"])}">${ssrInterpolate(option.label)}</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AppSelectButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppSelectButton = Object.assign(_sfc_main, { __name: "UiAppSelectButton" });

export { AppSelectButton as A };
//# sourceMappingURL=AppSelectButton-DU0VMhys.mjs.map
