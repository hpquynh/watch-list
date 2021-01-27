import React from 'react';
import Input from 'antd/lib/input';
import Space from 'antd/lib/space';
import './index.scss';

const {Search} = Input;

export const SearchBox = (props: SearchBoxProps) => {
    const {placeholder, onChange} = props;
    return <Space direction="vertical">
        <Search placeholder={placeholder} size="large" allowClear onSearch={onChange} enterButton/>
    </Space>;
};
export type SearchBoxProps = {
    placeholder: string,
    onChange: (value: string) => void
}