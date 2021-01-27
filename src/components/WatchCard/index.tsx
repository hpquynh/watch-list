import React from 'react';
import Card from 'antd/lib/card';
import Skeleton from 'antd/lib/skeleton';
import Image from 'antd/lib/image';
import Tag from 'antd/lib/tag';
import {Watch} from '~/src/services/types/Watch';

const cardStyle = {
    width: '300px',
    margin: '8px'
}
export const WatchCard = (props: WatchInfoProps) => {
    const {loading, data} = props;
    const { Meta } = Card;
    return (<Card style={cardStyle}
                  hoverable
                  cover={data?.image && <Image src={data.image}/>}>
        <Skeleton loading={loading} active>
            {data && <div>
                <Meta title={data.name} description={data.description} />
                <div>{data.price}</div>
                <div>{data.boughtAt}</div>
                <Tag color="#55acee">
                    {data.brand}
                </Tag>
            </div>}
            <Meta  />
        </Skeleton>
    </Card>);
}
export type WatchInfoProps = {
    loading: boolean,
    data?: Watch
}