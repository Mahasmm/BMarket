/* eslint-disable react/react-in-jsx-scope */

import 'antd/dist/antd.css';
import { Button, Row, Col } from 'antd';
import styles from '../agent/WorkerDetails.module.less';
import { UserAddOutlined } from '@ant-design/icons';
import { AgentLayout } from '../../layout/AgentLayout/AgentLayout';
import { UserImageSet } from '../../components/agent/userImageSet';

const data = [
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
    title: 'Title 1',
    subtitle: 'sub...',
  },
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
    title: 'Title 2',
    subtitle: 'sub...',
  },
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
    title: 'Title 2',
    subtitle: 'sub...',
  },
];

export const workerDetails = () => {
  return (
    <AgentLayout title="Workers">
      <div className="site-layout-content">
        <main className={styles.main}>
          <Row justify="space-around" align="middle">
            <Col xs={12} offset={12}>
              <Button type="primary" icon={<UserAddOutlined />}>
                Add Workers
              </Button>
            </Col>
          </Row>

          <UserImageSet data={data} headTitle="Brick Masons" />
          <UserImageSet data={data} headTitle="Tile Setter" />
          <UserImageSet data={data} headTitle="Unskilled" />
        </main>
      </div>
    </AgentLayout>
  );
};
