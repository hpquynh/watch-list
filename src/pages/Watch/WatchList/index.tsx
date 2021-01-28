import React from 'react';
import {SearchBox} from '~/src/components/SearchBox';
import {WatchCard} from '~/src/components/WatchCard';
import {useWatchList} from '~/src/pages/Watch/WatchList/useWatchList'
import './index.scss';

export const WatchList = () => {
    const ct = useWatchList();
    return <section>
        <SearchBox placeholder="Type a name..." onChange={(value) => ct.handleSearch(value.toString())}/>
        <div className="watch-list">
            {ct?.payload?.result?.map((item, index) => (
                <WatchCard key={index} loading={ct?.payload?.loading} data={item}/>
            ))}
        </div>
    </section>;
};