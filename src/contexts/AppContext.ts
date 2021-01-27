import { createContext } from 'react';
import { AxiosInstance } from 'axios';

export type AppContainer = {
  apiClient: AxiosInstance
}

export const AppContext = createContext<AppContainer>(undefined as any)
