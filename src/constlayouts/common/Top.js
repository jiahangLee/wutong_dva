import React from  'react'
import style from '../Const.css'
import {Row, Col, Tabs, Button, Modal} from 'antd';

export default class Top extends React.Component {
  render(){
    return (
      <div className={style.top}>
      <Row>
        <Col span={4} className={style["top-span"]}></Col>
        <Col span={1} className={style["top-span"]}>首页</Col>
              <Col span={1} className={style["top-span"]}>热点</Col>
              <Col span={2} className={style["top-span"]}>关于出国你该知道</Col>
        <Col span={2} className={style["top-span"]}>大家都在看</Col>
        <Col span={10} className={style["top-span"]}></Col>
        <Col span={4} className={style["top-span"]}>联系我们：400-100-8888</Col>

              </Row>
              </div>
              )
            }
          }

