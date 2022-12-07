import { Space, Button, Form, Input, Modal, Select, Row, Col } from 'antd';
import React, { useState } from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

const data = [
  {
    key: '0',
    companyId: '001',
    companyName: 'RD Consultants',
    grade: 'B',
    location: 'Colombo',
    contact: '0112331132',
    status: true,
  },
  {
    key: '1',
    companyId: '002',
    companyName: 'RDA',
    grade: 'B',
    location: 'Colombo',
    contact: '0112331132',
    status: true,
  },
  {
    key: '2',
    companyId: '003',
    companyName: 'Maga Engineering',
    grade: 'A',
    location: 'Nawala',
    contact: '0112331132',
    status: true,
  },
];

export const CompaniesTable = () => {
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
        Add new company
      </Button>
      <Modal
        title="Create Company"
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
          <Input name="companyId" value="004" hidden />
          <Form.Item label="Company name">
            <Input />
          </Form.Item>
          <Form.Item label="Grade">
            <Select>
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="C">C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Location">
            <Input />
          </Form.Item>
          <Form.Item label="Contact number">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> Company Id </Col>
          <Col span={6}> Company Name </Col>
          <Col span={2}> Grade </Col>
          <Col span={4}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={6}> Action </Col>
        </Row>

        {data.map((item) => {
          return (
            <>
              <Row gutter={[16, 16]} className={styles.tableRow}>
                <Col span={2}> {item.companyId} </Col>
                <Col span={6}> {item.companyName} </Col>
                <Col span={2}> {item.grade} </Col>
                <Col span={4}> {item.location} </Col>
                <Col span={4}> {item.contact} </Col>
                <Col span={6}>
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
