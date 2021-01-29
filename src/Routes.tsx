import React, { ReactElement } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { WatchList, WatchDetail } from "./pages"

export const Routes: React.FC = (): ReactElement => {
  const location = useLocation()
  // @ts-ignore
  const previousLocation = location?.state && location.state?.from
  return (
    <div>
      <Switch location={previousLocation || location}>
        <Route path="/" component={WatchList} exact />
        <Route path="*">404 not found</Route>
      </Switch>
      {previousLocation && (
        <Route path="/detail/:id">
          <WatchDetail />
        </Route>
      )}
    </div>
  )
}
