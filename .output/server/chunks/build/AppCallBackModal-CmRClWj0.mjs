import { _ as __nuxt_component_0 } from './nuxt-link-B5t6I5Wz.mjs';
import __nuxt_component_1 from './index-DlB9AjWU.mjs';
import script$1 from './index-DKvodBva.mjs';
import script from './index-Beuqix8B.mjs';
import { defineComponent, mergeModels, useModel, reactive, ref, computed, watch, withCtx, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const DEFAULT_COUNTRY_ISO = "uz";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppCallBackModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    serviceType: { default: "general" },
    metadata: { default: () => ({}) },
    title: { default: "Оставить заявку" }
  }, {
    "visible": { type: Boolean, ...{ default: false } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const props = __props;
    const visible = useModel(__props, "visible");
    const PHONE_GROUPS = [2, 3, 2, 2];
    const form = reactive({
      name: "",
      phone: "",
      countryCode: DEFAULT_COUNTRY_ISO,
      telegram: "",
      contactMethod: "",
      comment: "",
      size: "",
      format: "",
      level: ""
    });
    ref(false);
    const isSubmitted = ref(false);
    const submitError = ref("");
    const toast = reactive({
      visible: false,
      type: "success",
      message: ""
    });
    computed(() => props.serviceType === "tailoring");
    computed(() => props.serviceType === "collection");
    computed(() => props.serviceType === "training");
    const resetForm = () => {
      form.name = "";
      form.phone = "";
      form.countryCode = DEFAULT_COUNTRY_ISO;
      form.telegram = "";
      form.contactMethod = "";
      form.comment = "";
      form.size = props.metadata?.product?.size ? String(props.metadata.product.size) : "";
      form.format = "";
      form.level = "";
      isSubmitted.value = false;
      submitError.value = "";
    };
    const closeDialog = () => {
      visible.value = false;
    };
    watch(
      () => visible.value,
      (open) => {
        if (!open) {
          resetForm();
        }
      }
    );
    watch(
      () => props.metadata?.product?.size,
      (size) => {
        if (size && !form.size) {
          form.size = String(size);
        }
      },
      { immediate: true }
    );
    const formatLocalPhoneNumber = (value) => {
      const digits = (value ?? "").replace(/\D/g, "").slice(0, 9);
      if (!digits) {
        return "";
      }
      const parts = [];
      let index = 0;
      for (const groupLength of PHONE_GROUPS) {
        const part = digits.slice(index, index + groupLength);
        if (part) {
          parts.push(part);
        }
        index += groupLength;
        if (index >= digits.length) {
          break;
        }
      }
      return parts.join(" ");
    };
    computed({
      get: () => form.phone,
      set: (value) => {
        form.phone = formatLocalPhoneNumber(value);
      }
    });
    const socials = [
      {
        name: "youtube",
        url: "https://www.youtube.com/@brandAmora"
      },
      {
        name: "telegram",
        url: "https://t.me/brandamora"
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/brand.amora/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = script$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        modal: true,
        dismissableMask: true,
        closable: false,
        showHeader: false,
        draggable: false,
        class: "!rounded-[10px] !p-[40px] max-sm:p-[20px]! max-sm:w-[90%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]" data-v-a7ed7b40${_scopeId}>`);
            {
              _push2(`<div class="text-center space-y-5 py-4" data-v-a7ed7b40${_scopeId}><div class="flex flex-col items-center gap-4" data-v-a7ed7b40${_scopeId}><svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a7ed7b40${_scopeId}><path d="M16 18L21.3333 23.3333L32 12.6666" stroke="#C16371" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-a7ed7b40${_scopeId}></path></svg><div class="flex flex-col gap-2" data-v-a7ed7b40${_scopeId}><h3 class="text-[40px] max-md:text-[32px] font-[masvol] text-[#0F0F0F]" data-v-a7ed7b40${_scopeId}> Ваша заявка принята. </h3><p class="text-xs max-md:text-[12px] tracking-[0.08em] leading-[18px] font-light text-[#6E6E6E]" data-v-a7ed7b40${_scopeId}> Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда </p></div></div><div class="flex items-center justify-center gap-4 text-white text-sm" data-v-a7ed7b40${_scopeId}><!--[-->`);
              ssrRenderList(socials, (social) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: social.name,
                  href: social.url,
                  class: "flex h-11 w-11 items-center justify-center rounded-full bg-black"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: `app-icon:${social.name}`,
                        color: "#ffffff",
                        size: 20
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: `app-icon:${social.name}`,
                          color: "#ffffff",
                          size: 20
                        }, null, 8, ["name"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="text-[12px] tracking-[0.05em] text-[#6E6E6E]" data-v-a7ed7b40${_scopeId}><p class="mb-2" data-v-a7ed7b40${_scopeId}>Наш бутик можно найти по адресу:</p><p data-v-a7ed7b40${_scopeId}>ул. Исмаилата, 16А</p></div>`);
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                class: "w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white",
                onClick: closeDialog
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Закрыть `);
                  } else {
                    return [
                      createTextVNode(" Закрыть ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]" }, [
                (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center space-y-5 py-4"
                }, [
                  createVNode("div", { class: "flex flex-col items-center gap-4" }, [
                    (openBlock(), createBlock("svg", {
                      width: "48",
                      height: "36",
                      viewBox: "0 0 48 36",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg"
                    }, [
                      createVNode("path", {
                        d: "M16 18L21.3333 23.3333L32 12.6666",
                        stroke: "#C16371",
                        "stroke-width": "3",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      })
                    ])),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("h3", { class: "text-[40px] max-md:text-[32px] font-[masvol] text-[#0F0F0F]" }, " Ваша заявка принята. "),
                      createVNode("p", { class: "text-xs max-md:text-[12px] tracking-[0.08em] leading-[18px] font-light text-[#6E6E6E]" }, " Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда ")
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center justify-center gap-4 text-white text-sm" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(socials, (social) => {
                      return createVNode(_component_NuxtLink, {
                        key: social.name,
                        href: social.url,
                        class: "flex h-11 w-11 items-center justify-center rounded-full bg-black"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: `app-icon:${social.name}`,
                            color: "#ffffff",
                            size: 20
                          }, null, 8, ["name"])
                        ]),
                        _: 2
                      }, 1032, ["href"]);
                    }), 64))
                  ]),
                  createVNode("div", { class: "text-[12px] tracking-[0.05em] text-[#6E6E6E]" }, [
                    createVNode("p", { class: "mb-2" }, "Наш бутик можно найти по адресу:"),
                    createVNode("p", null, "ул. Исмаилата, 16А")
                  ]),
                  createVNode(_component_Button, {
                    type: "button",
                    class: "w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white",
                    onClick: closeDialog
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Закрыть ")
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (toast.visible) {
        _push(`<div class="${ssrRenderClass([toast.type === "success" ? "bg-[#E8F4EC] text-[#1D6B3A]" : "bg-[#FDEBEC] text-[#AD1F2B]", "fixed right-6 top-6 z-[9999] rounded-[16px] px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-xs tracking-[0.2em] uppercase"])}" data-v-a7ed7b40>${ssrInterpolate(toast.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AppCallBackModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppCallBackModal = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-a7ed7b40"]]), { __name: "UiAppCallBackModal" });

export { AppCallBackModal as A };
//# sourceMappingURL=AppCallBackModal-CmRClWj0.mjs.map
