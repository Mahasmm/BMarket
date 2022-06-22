import React, { useEffect, useState } from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './CompanyAgent.module.less';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const WorkerDetails = () => {
  const [data, setData] = useState<any[]>([]);
  const history = useRouter();

  async function getUser(id: any) {
    try {
      const response = await axios.get(`http://localhost:8000/api/b1/worker/cat/${id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (history.isReady) {
      const { id } = history.query;
      getUser(id);
    }
  }, [history.isReady]);

  return (
    <CompanyLayout title={'Workers'}>
      <div className={styles.comAgentdetails}>
        <Row gutter={24}>
          {data.map((item) => (
            <Col key={item._id}>
              <div className={styles.agentView}>
                <Link href="companies/home">
                  <Avatar
                    size={70}
                    style={{ backgroundColor: '#bcddf3' }}
                    icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                  />
                </Link>

                <h4>
                  <Link href="">
                    <a style={{ color: 'black' }}>{item.contactName}</a>
                  </Link>
                </h4>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </CompanyLayout>
  );
};
