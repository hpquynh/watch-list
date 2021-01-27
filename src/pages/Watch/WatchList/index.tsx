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
            {ct?.list?.result?.map((item, index) => (
                <WatchCard key={index} loading={ct?.list?.loading} data={item}/>
            ))}
        </div>
    </section>;
};