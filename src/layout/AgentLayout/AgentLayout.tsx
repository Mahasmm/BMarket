import React, { FC } from 'react';
import { AgentNavBar } from './AgentNavBar';
import { Layout } from 'antd';
import styles from './AgentLayout.module.less';

const { Content } = Layout;

type Props = {
  title: string;
};

export const AgentLayout: FC<Props> = (props) => {
  return (
    <Layout>
      <body
        className={styles.bodylayout}
        style={{ backgroundColor: 'linear-gradient(180deg, #fdcd3b 80%, #ffed4b 20%)' }}
      >
        <AgentNavBar title={props.title} />
        <div className={styles.testdesign}></div>
        <Content className={styles.contentSpacing}>
          <article>
            <div>{props.children}</div>
          </article>
        </Content>
      </body>
    </Layout>
  );
};
