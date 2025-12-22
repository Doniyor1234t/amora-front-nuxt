import { defineStore } from "pinia";

export interface AuthUser {
  id?: number | string;
  name: string;
  email?: string;
  phone?: string;
}

const STORAGE_KEY = "amora-auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<AuthUser | null>(null);
  const isInitialized = ref(false);

  const persist = () => {
    if (process.server) {
      return;
    }

    if (user.value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user.value));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const loadFromStorage = () => {
    if (process.server) {
      return;
    }

    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      try {
        user.value = JSON.parse(storedUser);
      } catch (error) {
        console.warn("Failed to parse stored auth user", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    isInitialized.value = true;
  };

  const initialize = () => {
    if (isInitialized.value) {
      return;
    }
    loadFromStorage();
  };

  const login = (payload: AuthUser) => {
    user.value = payload;
    persist();
  };

  const logout = () => {
    user.value = null;
    persist();
  };

  const isAuthenticated = computed(() => Boolean(user.value));

  return {
    user,
    isAuthenticated,
    initialize,
    login,
    logout,
  };
});
