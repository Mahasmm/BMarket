/* eslint-disable react/react-in-jsx-scope */
import { AgentLayout } from '../../layout/AgentLayout/AgentLayout';
import { Button, Col, Row } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import styles from './workers.module.less';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListView } from './../../components/list/listView';

// interface WorkerItem {
//   contactEmail: string;
//   availability: boolean;
//   NIC: string;
//   gender: string;
//   experience: {
//     iRating: number;
//     companyName: string;
//   };
//   contactName: string;
//   contactNo: string;
//   vaccineReport: string;
// }

export const WorkerDetails = () => {
  const history = useRouter();
  // const [data, setData] = useState<any[]>([]);
  const [brickMason] = useState<any[]>([]);
  const [tileSetter] = useState<any[]>([]);
  const [roofer] = useState<any[]>([]);
  const [carpenter] = useState<any[]>([]);
  const [reinforcement] = useState<any[]>([]);
  const [unSkilled] = useState<any[]>([]);

  const getWorkers = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/b1/worker/cat/${'62e17ab9c4148c3fc08df1f4'}`,
      );
      console.log('data ', response.data.data);
      response.data.data.map((item: any) => {
        if (item.skillCategory == 1) {
          const boo = brickMason.some((items) => items['_id'] === item._id);
          if (!boo) {
            brickMason.push(item);
          }
        } else if (item.skillCategory == 2) {
          const boo = tileSetter.some((items) => items['_id'] === item._id);
          if (!boo) {
            tileSetter.push(item);
          }
        } else if (item.skillCategory == 3) {
          const boo = roofer.some((items) => items['_id'] === item._id);
          if (!boo) {
            roofer.push(item);
          }
        } else if (item.skillCategory == 4) {
          const boo = carpenter.some((items) => items['_id'] === item._id);
          if (!boo) {
            carpenter.push(item);
          }
        } else if (item.skillCategory == 5) {
          const boo = reinforcement.some((items) => items['_id'] === item._id);
          if (!boo) {
            reinforcement.push(item);
          }
        } else if (item.skillCategory == 6) {
          const boo = unSkilled.some((items) => items['_id'] === item._id);
          if (!boo) {
            unSkilled.push(item);
          }
        }
      });
      console.log(brickMason.length, tileSetter.length);

      // setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(brickMason);

  useEffect(() => {
    getWorkers();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope

    <AgentLayout title={'Workers'}>
      <div>
        <div className={styles.addButton}>
          <Button shape="round" type="primary" onClick={() => history.push('/agents/createWorker')}>
            Add Workers <UserAddOutlined />
          </Button>
        </div>
        <div>
          <Row>
            {brickMason.length != 0 ? (
              <Col sm={8} md={8} xs={12}>
                <h2>BrickMason</h2>
                <ListView data={brickMason} />
              </Col>
            ) : (
              ''
            )}
            {tileSetter.length != 0 ? (
              <Col sm={8} md={8} xs={12}>
                <h2>TileSetter</h2>
                <ListView data={tileSetter} />
              </Col>
            ) : (
              ''
            )}
            {roofer.length != 0 ? (
              <Col sm={8} md={8} xs={12}>
                <h2>Roofer</h2>
                <ListView data={roofer} />
              </Col>
            ) : (
              ''
            )}
            {carpenter.length != 0 ? (
              <Col sm={8} md={8} xs={12}>
                <h2>Carpenter</h2>
                <ListView data={carpenter} />
              </Col>
            ) : (
              ''
            )}
            {reinforcement.length != 0 ? (
              <Col sm={8} md={8} xs={12}>
                <h2>Reinforcement</h2>
                <ListView data={reinforcement} />
              </Col>
            ) : (
              ''
            )}
            {unSkilled.length != 0 ? (
              <Col sm={8} md={8} lg={6} xl={6} xs={12}>
                <h2>UnSkilled</h2>
                <ListView data={unSkilled} />
              </Col>
            ) : (
              ''
            )}
          </Row>
        </div>
      </div>
    </AgentLayout>
  );
};
