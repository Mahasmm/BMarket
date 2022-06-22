import React, { FC } from 'react';
import { Layout, Avatar } from 'antd';
import styles from './CompanyLayout.module.less';
import { LeftOutlined, EnvironmentFilled } from '@ant-design/icons';

type Props = {
  title: string;
};
export const CompanyLayout: FC<Props> = (props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topView}></div>
        <div className={styles.headerView}>
          <div className={styles.arrowView}>
            <LeftOutlined style={{ fontSize: '22px', color: '#564F4F' }} />
            <h3>{props.title}</h3>
          </div>
        </div>
        <div className={styles.locationView}>
          <div className={styles.avatarLocation}>
            <div className={styles.location}>
              <Avatar
                size={40}
                style={{ backgroundColor: '#bcddf3' }}
                icon={<EnvironmentFilled style={{ color: '#e48e0b' }} />}
              />
              <p>kandy</p>
            </div>

            <a href={''}> Change</a>
          </div>
        </div>
        <div className={styles.content}>
          {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={8} sm={8} md={6} lg={4} xl={4}> */}

          <div className={styles.contentalignment}>{props.children}</div>
          {/* </Col>
          </Row> */}
        </div>
        <div className={styles.footer}></div>
      </div>
    </Layout>
  );
};
