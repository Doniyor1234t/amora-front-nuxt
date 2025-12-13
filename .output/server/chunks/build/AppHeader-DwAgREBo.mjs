import __nuxt_component_1 from './index-BLRKJ3sv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DF-6KpEG.mjs';
import script$1 from './index-DKvodBva.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { A as AppSelectButton } from './AppSelectButton-DU0VMhys.mjs';
import script from './index-CgoId9M7.mjs';
import { u as useRoute } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(
      "UZ"
      /* UZ */
    );
    const options = ref([
      {
        label: "UZ",
        value: "UZ"
        /* UZ */
      },
      {
        label: "RU",
        value: "RU"
        /* RU */
      }
    ]);
    const visible = ref(false);
    const route = useRoute();
    watch(
      () => route.fullPath,
      () => {
        visible.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script$1;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full z-10 bg-white" }, _attrs))}><div class="container flex h-[72px] items-center max-sm:h-[60px]">`);
      _push(ssrRenderComponent(unref(script), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        class: "!w-[45%] max-sm:!w-[100%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-sm:w-full max-sm:flex max-sm:justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(AppSelectButton, {
              modelValue: value.value,
              "onUpdate:modelValue": ($event) => value.value = $event,
              options: options.value,
              class: "md:!hidden"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              variant: "text",
              severity: "secondary",
              class: "md:!hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "app-icon:user",
                    mode: "svg",
                    color: "#0F0F0F",
                    height: "24px",
                    class: "md:!hidden"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "app-icon:user",
                      mode: "svg",
                      color: "#0F0F0F",
                      height: "24px",
                      class: "md:!hidden"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              variant: "text",
              severity: "secondary",
              class: "md:!hidden"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "app-icon:heart-outlined",
                    mode: "svg",
                    color: "#0F0F0F",
                    height: "24px",
                    class: "md:!hidden"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p class="text-sm text-[#0F0F0F] md:!hidden"${_scopeId2}>0</p>`);
                } else {
                  return [
                    createVNode(_component_Icon, {
                      name: "app-icon:heart-outlined",
                      mode: "svg",
                      color: "#0F0F0F",
                      height: "24px",
                      class: "md:!hidden"
                    }),
                    createVNode("p", { class: "text-sm text-[#0F0F0F] md:!hidden" }, "0")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col gap-2 w-full h-full justify-center gap-9 max-sm:gap-4 max-sm:justify-start"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/catalog",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Каталог`);
                } else {
                  return [
                    createTextVNode("Каталог")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/collections",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Коллекции`);
                } else {
                  return [
                    createTextVNode("Коллекции")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/atelie",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Ателье AMORA`);
                } else {
                  return [
                    createTextVNode("Ателье AMORA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/school",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Школа G.T. Factory`);
                } else {
                  return [
                    createTextVNode("Школа G.T. Factory")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/brand",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`О бренде`);
                } else {
                  return [
                    createTextVNode("О бренде")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/contacts",
              class: "font-[masvol] text-[52px] max-sm:text-[34px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Контакты`);
                } else {
                  return [
                    createTextVNode("Контакты")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-sm:w-full max-sm:flex max-sm:justify-between" }, [
                createVNode(AppSelectButton, {
                  modelValue: value.value,
                  "onUpdate:modelValue": ($event) => value.value = $event,
                  options: options.value,
                  class: "md:!hidden"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                createVNode(_component_Button, {
                  variant: "text",
                  severity: "secondary",
                  class: "md:!hidden"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "app-icon:user",
                      mode: "svg",
                      color: "#0F0F0F",
                      height: "24px",
                      class: "md:!hidden"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_Button, {
                  variant: "text",
                  severity: "secondary",
                  class: "md:!hidden"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Icon, {
                      name: "app-icon:heart-outlined",
                      mode: "svg",
                      color: "#0F0F0F",
                      height: "24px",
                      class: "md:!hidden"
                    }),
                    createVNode("p", { class: "text-sm text-[#0F0F0F] md:!hidden" }, "0")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-col gap-2 w-full h-full justify-center gap-9 max-sm:gap-4 max-sm:justify-start" }, [
                createVNode(_component_NuxtLink, {
                  to: "/catalog",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Каталог")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/collections",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Коллекции")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/atelie",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Ателье AMORA")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/school",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Школа G.T. Factory")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/brand",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("О бренде")
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtLink, {
                  to: "/contacts",
                  class: "font-[masvol] text-[52px] max-sm:text-[34px]"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Контакты")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "text",
        severity: "secondary",
        class: "mr-[25px] shrink-0",
        onClick: ($event) => visible.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "app-icon:menu-hamburger",
              mode: "svg",
              color: "#3F3F46",
              width: "40px",
              height: "32px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "app-icon:menu-hamburger",
                mode: "svg",
                color: "#3F3F46",
                width: "40px",
                height: "32px"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(AppSelectButton, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event,
        options: options.value,
        class: "max-sm:!hidden"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mx-auto max-sm:pr-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "app-icon:logo",
              mode: "svg",
              color: "#3F3F46",
              height: "56px",
              class: "max-sm:h-[40px]"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "app-icon:logo",
                mode: "svg",
                color: "#3F3F46",
                height: "56px",
                class: "max-sm:h-[40px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_Button, {
        variant: "text",
        severity: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "app-icon:loop",
              mode: "svg",
              color: "#0F0F0F",
              height: "24px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "app-icon:loop",
                mode: "svg",
                color: "#0F0F0F",
                height: "24px"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "text",
        severity: "secondary",
        class: "max-sm:!hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "app-icon:user",
              mode: "svg",
              color: "#0F0F0F",
              height: "24px",
              class: "max-sm:hidden"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "app-icon:user",
                mode: "svg",
                color: "#0F0F0F",
                height: "24px",
                class: "max-sm:hidden"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        variant: "text",
        severity: "secondary",
        class: "max-sm:!hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "app-icon:heart-outlined",
              mode: "svg",
              color: "#0F0F0F",
              height: "24px",
              class: "max-sm:hidden"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-[#0F0F0F] max-sm:hidden"${_scopeId}>0</p>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "app-icon:heart-outlined",
                mode: "svg",
                color: "#0F0F0F",
                height: "24px",
                class: "max-sm:hidden"
              }),
              createVNode("p", { class: "text-sm text-[#0F0F0F] max-sm:hidden" }, "0")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppHeader = Object.assign(_sfc_main, { __name: "LayoutAppHeader" });

export { AppHeader as A };
//# sourceMappingURL=AppHeader-DwAgREBo.mjs.map
