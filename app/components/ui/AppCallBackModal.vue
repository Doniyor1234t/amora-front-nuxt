<script setup lang="ts">
import { computed, reactive, ref, watch, onBeforeUnmount } from "vue";
import {
  mapLeadServiceType,
  type LeadFormService,
  type LeadMetadata,
  type LeadRequestPayload,
} from "@/types/leads";
import { PhoneNumberWithCountryCode } from "vue3-phone-number-input";
import "vue3-phone-number-input/dist/vue3-phone-number-input.css";

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

const DEFAULT_COUNTRY_ISO = "uz";
const DEFAULT_COUNTRY_DIAL_CODE = "+998";

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
  form.countryCode = DEFAULT_COUNTRY_ISO;
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

const getNormalizedPhone = () => {
  const number = form.phone?.trim() ?? "";
  if (!number) {
    return "";
  }
  return `${DEFAULT_COUNTRY_DIAL_CODE} ${number}`.trim();
};

const formatLocalPhoneNumber = (value: string) => {
  const digits = (value ?? "").replace(/\D/g, "").slice(0, 9);
  if (!digits) {
    return "";
  }
  const parts: string[] = [];
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

const buildPayload = (): LeadRequestPayload => {
  const normalizedPhone = getNormalizedPhone();
  const payload: LeadRequestPayload = {
    source: "SITE",
    serviceType: mapLeadServiceType(props.serviceType),
    clientName: form.name.trim(),
    phone: normalizedPhone,
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

const enforceUzbekistanCode = () => {
  if (form.countryCode !== DEFAULT_COUNTRY_ISO) {
    form.countryCode = DEFAULT_COUNTRY_ISO;
  }
};

const phoneInputModel = computed({
  get: () => form.phone,
  set: (value: string) => {
    form.phone = formatLocalPhoneNumber(value);
  },
});

const socials = [
  {
    name: "youtube",
    url: "https://www.youtube.com/@brandAmora",
  },
  {
    name: "telegram",
    url: "https://t.me/brandamora",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/brand.amora/",
  }
]

const onSubmit = async () => {
  submitError.value = "";

  const normalizedPhone = getNormalizedPhone();
  if (!form.name.trim() || !normalizedPhone) {
    submitError.value = "Пожалуйста, укажите имя и телефон.";
    return;
  }

  isSubmitting.value = true;
  try {
    const payload = buildPayload();
    await $fetch("https://api.amora-brand.uz/api/leads", {
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
    class="!rounded-[10px] !p-[40px] max-sm:p-[20px]! max-sm:w-[90%]"
  >
    <div class="flex flex-col gap-[20px] w-[446px] max-sm:w-[100%]">

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
          <div class="flex flex-col gap-2">
            <h3 class="text-[40px] max-md:text-[32px] font-[masvol] text-[#0F0F0F]">
              Ваша заявка принята.
            </h3>
            <p class="text-xs max-md:text-[12px] tracking-[0.08em] leading-[18px] font-light text-[#6E6E6E]">
              Мы будем рады разделить с вами атмосферу новой коллекции и пространства бренда
            </p>
          </div>
        </div>
        <div
          class="flex items-center justify-center gap-4 text-white text-sm"
        >
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            class="flex h-11 w-11 items-center justify-center rounded-full bg-black"
          >
            <Icon
              :name="`app-icon:${social.name}`"
              color="#ffffff"
              :size="20"
            />
          </NuxtLink>
        </div>
        <div class="text-[12px] tracking-[0.05em] text-[#6E6E6E]">
          <p class="mb-2">Наш бутик можно найти по адресу:</p>
          <p>ул. Исмаилата, 16А</p>
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
        <div class="flex flex-col gap-2 max-md:gap-2.5 mb-4">
          <h2
            class="text-center text-[52px] leading-none text-[#0F0F0F] font-[masvol] max-sm:text-[32px]"
          >
            {{ props.title }}
          </h2>
          <p
            class="text-center text-[14px] tracking-[0.08em] font-light leading-[20px] text-[#3D3D3D]"
          >
            Оставьте заявку, и мы свяжемся с вами для подтверждения покупки и деталей.
          </p>
        </div>
        <InputText
          v-model="form.name"
          placeholder="Имя фамилия"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        />
        <div class="phone-input-wrapper">
          <PhoneNumberWithCountryCode
            v-model:phone_number="phoneInputModel"
            :country_code="form.countryCode"
            @update:country_code="enforceUzbekistanCode"
            placeholder="00 000 00 00"
            country-placeholder="Поиск"
            country-lebel="Узбекистан"
            :maxlength="9"
            type="tel"
          />
        </div>
        <InputText
          v-model="form.telegram"
          placeholder="@telegram"
          class="w-full !h-12 !rounded-full !border !border-[#E5E5E5] !px-[24px] !text-[14px]"
        />

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

.phone-input-wrapper {
  width: 100%;
}

.phone-input-wrapper :deep(label[for="country"]) {
  display: none;
}

.phone-input-wrapper :deep(.phone_input) {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid #E5E5E5;
  background-color: #fff;
}

.phone-input-wrapper :deep(.phone_input input) {
  font-size: 14px;
  letter-spacing: 0.16em;
  color: #0f0f0f;
  border: none;
  background: transparent;
  height: 100%;
  width: 100%;
}

.phone-input-wrapper :deep(.phone_input input::placeholder) {
  color: #9b9b9b;
}

.phone-input-wrapper :deep(.phone_input .dropdown) {
  border-right: none;
  padding-right: 0;
  margin-right: 0;
  pointer-events: none;
  background: transparent;
}

.phone-input-wrapper :deep(.phone_input .select-dropdown) {
  display: none !important;
}

.phone-input-wrapper :deep(.phone_input .select) {
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
  margin: 0;
  min-width: auto;
}

.phone-input-wrapper :deep(.phone_input .select__label) {
  display: flex !important;
  align-items: center;
  gap: 8px;
  padding: 0;
}

.phone-input-wrapper :deep(.phone_input .default-flag) {
  display: none;
}

.phone-input-wrapper :deep(.phone_input .default-item span) {
  font-size: 14px;
  letter-spacing: 0.16em;
  color: #0f0f0f;
}

.phone-input-wrapper :deep(.phone_input .borders) {
  display: none;
}

.phone-input-wrapper :deep(.phone_input .dropdown) {
  width: auto;
}
</style>
