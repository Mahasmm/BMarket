// import { Avatar, Button, Modal } from 'antd';
import React, { useState, ForwardRefRenderFunction, useImperativeHandle } from 'react';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import styles from './../../page-components/agents/workers.module.less';
import axios from 'axios';
import { useRouter } from 'next/router';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Modal, Select, Avatar, Upload } from 'antd';

export type WorkerModalRef = {
  onVisible: (data: any) => void;
};

const WorkerModal: ForwardRefRenderFunction<WorkerModalRef> = (props, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState(0);
  const [report, setReport] = useState('');
  const [nic, setNic] = useState('');
  const [id, setId] = useState('');
  const history = useRouter();

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

  const cancelEditModal = () => {
    setIsEditModalVisible(false);
  };

  const deleteWorker = async (id: any) => {
    await axios.delete(`http://localhost:8000/api/b1/worker/${id}`);
    history.reload();
  };

  const editWorker = async (id: any) => {
    setIsEditModalVisible(true);
  };

  const onFinish = (values: any) => {
    values.worker.agentId = '62e17ab9c4148c3fc08df1f4';
    console.log(values);

    axios
      .patch(`http://localhost:8000/api/b1/worker/${id}`, values.worker)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.reload();
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
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
        setId(data._id);
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

            <Modal footer={null} visible={isEditModalVisible} onCancel={cancelEditModal}>
              <div>
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name={['worker', 'contactName']}
                    label="Full Name"
                    rules={[{ required: true }]}
                    initialValue={name}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={['worker', 'contactEmail']}
                    label="Email"
                    rules={[{ type: 'email' }, { required: true }]}
                    initialValue={email}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={['worker', 'contactNo']}
                    initialValue={number}
                    label="Phone Number"
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={['worker', 'NIC']}
                    initialValue={nic}
                    label="NIC"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={['worker', 'skillCategory']}
                    label="Skill Category"
                    rules={[{ required: true }]}
                  >
                    <Select>
                      <Select.Option value={1}>BrickMason</Select.Option>
                      <Select.Option value={2}>TileSetter</Select.Option>
                      <Select.Option value={3}>Roofer</Select.Option>
                      <Select.Option value={4}>Carpenter</Select.Option>
                      <Select.Option value={5}>Reinforcement</Select.Option>
                      <Select.Option value={6}>Unskilled</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name={['worker', 'vaccineReport']}
                    label="Vaccine Report"
                    valuePropName="fileList"
                  >
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 2 }}>Upload</div>
                      </div>
                    </Upload>
                  </Form.Item>

                  <Form.Item
                    name={['worker', 'agentId']}
                    initialValue="62e17ab9c4148c3fc08df1f4"
                    style={{ marginTop: '-3rem' }}
                  >
                    <Input type="hidden" value="62e17ab9c4148c3fc08df1f4" />
                  </Form.Item>

                  <Form.Item>
                    <Button style={{ backgroundColor: 'green', color: 'white' }} htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Modal>
          </div>
        </div>
        <div>
          <Button size="small" type="link" onClick={() => editWorker(id)}>
            Edit
          </Button>
          <Button size="small" danger type="link" onClick={() => deleteWorker(id)}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default React.forwardRef<WorkerModalRef>(WorkerModal);
