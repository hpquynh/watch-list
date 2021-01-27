import { RouteProps } from 'react-router';
import { WatchList } from '~/src/pages/Watch/WatchList';

export const routeProps: RouteProps[] = [
    { path: '/', component: WatchList, exact: true }
];
