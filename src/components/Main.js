require('normalize.css/normalize.css')
require('amazeui/dist/css/amazeui.min.css')
require('styles/App.css')
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Header, Menu ,Footer} from 'amazeui-react'
import myHome from './pages/home'
import cook from './pages/cook'
import aboutUs from './pages/about'
import classification from './pages/classification'
import order from './pages/order'
export default class AppComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			menuData: [{
				link: '#/',
				title: '首页'
			}, {
				link: '#/classification',
				title: '菜单食谱'
			}, {
				link: '#/cook',
				title: '金牌厨师'
			},  {
				link: '#',
				title: '就餐环境'
			},{
				link: '#/aboutUs',
				title: '关于我们'
			}, {
				link: '#/order',
				title: '预约服务'
			}],
			footerData: [
  'CopyRight©2014 AllMobilize Inc.',
  '京ICP备13033158'
]
		}
//		this.handleClick = this.handleClick.bind(this);
	}
//	handleClick(nav, index, e) {
//		if(nav && nav.subMenu) {
//			// 有二级菜单的链接点击了
//		} else {
//			e.preventDefault();
//			console.log('点击的链接为：', nav);
//			// do something
//			// this.handleToggle(); // 关闭整个下拉菜单
//		}
//	};
	render() {
		/*=====================顶部内容===================*/
		return(
			<HashRouter>
   			<div className='header-contain'>
   			 <Header title="Touch" className='header-box'/>
    <Menu
      toggleIcon="list"
      data={this.state.menuData}
      theme="dropdown1"
       />
  			<div>{this.props.children}</div>
       		 <Route exact path='/' component={myHome} />
        	<Route path='/cook' component={cook} />
        	<Route path='/aboutUs' component={aboutUs}/>
        	<Route path='/classification' component={classification} />
        		<Route path='/order' component={order} />
        	  			<Footer data={this.state.footerData} mobileTitle="手机版" className='footer-box' />
        </div>

  </HashRouter>
		)
	}
}
ReactDOM.render((
	<AppComponent/>
), document.getElementById('app'));