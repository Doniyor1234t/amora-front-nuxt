<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import AppSelectButton from "../ui/AppSelectButton.vue";
import Drawer from "primevue/drawer";
import { useAuthStore } from "@/stores/auth";
import { useLikesStore } from "@/stores/likes";

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
const likesStore = useLikesStore();
const { likedIds } = storeToRefs(likesStore);
const favoriteCount = computed(() => likedIds.value.length);

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

const handleFavoritesClick = () => {
  visible.value = false;
  router.push("/favorites");
};
</script>

<template>
  <header class="header fixed top-0 left-0 w-full z-10">
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

        <Button variant="text" severity="secondary" class="md:!hidden" @click="handleFavoritesClick">
          <Icon
            name="app-icon:heart-outlined"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="md:!hidden"
          />
          <p class="text-sm text-[#0F0F0F] md:!hidden">
            {{ favoriteCount }}
          </p>
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

      <NuxtLink to="/" class="logo-link mx-auto max-sm:pr-6">
        <svg class="logo-svg" width="92" height="56" viewBox="0 0 92 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49937 24.3065C7.2985 16.1074 9.39456 7.82301 10.9546 3.41418C10.9922 4.07738 11.5519 13.7246 12.164 24.1836L5.49937 24.3065ZM74.7782 31.8697C74.8392 33.2344 74.8367 34.4635 74.791 35.564C74.6887 38.02 74.9096 45.1563 73.5989 50.2638C72.7146 47.6776 72.637 44.5597 73.0404 41.7523C73.4258 39.0691 74.0366 35.6248 74.7782 31.8697ZM76.3573 24.3052C78.1568 16.1067 80.2525 7.82269 81.8126 3.41418C81.8501 4.07738 82.4096 13.7236 83.0219 24.1823L76.3573 24.3052ZM73.9143 51.7293C74.0698 52.0373 74.24 52.3387 74.4268 52.633C75.1433 53.7633 75.2218 54.4933 74.9061 54.9648C73.965 54.3916 73.4077 53.4708 73.8279 52.0291C73.8567 51.9299 73.8855 51.8298 73.9143 51.7293ZM65.7938 17.2544C66.2901 20.572 66.4258 24.1905 66.4258 27.9251C66.4258 33.9445 65.6533 39.3394 64.031 44.002V23.3363C64.225 21.9056 64.7334 18.9632 65.7938 17.2544ZM65.5401 17.1942C64.806 18.4842 64.25 20.2877 64.031 22.5441V10.5106C64.8044 12.3846 65.3386 14.4581 65.7028 16.6739L65.735 16.8735C65.6687 16.9768 65.6036 17.0836 65.5401 17.1942ZM66.9697 15.9699C71.3432 12.3868 73.1408 20.033 73.7976 23.6059C74.2807 26.234 74.5638 28.5645 74.7065 30.6171C74.1799 33.2306 73.6949 35.7389 73.2622 38.0634C72.4421 42.4681 72.0106 47.0002 73.4715 50.7376C72.6411 53.6698 71.2588 55.8241 68.9424 55.8241C67.1383 55.8241 64.031 56.0856 64.031 52.2363V47.1434C67.0798 42.1417 68.4011 35.3083 68.4011 28.0002C68.4011 23.7539 67.9399 19.6508 66.9697 15.9699ZM34.6173 11.8652C35.2947 9.94693 36.1849 8.20863 37.3467 6.69656C41.418 1.39958 44.9161 0.175854 49.4862 0.175854C54.1464 0.175854 58.4068 1.96993 61.9381 6.75962C61.954 14.1317 62.0025 38.5846 61.975 48.651C59.0166 53.7572 54.27 55.8241 49.4862 55.8241C45.4997 55.8241 40.8354 53.8973 38.1974 50.2293C37.382 49.0956 36.6671 47.8855 36.0451 46.5984L34.6173 11.8652ZM33.5623 11.8697C32.5804 14.1701 31.8339 16.724 31.3323 19.4363L33.2225 3.71109L33.5623 11.8697ZM34.8936 43.8382C33.2863 39.3372 32.6014 34.0297 32.6014 27.9045C32.6014 23.3204 32.8464 18.962 33.6977 15.1194L34.8936 43.8382ZM0 55.8241H10.2825C2.77347 55.8241 1.28254 48.0141 2.18242 41.7523C2.77628 37.6176 3.90582 31.6754 5.22372 25.5717L12.2456 25.5499C12.9931 37.6638 14.5666 50.4121 14.6442 51.2477C14.9515 54.5428 14.0263 55.8241 10.2825 55.8241H14.0294H14.1608H21.1421H23.3895C19.2115 55.8241 18.1765 55.8188 18.3467 51.6549L20.2988 3.94493L26.9587 55.8241L30.6583 25.0432C30.6004 26.0191 30.571 27.0062 30.571 28.0002C30.571 35.3003 32.0936 41.9595 35.0232 46.9495L35.219 51.6549C35.3927 55.8245 34.336 55.8241 30.1492 55.8241H40.9456C37.5854 55.8241 36.4243 55.8276 36.2619 51.8748L36.1298 48.6596C36.6712 49.4191 37.2509 50.1295 37.8686 50.7857C40.9706 54.0801 45.377 56 49.4862 56C53.995 56 58.587 53.807 61.9706 49.9514C61.964 51.5886 61.9543 52.6669 61.9412 52.9616C61.8132 55.8241 57.1264 55.8241 57.1264 55.8241H68.9424H81.1405C77.4762 55.8241 75.2456 53.9642 74.026 51.3323C76.0645 44.008 77.4124 33.8241 76.036 25.7837L76.0817 25.5717L83.1033 25.5495C83.8511 37.6635 85.4246 50.4121 85.5022 51.2477C85.8094 54.5428 84.8842 55.8241 81.1405 55.8241H92C86.6449 55.7624 87.0131 55.8241 86.7869 53.3669C86.4806 50.0328 82.1048 0.0915718 82.1048 0.0915718C79.9127 7.15855 77.725 16.2972 75.8814 24.9478C75.6896 23.9833 75.4565 23.053 75.1771 22.167C73.7547 17.6578 71.7306 15.0997 69.6236 14.736C68.6652 14.5703 67.7084 14.8491 66.8598 15.5624C66.8113 15.3878 66.7619 15.2141 66.7112 15.0418C67.8529 13.5478 69.4196 12.4121 70.597 11.2568C72.3626 9.52456 73.1079 8.60281 73.301 6.75867C73.4941 4.91485 73.0344 2.08812 70.179 0.956604C67.3235 -0.174911 64.1001 0.0915718 64.1001 0.0915718C67.8279 0.286442 70.8536 1.14482 71.4387 5.43165C71.673 7.14968 70.9972 9.60821 68.6799 12.1789C67.7497 13.2106 67.1026 14.0557 66.6367 14.7908C65.9684 12.5737 65.1036 10.529 64.031 8.72321V0.0915718H57.2685C62.6427 0.0915718 61.8799 2.59795 61.9334 4.61636L61.9359 5.81917C58.608 2.039 53.9456 0 49.4862 0C44.7753 0 40.0416 2.18825 36.7303 6.40569C35.9205 7.43707 35.1874 8.58284 34.5335 9.82431L34.3295 4.867C34.1333 0.0915718 34.9697 0.0915718 36.0544 0.0915718H33.0397L27.0003 53.0031L20.9609 0.0915718H17.9762C19.5717 0.0915718 19.8874 0.0909386 19.6909 4.867L17.7588 51.8748C17.6661 54.1232 17.388 55.0912 16.6436 55.5085C16.0059 55.2142 16.0441 54.6159 15.929 53.3669C15.6227 50.0328 11.2469 0.0915718 11.2469 0.0915718C7.87797 10.9527 4.51909 26.7077 2.40457 38.0634C1.43993 43.2438 1.0122 48.6 3.56884 52.633C5.55663 55.7687 2.63579 55.8241 0 55.8241Z" fill="currentColor"/>
        </svg>
        <!-- <Icon name="app-icon:logo" mode="svg" height="56px" class="logo-svg max-sm:h-[40px]" /> -->
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

        <Button variant="text" severity="secondary" class="max-sm:!hidden relative" @click="handleFavoritesClick">
          <Icon
            name="app-icon:heart-outlined"
            mode="svg"
            color="#0F0F0F"
            height="24px"
            class="max-sm:hidden"
          />
          <span
            v-if="favoriteCount"
            class="favorites-badge"
          >
            {{ favoriteCount }}
          </span>
        </Button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo-link {
  display: inline-flex;
}

.logo-svg {
  color: #000;
  mix-blend-mode: difference;
  filter: invert(1);
  position: relative;
  z-index: 10;
  transition: color 0.2s ease;
}

.favorites-badge {
  font-size: 14px;
  line-height: 1;
  text-align: center;
  font-weight: 400;
}

@media (max-width: 640px) {
  .logo-svg {
    mix-blend-mode: normal;
    filter: none;
    color: #0f0f0f;
  }
}
</style>
