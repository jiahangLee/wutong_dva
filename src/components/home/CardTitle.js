import {Card, Tag} from 'antd';
import React from "react"
const gridStyle = {
  width: '25%',
  textAlign: 'center',
  backgroundColor:'#fff' //乌青
};
class CardTitle extends React.Component{
  render(){
    return(
<div>
        <Card.Grid style={gridStyle}>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="purple">purple</Tag>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p></Card.Grid>
        <Card.Grid style={gridStyle}>
          <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p></Card.Grid>
</div>

    )
  }
}
export default CardTitle
