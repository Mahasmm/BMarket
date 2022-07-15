import React from 'react';
import { ShoppingFilled, ProjectFilled, TeamOutlined } from '@ant-design/icons';
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import styles from './agenthomebug.module.less';
import { Button } from 'antd';

export const AgentHomeBug = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentbody}>
        <div>
          <Button className={styles.bar} shape="circle" icon={<MenuOutlined />} size={'large'} />
          <Button className={styles.bell} shape="circle" icon={<BellOutlined />} size={'large'} />
        </div>
        <h1 className={styles.h1}> Stay Safe & Build In,</h1>
        <div className={styles.body1}>
          <div>
            <a>
              <h2 className={styles.img} style={{ fontSize: '25px' }}>
                <ShoppingFilled />
              </h2>
            </a>
            <h3 className={styles.img2} style={{ color: 'black' }}>
              Job
            </h3>
          </div>

          <div>
            <a>
              <h2 className={styles.img} style={{ fontSize: '25px' }}>
                <ProjectFilled />
              </h2>
            </a>
            <h3 className={styles.img2} style={{ color: 'black' }}>
              Project
            </h3>
          </div>

          <div>
            <a>
              <h2 className={styles.img} style={{ fontSize: '25px' }}>
                <TeamOutlined />
              </h2>
            </a>
            <h3 className={styles.img2} style={{ color: 'black' }}>
              Workers
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.whitespace}>
        <div className={styles.body2}></div>
      </div>
      <div>
        <div className={styles.testdesign}></div>
      </div>
    </div>
  );
};
