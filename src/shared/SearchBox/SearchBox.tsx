import React, { ReactElement } from 'react';
import Input from 'antd/lib/input';
import Space from 'antd/lib/space';
import './SearchBox.scss';

const {Search} = Input;

export const SearchBox = (props: SearchBoxProps): ReactElement => {
    const {placeholder, onChange} = props;
    return <Space direction="vertical">
        <Search placeholder={placeholder} size="large" allowClear onSearch={onChange} enterButton/>
    </Space>;
};
export type SearchBoxProps = {
    placeholder: string,
    onChange: (value: string) => void
}
