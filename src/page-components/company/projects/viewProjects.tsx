import React, { useEffect, useState } from 'react';
import { AgentLayout } from '../../../layout/AgentLayout/AgentLayout';
import styles from './../../agents/projects/projects.module.less';
import axios from 'axios';
import { Col, Row } from 'antd';
import Link from 'next/link';

export const ViewProjects = () => {
  const [data, setData] = useState<any[]>([]);

  const getProjects = async () => {
    const response = await axios.get(
      'http://localhost:8000/api/b1/company/projects/62e17bb3b32c8450204acdbd',
    );
    console.log(response.data.projects);
    console.log(response.data.projects[0].projectId.ProjectTitle);
    response.data.projects.map((item: { projectId: any }) => console.log(item.projectId));
    setData(response.data.projects);
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
            <Link href={`project-overview`}>
              <a>
                <div className={styles.pLayout}> {item.projectId.ProjectTitle}</div>
              </a>
            </Link>
            <br />
          </Col>
        ))}
      </Row>
      {/* <div className={styles.pLayout}> hello</div> */}
    </AgentLayout>
  );
};
