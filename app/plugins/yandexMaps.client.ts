import { createYmaps } from "vue-yandex-maps";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const apiKey = config.public.yandexMapsApiKey;

  if (!apiKey) {
    if (process.dev) {
      console.warn(
        "[YandexMap] Missing Yandex Maps API key. Set NUXT_PUBLIC_YANDEX_MAPS_API_KEY to enable the map."
      );
    }
    return;
  }

  const ymaps = createYmaps({
    apikey: apiKey,
    lang: "ru_RU",
    // initializeOn: "onPluginInit",
    // scriptAttributes: {
    //   crossorigin: "anonymous",
    // },
    // version: "3.0",
  });

  nuxtApp.vueApp.use(ymaps);
});
