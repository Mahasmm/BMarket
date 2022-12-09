import React from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

export const CreateProject = () => {
  // const validateMessages = {
  //   required: '${label} is required!',
  //   types: {
  //     email: '${label} is not a valid email!',
  //     number: '${label} is not a valid number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // };

  const onFinish = (values: any) => {
    const companyId = '62e17b9bb32c8450204acdbb';
    values.project.assignees = [
      {
        assigneeName: values.project.assignees.assigneeName,
        assigneeNumber: values.project.assignees.assigneeNumber,
        assigneeEmail: values.project.assignees.assigneeEmail,
      },
    ];
    console.log(values.project);

    axios
      .post(`http://localhost:8000/api/b1/project/${companyId}`, values.project)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <CompanyLayout title="Create Workers">
      <div>
        <Form
          //   labelCol={{ span: 4 }}
          //   wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
          //   validateMessages={validateMessages}
        >
          <Form.Item
            name={['project', 'ProjectTitle']}
            label="Project Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item
            name={['project', 'assignees']}
            label="Assignees"
            rules={[{ type: 'array' }, { required: true }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            name={['project', 'assignees', 'assigneeName']}
            label="Assignee Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['project', 'assignees', 'assigneeNumber']}
            label="Assignee Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['project', 'assignees', 'assigneeEmail']}
            label="Assignee Email"
            rules={[{ type: 'email' }, { required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button style={{ backgroundColor: 'green', color: 'white' }} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CompanyLayout>
  );
};
