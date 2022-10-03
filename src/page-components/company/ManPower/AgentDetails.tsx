import React, { useEffect, useState } from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './CompanyAgent.module.less';
import axios from 'axios';
import Link from 'next/link';

export const AgentDetails = () => {
  const [data, setData] = useState<any[]>([]);

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8000/api/b1/manpower');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <CompanyLayout title={'Manpower'}>
      <div className={styles.comAgentdetails}>
        <Row gutter={24}>
          {data.map((item) => (
            <Col span={8} key={item._id}>
              <div className={styles.agentView}>
                <div>
                  <Link href={`workersCatagories?id=${item._id}`}>
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </Link>
                </div>
                <div>
                  <h4>
                    <Link href={`workersCatagories?id=${item._id}`}>
                      <a style={{ color: 'black' }}>{item.contactName}</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </CompanyLayout>
  );
};
