import tailwindcss from "@tailwindcss/vite";

import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
  button: {
    root: {
      neutral: {
        background: "#64748B",
        borderColor: "#64748B",
        color: "#ffffff",
        hoverBackground: "#475569",
        hoverBorderColor: "#475569",
        focusRing: {
          width: "2px",
          color: "rgba(100, 116, 139, 0.3)",
        },
      },
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css', './app/assets/css/fonts.css'],
  // plugins: [
  //   '~/plugins/yandexMaps.client',
  // ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/hints',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? 'https://cms.amora-brand.uz/api',
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL ?? 'https://cms.amora-brand.uz',
      yandexMapsApiKey: "b474bcd6-2e29-430c-ac3d-91d1c5f6ecf1",
      vueQuery: {
        queryClientOptions: {
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              retry: 1,
            },
          },
        },
      },
    },
  },
  icon: {
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    customCollections: [
      {
        prefix: "app-icon",
        dir: "./app/assets/icons",
        normalizeIconName: false,
      },
    ],
  },
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
  app: {
    head: {
      title: 'Amora',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Premium atelier, bespoke tailoring and fashion collections by AMORA.' },

        // Open Graph
        { property: 'og:title', content: 'AMORA - Atelier & Fashion House' },
        { property: 'og:description', content: 'Premium atelier, bespoke tailoring and fashion collections by AMORA.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  }
})
