import { AxiosInstance } from "axios"
import { Watch } from "~/src/types/Watch"

export const searchWatches = async (api: AxiosInstance, req = ""): Promise<Watch[] | undefined> => {
  const res = await api.get<Watch[]>(
    req ? `/watches?filter[where][name][like]=${req.toLowerCase()}` : "/watches"
  )
  return res.data
}
