/* eslint-disable react/react-in-jsx-scope */
// import  from 'react';
import { Layout } from 'antd';
import styles from './homepage.module.less';
import { MenuOutlined, BellOutlined } from '@ant-design/icons';
import Link from 'next/link';

export const HomePage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.topView}>
          <div className={styles.iconAlign}>
            <div className={[styles.iconCircle, styles.leftIcon].join(' ')}>
              <MenuOutlined style={{ fontSize: '20px' }} />
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
                <div className={styles.itemCircle}></div>
                <Link href="agents">
                  <a style={{ color: 'black' }}>Man Power</a>
                </Link>
              </div>
              <div className={styles.gridIconName}>
                <div className={styles.itemCircle}></div>
                <p>Machine</p>
              </div>
            </div>
            <br />
            <div className={styles.centerItem}>
              <div className={styles.gridIconName}>
                <div className={styles.itemCircle}></div>
                <p>Material</p>
              </div>
              <div className={styles.gridIconName}>
                <div className={styles.itemCircle}></div>
                <p>Trucks</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.whiteBg}></div>
        <div className={styles.bottomView}></div>
      </div>
    </Layout>
  );
};
