import { Row, Col } from 'antd';
import React from 'react'
import styles from '../Const.css'
import 'antd/dist/antd.css';
import Carousle from "./Carousle";
import MenuLeft from "./MenuLeft";
import AffixRight from "./AffixRight";

export default class Content extends React.Component{
  render(){
    return(

        <Row className={styles.background}>
          <Col span={6}>
            <MenuLeft/>
          </Col>
          <Col span={12}>
            <div style={{marginTop:1}}>
            <Carousle />
              </div>
          </Col>
          <Col span={6}>
<AffixRight/>
          </Col>
        </Row>
    )
  }
}
