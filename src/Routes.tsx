import React, { ReactElement } from "react"
import { Route, Switch } from "react-router-dom"
import { WatchList } from "./pages"

export const Routes: React.FC = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" component={WatchList} exact />
      <Route path="*">404 not found</Route>
    </Switch>
  )
}
