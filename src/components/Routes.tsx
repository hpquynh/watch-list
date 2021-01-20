import React, {ReactElement} from 'react'
import {Route, Switch} from 'react-router-dom'
import {routes} from '../configs/routes'

export const Routes: React.FC = (): ReactElement => {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
            <Route path="*">
                404 not found
            </Route>
        </Switch>
    )
};
