/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Layout } from 'antd';
import styles from './home.module.less';
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <Layout className={styles.container}>
      <div className={styles.topView}>
        <div className={styles.iconAlign}>
          <div className={[styles.iconCircle, styles.leftIcon].join(' ')}>
            {React.createElement(MenuOutlined, {
              className: 'trigger',
            })}
          </div>
          <div className={[styles.iconCircle, styles.rightIcon].join(' ')}>
            <BellOutlined style={{ fontSize: '20px' }} />
          </div>
        </div>

        <div className={styles.text}>
          <p>Stay Safe & Build-in,</p>
          <p>Mahas</p>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.centerItem}>
            <div className={styles.gridIconName}>
              <Link href="jobs">
                <a>
                  <div className={styles.itemCircle}></div>
                </a>
              </Link>
              <Link href="jobs">
                <a style={{ color: 'black' }}>Job</a>
              </Link>
            </div>
            <div className={styles.gridIconName}>
              <Link href="projects">
                <a>
                  <div className={styles.itemCircle}></div>
                </a>
              </Link>
              <Link href="projects">
                <a style={{ color: 'black' }}>Project</a>
              </Link>
            </div>
            {/* </div> */}

            {/* <div className={styles.centerItem}> */}
            <div className={styles.gridIconName}>
              <Link href="workers">
                <a>
                  <div className={styles.itemCircle}></div>
                </a>
              </Link>
              <Link href="workers">
                <a style={{ color: 'black' }}>Workers</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whiteBg}></div>
      <div className={styles.bottomView}></div>
    </Layout>
  );
};
