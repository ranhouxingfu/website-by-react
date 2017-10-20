require('normalize.css/normalize.css')
require('amazeui/dist/css/amazeui.min.css')
require('styles/App.css')
import React from 'react'
import ReactDOM from 'react-dom'
import Util from '../libs/util'

import { HashRouter, Route } from 'react-router-dom'
import { Header, Menu, Footer } from 'amazeui-react'

const Axios = Util.ajax;

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
			}, {
				link: '#',
				title: '就餐环境'
			}, {
				link: '#/aboutUs',
				title: '关于我们'
			}, {
				link: '#/order',
				title: '预约服务'
			}],
			footerData: [
				'CopyRight©2014 AllMobilize Inc.',
				'京ICP备13033158'
			],
			className: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.refs.menu.handleToggle();
	};
	componentWillMount() {
		window.$axios = Axios;
	}
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
      ref='menu'
      onSelect={this.handleClick} 
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
//Axios.interceptors.request.use(
//
//	config => {
//		//		if(store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//		//			config.headers.Authorization = `token ${store.state.token}`;
//		//		}
//		help.$children[0].showLoading = true;
//		return config;
//	},
//	err => {
//		loadinginstace.close()
//
//		//help.$children[0].showLoading = false;
//		iView.Message.error('网络不给力，请稍后再试');
//		return Promise.reject(err);
//	});

// http response 拦截器
//Axios.interceptors.response.use(
//	response => {
//		setTimeout(function() {
//			help.$children[0].showLoading = false;
//		}, 800)
//		return response;
//	},
//	error => {
//		if(error.response) {
//			switch(error.response.status) {
//				case 401:
//					// 返回 401 清除token信息并跳转到登录页面
//					//store.commit(types.LOGOUT);
//					router.replace({
//						path: 'login',
//						query: {
//							redirect: router.currentRoute.fullPath
//						}
//					})
//			}
//			help.$children[0].showLoading = false;
//			iView.Message.error('加载失败');
//		}
//		return Promise.reject(error) // 返回接口返回的错误信息
//	});

ReactDOM.render((
	<AppComponent/>
), document.getElementById('app'));