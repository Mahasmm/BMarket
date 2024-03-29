import { Button, Layout, Menu, Breadcrumb } from 'antd';
import React, { useState } from 'react';
import styles from './admin.module.less';
import { RequestsTable } from './requestsTable';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

export const requests = () => {
  const [companyVisible, setCompanyVisible] = useState<VisibilityState>('hidden');

  const clickCompany = () => {
    setCompanyVisible('visible');
  };

  const clickAgent = () => {
    setCompanyVisible('hidden');
  };

  return (
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

      <body style={{ minHeight: '750px' }}>
        <Content>
          <Breadcrumb style={{ margin: '30px 100px', float: 'left' }}>
            <Breadcrumb.Item onClick={clickCompany}>
              <a>Companies</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={clickAgent}>
              <a>Agents</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <RequestsTable visible={companyVisible} />
        </Content>
      </body>

      <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
    </Layout>
  );
};
