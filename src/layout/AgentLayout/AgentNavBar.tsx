import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import styles from './AgentLayout.module.less';
import { LeftOutlined } from '@ant-design/icons';

type Props = {
  title: string;
};

export const AgentNavBar: FC<Props> = (props) => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.topnavbar}></div>
      <Menu mode="horizontal" className={styles.menunavbar}>
        <Menu.Item key={'1'}>
          <LeftOutlined />
        </Menu.Item>
        <Menu.Item key={'2'}>{props.title}</Menu.Item>
      </Menu>
    </div>
  </Layout>
);
