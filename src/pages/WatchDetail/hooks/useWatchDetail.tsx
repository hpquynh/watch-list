import { useQuery } from "react-query"
import { Constants } from "~/src/configs/constants"
import { findById } from "~/src/services/watch.service"
import { Watch } from "~/src/types"
import { isError } from "~/src/helpers/errorHelper"

export const useWatchDetail = (id: string): [boolean, Watch | undefined, string | null] => {
  let errorMsg: string | null = null
  const { isLoading, data, error } = useQuery(
    [Constants.APIS.FIND_WATCH_BY_ID, id],
    async () => await findById(id)
  )
  if (isError(error)) {
    errorMsg = error.message
  }
  return [isLoading, data, errorMsg]
}
