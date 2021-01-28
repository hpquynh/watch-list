import {RouteProps} from 'react-router';
import {WatchList, WatchDetail} from '~/src/pages';

export const routeProps: RouteProps[] = [
    {path: '/', component: WatchList, exact: true},
    {path: '/detail/:id', children: WatchDetail}
];
