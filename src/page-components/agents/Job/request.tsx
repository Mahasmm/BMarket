import { AgentLayout } from '../../../layout/AgentLayout/AgentLayout';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Card } from 'antd';

export const Request = () => {
  const getBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/b1/manpower/booking/${'62e17ab9c4148c3fc08df1f4'}`,
      );
      console.log(response.data);
    } catch (e) {}
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AgentLayout title="Jobs"></AgentLayout>
  );
};
