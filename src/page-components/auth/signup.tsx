import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Upload } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';

export const SignUp = () => {
  const history = useRouter();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
      password: '${label} is not a valid',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const [show, setShow] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);

    axios
      .post(`http://localhost:8000/api/b1/manpower`, values.worker)
      .then(function (response) {
        console.log(response);
        history.push('/auth/agent-login');
      })
      .catch(function (error) {
        console.log(error);
        setShow(true);
      });
  };

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '10%', color: 'blue' }}>
        <h2>Sign Up</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
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

          <Form.Item name={['worker', 'password']} label="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          {show ? (
            <span style={{ color: 'red' }}>
              Enter the Password between 5 to 12 alpha number characters
            </span>
          ) : (
            ''
          )}

          <Form.Item>
            <Button style={{ backgroundColor: 'green', color: 'white' }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
