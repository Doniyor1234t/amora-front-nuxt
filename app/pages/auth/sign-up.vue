<script setup lang="ts">
  import { ref } from 'vue'

  definePageMeta({
    layout: 'default',
  })

  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
  const subscribeNews = ref(true)
  const acceptPrivacy = ref(false)

  const inputClass =
    'w-full rounded-[80px] border border-[#CFCFCF] bg-transparent px-[28px] py-[14px] text-[14px] tracking-[0.02em] text-[#0F0F0F] placeholder:text-[#0F0F0F] focus:border-[#0F0F0F] focus:outline-none'
</script>

<template>
  <div class="flex items-center justify-center bg-[#F7F6F4] px-4 py-10 min-h-[calc(100vh-72px)]">
    <div
      class="w-full max-w-[526px] rounded-[60px] bg-white px-[40px] py-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] max-md:px-[40px] max-sm:px-[28px]"
    >
      <div class="text-center">
        <h1 class="font-[masvol] text-[52px] leading-none text-[#0F0F0F] max-sm:text-[44px]">
          Регистрация
        </h1>
      </div>

      <form class="mt-[32px] space-y-[20px]">
        <label class="block">
          <span class="sr-only">Имя и фамилия</span>
          <input type="text" placeholder="ИМЯ ФАМИЛИЯ" :class="inputClass" />
        </label>

        <label class="block">
          <span class="sr-only">Номер телефона</span>
          <input type="tel" placeholder="+998  00 000 00 00" :class="inputClass" />
        </label>

        <label class="block">
          <span class="sr-only">Пароль</span>
          <div class="relative">
            <input :type="showPassword ? 'text' : 'password'" placeholder="ПАРОЛЬ" :class="inputClass" />
            <button
              type="button"
              class="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#0F0F0F] transition hover:text-[#4C4C4C]"
              @click="showPassword = !showPassword"
            >
              <Icon :name="showPassword ? 'ph:eye-slash' : 'ph:eye'" size="22" />
            </button>
          </div>
        </label>

        <label class="block">
          <span class="sr-only">Подтверждение пароля</span>
          <div class="relative">
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="ПОДТВЕРЖДЕНИЕ ПАРОЛЯ"
              :class="inputClass"
            />
            <button
              type="button"
              class="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#0F0F0F] transition hover:text-[#4C4C4C]"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <Icon :name="showConfirmPassword ? 'ph:eye-slash' : 'ph:eye'" size="22" />
            </button>
          </div>
        </label>

        <div class="space-y-[14px] pt-[8px] text-[14px] text-[#0F0F0F]">
          <label class="flex items-center gap-[12px] leading-[1.4] tracking-[0.02em]">
            <input
              v-model="subscribeNews"
              type="checkbox"
              class="mt-[2px] h-[20px] w-[20px] p-[4px] shrink-0 cursor-pointer rounded-[6px] border border-[#0F0F0F] bg-white accent-[#0F0F0F]"
            />
            <span class="uppercase text-[12px]">Получать новости AMORA и приглашения на события</span>
          </label>

          <label class="flex items-center gap-[12px] leading-[1.4] tracking-[0.02em] text-[#5A5A5A]">
            <input
              v-model="acceptPrivacy"
              type="checkbox"
              class="mt-[2px] h-[20px] w-[20px] shrink-0 cursor-pointer rounded-[6px] border border-[#BBBBBB] bg-white accent-[#0F0F0F]"
            />
            <span class="uppercase text-[12px]">
              Регистрируясь, вы соглашаетесь с политикой конфиденциальности
            </span>
          </label>
        </div>

        <button
          type="submit"
          class="mt-[22px] w-full rounded-[80px] bg-[#0F0F0F] py-[16px] text-[14px] font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#2B2B2B]"
        >
          Создать аккаунт
        </button>
      </form>

      <p class="mt-[28px] text-center text-[14px] uppercase tracking-[0.08em] text-[#0F0F0F]">
        Уже есть аккаунт?
        <NuxtLink to="/auth" class="underline">Войти</NuxtLink>
      </p>
    </div>
  </div>
</template>
