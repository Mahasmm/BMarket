import { Button, Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import styles from './admin.module.less';
import { RequestsTable } from './requestsTable';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

export const requests = () => (
  <Layout>
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={['requests']} theme="dark">
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
          <Link href="/admin/requests">Workers</Link>{' '}
        </Menu.Item>
        <Menu.Item key="machine">
          {' '}
          <Link href="/admin/requests">Machineries</Link>{' '}
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
        <Breadcrumb style={{ margin: '30px 50px', float: 'left' }}>
          <Breadcrumb.Item>
            <a href="">Companies</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Agents</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <RequestsTable />
      </Content>
    </body>

    <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
  </Layout>
);
