import { AxiosInstance } from 'axios'
import {Watch} from '~/src/services/types/Watch';


export const SearchWatches = async (api: AxiosInstance, req = ''): Promise<Watch[] | undefined> => {
  try {
    const res = await api.get<Watch[]>(req?`/watches?filter[where][name][like]=${req}`:'/watches');
    return res.data;
  } catch (err) {}
}
