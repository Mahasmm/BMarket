import { Space, Button, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './admin.module.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const companyData = [
  {
    key: '0',
    companyId: '01',
    companyName: 'Invicta',
    location: 'Jaffna',
    contactNo: '0748734143',
    reqDate: '24/10/2022',
    approval: 'approve',
  },
  {
    key: '1',
    companyId: '02',
    companyName: 'Mithra enterprise',
    location: 'Galle',
    contactNo: '0769726789',
    reqDate: '02/12/2022',
    approval: '',
  },
];

const agentData = [
  {
    key: '0',
    agentId: '01',
    agentName: 'Raj Mohan',
    NIC: '653486598V',
    location: 'Colombo',
    contactNo: '0763578907',
    reqDate: '29/10/2022',
    approval: 'approve',
  },
  {
    key: '1',
    agentId: '02',
    agentName: 'Ajith',
    NIC: '943245162V',
    location: 'Kandy',
    contactNo: '0786754321',
    reqDate: '16/11/2022',
    approval: '',
  },
  {
    key: '2',
    agentId: '03',
    agentName: 'Azim',
    NIC: '8926421114V',
    location: 'Kandy',
    contactNo: '0726547353',
    reqDate: '21/12/2022',
    approval: '',
  },
];

export const RequestsTable = (props: any) => {
  const [compItems, setCompItems] = useState(companyData);
  const [agentItems, setAgentItems] = useState(agentData);
  const [id, setId] = useState(0);
  let compData: any;
  let agData: any;

  const turnCompApprove = (value: any) => {
    console.log('key ', value.key);
    compItems[value.key].approval = 'approve';
    setCompItems(compItems);
    console.log('approve', compData[value.key]);
  };

  const turnCompReject = (value: any) => {
    compItems[value.key].approval = 'reject';
    setCompItems(compItems);
    console.log('approve', compItems[value.key]);
  };

  const turnAgentApprove = (value: any) => {
    setId(value.key);
    agentItems[value.key].approval = 'approve';
    setAgentItems(agentItems);
    console.log('approve', agentItems[value.key]);
  };

  const turnAgentReject = (value: any) => {
    setId(value.key);
    agentItems[value.key].approval = 'reject';
    setAgentItems(agentItems);
    console.log('approve', agentItems[value.key]);
  };

  useEffect(() => {}, []);

  if (props.visible === 'visible') {
    return (
      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> No </Col>
          <Col span={6}> Company Name </Col>
          <Col span={2}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={4}> Request Date </Col>
          <Col span={6}> Action </Col>
        </Row>

        {
          (compData = compItems.map((item) => {
            return (
              <>
                <Row gutter={[16, 16]} className={styles.tableRow}>
                  <Col span={2}> {item.companyId} </Col>
                  <Col span={6}> {item.companyName} </Col>
                  <Col span={2}> {item.location} </Col>
                  <Col span={4}> {item.contactNo} </Col>
                  <Col span={4}> {item.reqDate} </Col>
                  <Col span={6}>
                    {item.approval == 'approve' ? (
                      <span>Accepted</span>
                    ) : item.approval == 'reject' ? (
                      <span>Rejected</span>
                    ) : (
                      <Space size="middle">
                        <Button
                          onClick={() => turnCompApprove(item)}
                          className={styles.successBtn}
                          icon={<CheckOutlined />}
                        >
                          Accept
                        </Button>
                        <Button
                          onClick={() => turnCompReject(item)}
                          className={styles.deleteBtn}
                          icon={<CloseOutlined />}
                        >
                          Decline
                        </Button>
                      </Space>
                    )}
                  </Col>
                </Row>
              </>
            );
          }))
        }
      </div>
    );
  }

  return (
    <div className={styles.body}>
      <Row gutter={[16, 16]} className={styles.tableHead}>
        <Col span={2}> No </Col>
        <Col span={4}> Agent Name </Col>
        <Col span={4}> NIC </Col>
        <Col span={2}> Location </Col>
        <Col span={4}> Contact </Col>
        <Col span={4}> Request Date </Col>
        <Col span={4}> Action </Col>
      </Row>

      {
        (agData = agentItems.map((item) => {
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
                  {item.approval == 'approve' ? (
                    <span>Accepted</span>
                  ) : item.approval == 'reject' ? (
                    <span>Rejected</span>
                  ) : (
                    <Space size="middle">
                      <Button
                        onClick={() => turnAgentApprove(item)}
                        className={styles.successBtn}
                        icon={<CheckOutlined />}
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => turnAgentReject(item)}
                        className={styles.deleteBtn}
                        icon={<CloseOutlined />}
                      >
                        Decline
                      </Button>
                    </Space>
                  )}
                </Col>
              </Row>
            </>
          );
        }))
      }
    </div>
  );
};
