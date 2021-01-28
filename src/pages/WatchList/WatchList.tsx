import React, { ReactElement } from "react"
import { SearchBox, WatchCard } from "~/src/shared"
import { useWatchList } from "~/src/pages/WatchList/hooks/useWatchList"
import "./WatchList.scss"

export const WatchList: React.FC = (): ReactElement => {
  const res = useWatchList()
  const data = res?.payload?.result
  const loading = res?.payload?.loading
  return (
    <section>
      <SearchBox
        placeholder="Type a name..."
        onChange={(value) => res.handleSearch(value.toString())}
      />
      <div className="watchList">
        {data?.map((item, index) => (
          <WatchCard key={index} loading={loading} data={item} />
        ))}
      </div>
    </section>
  )
}
