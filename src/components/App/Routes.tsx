import React, {ReactElement} from 'react';
import {Route, Switch} from 'react-router-dom';
import {routeProps} from '~/src/configs/routeProps';

export const Routes: React.FC = (): ReactElement => {
    return (
        <Switch>
            {routeProps.map((route, index) => (
                <Route key={index} {...route} />
            ))}
            <Route path="*">
                404 not found
            </Route>
        </Switch>
    )
};
