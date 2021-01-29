import { WatchListQueryParams } from "./WatchListQueryParams"
import { Watch } from "./Watch"

export type WatchListResponse = {
  query: WatchListQueryParams
  isLoading: boolean
  data: Watch[]
  errorMsg: string | null
  handleSearch: (value: string) => void
}
