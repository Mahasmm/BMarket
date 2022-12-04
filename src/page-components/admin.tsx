import { Button, Layout, Menu } from 'antd';
import React from 'react';
import styles from './admin.module.less';
import { AdminTable } from './adminTable';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

export const admin = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={['company']} theme="dark">
        <Menu.Item disabled>
          {' '}
          <span className={styles.brand}>BMarket</span>{' '}
        </Menu.Item>
        <Menu.Item key="company"> Companies </Menu.Item>
        <Menu.Item key="agent"> Agents </Menu.Item>
        <Menu.Item key="worker"> Workers </Menu.Item>
        <Menu.Item key="machine"> Machineries </Menu.Item>
        <Menu.Item key="requests"> All Requests </Menu.Item>
        <Menu.Item key="logout">
          {' '}
          <Button className={styles.logoutBtn}>Logout</Button>{' '}
        </Menu.Item>
      </Menu>
    </Header>

    <body>
      <Content>
        <Button className={styles.addBtn} icon={<PlusCircleOutlined />}>
          Add new company
        </Button>
        <AdminTable />
      </Content>
    </body>

    <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
  </Layout>
);
