import axios, { type AxiosInstance } from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const apiClient: AxiosInstance = axios.create({
    baseURL: config.public.apiBase,
    timeout: 15000,
    headers: {
      Accept: 'application/json',
    },
  });

  return {
    provide: {
      api: apiClient,
    },
  };
});

declare module '#app' {
  interface NuxtApp {
    $api: AxiosInstance;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
  }
}
