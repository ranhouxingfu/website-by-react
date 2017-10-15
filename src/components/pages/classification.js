import React from 'react'
import {Grid, Col,Icon } from 'amazeui-react'
export default class classification extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className='content-box'>
			<div className='special-title'>
 	<h3 className='special-p'><Icon icon='cutlery'></Icon></h3>
 	<h3 className='special-p'>主食</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
 	<Grid className="doc-g food-list">
 <Col sm={6} md={3} lg={2}>
 <div className='img-contain'>
 <img src='../images/mainfood.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
  <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/salad1.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
  <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/noodle.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
 <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/mainfood1.jpeg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
  <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/mainfood2.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
 <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/salad.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
  <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/mainfood3.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
   <Col sm={6} md={3} lg={2}>
  <div className='img-contain'>
 <img src='../images/food-design1.jpg'/>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>牛排</p>
  <p className='food-price'>￥99</p>
 </div>
 </Col>
 </Grid>
 	<div className='special-title'>
 	<h3 className='special-p'><Icon icon='coffee'></Icon></h3>
 	<h3 className='special-p'>甜品</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
 	<div className='special-title'>
 	<h3 className='special-p'><Icon icon='glass'></Icon></h3>
 	<h3 className='special-p'>酒水</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
			</div>
		)
	}
}