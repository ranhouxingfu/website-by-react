import React from 'react'
import { Grid, Col, Icon } from 'amazeui-react'
import LazyLoad from 'react-lazyload'
export default class classification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mainfood: [],
			sweet: []
		}
	}
	componentWillMount() {
		window.$axios({
			url: 'banner.json',
			method: 'get'
		}).then((res) => {
			this.setState({
				mainfood: res.data.mainfood,
				sweet: res.data.sweet
			})
		})
	}
	render() {
		const mainfoodList = this.state.mainfood.map(function(item, index) {
			return(
				<Col sm={6} md={3} lg={3} key={'mainfood'+index}>
 <div className='img-contain'>
   <LazyLoad height={100}>
 <img src={item.src}/>
    </LazyLoad>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>{item.name}</p>
  <p className='food-price'>{item.price}</p>
 </div>
 </Col>
			)
		})

		const sweetList = this.state.sweet.map(function(item, index){
			return(
				<Col sm={6} md={3} lg={3} key={'sweet'+index}>
  <div className='img-contain'>
  <LazyLoad height={100}>
 <img src={item.src}/>
   </LazyLoad>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>{item.name}</p>
  <p className='food-price'>{item.price}</p>
 </div>
 </Col>
			)
		})
		return(
			<div  className='contain'>
			<div className='special-title'>
 	<h3 className='special-p'><Icon icon='cutlery'></Icon></h3>
 	<h3 className='special-p'>主食</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
 	<Grid className="doc-g food-list">
{mainfoodList}
 </Grid>

 	<div className='special-title'>
 	<h3 className='special-p'><Icon icon='coffee'></Icon></h3>
 	<h3 className='special-p'>甜品</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
 
 	 	<Grid className="doc-g food-list">
 {sweetList}
 </Grid>

 	<div className='special-title'>
 	<h3 className='special-p'><Icon icon='glass'></Icon></h3>
 	<h3 className='special-p'>酒水</h3>
 	<p>主料突出，形色美观，口味鲜美，营养丰富，供应方便</p>
 	</div>
			</div>
		)
	}
}