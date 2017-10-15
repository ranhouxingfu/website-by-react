require('normalize.css/normalize.css')
require('amazeui/dist/css/amazeui.min.css')
require('styles/App.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Header, Navbar } from 'amazeui-react'
import myHome from './pages/home'
import myTest from './pages/test'
import myPage from './pages/page'
import aboutUs from './pages/about'
import classification from './pages/classification'
export default class AppComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			topProps: {
				title: 'Amaze UI',
				link: '#title-link',
				data: {
					left: [{
						link: '#/',
						icon: 'home'
					}],
					right: [{
						link: '#/aboutUs',
						title: '关于我们'
					}]
				}
			},
			bottomData: [{
					title: '首页',
					link: '/',
					icon: 'home'
				},
				{
					title: '分类',
					link: '/classification',
					icon: 'github'
				},
				{
					title: '购物车',
					link: '/page',
					icon: 'shopping-cart'
				},
				{
					title: '我的',
					link: '/page',
					icon: 'user'
				}
			]
		}
		this.onSelect = this.onSelect.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}
	onSelect(nav, e) {
		e.preventDefault();
	}
	/*======底部导航=========*/
	handleSelect(link, e) {
		e.preventDefault();
		location.hash = link;
	}
	render() {
		/*=====================顶部内容===================*/
		return(
			<HashRouter>
   			<div>
   			
   			<Header {...this.state.topProps}  className='page-title'/>
   			<Navbar onSelect={this.handleSelect} data={this.state.bottomData} />
  			<div>{this.props.children}</div>
  			
       		 <Route exact path='/' component={myHome} />
       		 <Route path='/test' component={myTest} />
        	<Route path='/page' component={myPage} />
        	<Route path='/aboutUs' component={aboutUs} />
        	<Route path='/classification' component={classification} />
        
        </div>
  </HashRouter>
		)
	}
}
ReactDOM.render((
	<AppComponent/>
), document.getElementById('app'));