import React from 'react'
import { Slider,Icon,Gallery } from 'amazeui-react'
export default class myHome extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			specialfood:[{
    'img': '../images/noodle.jpg',
    'title': '意面',
    'desc': '￥79'
  },{
    'img': '../images/mainfood.jpg',
    'title': '牛排',
    'desc': '￥88'
  },{
    'img': '../images/salad1.jpg',
    'title': '沙拉',
    'desc': '￥39'
  },{
    'img': '../images/sweet10.jpg',
    'title': '甜品',
    'desc': '￥29'
  },{
    'img': '../images/mainfood1.jpeg',
    'title': '牛排',
    'desc': '￥99'
  },{
    'img': '../images/mainfood3.jpg',
    'title': '下午茶',
    'desc': '￥199'
  }
]
		}
	}
	render() {
		return(
			<div  className='content-box'>
			<Slider slideSpeed={2000} autoPlay>
    <Slider.Item>
      <img  src='../images/banner1.jpg'/>
          <div className='banner-design'>
      <h2 className='banner-title'>享受美食，幸福来得太突然
</h2>
      <p>店门口就能看见大厨烹饪的每一道佳肴</p> 
      </div>
    </Slider.Item>
    <Slider.Item><img  src="../images/banner2.jpg"/>
        <div className='banner-design'>
      <h2 className='banner-title'>装修简洁，暖色调，清新中带业暖意
</h2>
      <p>吃货们，你们不要跟我抢位子~~</p> 
      </div>
    </Slider.Item>
    <Slider.Item>
      <img src='../images/banner3.jpg'/>
      <div className='banner-design'>
      <h2 className='banner-title'>别样的英式下午茶</h2>
      <p>想和你一起虚度光阴，来场英式浪漫，还能去哪！</p> 
      </div>
      </Slider.Item>
  </Slider>
 <div>
 	<div className='special-title'>
 	<h3 className='special-p'><Icon icon='angellist'></Icon></h3>
 	<h3 className='special-p'>特别推荐</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
 	<Gallery data={this.state.specialfood} className='special-content'/>
 	</div>
  </div>
		)
	}
}