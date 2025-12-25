import { defineStore } from "pinia";
import { onMounted } from "vue";

const STORAGE_KEY = "amora-liked-products";

type ProductId = number | string;

const readStorage = (): ProductId[] => {
  if (process.server) {
    return [];
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to parse liked products", error);
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
};

const writeStorage = (ids: ProductId[]) => {
  if (process.server) {
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

export const useLikesStore = defineStore("likes", () => {
  const likedIds = ref<ProductId[]>([]);

  const syncFromStorage = () => {
    likedIds.value = readStorage();
  };

  if (process.client) {
    onMounted(() => {
      syncFromStorage();
    });
  }

  const persist = () => {
    writeStorage(likedIds.value);
  };

  const toggle = (id: ProductId) => {
    const index = likedIds.value.indexOf(id);
    if (index === -1) {
      likedIds.value = [...likedIds.value, id];
    } else {
      likedIds.value = likedIds.value.filter((item) => item !== id);
    }
    persist();
  };

  const like = (id: ProductId) => {
    if (!likedIds.value.includes(id)) {
      likedIds.value = [...likedIds.value, id];
      persist();
    }
  };

  const dislike = (id: ProductId) => {
    likedIds.value = likedIds.value.filter((item) => item !== id);
    persist();
  };

  const isLiked = (id: ProductId) => likedIds.value.includes(id);

  return {
    likedIds,
    toggle,
    like,
    dislike,
    isLiked,
  };
});
