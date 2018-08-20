import {Row, Col} from 'antd';
import React from 'react'
import styles from '../Const.css'
import 'antd/dist/antd.css';
import Carousle from "./Carousle";
import MenuLeft from "./MenuLeft";
import AffixRight from "./AffixRight";
import ImgCard from "./ImgCard";

export default class Content extends React.Component {
  render() {
    return (

      <Row className={styles.background}>
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
          <ImgCard style={{}}/>
          <AffixRight/>
          </Col>
          <Col span={4}/>
        </Col>
      </Row>
    )
  }
}
