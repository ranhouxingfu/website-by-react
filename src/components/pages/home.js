import React from 'react'
import { Slider, Icon, Grid, Col, Button } from 'amazeui-react'
//import axios from 'axios'
import LazyLoad from 'react-lazyload'
export default class myHome extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			specialfood: [],
			bannerData: [],
			classname:''
		}
<<<<<<< HEAD
		this.handleScroll=this.handleScroll.bind(this);
=======
    this.scrollHandler=this.scrollHandler.bind(this)
>>>>>>> 6076a0794170c625f9dc197a3e55c14e2ea4355f
	}
	componentWillMount() {
		let that = this;
		window.$axios({
				url: 'banner.json',
				method: 'get',
			})
			.then(function(res) {
				that.setState({
					bannerData: res.data.bannerData,
					specialfood:res.data.specialfood
				})
			})
<<<<<<< HEAD
			window.addEventListener('scroll', this.handleScroll,false);
	}
 	componentDidMount() {
//    	window.addEventListener('scroll', this.scrollHandler,false);
   }
 	handleScroll () {
 	 let scrollTop = event.srcElement.body.scrollTop;
 	 	window.requestAnimationFrame(()=>{
   	 		    if(scrollTop>500){
=======
    window.addEventListener('scroll', this.scrollHandler,false);
	}
  	componentDidMount() {
      	window.addEventListener('scroll', this.scrollHandler,false);
   }
 	handleScroll (e) {
 	 let scrollTop = event.srcElement.body.scrollTop;
 	 if(this.state.ticking){return }
 	 	this.setState({ticking:true})
 	 	window.requestAnimationFrame(()=>{
      console.log(scrollTop)
   	 		    if(scrollTop>800){
>>>>>>> 6076a0794170c625f9dc197a3e55c14e2ea4355f
   	 		    	this.setState({
   	 		    		classname:'marginTop'
   	 		    	})
   	 		    }
<<<<<<< HEAD
 	 	})
  }

=======
 	 		this.setState({ticking:false})
 	 	})
  }
>>>>>>> 6076a0794170c625f9dc197a3e55c14e2ea4355f
	render() {
		var item = this.state.bannerData.map(function(item, index) {
			return(<Slider.Item key={index}>
   						 	 <img src={item.url}/>
         				 	<div className='banner-design'>
     				 		<h2 className='banner-title'>{item.title}</h2>
     					 	<p>{item.desc}</p></div></Slider.Item>)
		})
		var specialfoodList=this.state.specialfood.map(function(specialItem,i){
				return(
				<Col sm={6} md={3} lg={3} key={'specialfood'+i}>
 <div className='img-contain'>
   <LazyLoad height={500} offsetTop={200}>
  <img src={specialItem.img}/>
    </LazyLoad>
 </div>
 <div className='food-price-box'>
 <p className='food-name'>{specialItem.title}</p>
  <p className='food-price'>{specialItem.desc}</p>
 </div>
 </Col>
			)
		})
		
		
		return(
			<div>
			<Slider slideSpeed={1500} autoPlay directionNav={false} controlNav={false}>
			{item}
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
<<<<<<< HEAD
 	 	<Grid className={'doc-g food-list special-content'+' '+this.state.classname}>
         {specialfoodList}
 </Grid>
=======
 	<Gallery data={this.state.specialfood} className={'special-content'+' '+this.state.classname}/>
>>>>>>> 6076a0794170c625f9dc197a3e55c14e2ea4355f
 	</div>
  </div>
		)
	}
}
