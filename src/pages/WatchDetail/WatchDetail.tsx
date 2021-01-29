import React, { ReactElement, useState } from "react"
import { Image, Modal, Tag, Card, Skeleton } from "antd"
import { useHistory, useParams } from "react-router-dom"
import { generateColor } from "~/src/helpers/generateColor"
import { formatCurrency } from "~/src/helpers/formatCurrency"
import dayjs from "dayjs"
import { Constants } from "~/src/configs/constants"
import { useWatchDetail } from "./hooks/useWatchDetail"
import "./WatchDetail.scss"

export const WatchDetail: React.FC = (): ReactElement => {
  const { Meta } = Card
  const { id } = useParams()
  const [visible, setVisible] = useState(true)
  const history = useHistory()
  const [isLoading, data, errorMsg] = useWatchDetail(id)

  const handleCancel = (e) => {
    setVisible(false)
    e.stopPropagation()
    history.goBack()
  }
  return (
    <Modal className="modal" visible={visible} footer={null} onCancel={handleCancel}>
      {isLoading && <Skeleton active />}
      {data && (
        <div className="modal__detail">
          {/*{data.image && <Image preview={false} src={data.image} />}*/}
          <Image
            preview={false}
            src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          />
          <div className="modal__detail__header">
            <Tag color={generateColor(data.brand)}>{data.brand}</Tag> <Meta title={data.name} />
          </div>
          <p>{data.description}</p>
          <strong>{formatCurrency(data.price)}</strong>
          <div>{dayjs(data.boughtAt).format(Constants.LONG_DATE_FORMAT)}</div>
        </div>
      )}
      {errorMsg && <div>{errorMsg}</div>}
    </Modal>
  )
}
