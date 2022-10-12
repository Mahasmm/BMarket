import React, { FC } from 'react';
import { Avatar, List, Image, Row, Col } from 'antd';
import styles from '../agenthome.module.less';

type Props = {
  data: {
    src: string;
    title: string;
    subtitle: string;
  }[];
  headTitle: string;
};

export const UserImageSet: FC<Props> = (props) => {
  return (
    <Row>
      <Col>
        <h1 className={styles.title}>{props.headTitle}</h1>
      </Col>
      <Col xs={24}>
        <List
          itemLayout="vertical"
          grid={{
            gutter: 32,
            xs: 3,
            sm: 6,
            md: 6,
            lg: 6,
            xl: 6,
          }}
          dataSource={props.data}
          renderItem={(item) => (
            <List.Item>
              <div className={styles.listStyle}>
                <div>
                  <Avatar
                    src={<Image width={'100%'} src={item.src} alt="" />}
                    size={{ xs: 75, sm: 75, md: 100, lg: 100, xl: 100, xxl: 100 }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4>{item.title}</h4>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span>{item.subtitle}</span>
                </div>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
