import { RouteProps } from 'react-router'
import { WatchList } from '../pages/Watch/WatchList'

export const routes: RouteProps[] = [
    { path: '/', component: WatchList, exact: true }
];
