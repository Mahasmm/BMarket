import { Button, Layout, Menu } from 'antd';
import React from 'react';
import styles from './admin.module.less';
import { AgentsTable } from './agentsTable';
import { PlusCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

export const agents = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={['agent']} theme="dark">
        <Menu.Item disabled>
          {' '}
          <span className={styles.brand}>BMarket</span>{' '}
        </Menu.Item>
        <Menu.Item key="company">
          {' '}
          <Link href="/admin/companies">Companies</Link>{' '}
        </Menu.Item>
        <Menu.Item key="agent">
          {' '}
          <Link href="/admin/agents">Agents</Link>{' '}
        </Menu.Item>
        <Menu.Item key="worker">
          {' '}
          <Link href="/admin/agents">Workers</Link>{' '}
        </Menu.Item>
        <Menu.Item key="machine">
          {' '}
          <Link href="/admin/agents">Machineries</Link>{' '}
        </Menu.Item>
        <Menu.Item key="requests">
          {' '}
          <Link href="/admin/requests">All Requests</Link>{' '}
        </Menu.Item>
        <Menu.Item key="logout">
          {' '}
          <Button className={styles.logoutBtn}>Logout</Button>{' '}
        </Menu.Item>
      </Menu>
    </Header>

    <body>
      <Content>
        <Button className={styles.addBtn} icon={<PlusCircleOutlined />}>
          Add new agent
        </Button>
        <AgentsTable />
      </Content>
    </body>

    <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
  </Layout>
);
