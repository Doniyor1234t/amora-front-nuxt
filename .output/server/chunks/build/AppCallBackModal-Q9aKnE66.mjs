import { _ as __nuxt_component_0 } from './nuxt-link-DzpVeWIF.mjs';
import __nuxt_component_1 from './index-BbiaJ8T7.mjs';
import script$2 from './index-56hkwXh9.mjs';
import script$1 from './index-DKvodBva.mjs';
import script from './index-Beuqix8B.mjs';
import { defineComponent, mergeModels, useModel, reactive, ref, computed, watch, withCtx, createVNode, createTextVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, withModifiers, createCommentVNode, withDirectives, vModelSelect, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, c as useRuntimeConfig } from './server.mjs';

const mapLeadServiceType = (service) => {
  switch (service) {
    case "tailoring":
      return "TAILORING";
    case "training":
      return "LEARNING";
    case "collection":
    case "general":
    default:
      return "READY_PRODUCT";
  }
};
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
    const runtimeConfig = useRuntimeConfig();
    const visible = useModel(__props, "visible");
    const form = reactive({
      name: "",
      phone: "",
      telegram: "",
      contactMethod: "",
      comment: "",
      size: "",
      format: "",
      level: ""
    });
    const isSubmitting = ref(false);
    const isSubmitted = ref(false);
    const submitError = ref("");
    const toast = reactive({
      visible: false,
      type: "success",
      message: ""
    });
    let toastTimer = null;
    const showToast = (message, type) => {
      toast.message = message;
      toast.type = type;
      toast.visible = true;
      if (toastTimer) {
        clearTimeout(toastTimer);
      }
      toastTimer = setTimeout(() => {
        toast.visible = false;
      }, 4e3);
    };
    const showContactMethod = computed(() => props.serviceType === "tailoring");
    const showSizeField = computed(() => props.serviceType === "collection");
    const showTrainingFields = computed(() => props.serviceType === "training");
    const resetForm = () => {
      form.name = "";
      form.phone = "";
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
    const buildPayload = () => {
      const payload = {
        source: "SITE",
        serviceType: mapLeadServiceType(props.serviceType),
        clientName: form.name.trim(),
        phone: form.phone.trim()
      };
      if (form.telegram.trim()) {
        payload.telegramUsername = form.telegram.trim();
      }
      if (form.contactMethod) {
        payload.preferredContactMethod = form.contactMethod;
      }
      if (form.comment.trim()) {
        payload.comment = form.comment.trim();
      }
      const productMeta = props.metadata?.product;
      if (productMeta && (props.serviceType === "collection" || props.serviceType === "general")) {
        payload.productName = productMeta.name;
        payload.collectionName = productMeta.collectionName;
        payload.fabric = productMeta.fabric ?? void 0;
        payload.color = productMeta.color ?? void 0;
        payload.size = form.size.trim() || productMeta.size || void 0;
      } else if (productMeta && props.serviceType === "tailoring") {
        payload.productName = productMeta.name;
        payload.collectionName = productMeta.collectionName;
      } else if (showSizeField.value && form.size.trim()) {
        payload.size = form.size.trim();
      }
      if (showTrainingFields.value) {
        payload.learningFormat = form.format || void 0;
        payload.learningLevel = form.level || void 0;
      }
      return payload;
    };
    const onSubmit = async () => {
      submitError.value = "";
      if (!form.name.trim() || !form.phone.trim()) {
        submitError.value = "Пожалуйста, укажите имя и телефон.";
        return;
      }
      isSubmitting.value = true;
      try {
        const payload = buildPayload();
        await $fetch("/leads", {
          baseURL: runtimeConfig.public.apiBase,
          method: "POST",
          body: payload
        });
        isSubmitted.value = true;
        showToast("Заявка успешно отправлена", "success");
      } catch (error) {
        console.error(error);
        submitError.value = "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами другим способом.";
        showToast("Не удалось отправить заявку", "error");
      } finally {
        isSubmitting.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_Button = script$1;
      const _component_InputText = script$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        modal: true,
        dismissableMask: true,
        closable: false,
        showHeader: false,
        draggable: false,
        class: "!rounded-[60px] !p-[40px] max-sm:p-[20px] max-sm:w-[90%]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]" data-v-34c481a2${_scopeId}><h2 class="text-center text-[52px] leading-none font-[masvol] mb-[12px] max-sm:text-[32px]" data-v-34c481a2${_scopeId}>${ssrInterpolate(props.title)}</h2>`);
            if (isSubmitted.value) {
              _push2(`<div class="text-center space-y-5 py-4" data-v-34c481a2${_scopeId}><div class="flex flex-col items-center gap-4" data-v-34c481a2${_scopeId}><svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-34c481a2${_scopeId}><path d="M16 18L21.3333 23.3333L32 12.6666" stroke="#C16371" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" data-v-34c481a2${_scopeId}></path></svg><h3 class="text-[40px] font-[masvol] text-[#0F0F0F]" data-v-34c481a2${_scopeId}> Ваша заявка принята. </h3><p class="text-xs uppercase tracking-[0.28em] text-[#6E6E6E]" data-v-34c481a2${_scopeId}> Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда </p></div><div class="flex items-center justify-center gap-4 text-white text-sm" data-v-34c481a2${_scopeId}><!--[-->`);
              ssrRenderList(["youtube", "telegram", "instagram"], (social) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: social,
                  href: "#",
                  class: "flex h-11 w-11 items-center justify-center rounded-full bg-black"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: `ri:${social}-line`,
                        color: "#ffffff",
                        size: 20
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_Icon, {
                          name: `ri:${social}-line`,
                          color: "#ffffff",
                          size: 20
                        }, null, 8, ["name"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><div class="text-[11px] uppercase tracking-[0.3em] text-[#6E6E6E]" data-v-34c481a2${_scopeId}><p class="mb-2" data-v-34c481a2${_scopeId}>НА БУТИК МОЖНО НАЙТИ ПО АДРЕСУ:</p><p data-v-34c481a2${_scopeId}>УЛ. ИСМАИЛАТА, 16А</p></div>`);
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
            } else {
              _push2(`<form class="flex flex-col gap-[16px]" data-v-34c481a2${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: form.name,
                "onUpdate:modelValue": ($event) => form.name = $event,
                placeholder: "ИМЯ ФАМИЛИЯ",
                class: "w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: form.phone,
                "onUpdate:modelValue": ($event) => form.phone = $event,
                placeholder: "+998  00 000 00 00",
                class: "w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
              }, null, _parent2, _scopeId));
              if (showContactMethod.value) {
                _push2(`<div class="flex flex-col gap-2" data-v-34c481a2${_scopeId}><label class="text-xs uppercase tracking-[0.3em] text-[#7D7D7D]" data-v-34c481a2${_scopeId}> Удобный способ связи </label><select class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]" data-v-34c481a2${_scopeId}><option value="" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.contactMethod) ? ssrLooseContain(form.contactMethod, "") : ssrLooseEqual(form.contactMethod, "")) ? " selected" : ""}${_scopeId}>Не важно</option><option value="PHONE" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.contactMethod) ? ssrLooseContain(form.contactMethod, "PHONE") : ssrLooseEqual(form.contactMethod, "PHONE")) ? " selected" : ""}${_scopeId}>Телефон</option><option value="TELEGRAM" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.contactMethod) ? ssrLooseContain(form.contactMethod, "TELEGRAM") : ssrLooseEqual(form.contactMethod, "TELEGRAM")) ? " selected" : ""}${_scopeId}>Telegram</option><option value="WHATSAPP" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.contactMethod) ? ssrLooseContain(form.contactMethod, "WHATSAPP") : ssrLooseEqual(form.contactMethod, "WHATSAPP")) ? " selected" : ""}${_scopeId}>WhatsApp</option></select></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (showTrainingFields.value) {
                _push2(`<div class="flex flex-col gap-3" data-v-34c481a2${_scopeId}><select class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]" data-v-34c481a2${_scopeId}><option value="" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.format) ? ssrLooseContain(form.format, "") : ssrLooseEqual(form.format, "")) ? " selected" : ""}${_scopeId}>Формат обучения</option><option value="ONLINE" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.format) ? ssrLooseContain(form.format, "ONLINE") : ssrLooseEqual(form.format, "ONLINE")) ? " selected" : ""}${_scopeId}>Онлайн</option><option value="OFFLINE" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.format) ? ssrLooseContain(form.format, "OFFLINE") : ssrLooseEqual(form.format, "OFFLINE")) ? " selected" : ""}${_scopeId}>Офлайн</option></select><select class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]" data-v-34c481a2${_scopeId}><option value="" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.level) ? ssrLooseContain(form.level, "") : ssrLooseEqual(form.level, "")) ? " selected" : ""}${_scopeId}>Уровень</option><option value="BEGINNER" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.level) ? ssrLooseContain(form.level, "BEGINNER") : ssrLooseEqual(form.level, "BEGINNER")) ? " selected" : ""}${_scopeId}>Новичок</option><option value="EXPERIENCED" data-v-34c481a2${ssrIncludeBooleanAttr(Array.isArray(form.level) ? ssrLooseContain(form.level, "EXPERIENCED") : ssrLooseEqual(form.level, "EXPERIENCED")) ? " selected" : ""}${_scopeId}>Уже шью</option></select></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (submitError.value) {
                _push2(`<p class="text-sm text-[#C16371]" data-v-34c481a2${_scopeId}>${ssrInterpolate(submitError.value)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                class: "w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2 disabled:opacity-60",
                disabled: isSubmitting.value
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!isSubmitting.value) {
                      _push3(`<span data-v-34c481a2${_scopeId2}>ОТПРАВИТЬ</span>`);
                    } else {
                      _push3(`<span data-v-34c481a2${_scopeId2}>ОТПРАВКА…</span>`);
                    }
                    _push3(`<svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-34c481a2${_scopeId2}><path d="M0 10L36 10" stroke="white" data-v-34c481a2${_scopeId2}></path><path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="white" data-v-34c481a2${_scopeId2}></path></svg>`);
                  } else {
                    return [
                      !isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, "ОТПРАВИТЬ")) : (openBlock(), createBlock("span", { key: 1 }, "ОТПРАВКА…")),
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
              }, _parent2, _scopeId));
              _push2(`</form>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]" }, [
                createVNode("h2", { class: "text-center text-[52px] leading-none font-[masvol] mb-[12px] max-sm:text-[32px]" }, toDisplayString(props.title), 1),
                isSubmitted.value ? (openBlock(), createBlock("div", {
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
                    createVNode("h3", { class: "text-[40px] font-[masvol] text-[#0F0F0F]" }, " Ваша заявка принята. "),
                    createVNode("p", { class: "text-xs uppercase tracking-[0.28em] text-[#6E6E6E]" }, " Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда ")
                  ]),
                  createVNode("div", { class: "flex items-center justify-center gap-4 text-white text-sm" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(["youtube", "telegram", "instagram"], (social) => {
                      return createVNode(_component_NuxtLink, {
                        key: social,
                        href: "#",
                        class: "flex h-11 w-11 items-center justify-center rounded-full bg-black"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: `ri:${social}-line`,
                            color: "#ffffff",
                            size: 20
                          }, null, 8, ["name"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ]),
                  createVNode("div", { class: "text-[11px] uppercase tracking-[0.3em] text-[#6E6E6E]" }, [
                    createVNode("p", { class: "mb-2" }, "НА БУТИК МОЖНО НАЙТИ ПО АДРЕСУ:"),
                    createVNode("p", null, "УЛ. ИСМАИЛАТА, 16А")
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
                ])) : (openBlock(), createBlock("form", {
                  key: 1,
                  onSubmit: withModifiers(onSubmit, ["prevent"]),
                  class: "flex flex-col gap-[16px]"
                }, [
                  createVNode(_component_InputText, {
                    modelValue: form.name,
                    "onUpdate:modelValue": ($event) => form.name = $event,
                    placeholder: "ИМЯ ФАМИЛИЯ",
                    class: "w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_InputText, {
                    modelValue: form.phone,
                    "onUpdate:modelValue": ($event) => form.phone = $event,
                    placeholder: "+998  00 000 00 00",
                    class: "w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  showContactMethod.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col gap-2"
                  }, [
                    createVNode("label", { class: "text-xs uppercase tracking-[0.3em] text-[#7D7D7D]" }, " Удобный способ связи "),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.contactMethod = $event,
                      class: "w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
                    }, [
                      createVNode("option", { value: "" }, "Не важно"),
                      createVNode("option", { value: "PHONE" }, "Телефон"),
                      createVNode("option", { value: "TELEGRAM" }, "Telegram"),
                      createVNode("option", { value: "WHATSAPP" }, "WhatsApp")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.contactMethod]
                    ])
                  ])) : createCommentVNode("", true),
                  showTrainingFields.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex flex-col gap-3"
                  }, [
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.format = $event,
                      class: "w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
                    }, [
                      createVNode("option", { value: "" }, "Формат обучения"),
                      createVNode("option", { value: "ONLINE" }, "Онлайн"),
                      createVNode("option", { value: "OFFLINE" }, "Офлайн")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.format]
                    ]),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.level = $event,
                      class: "w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
                    }, [
                      createVNode("option", { value: "" }, "Уровень"),
                      createVNode("option", { value: "BEGINNER" }, "Новичок"),
                      createVNode("option", { value: "EXPERIENCED" }, "Уже шью")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.level]
                    ])
                  ])) : createCommentVNode("", true),
                  submitError.value ? (openBlock(), createBlock("p", {
                    key: 2,
                    class: "text-sm text-[#C16371]"
                  }, toDisplayString(submitError.value), 1)) : createCommentVNode("", true),
                  createVNode(_component_Button, {
                    type: "submit",
                    class: "w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2 disabled:opacity-60",
                    disabled: isSubmitting.value
                  }, {
                    default: withCtx(() => [
                      !isSubmitting.value ? (openBlock(), createBlock("span", { key: 0 }, "ОТПРАВИТЬ")) : (openBlock(), createBlock("span", { key: 1 }, "ОТПРАВКА…")),
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
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ], 32))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (toast.visible) {
        _push(`<div class="${ssrRenderClass([toast.type === "success" ? "bg-[#E8F4EC] text-[#1D6B3A]" : "bg-[#FDEBEC] text-[#AD1F2B]", "fixed right-6 top-6 z-[9999] rounded-[16px] px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-xs tracking-[0.2em] uppercase"])}" data-v-34c481a2>${ssrInterpolate(toast.message)}</div>`);
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
const AppCallBackModal = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-34c481a2"]]), { __name: "UiAppCallBackModal" });

export { AppCallBackModal as A };
//# sourceMappingURL=AppCallBackModal-Q9aKnE66.mjs.map
