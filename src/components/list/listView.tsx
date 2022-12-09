/* eslint-disable react/react-in-jsx-scope */
import { List, Avatar } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useRef } from 'react';
import WorkerModal, { WorkerModalRef } from './../modals/workerModal';

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
  const ref = useRef<WorkerModalRef>(null);

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
                    {item.contactName}{' '}
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
