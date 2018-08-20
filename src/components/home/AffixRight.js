import { Affix, Button } from 'antd';
import React from "react";
import TabsRight from "./TabsRight";

class AffixRight extends React.Component {
  state = {
    bottom: 100,
  }

  render() {
    return (
      <Affix offsetBottom={this.state.bottom}>
          <TabsRight/>
      </Affix>
    );
  }
}
export default AffixRight;
