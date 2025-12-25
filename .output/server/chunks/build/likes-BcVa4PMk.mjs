import { defineStore } from 'pinia';
import { ref } from 'vue';

const writeStorage = (ids) => {
  {
    return;
  }
};
const useLikesStore = defineStore("likes", () => {
  const likedIds = ref([]);
  const persist = () => {
    writeStorage(likedIds.value);
  };
  const toggle = (id) => {
    const index = likedIds.value.indexOf(id);
    if (index === -1) {
      likedIds.value = [...likedIds.value, id];
    } else {
      likedIds.value = likedIds.value.filter((item) => item !== id);
    }
    persist();
  };
  const like = (id) => {
    if (!likedIds.value.includes(id)) {
      likedIds.value = [...likedIds.value, id];
      persist();
    }
  };
  const dislike = (id) => {
    likedIds.value = likedIds.value.filter((item) => item !== id);
    persist();
  };
  const isLiked = (id) => likedIds.value.includes(id);
  return {
    likedIds,
    toggle,
    like,
    dislike,
    isLiked
  };
});

export { useLikesStore as u };
//# sourceMappingURL=likes-BcVa4PMk.mjs.map
