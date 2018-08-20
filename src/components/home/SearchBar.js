import { Input } from 'antd';
import React from 'react'
const Search = Input.Search;

export default class SearchBar extends React.Component{
  render(){
    return(
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />
    )
  }
}
