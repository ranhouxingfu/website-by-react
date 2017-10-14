require('normalize.css/normalize.css');
require('styles/App.css');
require('amazeui/dist/css/amazeui.min.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route,Link} from 'react-router-dom';
//var AMUIReact = require('amazeui-react');
import { Topbar, Nav, NavItem, CollapsibleNav } from 'amazeui-react';
import myHome from './pages/home';
import myTest from './pages/test';
export default class AppComponent extends React.Component {
	render() {
		return(
<HashRouter>
   			<div>
			<Topbar brand="first react" toggleNavKey="nav">
    <CollapsibleNav eventKey="nav">
      <Nav topbar>
        <NavItem><Link to='/'>首页</Link></NavItem>
        <NavItem><Link to='/home'>开始使用</Link></NavItem>
        <NavItem><Link to='/test'>按需定制</Link></NavItem>
      </Nav>
    </CollapsibleNav>
  </Topbar>
  <div>{this.props.children} || <span>No Content</span></div>
        <Route exact path="/home" component={myHome} />
        <Route path="/test" component={myTest} />
        </div>
  </HashRouter>
		);
	}
}
ReactDOM.render((
	<AppComponent/>
), document.getElementById('app'));