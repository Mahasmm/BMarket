import React, { useEffect, useState } from 'react';
import { AgentLayout } from '../../../layout/AgentLayout/AgentLayout';
import styles from './projects.module.less';
import axios from 'axios';
import { Col, Row } from 'antd';

export const Projects = () => {
  const [data, setData] = useState<any[]>([]);

  const getProjects = async () => {
    const response = await axios.get('http://localhost:8000/api/b1/project');
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <AgentLayout title="Projects">
      <Row>
        {data.map((item) => (
          <Col
            xl={{ span: 4, offset: 2 }}
            lg={{ span: 4, offset: 2 }}
            md={{ span: 7, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            xs={{ span: 11, offset: 1 }}
            key={item._id}
          >
            <div className={styles.pLayout}> {item.ProjectTitle} </div>
            <br />
          </Col>
        ))}
      </Row>
      {/* <div className={styles.pLayout}> hello</div> */}
    </AgentLayout>
  );
};
