<script setup lang="ts">
import { computed, reactive, ref, watch, onBeforeUnmount } from "vue";
import {
  mapLeadServiceType,
  type LeadFormService,
  type LeadMetadata,
  type LeadRequestPayload,
} from "@/types/leads";

const props = withDefaults(
  defineProps<{
    serviceType?: LeadFormService;
    metadata?: LeadMetadata;
    title?: string;
  }>(),
  {
    serviceType: "general",
    metadata: () => ({}),
    title: "Оставить заявку",
  }
);

const runtimeConfig = useRuntimeConfig();
const visible = defineModel<boolean>("visible", { default: false });

const form = reactive({
  name: "",
  phone: "",
  telegram: "",
  contactMethod: "",
  comment: "",
  size: "",
  format: "",
  level: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const submitError = ref("");
const toast = reactive({
  visible: false,
  type: "success" as "success" | "error",
  message: "",
});
let toastTimer: ReturnType<typeof setTimeout> | null = null;

const hideToast = () => {
  toast.visible = false;
  if (toastTimer) {
    clearTimeout(toastTimer);
    toastTimer = null;
  }
};

const showToast = (message: string, type: "success" | "error") => {
  toast.message = message;
  toast.type = type;
  toast.visible = true;
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toastTimer = setTimeout(() => {
    toast.visible = false;
  }, 4000);
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
  form.size = props.metadata?.product?.size
    ? String(props.metadata.product.size)
    : "";
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

const buildPayload = (): LeadRequestPayload => {
  const payload: LeadRequestPayload = {
    source: "SITE",
    serviceType: mapLeadServiceType(props.serviceType),
    clientName: form.name.trim(),
    phone: form.phone.trim(),
  };

  if (form.telegram.trim()) {
    payload.telegramUsername = form.telegram.trim();
  }
  if (form.contactMethod) {
    payload.preferredContactMethod = form.contactMethod as
      | "PHONE"
      | "TELEGRAM"
      | "WHATSAPP";
  }
  if (form.comment.trim()) {
    payload.comment = form.comment.trim();
  }

  const productMeta = props.metadata?.product;
  if (productMeta && (props.serviceType === "collection" || props.serviceType === "general")) {
    payload.productName = productMeta.name;
    payload.collectionName = productMeta.collectionName;
    payload.fabric = productMeta.fabric ?? undefined;
    payload.color = productMeta.color ?? undefined;
    payload.size = form.size.trim() || productMeta.size || undefined;
  } else if (productMeta && props.serviceType === "tailoring") {
    payload.productName = productMeta.name;
    payload.collectionName = productMeta.collectionName;
  } else if (showSizeField.value && form.size.trim()) {
    payload.size = form.size.trim();
  }

  if (showTrainingFields.value) {
    payload.learningFormat = form.format || undefined;
    payload.learningLevel = form.level || undefined;
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
      body: payload,
    });
    isSubmitted.value = true;
    showToast("Заявка успешно отправлена", "success");
  } catch (error) {
    console.error(error);
    submitError.value =
      "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами другим способом.";
    showToast("Не удалось отправить заявку", "error");
  } finally {
    isSubmitting.value = false;
  }
};

onBeforeUnmount(() => {
  hideToast();
});
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    :dismissableMask="true"
    :closable="false"
    :showHeader="false"
    :draggable="false"
    class="!rounded-[60px] !p-[40px] max-sm:p-[20px] max-sm:w-[90%]"
  >
    <div class="flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]">
      <h2
        class="text-center text-[52px] leading-none font-[masvol] mb-[12px] max-sm:text-[32px]"
      >
        {{ props.title }}
      </h2>

      <div v-if="isSubmitted" class="text-center space-y-5 py-4">
        <div class="flex flex-col items-center gap-4">
          <svg
            width="48"
            height="36"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 18L21.3333 23.3333L32 12.6666"
              stroke="#C16371"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h3 class="text-[40px] font-[masvol] text-[#0F0F0F]">
            Ваша заявка принята.
          </h3>
          <p class="text-xs uppercase tracking-[0.28em] text-[#6E6E6E]">
            Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда
          </p>
        </div>
        <div
          class="flex items-center justify-center gap-4 text-white text-sm"
        >
          <NuxtLink
            v-for="social in ['youtube', 'telegram', 'instagram']"
            :key="social"
            href="#"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-black"
          >
            <Icon
              :name="`ri:${social}-line`"
              color="#ffffff"
              :size="20"
            />
          </NuxtLink>
        </div>
        <div class="text-[11px] uppercase tracking-[0.3em] text-[#6E6E6E]">
          <p class="mb-2">НА БУТИК МОЖНО НАЙТИ ПО АДРЕСУ:</p>
          <p>УЛ. ИСМАИЛАТА, 16А</p>
        </div>
        <Button
          type="button"
          class="w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white"
          @click="closeDialog"
        >
          Закрыть
        </Button>
      </div>

      <form
        v-else
        @submit.prevent="onSubmit"
        class="flex flex-col gap-[16px]"
      >
        <InputText
          v-model="form.name"
          placeholder="ИМЯ ФАМИЛИЯ"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        />
        <InputText
          v-model="form.phone"
          placeholder="+998  00 000 00 00"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        />
        <!-- <InputText
          v-model="form.telegram"
          placeholder="@username"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        /> -->

        <div v-if="showContactMethod" class="flex flex-col gap-2">
          <label class="text-xs uppercase tracking-[0.3em] text-[#7D7D7D]">
            Удобный способ связи
          </label>
          <select
            v-model="form.contactMethod"
            class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
          >
            <option value="">Не важно</option>
            <option value="PHONE">Телефон</option>
            <option value="TELEGRAM">Telegram</option>
            <option value="WHATSAPP">WhatsApp</option>
          </select>
        </div>

        <!-- <InputText
          v-if="showSizeField"
          v-model="form.size"
          placeholder="РАЗМЕР (S, M, 42...)"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        /> -->

        <div v-if="showTrainingFields" class="flex flex-col gap-3">
          <select
            v-model="form.format"
            class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
          >
            <option value="">Формат обучения</option>
            <option value="ONLINE">Онлайн</option>
            <option value="OFFLINE">Офлайн</option>
          </select>
          <select
            v-model="form.level"
            class="w-full rounded-full border border-[#E5E5E5] px-5 py-3 text-sm uppercase tracking-[0.2em] text-[#3D3D3D]"
          >
            <option value="">Уровень</option>
            <option value="BEGINNER">Новичок</option>
            <option value="EXPERIENCED">Уже шью</option>
          </select>
        </div>

        <!-- <textarea
          v-model="form.comment"
          rows="4"
          placeholder="Комментарий"
          class="w-full rounded-[24px] border border-[#E5E5E5] px-[24px] py-3 text-sm text-[#3D3D3D]"
        /> -->

        <p v-if="submitError" class="text-sm text-[#C16371]">
          {{ submitError }}
        </p>

        <Button
          type="submit"
          class="w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2 disabled:opacity-60"
          :disabled="isSubmitting"
        >
          <span v-if="!isSubmitting">ОТПРАВИТЬ</span>
          <span v-else>ОТПРАВКА…</span>
          <svg
            width="36"
            height="20"
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 10L36 10" stroke="white" />
            <path
              d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20"
              stroke="white"
            />
          </svg>
        </Button>
      </form>
    </div>
  </Dialog>
  <Transition name="toast-fade">
    <div
      v-if="toast.visible"
      class="fixed right-6 top-6 z-[9999] rounded-[16px] px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)] text-xs tracking-[0.2em] uppercase"
      :class="toast.type === 'success' ? 'bg-[#E8F4EC] text-[#1D6B3A]' : 'bg-[#FDEBEC] text-[#AD1F2B]'"
    >
      {{ toast.message }}
    </div>
  </Transition>
</template>

<style>
.p-dialog-content {
  padding: 0 !important;
}
</style>

<style scoped>
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
