import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  useMutation,
  useQuery,
  type QueryKey,
  type UseMutationOptions,
  type UseQueryOptions,
  type QueryClient,
} from '@tanstack/vue-query';

type ApiQueryOptions<TData, TError> = Omit<
  UseQueryOptions<TData, TError, TData, QueryKey>,
  'queryKey' | 'queryFn'
>;

type ApiRequestConfig = AxiosRequestConfig | (() => AxiosRequestConfig);

type ApiMutationOptions<
  TData,
  TError,
  TVariables extends AxiosRequestConfig
> = Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;

const useQueryClientInstance = (): QueryClient => {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp.$queryClient) {
    throw new Error('Vue Query client is not initialized.');
  }

  return nuxtApp.$queryClient;
};

export const useApiClient = (): AxiosInstance => {
  const { $api } = useNuxtApp();
  return $api;
};

export const useApiQuery = <TData = unknown, TError = unknown>(
  key: QueryKey,
  config: ApiRequestConfig,
  options?: ApiQueryOptions<TData, TError>,
) => {
  const api = useApiClient();
  const queryClient = useQueryClientInstance();

  return useQuery<TData, TError>({
    queryKey: key,
    queryFn: async () => {
      const requestConfig =
        typeof config === 'function' ? config() : config;
      const { data } = await api.request<TData>(requestConfig);
      return data;
    },
    ...(options ?? {}),
  }, queryClient);
};

export const useApiMutation = <
  TData = unknown,
  TError = unknown,
  TVariables extends AxiosRequestConfig = AxiosRequestConfig,
>(
  options?: ApiMutationOptions<TData, TError, TVariables>,
) => {
  const api = useApiClient();
  const queryClient = useQueryClientInstance();

  return useMutation<TData, TError, TVariables>({
    mutationFn: async (requestConfig) => {
      const { data } = await api.request<TData>(requestConfig);
      return data;
    },
    ...(options ?? {}),
  }, queryClient);
};
