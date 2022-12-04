import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import styles from './admin.module.less';
// import data from './adminData'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

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
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map(tag => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
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

export const AdminTable = () => (
  <div className={styles.bodyContainer}>
    <Table columns={columns} dataSource={data} />
  </div>
);
