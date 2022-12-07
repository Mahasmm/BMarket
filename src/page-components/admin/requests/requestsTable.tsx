import { Space, Button, Row, Col } from 'antd';
import React from 'react';
import styles from './admin.module.less';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const companyData = [
  {
    key: '0',
    companyId: '001',
    companyName: 'Ram',
    location: 'Colombo',
    contactNo: '0777556644',
    reqDate: '10/11/2022',
  },
  {
    key: '1',
    companyId: '002',
    companyName: 'Azim',
    location: 'Kandy',
    contactNo: '0727776611',
    reqDate: '21/10/2022',
  },
  {
    key: '2',
    companyId: '003',
    companyName: 'Chamal',
    location: 'Galle',
    contactNo: '0714356564',
    reqDate: '02/12/2022',
  },
];

const agentData = [
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

export const RequestsTable = (props: any) => {
  if (props.visible === 'visible') {
    return (
      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> Company Id </Col>
          <Col span={6}> Company Name </Col>
          <Col span={2}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={4}> Request Date </Col>
          <Col span={6}> Action </Col>
        </Row>

        {companyData.map((item) => {
          return (
            <>
              <Row gutter={[16, 16]} className={styles.tableRow}>
                <Col span={2}> {item.companyId} </Col>
                <Col span={6}> {item.companyName} </Col>
                <Col span={2}> {item.location} </Col>
                <Col span={4}> {item.contactNo} </Col>
                <Col span={4}> {item.reqDate} </Col>
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
    );
  }

  return (
    <div className={styles.body}>
      <Row gutter={[16, 16]} className={styles.tableHead}>
        <Col span={2}> Agent Id </Col>
        <Col span={4}> Agent Name </Col>
        <Col span={4}> NIC </Col>
        <Col span={2}> Location </Col>
        <Col span={4}> Contact </Col>
        <Col span={4}> Request Date </Col>
        <Col span={4}> Action </Col>
      </Row>

      {agentData.map((item) => {
        return (
          <>
            <Row gutter={[16, 16]} className={styles.tableRow}>
              <Col span={2}> {item.agentId} </Col>
              <Col span={4}> {item.agentName} </Col>
              <Col span={4}> {item.NIC} </Col>
              <Col span={2}> {item.location} </Col>
              <Col span={4}> {item.contactNo} </Col>
              <Col span={4}> {item.reqDate} </Col>
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
  );
};
