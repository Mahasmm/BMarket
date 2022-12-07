import React from 'react';
import { Form, Input, Button, Select, DatePicker, InputNumber, Layout, Menu } from 'antd';
import styles from './admin.module.less';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

export const createCompany = () => {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" defaultSelectedKeys={['company']} theme="dark">
          <Menu.Item disabled>
            {' '}
            <span className={styles.brand}>BMarket</span>{' '}
          </Menu.Item>
          <Menu.Item key="back" style={{ width: '15%', textAlign: 'center' }}>
            {' '}
            <Link href="/admin/companies"> Go Back </Link>{' '}
          </Menu.Item>
          <Menu.Item
            key="company"
            style={{ backgroundColor: 'white', color: 'black' }}
            className={styles.title}
          >
            {' '}
            Create Company
          </Menu.Item>
        </Menu>
      </Header>

      <body>
        <Content>
          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 8 }}
            layout="horizontal"
            style={{ margin: '50px 0px', minHeight: '700px' }}
          >
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label=" ">
              <Button className={styles.successBtn}>Submit</Button>
            </Form.Item>
          </Form>
        </Content>
      </body>

      <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
    </Layout>
  );
};
