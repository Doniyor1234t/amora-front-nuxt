import __nuxt_component_1 from './index-D5HttfMH.mjs';
import { defineComponent, ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSelectButton",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    options: { default: () => [
      { label: "UZ", value: "uz" },
      { label: "RU", value: "ru" }
    ] },
    iconColor: { default: "#0F0F0F" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isDropdownOpen = ref(false);
    const rootRef = ref(null);
    const selectedLabel = computed(() => {
      const active = props.options.find((option) => option.value === props.modelValue);
      return active?.label ?? props.modelValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "rootRef",
        ref: rootRef,
        class: "app-select-button relative inline-flex"
      }, _attrs))} data-v-c98e26b3><button type="button" class="app-select-button__trigger" aria-haspopup="listbox"${ssrRenderAttr("aria-expanded", isDropdownOpen.value)} data-v-c98e26b3>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "app-icon:globe",
        mode: "svg",
        class: "app-select-button__icon",
        height: "24",
        width: "24",
        style: { color: props.iconColor }
      }, null, _parent));
      _push(`<span class="sr-only" data-v-c98e26b3>Выбрать язык. Сейчас: ${ssrInterpolate(selectedLabel.value)}</span></button>`);
      if (isDropdownOpen.value) {
        _push(`<div class="app-select-button__dropdown" role="listbox" data-v-c98e26b3><!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<button type="button" role="option" class="${ssrRenderClass([{ "app-select-button__option--active": __props.modelValue === option.value }, "app-select-button__option"])}" data-v-c98e26b3>${ssrInterpolate(option.label)}</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AppSelectButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppSelectButton = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-c98e26b3"]]), { __name: "UiAppSelectButton" });

export { AppSelectButton as A };
//# sourceMappingURL=AppSelectButton-DNqj-bp-.mjs.map
