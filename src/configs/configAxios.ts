import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { environment } from "~/src/configs/environment"

const createApiClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  const http = axios.create(config)
  http.interceptors.request.use(async (config) => config)
  return http
}

export const apiClient = createApiClient({
  baseURL: `${environment.API_ROOT}`,
})
