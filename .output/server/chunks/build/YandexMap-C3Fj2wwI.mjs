import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/YandexMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YandexMap = Object.assign(_sfc_main, { __name: "SharedYandexMap" });

export { YandexMap as Y };
//# sourceMappingURL=YandexMap-C3Fj2wwI.mjs.map
