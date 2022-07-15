import React from 'react';
import styles from './homeslider.module.less';
import Image from 'next/image';
import { Avatar } from 'antd';
import mypic from '../components/rdc.png';
import { CreditCardOutlined } from '@ant-design/icons';
import { ToolFilled } from '@ant-design/icons';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export const HomeSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.img}>
          <Avatar src={<Image src={mypic} />} size={70} />
        </div>
        <div className={styles.head}>
          <h1>
            <b>RDC</b>
            <br></br>
            <small>Platinum member</small>
          </h1>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.project}>
          <b>Project</b>
        </h2>
        <br />

        <hr />
        <h2 className={styles.icon}>
          <CreditCardOutlined />
          <a className={styles.body} style={{ color: 'black' }}>
            Payment
          </a>
        </h2>
        <hr />

        <h2 className={styles.icon}>
          <ToolFilled />
          <a className={styles.body} style={{ color: 'black' }}>
            Settings
          </a>
        </h2>
        <hr />

        <h2 className={styles.icon}>
          <ExclamationCircleOutlined />
          <a className={styles.body} style={{ color: 'black' }}>
            About Us
          </a>
        </h2>
      </div>

      <div className={styles.lower}>
        <br />
        <br />
      </div>
    </div>
  );
};
