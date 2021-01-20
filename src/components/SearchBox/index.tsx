import React from 'react';
import Input from 'antd/lib/input';
import Space from 'antd/lib/space';
import './index.scss';

const { Search } = Input;
const onSearch = value => console.log(value);

export const SearchBox = (props: SearchBoxProps) => {
    const { placeholder } = props;
    return  <Space direction="vertical">
        <Search placeholder={placeholder} size="large" allowClear onSearch={onSearch} enterButton />
    </Space>;
};
export type SearchBoxProps = {
    placeholder: string
}