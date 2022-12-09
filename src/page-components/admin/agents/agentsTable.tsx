import { Space, Button, Modal, Form, Input, InputNumber, Row, Col } from 'antd';
import React, { useState } from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

const data = {
  sam:[{
    key: '0',
    agentId: '01',
    agentName: 'Raj Mohan',
    NIC: '653486598V',
    location: 'Colombo',
    contactNo: '0763578907',
    workersCount: 0,
    status: true
  },
  {
    key: '1',
    agentId: '02',
    agentName: 'Ajith',
    NIC: '943245162V',
    location: 'Kandy',
    contactNo: '0786754321',
    workersCount: 4,
    status: true
  }]
};

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

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = () => {
    setIsEditModalOpen(false);
  };

  const handleSubmitCancel = () => {
    setIsEditModalOpen(false);
  };

  const [id,setId] = useState(0);
  const [name,setName] = useState("");
  const [loc,setLoc] = useState("");
  const [nic,setNic] = useState("");
  const [count,setCount] = useState(0);
  const [cont,setCont] = useState("");
  const [items, setItems] = useState(data);
  
  const turnFalse = (value: any) => {
    console.log('status ', value);
    alert("Do you want to delete?")
    console.log("Before ", items.sam[value]); 
    items.sam[value].status = false;
    // console.log('item ', items.sam[value]);
    setItems(items);
    console.log("After ", items.sam[value]);
  }

  const Submit = () => {
    items.sam[id].agentName = name;
    items.sam[id].location = loc; 
    items.sam[id].NIC = nic;
    items.sam[id].contactNo = cont;
    items.sam[id].workersCount = count;
    handleSubmitCancel();
  }
  
  const Edit = (id:any) => {
    showEditModal();
    setId(id);
  }

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
          <Input name="agentId" value="04" hidden />
          <Form.Item label="Agent name">
            <Input type="text"/>
          </Form.Item>
          <Form.Item label="NIC">
            <Input type="text"/>
          </Form.Item>
          <Form.Item label="Location">
            <Input type="text"/>
          </Form.Item>
          <Form.Item label="Contact number">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Available workers">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>

      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> No </Col>
          <Col span={4}> Agent Name </Col>
          <Col span={4}> NIC </Col>
          <Col span={2}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={4}> Available workers </Col>
          <Col span={4}> Action </Col>
        </Row>

        {data.sam.map((item) => {
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
                    <Button onClick={()=>Edit(item.key)} type="primary" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button onClick={()=> turnFalse(item.key)} className={styles.deleteBtn} icon={<DeleteOutlined />}>
                      Delete
                    </Button>
                  </Space>
                </Col>
              </Row>
            </>
          );
        })}
      </div>
      <Modal
        title="Edit Company"
        open={isEditModalOpen}
        onOk={Submit}
        onCancel={handleSubmitCancel}
        footer={[]}
      >
        <Form onFinish={Submit} labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} layout="horizontal">
          <Input name="agentId" value="04" hidden />
          <Form.Item label="Agent name">
            <Input type="text" placeholder={items.sam[id].agentName}/>
          </Form.Item>
          <Form.Item label="NIC">
            <Input type="text" placeholder={items.sam[id].NIC}/>
          </Form.Item>
          <Form.Item label="Location">
            <Input type="text" placeholder={items.sam[id].location}/>
          </Form.Item>
          <Form.Item label="Contact number">
            <Input type="text" placeholder={items.sam[id].contactNo}/>
          </Form.Item>
          <Form.Item label="Available workers">
            <InputNumber value={items.sam[id].workersCount}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
