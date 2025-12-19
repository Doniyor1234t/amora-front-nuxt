<script setup lang="ts">
  import { ref } from 'vue'

  definePageMeta({
    layout: 'default',
  })
</script>

<template>
  <div class="flex items-center justify-center bg-[#F7F6F4] px-4 py-10 min-h-[calc(100vh-72px)]">
    <div
      class="w-full max-w-[526px] rounded-[60px] bg-white px-[40px] py-[40px] shadow-[0_40px_120px_rgba(0,0,0,0.06)] max-lg:px-[48px] max-md:px-[32px] max-sm:px-[24px]"
    >
      <div class="text-center">
        <h1 class="text-[52px] leading-none font-[masvol] text-[#0F0F0F] max-sm:text-[44px]">
          Вход в AMORA
        </h1>
      </div>

      <form class="mt-[32px] space-y-[20px]">
        <label class="block">
          <span class="sr-only">Номер телефона</span>
          <input
            type="tel"
            placeholder="+998  00 000 00 00"
            class="w-full rounded-[80px] border border-[#CFCFCF] bg-transparent px-[28px] py-[14px] text-[14px] tracking-[0.02em] text-[#0F0F0F] placeholder:text-[#A5A5A5] focus:border-[#0F0F0F] focus:outline-none"
          />
        </label>

        <label class="block">
          <span class="sr-only">Пароль</span>
          <input
            type="password"
            placeholder="ПАРОЛЬ"
            class="w-full tracking-[0.08em] rounded-[80px] border border-[#CFCFCF] bg-transparent px-[28px] py-[14px] text-[14px] uppercase text-[#0F0F0F] placeholder:text-[#0F0F0F] focus:border-[#0F0F0F] focus:outline-none"
          />
        </label>

        <div class="flex justify-end text-[14px] uppercase tracking-[0.08em] text-[#0F0F0F]">
          <NuxtLink to="/auth/forgot">Забыли пароль?</NuxtLink>
        </div>

        <button
          type="submit"
          class="mt-[12px] w-full rounded-full bg-[#0F0F0F] py-[14px] text-[14px] uppercase tracking-[0.08em] font-medium text-white transition hover:bg-[#2B2B2B]"
        >
          Войти
        </button>
      </form>

      <p class="mt-[32px] text-center text-[14px] uppercase tracking-[0.08em] text-[#0F0F0F]">
        Нет аккаунта?
        <NuxtLink to="/auth/sign-up" class="underline">Зарегистрироваться</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style>
  
</style>
