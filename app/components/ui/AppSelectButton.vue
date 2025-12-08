<script setup lang="ts">
// import { withDefaults, defineProps, defineEmits } from 'vue';

type Option = {
  label: string;
  value: string;
};

const props = withDefaults(
  defineProps<{
    modelValue: string;
    options?: Option[];
  }>(),
  {
    options: () => [
      { label: 'UZ', value: 'uz' },
      { label: 'RU', value: 'ru' },
    ],
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onSelect = (value: string) => {
  if (value !== props.modelValue) {
    emit('update:modelValue', value);
  }
};
</script>

<template>
  <div
    class="inline-flex 
    items-center 
    rounded-full 
    border 
    p-[1px] 
    border-[#dedede] 
    bg-white text-[11px] 
    font-regular 
    select-none"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      @click="onSelect(option.value)"
      class="flex-1 
      rounded-full 
      h-[28px] 
      px-[9.5px] 
      max-sm:h-[36px] 
      max-sm:px-[9px] 
      text-center 
      transition-all 
      duration-150 
      cursor-pointer 
      text-sm"
      :class="[
        modelValue === option.value
          ? 'bg-[#E8E7E6] text-black shadow-sm'
          : 'bg-transparent text-[#c0c0c0]'
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>
