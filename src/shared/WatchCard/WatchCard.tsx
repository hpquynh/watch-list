import React, { ReactElement } from "react"
import Card from "antd/lib/card"
import Image from "antd/lib/image"
import Tag from "antd/lib/tag"
import dayjs from "dayjs"
import { Watch } from "~/src/types/Watch"
import { Constants } from "~/src/configs/constants"
import { formatCurrency } from "~/src/helpers/formatCurrency"
import { generateColor } from "~/src/helpers/generateColor"
import "./WatchCard.scss"

const cardStyle = {
  width: "300px",
  margin: "8px",
}

export const WatchCard: React.FC<WatchInfoProps> = (props: WatchInfoProps): ReactElement => {
  const { data } = props
  const { Meta } = Card
  return (
    <Card
      style={cardStyle}
      className="watch"
      hoverable
      cover={data?.image && <Image src={data.image} />}
    >
      {data && (
        <div>
          <div className="watch__header">
            <Tag color={generateColor(data.brand)}>{data.brand}</Tag> <Meta title={data.name} />
          </div>
          <strong>{formatCurrency(data.price)}</strong>
          <div>{dayjs(data.boughtAt).format(Constants.LONG_DATE_FORMAT)}</div>
        </div>
      )}
      <Meta />
    </Card>
  )
}
export type WatchInfoProps = {
  data?: Watch
}
