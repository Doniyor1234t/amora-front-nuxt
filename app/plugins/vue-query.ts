import {
  QueryClient,
  VUE_QUERY_CLIENT,
  hydrate,
  dehydrate,
  type DehydratedState,
} from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const defaultQueryOptions =
    config.public.vueQuery?.queryClientOptions?.defaultOptions ?? {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    };

  const queryClient = new QueryClient({
    defaultOptions: defaultQueryOptions,
  });

  if (import.meta.client) {
    queryClient.mount();
  }

  nuxtApp.vueApp.provide(VUE_QUERY_CLIENT, queryClient);

  if (import.meta.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.vueQueryState = dehydrate(queryClient);
    });
  } else {
    nuxtApp.hook("app:created", () => {
      const payloadState = nuxtApp.payload?.vueQueryState as
        | DehydratedState
        | undefined;
      if (payloadState) {
        hydrate(queryClient, payloadState);
      }
    });
  }

  return {
    provide: {
      queryClient,
    },
  };
});

declare module "#app" {
  interface NuxtApp {
    $queryClient: QueryClient;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $queryClient: QueryClient;
  }
}
