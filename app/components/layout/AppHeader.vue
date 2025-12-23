<script setup lang="ts">
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import AppSelectButton from "../ui/AppSelectButton.vue";
import Drawer from "primevue/drawer";
import { useAuthStore } from "@/stores/auth";

enum Languages {
  UZ = "UZ",
  RU = "RU",
}

const value = ref(Languages.UZ);
const options = ref([
  { label: "UZ", value: Languages.UZ },
  { label: "RU", value: Languages.RU },
]);

const visible = ref(false);

const route = useRoute();
const router = useRouter();

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

onMounted(() => {
  authStore.initialize();
});

const handleProfileClick = () => {
  if (!isAuthenticated.value) {
    router.push("/auth");
    return;
  }
};

watch(
  () => route.fullPath,
  () => {
    visible.value = false;
  }
);
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-10 bg-transparent">
    <div class="container flex h-[72px] items-center max-sm:h-[60px]">
      <Drawer v-model:visible="visible" class="!w-[45%] max-sm:!w-[100%]">
        <div class="max-sm:w-full max-sm:flex max-sm:justify-between">
          <AppSelectButton
            v-model="value"
            :options="options"
            class="md:!hidden"
          />
        <Button variant="text" severity="secondary" class="md:!hidden" @click="handleProfileClick">
          <Icon
            name="app-icon:user"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="md:!hidden"
          />
        </Button>

        <Button variant="text" severity="secondary" class="md:!hidden">
          <Icon
            name="app-icon:heart-outlined"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="md:!hidden"
          />
          <p class="text-sm text-[#0F0F0F] md:!hidden">0</p>
        </Button>
        </div>

        <div
          class="flex flex-col gap-2 w-full h-full justify-center gap-9 max-sm:gap-4 max-sm:justify-start"
        >
          <NuxtLink
            to="/catalog"
            class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >Каталог</NuxtLink
          >
          <NuxtLink
            to="/collections"
            class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >Коллекции</NuxtLink
          >
          <NuxtLink
            to="/atelie"
            class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >Ателье AMORA</NuxtLink
          >
          <NuxtLink
            to="/school"
            class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >Школа G.T. Factory</NuxtLink
          >
          <NuxtLink
            to="/brand"
            class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >О бренде</NuxtLink
          >
          <NuxtLink to="/contacts" class="font-[masvol] text-[52px] max-sm:text-[34px]"
            >Контакты</NuxtLink
          >
        </div>
      </Drawer>

      <Button
        variant="text"
        severity="secondary"
        class="mr-[25px] shrink-0"
        @click="visible = true"
      >
        <Icon
          name="app-icon:menu-hamburger"
          mode="svg"
          color="#3F3F46"
          width="40px"
          height="32px"
        />
      </Button>

      <AppSelectButton
        v-model="value"
        :options="options"
        class="max-sm:!hidden"
      />

      <NuxtLink to="/" class="mx-auto max-sm:pr-6">
        <Icon name="app-icon:logo" mode="svg" color="#3F3F46" height="56px" class="max-sm:h-[40px]" />
      </NuxtLink>

      <div class="flex gap-2">
        <Button variant="text" severity="secondary">
          <Icon name="app-icon:loop" mode="svg" color="#0F0F0F" height="24px" />
        </Button>

        <Button variant="text" severity="secondary" class="max-sm:!hidden" @click="handleProfileClick">
          <Icon
            name="app-icon:user"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="max-sm:hidden"
          />
        </Button>

        <Button variant="text" severity="secondary" class="max-sm:!hidden">
          <Icon
            name="app-icon:heart-outlined"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="max-sm:hidden"
          />
          <p class="text-sm text-[#0F0F0F] max-sm:hidden">0</p>
        </Button>
      </div>
    </div>
  </header>
</template>
