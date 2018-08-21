import { List } from 'antd';
import React from "react"
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
class ListViewRight extends React.Component{
  render(){
    return(
      <div>
        <h3 style={{ marginBottom: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;最热</h3>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
        <h3 style={{ margin: '16px 0' }}>&nbsp;&nbsp;&nbsp;&nbsp;最新</h3>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
        <h3 style={{ margin: '16px 0' }}>&nbsp;&nbsp;&nbsp;&nbsp;高薪</h3>
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}
export default ListViewRight
