import {Tabs, Select, Button} from 'antd';
import React from "react"
const TabPane = Tabs.TabPane;
const Option = Select.Option;


class TabsRight extends React.Component {
  state = {
    tabPosition: 'left',
  }

  render() {
    return (
      <div style={{paddingTop:"1rem",paddingLeft:"1rem",opacity:"0.5",
        filter:"alpha(opacity=50)",
        background:"#000"}}>
        <div style={{ marginBottom:"2rem" ,fontSize:"1rem"}}>
          <Button style={{}} type="primary">撩一下：</Button>
        </div>
        <Tabs tabPosition={this.state.tabPosition} style={{color:"#fff"}}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
          <TabPane tab="Tab 4" key="4">Content of Tab 4</TabPane>
          <TabPane tab="Tab 5" key="5">Content of Tab 3</TabPane>
          <TabPane tab="Tab 6" key="6">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabsRight;
