import { createApiClient } from './createApiClient'
import {environment} from '../configs/environment';

export const apiClient = createApiClient({
  baseURL: `${environment.API_ROOT}`,
});
