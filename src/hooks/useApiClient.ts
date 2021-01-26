import { useDependencyInjectionContainer } from '../components/DependencyInjection'
import { AxiosInstance } from 'axios'

export const useApiClient = (): AxiosInstance => {
  return useDependencyInjectionContainer().apiClient
}
