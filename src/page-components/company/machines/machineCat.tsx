import React, { useEffect } from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Avatar, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './../ManPower/CompanyAgent.module.less';
import axios from 'axios';
import Link from 'next/link';

export const MachineCatagories = () => {
  //   const [data, setData] = useState<any[]>([]);

  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8000/api/b1/manpower');
      console.log(response.data);
      //   setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const SampleData = [
    {
      id: 1,
      name: 'D4K2',
    },
    {
      id: 2,
      name: 'D5K2',
    },
  ];

  useEffect(() => {
    getUser();
  }, []);

  return (
    <CompanyLayout title={'Bulldozers'}>
      <div className={styles.comAgentdetails}>
        <Row gutter={80}>
          {SampleData.map((item) => (
            <Col span={8} key={item.id}>
              <div className={styles.agentView}>
                <div>
                  <Link href={`machineCatagories?id=${item.id}`}>
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </Link>
                </div>
                <div>
                  <h4>
                    <Link href={`workersCatagories?id=${item.id}`}>
                      <a style={{ color: 'black' }}>{item.name}</a>
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
