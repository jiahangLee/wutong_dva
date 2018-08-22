import { Carousel } from 'antd';
import React from 'react'
import 'antd/dist/antd.less';
import style from '../Const.css'
export default class Carousle extends React.Component{
  render(){
    return(
      <Carousel autoplay>
        <div >
          <img className={style.carousle} src={require('../../assets/001.jpg')} alt=""/>
        </div>
        <div>
          <img className={style.carousle} src={require('../../assets/002.jpg')} alt=""/>
        </div>
        <div>
          <img className={style.carousle} src={require('../../assets/003.jpg')} alt=""/>
        </div>
        <div>
          <img className={style.carousle} src={require('../../assets/004.jpg')} alt=""/>
        </div>
      </Carousel>
    )
  }
}
