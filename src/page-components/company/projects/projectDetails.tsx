/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import styles from './CompanyAgent.module.less';
import { useRouter } from 'next/router';

export const ProjectOverview = () => {
  const history = useRouter();
  // const [data, setData] = useState<any[]>([]);

  // const getProjectDetails = async (id: any) => {
  //   try {
  //     console.log('id ', id);

  //     const response = await axios.get(`http://localhost:8000/api/b1/project/${id}`);
  //     console.log(response.data);
  //     //   response.data.map((item: any) => {});

  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    if (history.isReady) {
      // const { id } = history.query;
      // getProjectDetails(id);
    }
  }, [history.isReady]);

  return (
    <CompanyLayout title={'Projects'}>
      <div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <Avatar size={52} icon={<UserOutlined />} />
              <h3>Mr Masahir</h3>
              <h3>777435678</h3>
            </div>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
};
