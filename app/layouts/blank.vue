<script
  setup
  lang="ts"
>
import AppSelectButton from "~/components/ui/AppSelectButton.vue";
import { ref } from "vue";

enum Languages {
  UZ = "UZ",
  RU = "RU",
}

const value = ref(Languages.UZ);
const options = ref([
  {label: "UZ", value: Languages.UZ},
  {label: "RU", value: Languages.RU},
]);
</script>

<template>
  <div>
    <header class="fixed top-0 left-0 w-full z-10 bg-white">
      <div class="container flex h-[72px] items-center relative">
        <NuxtLink
          to="/"
          class="mx-auto"
        >
          <Icon
            name="app-icon:logo"
            mode="svg"
            color="#3F3F46"
            height="56px"
          />
        </NuxtLink>
        
        <AppSelectButton
          v-model="value"
          :options="options"
          class="absolute right-0 top-1/2 -translate-y-1/2"
        />
      </div>
    </header>
    <div class="min-h-screen">
      <slot />
    </div>
  </div>
</template>