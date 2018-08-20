import {Card} from 'antd';
import React from "react"
const {Meta} = Card;

class ImgCard extends React.Component {
  render() {
    return (
      <Card
        hoverable
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
      >
        <Meta
          title="免费出游国外"
          description="www.jiahanglee.com"
        />
      </Card>
    )
  }
}
export default ImgCard
