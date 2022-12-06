import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import styles from './admin.module.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  agentId: string;
  agentName: string;
  NIC: string;
  location: string;
  contactNo: string;
  reqDate: string;
}

const data: DataType[] = [
  {
    key: '1',
    agentId: '001',
    agentName: 'Ram',
    NIC: '9626429884V',
    location: 'Colombo',
    contactNo: '0777556644',
    reqDate: '10/11/2022',
  },
  {
    key: '2',
    agentId: '002',
    agentName: 'Azim',
    NIC: '8926421114V',
    location: 'Kandy',
    contactNo: '0727776611',
    reqDate: '21/10/2022',
  },
  {
    key: '3',
    agentId: '003',
    agentName: 'Chamal',
    NIC: '9111429884V',
    location: 'Galle',
    contactNo: '0714356564',
    reqDate: '02/12/2022',
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
    title: 'Requested Date',
    dataIndex: 'reqDate',
    key: 'reqDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Button className={styles.successBtn} icon={<CheckOutlined />}>
          Accept
        </Button>
        <Button className={styles.deleteBtn} icon={<CloseOutlined />}>
          Decline
        </Button>
      </Space>
    ),
  },
];

export const RequestsTable = () => (
  <div className={styles.bodyContainer}>
    <Table columns={columns} dataSource={data} />
  </div>
);
