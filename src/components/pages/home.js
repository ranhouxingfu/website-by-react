import React from 'react'
import { Slider,Icon,Gallery,Grid,Col,Button } from 'amazeui-react'
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
			<div>
			<Slider slideSpeed={2000} autoPlay>
    <Slider.Item>
      <img src='../images/banner1.jpg'/>
          <div className='banner-design'>
      <h2 className='banner-title'>享受美食，幸福来得太突然
</h2>
      <p>店门口就能看见大厨烹饪的每一道佳肴</p> 
      </div>
    </Slider.Item>
    <Slider.Item><img src="../images/banner2.jpg"/>
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
 <div className='first-box'>
 <h3>文艺范餐厅</h3>
<p>由商业企业快速供应、即刻食用、价格合理以满足人们日常生活需要的大众化餐饮。</p>
</div>
<Grid className="doc-g">
 <Col sm={12} md={2} lg={2} lgOffset={2} mdOffset={1} className='boss-img'>
 <img src='../images/boss.png' />
</Col>
<Col sm={12} md={8} lg={6}>
<div className='welcome-box'>
<h3>欢迎光临</h3>
<p>餐厅的色彩因个人爱好和性格不同而有较大差异。但总的说来，餐厅色彩宜以明朗轻快的色调为主，最适合用的是橙色以及相同色相的姐妹色。</p>
<ul className='welcom-ul'>
<li><span></span>给人以温馨的感觉，而且能提高进餐者的兴致。</li>
<li><span></span>不同的时间、季节及心理状态下，人们对色彩的感受会有所变化</li>
<li><span></span>利用灯光来调节室内色彩气氛，以达到利于饮食的目的。</li>
<li><span></span>到处都是美食，有令人惊叹的自然风</li>
</ul>
<p><Button amStyle="warning" round>了解更多</Button></p>
</div></Col>
<Col lg={2} md={1}></Col>
</Grid>
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