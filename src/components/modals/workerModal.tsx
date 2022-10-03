import { Avatar, Button, Modal } from 'antd';
import React, { useState, useEffect, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import styles from './../../page-components/agents/workers.module.less';

export type WorkerModalRef = {
  onVisible: (data: any) => void;
};

const WorkerModal: ForwardRefRenderFunction<WorkerModalRef> = (props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [report, setReport] = useState('');
  const [nic, setNic] = useState('');

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showImageModal = () => {
    setIsImageModalVisible(true);
  };

  const cancelImageModal = () => {
    setIsImageModalVisible(false);
  };

  useImperativeHandle(
    ref,
    () => ({
      onVisible: (data) => {
        setName(data.contactName);
        setEmail(data.contactEmail);
        setNumber(data.contactNo);
        setReport(data.vaccineReport);
        setNic(data.NIC);
        setIsModalVisible(true);
      },
    }),
    [],
  );

  return (
    <Modal
      footer={null}
      title="WORKER DETAILS"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div>
        <div className={styles.imageCenter}>
          <Avatar size={70} icon={<UserOutlined />} />
        </div>
        <div className={styles.modalDetails}>
          <h4>Name</h4>
          <h4>{name}</h4>
        </div>
        <div className={styles.modalDetails}>
          <h4>Mobile Number</h4>
          <h4>{number}</h4>
        </div>
        <div className={styles.modalDetails}>
          <h4>Email</h4>
          <h4>{email}</h4>
        </div>
        <div className={styles.modalDetails}>
          <h4>NIC</h4>
          <h4>{nic}</h4>
        </div>
        <div className={styles.modalFlex}>
          <div className={styles.modalDetails}>
            <h4>Vaccine Report</h4>
            <h4>{report}</h4>
          </div>
          <div className={styles.modalDetails}>
            <a onClick={() => showImageModal()}>
              <Avatar size={42} icon={<UserAddOutlined />} />
            </a>

            <Modal footer={null} visible={isImageModalVisible} onCancel={cancelImageModal}>
              <img src={report} />
            </Modal>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default React.forwardRef<WorkerModalRef>(WorkerModal);
