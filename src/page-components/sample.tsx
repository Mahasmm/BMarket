import React, { useState, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { AgentLayout } from '../layout/AgentLayout/AgentLayout';
import { Button, Modal, List, Checkbox } from 'antd';

export type HotTipsRef = {
  onVisible: (data: any) => void;
};

type Props = {
  data: string;
};

const Sample: ForwardRefRenderFunction<HotTipsRef, Props> = (props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [item, setItem] = useState();

  useImperativeHandle(
    ref,
    () => ({
      onVisible: (data) => {
        setItem(data);
        setVisible(true);
      },
    }),
    [],
  );

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Modal title="Skilled" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <div>
        <h1>hello hi</h1>
        <h3>{item}</h3>
      </div>
    </Modal>
  );
};

export default React.forwardRef<HotTipsRef>(Sample);
