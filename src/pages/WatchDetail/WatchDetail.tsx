import React, { ReactElement, useState } from 'react';
import { Modal, Button } from 'antd';
import { useHistory } from "react-router-dom";

export const WatchDetail = (): ReactElement => {
    const [visible, setVisible] = useState(true);
    const history = useHistory();
    return <Modal
        visible={visible}
        title="Title"
        footer={[
            <Button key="esc" onClick={(e) => {
                setVisible(false);
                e.stopPropagation();
                history.goBack();
            }}>
                Close
            </Button>
        ]}
    >
    </Modal>;
};
