import { Table, Space, Button, Form, Input, Modal, DatePicker, InputNumber, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  companyId: string;
  companyName: string;
  grade: string;
  location: string;
  contact: string;
}

const data: DataType[] = [
  {
    key: '1',
    companyId: '001',
    companyName: 'RD Consultants',
    grade: 'B',
    location: 'Colombo',
    contact: '0112331132',
  },
  {
    key: '2',
    companyId: '002',
    companyName: 'RDA',
    grade: 'B',
    location: 'Colombo',
    contact: '0112331132',
  },
  {
    key: '3',
    companyId: '003',
    companyName: 'Maga Engineering',
    grade: 'A',
    location: 'Nawala',
    contact: '0112331132',
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Company ID',
    dataIndex: 'companyId',
    key: 'companyId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button type="primary" icon={<EditOutlined />}>
          Edit
        </Button>
        <Button className={styles.deleteBtn} icon={<DeleteOutlined />}>
          Delete
        </Button>
      </Space>
    ),
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
          <Button htmlType="reset">Reset</Button>,
          <Button htmlType="submit" className={styles.successBtn} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} layout="horizontal">
          <Form.Item label="Input">
            <Input />
          </Form.Item>
          <Form.Item label="Select">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>

      <div className={styles.bodyContainer}>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};
