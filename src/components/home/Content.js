import {Row, Col, BackTop} from 'antd';
import React from 'react'
import styles from '../Const.css'
import 'antd/dist/antd.css';
import Carousle from "./Carousle";
import MenuLeft from "./MenuLeft";
import AffixRight from "./AffixRight";
import ImgCard from "./ImgCard";
import CardTitle from "./CardTitle";
import ListView from "./ListView";
import Tabs from "antd/es/tabs/index";
import ListViewRight from "./ListViewRight";
const TabPane = Tabs.TabPane;

export default class Content extends React.Component {
callback(key) {
    console.log(key);
  }
  render() {
    return (
<div className={styles.background}>
  <div>
    <BackTop>
      <div className={styles["ant-back-top-inner"]}>UP</div>
    </BackTop>

  </div>
      <Row >
        <Col span={6}>
          <MenuLeft/>
        </Col>
        <Col span={12}>
          <div style={{marginTop: 1}}>
            <Carousle/>
          </div>
        </Col>
        <Col span={6}>
          <Col span={2}/>
          <Col span={18}>
          <ImgCard />
          <AffixRight/>
          </Col>
          <Col span={4}/>
        </Col>
      </Row>
  <Row>
    <Col span={1}/>
    <Col span={17} style={{marginTop:-140,height:"40%"}}>
      <CardTitle/>
    </Col>
    <Col span={6}/>
  </Row>
  <Row>
    <Col span={1}/>

    <Col span={11} style={{marginTop:20}}>
      <ListView/>
    </Col>
    <Col span={11} style={{marginTop:20,marginLeft:10}}>
      <Tabs onChange={this.callback} type="card">
        <TabPane tab="日本工作排行" key="1">
          <ListViewRight/>
        </TabPane>
        <TabPane tab="德国工作排行" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="韩国工作排行" key="3">
          <ListViewRight/>
        </TabPane>
      </Tabs>

    </Col>
    <Col/>
  </Row>
</div>
    )
  }
}
