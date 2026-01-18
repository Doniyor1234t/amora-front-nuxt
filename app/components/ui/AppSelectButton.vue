<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

type Option = {
  label: string;
  value: string;
};

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options?: Option[];
    iconColor?: string;
  }>(),
  {
    options: () => [
      { label: "UZ", value: "uz" },
      { label: "RU", value: "ru" },
    ],
    iconColor: "#0F0F0F",
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const isDropdownOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(() => {
  const active = props.options.find((option) => option.value === props.modelValue);
  return active?.label ?? props.modelValue;
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  if (isDropdownOpen.value) {
    isDropdownOpen.value = false;
  }
};

const handleDocumentClick = (event: MouseEvent) => {
  const target = event.target as Node;
  if (!rootRef.value) {
    return;
  }

  if (!rootRef.value.contains(target)) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});

const onSelect = (value: string) => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value);
  }
  closeDropdown();
};
</script>

<template>
  <div ref="rootRef" class="app-select-button relative inline-flex">
    <button
      type="button"
      class="app-select-button__trigger"
      aria-haspopup="listbox"
      :aria-expanded="isDropdownOpen"
      @click.stop="toggleDropdown"
    >
      <Icon
        name="app-icon:globe"
        mode="svg"
        class="app-select-button__icon"
        height="24"
        width="24"
        :style="{ color: props.iconColor }"
      />
      <span class="sr-only">Выбрать язык. Сейчас: {{ selectedLabel }}</span>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-150"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isDropdownOpen"
        class="app-select-button__dropdown"
        role="listbox"
      >
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          role="option"
          class="app-select-button__option"
          :class="{ 'app-select-button__option--active': modelValue === option.value }"
          @click="onSelect(option.value)"
        >
          {{ option.label }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.app-select-button {
  --button-size: 42px;
}

.app-select-button__trigger {
  width: var(--button-size);
  height: var(--button-size);
  /* border: 1px solid #dedede; */
  /* background: #fff; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.app-select-button__trigger:hover {
  background-color: #f5f5f5;
  border-color: #c0c0c0;
}

.app-select-button__icon {
  color: currentColor;
}

.app-select-button__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 96px;
  padding: 6px;
  border: 1px solid #dedede;
  background: #fff;
  box-shadow: 0 8px 16px rgba(15, 15, 15, 0.08);
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 20;
}

.app-select-button__option {
  width: 100%;
  text-align: left;
  padding: 6px 10px;
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #7d7d7d;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.app-select-button__option:hover,
.app-select-button__option--active {
  background: #f3f3f3;
  color: #0f0f0f;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
