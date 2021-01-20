import React from "react";
import {SearchBox} from '../../../components/SearchBox';
import {WatchCard} from '../../../components/WatchCard';
import './index.scss';

export const WatchList = () => {
    return <section>
        <SearchBox placeholder="Type a name or brand..." />
        <div className="watch-list">
          <WatchCard loading={true}/>
          <WatchCard loading={false}/>
        </div>
    </section>;
};