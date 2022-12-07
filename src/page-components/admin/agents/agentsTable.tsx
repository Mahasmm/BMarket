import { Space, Button, Modal, Form, Input, InputNumber, Row, Col } from 'antd';
import React, { useState } from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

const data = [
  {
    key: '0',
    agentId: '001',
    agentName: 'Ram',
    NIC: '9626429884V',
    location: 'Colombo',
    contactNo: '0777556644',
    workersCount: 10,
  },
  {
    key: '1',
    agentId: '002',
    agentName: 'Azim',
    NIC: '8926421114V',
    location: 'Kandy',
    contactNo: '0727776611',
    workersCount: 5,
  },
  {
    key: '2',
    agentId: '003',
    agentName: 'Chamal',
    NIC: '9111429884V',
    location: 'Galle',
    contactNo: '0714356564',
    workersCount: 7,
  },
];

export const AgentsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className={styles.addBtn} icon={<PlusCircleOutlined />} onClick={showModal}>
        Add new agent
      </Button>
      <Modal
        title="Create Agent"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="reset" htmlType="reset">
            Reset
          </Button>,
          <Button key="submit" htmlType="submit" className={styles.successBtn} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} layout="horizontal">
          <Input name="agentId" value="004" hidden />
          <Form.Item label="Agent name">
            <Input />
          </Form.Item>
          <Form.Item label="NIC">
            <Input />
          </Form.Item>
          <Form.Item label="Location">
            <Input />
          </Form.Item>
          <Form.Item label="Contact number">
            <Input />
          </Form.Item>
          <Form.Item label="Available workers">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>

      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> Agent Id </Col>
          <Col span={4}> Agent Name </Col>
          <Col span={4}> NIC </Col>
          <Col span={2}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={4}> Available workers </Col>
          <Col span={4}> Action </Col>
        </Row>

        {data.map((item) => {
          return (
            <>
              <Row gutter={[16, 16]} className={styles.tableRow}>
                <Col span={2}> {item.agentId} </Col>
                <Col span={4}> {item.agentName} </Col>
                <Col span={4}> {item.NIC} </Col>
                <Col span={2}> {item.location} </Col>
                <Col span={4}> {item.contactNo} </Col>
                <Col span={4}> {item.workersCount} </Col>
                <Col span={4}>
                  <Space size="middle">
                    <Button type="primary" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button className={styles.deleteBtn} icon={<DeleteOutlined />}>
                      Delete
                    </Button>
                  </Space>
                </Col>
              </Row>
            </>
          );
        })}
      </div>
    </>
  );
};
