import { AxiosInstance, AxiosResponse } from "axios"
import { apiClient } from "~/src/configs/configAxios"
import { Watch } from "~/src/types"

export const searchWatches = async (req = ""): Promise<Watch[] | undefined> => {
  const api: AxiosInstance = apiClient
  const res: AxiosResponse<Watch[]> = await api.get<Watch[]>(
    req ? `/watches?filter[where][name][like]=${req.toLowerCase()}` : "/watches"
  )
  return res.data
}

export const findById = async (id: string): Promise<Watch | undefined> => {
  const api: AxiosInstance = apiClient
  const res: AxiosResponse<Watch> = await api.get<Watch>(`/watches/${id}`)
  return res.data
}
