import { Space, Button, Form, Input, Modal, Select, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './admin.module.less';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

const data = {
  sam: [
    {
      key: '0',
      companyId: '01',
      companyName: 'Invicta',
      grade: 'A',
      location: 'Jaffna',
      contact: '0748734143',
      status: true,
    },
  ],
};

export const CompaniesTable = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [items, setItems] = useState(data);

  useEffect(() => {
    console.log('ENTER ', items);
  }, [items]);

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [loc, setLoc] = useState('');
  const [grd, setGrd] = useState('');
  const [cont, setCont] = useState('');

  const turnFalse = (value: any) => {
    console.log('status ', value);
    alert('Do you want to delete?');
    console.log('Before ', items.sam[value]);
    items.sam[value].status = false;
    setItems(items);
    console.log('After ', items.sam[value]);
  };

  const submit = () => {
    console.log('company ', name);
    console.log('item ', items.sam[id]);
    items.sam[id].companyName = name;
    items.sam[id].location = loc;
    items.sam[id].grade = grd;
    items.sam[id].contact = cont;
    handleSubmitCancel();
  };

  const edit = (id: any) => {
    showEditModal();
    setId(id);
  };

  const save = () => {
    items.sam.concat({
      key: '1',
      companyId: '02',
      companyName: name,
      grade: grd,
      location: loc,
      contact: cont,
      status: true,
    });
    setId(items.sam.length);
    console.log('item ', id);
    handleCancel();
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleSubmitCancel = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Button className={styles.addBtn} icon={<PlusCircleOutlined />} onClick={showModal}>
        Add new company
      </Button>
      <Modal
        title="Create Company"
        open={isModalOpen}
        onOk={save}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 10 }} layout="horizontal">
          <Input name="companyId" value="04" hidden />
          <Form.Item label="Company name">
            <Input onChange={(e) => setName(e.target.value)} type="text" />
          </Form.Item>
          <Form.Item label="Grade">
            <Select onChange={(e) => setGrd(e)}>
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="C">C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Location">
            <Input onChange={(e) => setLoc(e.target.value)} type="text" />
          </Form.Item>
          <Form.Item label="Contact number">
            <Input onChange={(e) => setCont(e.target.value)} type="text" />
          </Form.Item>
          <Space size="middle" style={{ clear: 'both', float: 'right' }}>
            <Button key="reset" onClick={onReset} htmlType="reset">
              Reset
            </Button>
            <Button key="submit" htmlType="submit" className={styles.successBtn} onClick={save}>
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>

      <div className={styles.body}>
        <Row gutter={[16, 16]} className={styles.tableHead}>
          <Col span={2}> No </Col>
          <Col span={6}> Company Name </Col>
          <Col span={2}> Grade </Col>
          <Col span={4}> Location </Col>
          <Col span={4}> Contact </Col>
          <Col span={6}> Action </Col>
        </Row>

        {items.sam.map((item) =>
          item.status === true ? (
            <>
              <Row gutter={[16, 16]} className={styles.tableRow}>
                <Col span={2}> {item.companyId} </Col>
                <Col span={6}> {item.companyName} </Col>
                <Col span={2}> {item.grade} </Col>
                <Col span={4}> {item.location} </Col>
                <Col span={4}> {item.contact} </Col>
                <Col span={6}>
                  <Space size="middle">
                    <Button onClick={() => edit(item.key)} type="primary" icon={<EditOutlined />}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => turnFalse(item.key)}
                      className={styles.deleteBtn}
                      icon={<DeleteOutlined />}
                    >
                      Delete
                    </Button>
                  </Space>
                </Col>
              </Row>
            </>
          ) : null,
        )}
      </div>

      <Modal
        title="Edit Company"
        open={isEditModalOpen}
        onOk={submit}
        onCancel={handleSubmitCancel}
        footer={[]}
      >
        <Form
          onFinish={submit}
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          layout="horizontal"
        >
          <Form.Item label="Company name">
            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder={items.sam[id].companyName}
            />
          </Form.Item>
          <Form.Item label="Grade">
            <Select onChange={(e) => setGrd(e)} placeholder={items.sam[id].grade}>
              <Select.Option value="A">A</Select.Option>
              <Select.Option value="B">B</Select.Option>
              <Select.Option value="C">C</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Location">
            <Input onChange={(e) => setLoc(e.target.value)} placeholder={items.sam[id].location} />
          </Form.Item>
          <Form.Item label="Contact number">
            <Input onChange={(e) => setCont(e.target.value)} placeholder={items.sam[id].contact} />
          </Form.Item>
          <Space size="middle" style={{ clear: 'both', float: 'right' }}>
            <Button key="reset" onClick={onReset} htmlType="reset">
              Reset
            </Button>
            <Button key="submit" htmlType="submit" className={styles.successBtn} onClick={submit}>
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>
    </>
  );
};
