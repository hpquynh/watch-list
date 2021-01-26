import React from 'react';
import {SearchBox} from '../../../components/SearchBox';
import {WatchCard} from '../../../components/WatchCard';
import {DependencyInjection}  from '../../../components/DependencyInjection';
import {useWatchList} from './useWatchList'
import './index.scss';

export const WatchList = () => {
    const ct = useWatchList();
    return <DependencyInjection>
        <div>
            <SearchBox placeholder="Type a name..." />
            <div className="watch-list">
            <WatchCard loading={true}/>
          <WatchCard loading={false}/>
        </div>
        </div>
    </DependencyInjection>;
};