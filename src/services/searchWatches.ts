import { AxiosInstance } from 'axios'
import {Watch} from './types/Watch';


export const SearchWatches = async (api: AxiosInstance, req = ''): Promise<Watch[] | undefined> => {
  try {
    const res = await api.get<Watch[]>(`/watches?filter={"where":{name: {like: ${req}.*}}`)

    return res.data
  } catch (err) {}
}
