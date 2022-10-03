/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { Layout, Avatar } from 'antd';
import styles from './homepage.module.less';
import {
  MenuOutlined,
  BellOutlined,
  MoneyCollectOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Link from 'next/link';

const { Sider } = Layout;

export const HomePage = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <div className={styles.hello}>
        <Sider width={300} trigger={null} collapsed={collapsed}>
          {!collapsed ? (
            <div className={[styles.container, styles.pageLeftBorder].join(' ')}>
              <div className={styles.topSliderView}>
                <div>
                  <Avatar size={74} icon={<UserOutlined />} />
                </div>
                <div className={styles.companyTitle}>
                  <h2>RDC</h2>
                  <h3>Platinum member</h3>
                </div>
              </div>
              <div className={styles.SliderContent}>
                <div className={styles.SliderProjectContainer}>
                  <div className={styles.SliderProject}>
                    <h2>Projects</h2>
                  </div>
                </div>
                <div className={styles.sliderSettings}>
                  <hr style={{ color: 'black' }} />
                  <div className={styles.iconFlex}>
                    <div style={{ paddingTop: '4px' }}>
                      <MoneyCollectOutlined style={{ fontSize: '18px' }} />
                    </div>{' '}
                    <h3>Payment</h3>
                  </div>
                  <hr />
                  <div className={styles.iconFlex}>
                    <div style={{ paddingTop: '4px' }}>
                      <SettingOutlined style={{ fontSize: '18px' }} />
                    </div>{' '}
                    <h3>Settings</h3>
                  </div>
                  <hr />
                  <div className={styles.iconFlex}>
                    <div style={{ paddingTop: '4px' }}>
                      <InfoCircleOutlined style={{ fontSize: '18px' }} />
                    </div>{' '}
                    <h3>About Us</h3>
                  </div>
                </div>
              </div>
              <div className={styles.SliderFooter}></div>
            </div>
          ) : (
            ''
          )}
        </Sider>
      </div>

      <Layout className={styles.container}>
        <div className={styles.topView}>
          <div className={styles.iconAlign}>
            <div className={[styles.iconCircle, styles.leftIcon].join(' ')}>
              {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                className: 'trigger',

                onClick: () => setCollapsed(!collapsed),
              })}
            </div>
            <div
              className={[
                styles.iconCircle,
                collapsed ? styles.rightIcon : styles.rightIconMobile,
              ].join(' ')}
            >
              <BellOutlined style={{ fontSize: '20px' }} />
            </div>
          </div>

          <div className={collapsed ? styles.text : styles.textMobile}>
            <p>Stay Safe & Build-in,</p>
            <p>Mahas</p>
          </div>
          <div className={collapsed ? styles.itemContainer : styles.itemContainerMobile}>
            <div className={styles.centerItem}>
              <div className={styles.gridIconName}>
                <Link href="agents">
                  <a>
                    <div className={styles.itemCircle}></div>
                  </a>
                </Link>
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
        <div className={collapsed ? styles.whiteBg : styles.whiteBgMobile}></div>
        <div className={collapsed ? styles.bottomView : styles.bottomViewMobile}></div>
      </Layout>
    </Layout>
  );
};
