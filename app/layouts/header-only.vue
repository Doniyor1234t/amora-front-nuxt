<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[#FBFAF9]">
    <AppHeader />

    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>