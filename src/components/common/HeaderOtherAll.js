import {Row, Col} from 'antd';
import React from 'react'
import styles from '../Const.css'
import 'antd/dist/antd.less';

export default class HeaderOtherAll extends React.Component {

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleClick = e => {
    console.log('click ', e);
    if (e.key === 'register' || e.key === 'login') {
      this.setState({
        visible: true,
        current: e.key
      })
    }
    else {
      this.setState({
        current: e.key,
      });
    }
  }

  constructor() {
    super()
    this.state = {
      current: 'mail',
      hasLogined: false,
      userName: '',
      visible: false
    }
  }

  render() {

    return <header>
      <Row className={styles.searchbar_input}>
        <Col span={6}>
          <a href="/" className={styles.logo}>
            <img src={require('../../assets/logo.svg')} className={styles.images} alt="logo"/>
            <span className={styles.span}>Amazon跨境电商运营</span>
          </a>
        </Col>
        <Col span={12} className={styles.searchbar}>

        </Col>
        <Col span={6}></Col>


      </Row>


    </header>
  }
}
