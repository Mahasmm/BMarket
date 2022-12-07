import { Button, Layout, Menu, Modal } from 'antd';
import React from 'react';
import styles from './admin.module.less';
import { CompaniesTable } from './companiesTable';
import Link from 'next/link';

const { Header, Footer, Content } = Layout;

export const companies = () => {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal" defaultSelectedKeys={['company']} theme="dark">
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
          <Menu.Item key="worker" disabled>
            {' '}
            <Link href="/admin/companies">Workers</Link>{' '}
          </Menu.Item>
          <Menu.Item key="machine" disabled>
            {' '}
            <Link href="/admin/companies">Machineries</Link>{' '}
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
          <CompaniesTable />
        </Content>
      </body>

      <Footer>Copyrights 2022 - BMarket. All rights reserved</Footer>
    </Layout>
  );
};
