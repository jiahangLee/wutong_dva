import { Affix, Button } from 'antd';
import React from "react";
import TabsRight from "./TabsRight";

class AffixRight extends React.Component {
  state = {
    bottom: 120,
  }

  render() {
    return (
      <Affix offsetTop={this.state.bottom} style={{ position: 'absolute', top: 0, right: 0,width:"100%"}}>
          <TabsRight/>
      </Affix>
    );
  }
}
export default AffixRight;
