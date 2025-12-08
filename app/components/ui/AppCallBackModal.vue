<script setup lang="ts">
import { ref, reactive } from "vue";
const visible = defineModel<boolean>('visible', {default: false});
const form = ref({
  name: '',
  phone: ''
});

async function onSubmit() {
  const response = await $fetch('/leads', {
    baseURL: 'https://amora-brand.uz/api',
    method: 'POST',
    body: {
      clientName: form.value.name,
      phone: form.value.phone,
      source: 'SITE',
    }
  })
  if (response) {
    visible.value = false;
  }
  // isSubmitted.value = true;
}
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
        Оставить заявку
      </h2>
      <form @submit.prevent="onSubmit" class="flex flex-col gap-[20px]">
        <InputText
          v-model="form.name"
          placeholder="ИМЯ ФАМИЛИЯ"
          class="w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
        />
        <InputText
          v-model="form.phone"
          placeholder="+998  00 000 00 00"
          class="w-full !h-10 !rounded-full !border !border-[#E5E5E5] !px-[28px] !text-[14px]"
        />
      </form>

  
      <Button
        type="button"
        label="ОТПРАВИТЬ"
        class="w-full !h-[44px] !rounded-full !bg-black !border-0 !text-[14px] tracking-[0.16em] !text-white flex items-center justify-center gap-2"
      >
        <span>ОТПРАВИТЬ</span>
        <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10L36 10" stroke="white"/>
<path d="M26 0C26 4.82759 30.4068 10 36 10C30.4068 10 26 15.1724 26 20" stroke="white"/>
</svg>

      </Button>
    </div>
  </Dialog>
</template>

<style>
.p-dialog-content {
    padding: 0!important;
}
</style>
