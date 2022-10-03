/* eslint-disable react/react-in-jsx-scope */
import { Button, Col, Row, List, Card, Avatar } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './workers.module.less';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState, useRef } from 'react';
import WorkerModal, { WorkerDetailsRef } from './../modals/workerModal';

interface WorkerItem {
  contactEmail: string;
  availability: boolean;
  NIC: string;
  gender: string;
  experience: {
    iRating: number;
    companyName: string;
  };
  contactName: string;
  contactNo: string;
  vaccineReport: string;
}

export const ListView = (props: any) => {
  const ContainerHeight = 200;
  const ref = useRef<WorkerDetailsRef>(null);

  useEffect(() => {}, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
    }
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope

    <div>
      <List>
        <VirtualList
          data={props.data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item: WorkerItem) => (
            <List.Item key={item.contactEmail}>
              <List.Item.Meta
                avatar={<Avatar icon={<UserAddOutlined />} />}
                title={
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(item);
                    }}
                  >
                    {item.contactName}
                  </a>
                }
              />
            </List.Item>
          )}
        </VirtualList>
        <WorkerModal ref={ref} />
      </List>
    </div>
  );
};
