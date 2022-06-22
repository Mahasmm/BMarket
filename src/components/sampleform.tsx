import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './sampleform.module.less';

import { AgentLayout } from '../layout/AgentLayout/AgentLayout';

type SizeType = Parameters<typeof Form>[0]['size'];

export const SampleForm = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div className={styles.container}>
      <AgentLayout title={'Create Workers'}>
        <div className={styles.content}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
          >
            <div className={styles.data}>
              <Form.Item label="Full Name:">
                <Input required />
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item label="NIC No:">
                <Input required />
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item label="NIC Copy:">
                <Input type="file" name="NIC" accept="image/jpeg" required />
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item label="Number:">
                <Input required />
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item label="Category:">
                <Select></Select>
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item label="Vaccine Report:">
                <Input type="file" name="myImage" id="inputTag" accept="image/jpeg" required />
              </Form.Item>
            </div>

            <div className={styles.data}>
              <Form.Item>
                <Button className={styles.but}>ADD Worker</Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </AgentLayout>
    </div>
  );
};
