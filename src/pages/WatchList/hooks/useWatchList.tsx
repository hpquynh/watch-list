import { useState } from "react"
import { useQuery } from "react-query"
import { Constants } from "~/src/configs/constants"
import { searchWatches } from "~/src/services/watch.service"
import { WatchListQueryParams, Watch } from "~/src/types"
import { useQueryParam } from "./useQueryParam"
import { isError } from "~/src/helpers/errorHelper"

export const useWatchList = (): [
  WatchListQueryParams,
  boolean,
  Watch[] | undefined,
  string | null,
  (value: string) => void
] => {
  const [keyword, setKeyword] = useQueryParam("keyword", "")
  const [query, setQuery] = useState<WatchListQueryParams>({ keyword: keyword })
  let errorMsg: string | null = null
  const handleSearch = (value: string) => {
    setQuery({ keyword: value })
    setKeyword(value)
  }
  const { isLoading, data, error } = useQuery(
    [Constants.APIS.SEARCH_WATCH, query.keyword],
    async () => await searchWatches(query.keyword)
  )
  if (isError(error)) {
    errorMsg = error.message
  }
  return [query, isLoading, data, errorMsg, handleSearch]
}
