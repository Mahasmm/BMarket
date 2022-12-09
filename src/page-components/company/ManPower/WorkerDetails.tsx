import { Button, Modal, List, Checkbox } from 'antd';
import React, { useState, useEffect, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import VirtualList from 'rc-virtual-list';
import axios from 'axios';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import styles from './CompanyAgent.module.less';
// import { useRouter } from 'next/router';

export type WorkerDetailsRef = {
  onVisible: (data: any) => void;
};

export const WorkerDetails: ForwardRefRenderFunction<WorkerDetailsRef> = (props, ref) => {
  // const history = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const ContainerHeight = 400;
  const [data, setData] = useState<WorkerDetails[]>([]);
  const [orders, setOrders] = useState<CheckboxValueType[]>([]);

  // let [TRating, setTRating] = useState(0);
  // let rating = 0;

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
    setOrders(checkedValues);
  };

  interface WorkerDetails {
    _id: string;
    contactName: string;
    vaccine: string;
    experience: [
      {
        _id: string;
        companyName: string;
        iRating: number;
      },
    ];
    rating: number;
  }

  const appendData = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/b1/worker/cat/62e17ab9c4148c3fc08df1f4`,
    );
    console.log(response.data.data);
    // setData(response.data.data);
  };

  useEffect(() => {}, []);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  useImperativeHandle(
    ref,
    () => ({
      onVisible: (data) => {
        setData(data);
        setIsModalVisible(true);
      },
    }),
    [],
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  const order = async () => {
    const response = await axios.post(
      `http://localhost:8000/api/b1/company/booking/62e17ab9c4148c3fc08df1f4`,
      {
        agentId: '62e17ab9c4148c3fc08df1f4',
        projectId: '62e17eeff5326d4c70106dbc',
        workers: orders,
      },
    );

    console.log(response.data);
  };

  return (
    <Modal title="Skilled" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <div>
        <div>
          <Button onClick={() => order()} type="primary" shape="round">
            Order
          </Button>
        </div>
        <List>
          <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
            <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="id"
              onScroll={onScroll}
            >
              {(item: WorkerDetails) => (
                <List.Item key={item._id}>
                  <div>
                    <div className={styles.orderSplit}>
                      <div>
                        <h3>{item.contactName}</h3>
                      </div>
                      <div>
                        <Checkbox value={item._id}></Checkbox>
                      </div>
                    </div>

                    {/* {setTRating(0)} */}
                    {item.experience.map((exp) => (
                      <div key={exp._id}>
                        <div>
                          <h4>Company Name: {exp.companyName}</h4>
                        </div>
                        <div>
                          <h4>rating: {exp.iRating}</h4>
                          {/* {setTRating((rating = rating + exp.iRating))} */}
                        </div>
                      </div>
                    ))}
                    <h4>Total Rating </h4>
                  </div>
                </List.Item>
              )}
            </VirtualList>
          </Checkbox.Group>
        </List>
      </div>
    </Modal>
  );
};

export default React.forwardRef<WorkerDetailsRef>(WorkerDetails);
