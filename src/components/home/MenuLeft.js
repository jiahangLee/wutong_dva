import {Menu, Icon, Row,Col} from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class MenuLeft extends React.Component{


  render(){
    return(
      <div>
        <Row>
          <Col span={4}/>
          <Col span={18}>
      <Menu onClick={this.handleClick} mode="vertical">
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>招聘国家大全</span></span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>建筑工程</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>文职销售教育</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title={<span><Icon type="setting" /><span>生产技术工</span></span>}>
          <Menu.Item key="09">Option 9</Menu.Item>
          <Menu.Item key="010">Option 10</Menu.Item>
          <Menu.Item key="011">Option 11</Menu.Item>
          <Menu.Item key="012">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub6" title={<span><Icon type="setting" /><span>家政酒店管理</span></span>}>
          <Menu.Item key="009">Option 9</Menu.Item>
          <Menu.Item key="0010">Option 10</Menu.Item>
          <Menu.Item key="0011">Option 11</Menu.Item>
          <Menu.Item key="0012">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="0009">Option 9</Menu.Item>
          <Menu.Item key="00010">Option 10</Menu.Item>
          <Menu.Item key="00011">Option 11</Menu.Item>
          <Menu.Item key="00012">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub8" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="00009">Option 9</Menu.Item>
          <Menu.Item key="000010">Option 10</Menu.Item>
          <Menu.Item key="000011">Option 11</Menu.Item>
          <Menu.Item key="000012">Option 12</Menu.Item>
        </SubMenu>


      </Menu>
          </Col>
        </Row>
      </div>
    )
  }
}

