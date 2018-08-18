import {Row, Col, Tabs, Button, Modal, Card} from 'antd';
import {Link} from 'react-router';
import React from 'react'
import styles from '../Const.css'
import Menu from "antd/es/menu/index";
import Icon from "antd/es/icon/index";
import 'antd/dist/antd.css';
import NormalLoginForm from "./NormalLoginForm";
import SearchBar from "./SearchBar";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class HeaderHome extends React.Component {

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleClick = (e) => {
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
    const userShow = this.state.hasLogined
      ?
      <Menu.Item key="logout">
        <Button type="primary">{this.state.userName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank">
          <Button type="Default">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="Danger">退出</Button>
      </Menu.Item>
      :
      <Menu.Item key="register">
        <Icon type="appstpre"/>注册/登录
      </Menu.Item>
    return (

      <header>
        <Row className={styles.searchbar_input}>
          <Col span={6}>
            <a href="/" className={styles.logo}>
              <img src={require('../../assets/logo.svg')} className={styles.images} alt="logo"/>
              <span className={styles.span}>亚马逊跨境电商</span>
            </a>
          </Col>
          <Col span={12} className={styles.searchbar}>

            <Col span={3}></Col>
            <Col className={styles.searchsize} span={18}>
            <SearchBar className={styles.searchsize}/>
            <span className={styles.searchbartop}>  &nbsp;&nbsp;韩国雇佣制 &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;免费出国打工 &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;最新出国方案 &nbsp;&nbsp;| &nbsp;&nbsp;德国工业职工</span>
            </Col>

            <Col span={3}></Col>
          </Col>
          <Col span={6}></Col>


        </Row>
        <Row>
          <Col span={6}>
            <Button style={{marginLeft:"30px",width:"250px",marginTop:"15px"}} type="primary">出国劳务招工信息</Button>
          </Col>
          <Col span={12}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={this.state.current}
              mode="horizontal"
            >
              <Menu.Item key="mail">
                最新出国劳务
              </Menu.Item>
              <SubMenu title={<span>新加坡招聘</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">德国护理</a>
              </Menu.Item>
              <Menu.Item key="alipay2">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">出国留学</a>
              </Menu.Item>
              <Menu.Item key="alipay2">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">中东</a>
              </Menu.Item>
              {userShow}
            </Menu>
            <Modal
              closable={false}
              className={styles.modal}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              footer={null}
            >
              <NormalLoginForm/>
            </Modal>


          </Col>
          <Col span={6}>

          </Col>
        </Row>


      </header>
    )
  }
}