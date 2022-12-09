import { AgentLayout } from '../../../layout/AgentLayout/AgentLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import styles from './../projects/projects.module.less';

export const Request = () => {
  const [data, setData] = useState<any[]>([]);
  const getBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/b1/manpower/booking/${'62e17ab9c4148c3fc08df1f4'}`,
      );
      console.log(response.data);
      setData(response.data);
    } catch (e) {}
  };

  const confirmBooking = async (id: any) => {
    console.log('id ', id);
    const res = await axios.post(`http://localhost:8000/api/b1/manpower/booking/${id}`, {
      status: 'Yes',
    });
    console.log(res.data);
    getBooking();
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AgentLayout title="Jobs">
      <div>
        <Row>
          {data.map((item) =>
            item.status == 'empty' ? (
              <Col
                xl={{ span: 4, offset: 2 }}
                lg={{ span: 4, offset: 2 }}
                md={{ span: 7, offset: 1 }}
                sm={{ span: 11, offset: 1 }}
                xs={{ span: 11, offset: 1 }}
                key={item._id}
              >
                <div className={styles.pLayout}>
                  {' '}
                  {item.projectId.ProjectTitle}{' '}
                  <p>
                    {/* {item.workers.map((worker: any) => (
                    <p key={worker._id}>{worker.contactName}</p>
                  ))} */}
                    Workers Count : {item.workers.length}
                  </p>
                  <Button style={{ color: 'green' }} onClick={() => confirmBooking(item._id)}>
                    Confirm
                  </Button>
                </div>
                <br />
              </Col>
            ) : (
              ''
            ),
          )}
        </Row>
      </div>
    </AgentLayout>
  );
};
