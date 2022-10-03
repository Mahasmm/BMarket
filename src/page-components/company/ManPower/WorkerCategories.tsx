import React, { useEffect, useState, useRef } from 'react';
import { CompanyLayout } from '../../../layout/CompanyLayout/CompanyLayout';
import { Avatar, Row, Col, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './CompanyAgent.module.less';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { WorkerDetails } from './WorkerDetails';
// import Sample, { HotTipsRef } from './../../sample';
import WorkerDetails, { WorkerDetailsRef } from './WorkerDetails';

export const WorkerCategories = () => {
  const [data, setData] = useState<any[]>([]);
  const history = useRouter();
  const [brickMason] = useState<any[]>([]);
  const [tileSetter] = useState<any[]>([]);
  const [roofer] = useState<any[]>([]);
  const [carpenter] = useState<any[]>([]);
  const [reinforcement] = useState<any[]>([]);
  const [unSkilled] = useState<any[]>([]);

  const ref = useRef<WorkerDetailsRef>(null);

  async function getUser(id: any) {
    try {
      const response = await axios.get(`http://localhost:8000/api/b1/worker/cat/${id}`);
      console.log(response.data.data);
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
      console.log(brickMason.length, brickMason);

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
          {brickMason.length !== 0 ? (
            <Col span={8}>
              <div>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(brickMason);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>

                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(brickMason);
                    }}
                  >
                    <h4>BrickMason </h4>
                  </a>
                </div>
                <WorkerDetails ref={ref} />
              </div>
            </Col>
          ) : (
            <h1>hello {brickMason.length}</h1>
          )}

          {tileSetter.length != 0 ? (
            <Col span={8}>
              <div className={styles.titleAlign}>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(tileSetter);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(tileSetter);
                    }}
                  >
                    <h4>TileSetter</h4>
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}

          {roofer.length != 0 ? (
            <Col span={8}>
              <div className={styles.titleAlign}>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(roofer);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(roofer);
                    }}
                  >
                    <h4>Roofer</h4>
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}

          {carpenter.length != 0 ? (
            <Col span={8}>
              <div className={styles.titleAlign}>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(carpenter);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(carpenter);
                    }}
                  >
                    <h4>Carpenter</h4>
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}

          {reinforcement.length != 0 ? (
            <Col span={8}>
              <div className={styles.titleAlign}>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(reinforcement);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(reinforcement);
                    }}
                  >
                    <h4>Reinforcement</h4>
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}

          {unSkilled.length != 0 ? (
            <Col span={8}>
              <div className={styles.titleAlign}>
                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(unSkilled);
                    }}
                  >
                    <Avatar
                      size={70}
                      style={{ backgroundColor: '#bcddf3' }}
                      icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                    />
                  </a>
                </div>

                <div>
                  <a
                    onClick={() => {
                      ref?.current?.onVisible(unSkilled);
                    }}
                  >
                    <h4>UnSkilled</h4>
                  </a>
                </div>
              </div>
            </Col>
          ) : (
            ''
          )}
        </Row>
        {/* <Row gutter={24}>
          {data.map((item) => (
            <Col key={item._id}>
              <div className={styles.agentView}>
                <Link href="/companies/home">
                  <Avatar
                    size={70}
                    style={{ backgroundColor: '#bcddf3' }}
                    icon={<UserOutlined style={{ color: '#e48e0b' }} />}
                  />
                </Link>

                <h4>
                  <Link href="">
                    <a style={{ color: 'black' }}>{item.skillCategory}</a>
                  </Link>
                </h4>
              </div>
            </Col>
          ))}
        </Row> */}
      </div>
    </CompanyLayout>
  );
};
