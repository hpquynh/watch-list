import { AxiosInstance } from 'axios';
import { apiClient } from '~/src/services/service';

export const useApiClient = (): AxiosInstance => {
  return apiClient;
}
