import React, {ReactElement} from 'react';
import {SearchBox, WatchCard} from '~/src/shared';
import {useWatchList} from '~/src/pages/WatchList/hooks/useWatchList'
import './WatchList.scss';

export const WatchList = (): ReactElement => {
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
