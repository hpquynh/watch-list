import React, { ReactElement } from "react"
import Input from "antd/lib/input"
import Space from "antd/lib/space"
import "./SearchBox.scss"

const { Search } = Input

export const SearchBox: React.FC<SearchBoxProps> = (props: SearchBoxProps): ReactElement => {
  const { value, placeholder, onChange } = props
  return (
    <Space direction="vertical">
      <Search
        defaultValue={value}
        placeholder={placeholder}
        size="large"
        allowClear
        onSearch={onChange}
        enterButton
      />
    </Space>
  )
}
export type SearchBoxProps = {
  value: string
  placeholder: string
  onChange: (value: string) => void
}
