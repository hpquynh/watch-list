import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const createApiClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const http = axios.create(config)

  http.interceptors.request.use(async (config) => {
    return config
  });

  return http
};
