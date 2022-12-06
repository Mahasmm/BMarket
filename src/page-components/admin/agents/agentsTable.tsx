import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  agentId: string;
  agentName: string;
  NIC: string;
  location: string;
  contactNo: string;
  workersCount: number;
}

const data: DataType[] = [
  {
    key: '1',
    agentId: '001',
    agentName: 'Ram',
    NIC: '9626429884V',
    location: 'Colombo',
    contactNo: '0777556644',
    workersCount: 10,
  },
  {
    key: '2',
    agentId: '002',
    agentName: 'Azim',
    NIC: '8926421114V',
    location: 'Kandy',
    contactNo: '0727776611',
    workersCount: 5,
  },
  {
    key: '3',
    agentId: '003',
    agentName: 'Chamal',
    NIC: '9111429884V',
    location: 'Galle',
    contactNo: '0714356564',
    workersCount: 7,
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Agent ID',
    dataIndex: 'agentId',
    key: 'agentId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Agent Name',
    dataIndex: 'agentName',
    key: 'agentName',
  },
  {
    title: 'NIC',
    dataIndex: 'NIC',
    key: 'NIC',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Contact',
    dataIndex: 'contactNo',
    key: 'contactNo',
  },
  {
    title: 'Available workers',
    dataIndex: 'workersCount',
    key: 'workersCount',
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

export const AgentsTable = () => (
  <div className={styles.bodyContainer}>
    <Table columns={columns} dataSource={data} />
  </div>
);
