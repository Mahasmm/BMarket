import React from 'react';
import { ShoppingFilled } from '@ant-design/icons';
import { ProjectFilled } from '@ant-design/icons';
import { TeamOutlined } from '@ant-design/icons';
import styles from './agenthome.module.less';

export const AgentHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentbody}>
        <h1> Stay Safe & Build In,</h1>
        <div className={styles.body1}>
          <h2>
            {' '}
            <a className={styles.img}>
              <ShoppingFilled />
            </a>{' '}
            <a className={styles.img2} style={{ color: 'black' }}>
              Job
            </a>{' '}
          </h2>
          <h2>
            {' '}
            <a className={styles.img}>
              <ProjectFilled />
            </a>{' '}
            <a className={styles.img2} style={{ color: 'black' }}>
              Project
            </a>{' '}
          </h2>
          <h2>
            {' '}
            <a className={styles.img}>
              <TeamOutlined />
            </a>{' '}
            <a className={styles.img2} style={{ color: 'black' }}>
              Workers
            </a>{' '}
          </h2>
        </div>
      </div>

      <div className={styles.whitespace}>
        <div className={styles.body2}></div>
      </div>

      <div className={styles.footerspace}>
        <div className={styles.body3}></div>
      </div>
    </div>
  );
};
