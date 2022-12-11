import React from 'react';
import { AgentLayout } from '../../layout/AgentLayout/AgentLayout';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Select, Upload } from 'antd';
import axios from 'axios';

export const CreateWorkers = () => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onFinish = (values: any) => {
    values.worker.agentId = '62e17ab9c4148c3fc08df1f4';
    console.log(values);

    axios
      .post(`http://localhost:8000/api/b1/worker/${values.worker.agentId}`, values.worker)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <AgentLayout title="Create Workers">
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['worker', 'contactName']}
            label="Full Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['worker', 'contactEmail']}
            label="Email"
            rules={[{ type: 'email' }, { required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['worker', 'contactNo']} label="Phone Number">
            <Input />
          </Form.Item>
          <Form.Item name={['worker', 'NIC']} label="NIC" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name={['worker', 'skillCategory']}
            label="Skill Category"
            rules={[{ required: true }]}
          >
            <Select>
              <Select.Option value={1}>BrickMason</Select.Option>
              <Select.Option value={2}>TileSetter</Select.Option>
              <Select.Option value={3}>Roofer</Select.Option>
              <Select.Option value={4}>Carpenter</Select.Option>
              <Select.Option value={5}>Reinforcement</Select.Option>
              <Select.Option value={6}>Unskilled</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name={['worker', 'vaccineReport']}
            label="Vaccine Report"
            valuePropName="fileList"
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 2 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name={['worker', 'agentId']}
            initialValue="62e17ab9c4148c3fc08df1f4"
            style={{ marginTop: '-3rem' }}
          >
            <Input type="hidden" value="62e17ab9c4148c3fc08df1f4" />
          </Form.Item>

          <Form.Item>
            <Button style={{ backgroundColor: 'green', color: 'white' }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AgentLayout>
  );
};
