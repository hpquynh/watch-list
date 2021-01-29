import React, { ReactElement } from "react"
import Spin from "antd/lib/spin"
import Empty from "antd/lib/empty"
import { SearchBox, WatchCard } from "~/src/shared"
import { useWatchList } from "~/src/pages/WatchList/hooks/useWatchList"
import "./WatchList.scss"

export const WatchList: React.FC = (): ReactElement => {
  const [query, isLoading, data, errorMsg, handleSearch] = useWatchList()
  return (
    <section>
      <SearchBox
        value={query?.keyword}
        placeholder="Type a name..."
        onChange={(value) => handleSearch(value.toString())}
      />
      <div className="watchList">
        {data && data?.map((item, index) => <WatchCard key={index} data={item} />)}
        {isLoading && (
          <div className="loading">
            <Spin size="large" />
          </div>
        )}
        {!isLoading && !errorMsg && data?.length === 0 && (
          <div className="empty">
            <Empty />
          </div>
        )}
      </div>
      {errorMsg && <div>{errorMsg}</div>}
    </section>
  )
}
