import React from 'react'
import { Grid, Col, Image, Icon } from 'amazeui-react'
export default class aboutUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return(
			<div  className='contain'>
			<div className='about-box'>
			<img src='../images/aboutus-bg.jpg'/>
			<div className='about-designP'>
      <h2 className='about-title'>欢迎来到Touch餐厅
</h2>
      </div></div>
			<p className='aboutus-describe'>高端氛围，奢华环境，精致产品，独特口感，让人流连忘返。高端氛围，奢华环境，精致产品，独特口感，让人流连忘返。高端氛围，奢华环境，精致产品，独特口感，让人流连忘返。</p>
			<Grid className='about-last-box'>
			<Col sm={12} md={5} lg={4} mdOffset={1} lgOffset={2}>
			<Col  sm={12} className='about-left-box'>
			<Col sm={12} md={3} lg={2} className='about-design'>
			<Image
      src="../images/food-design3.jpg"
      width="70"
      height="70"
      circle /></Col>
			<Col sm={12} md={9} lg={9} lgOffset={1}>
			<h3 className='about-design'>好吃不胖特色菜</h3>
			<p className='about-design'>您的梦想需要一个非同凡响的网站</p>
			</Col>
			</Col>
			<Col  sm={12} className='about-left-box'>
				<Col sm={12} md={3} lg={2} className='about-design'>
			<Image
      src="../images/food-design4.jpg"
      width="70"
      height="70"
      circle /></Col>
			<Col sm={12} md={9} lg={9} lgOffset={1}>
			<h3 className='about-design'>安全的原材料</h3>
			<p className='about-design'>您的梦想需要一个非同凡响的网站</p>
			</Col>
			</Col>
				<Col  sm={12} className='about-left-box'>
				<Col sm={12} md={3} lg={2} className='about-design'>
			<Image
      src="../images/food-design4.jpg"
      width="70"
      height="70"
      circle /></Col>
			<Col sm={12} md={9} lg={9} lgOffset={1}>
			<h3 className='about-design'>最物美价廉的餐饮</h3>
			<p className='about-design'>您的梦想需要一个非同凡响的网站</p>
			</Col>
			</Col>
			</Col>
			<Col sm={12} md={5} lg={4} className='about-rigth-imgbox'>
			<img src='../images/food-design6.jpg'/>
			</Col>
			<Col md={1} lg={2} ></Col>
			</Grid>
			<div className='work-box'>
			<div className='work-content-box'>
			<h3>餐厅营业时间</h3>
			<p>午餐:<span><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/></span></p>
			<p className='work-time'>10:00am--14:00pm</p>
			<p className='work-dinner'>晚餐:<span><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/><Icon icon='star'/></span></p>
			<p className='work-time'>17:00pm--22:00pm</p>
			<p className='work-dinner'>地址：北京市海淀区惠民路1号高端创意科技广场B座25层</p>
			</div>
			</div>
		</div>
		)
	}
}