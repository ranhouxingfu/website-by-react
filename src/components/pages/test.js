import React from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'amazeui-react';
export default class myHome extends React.Component {
	constructor(props){
		super(props);
		this.changePage=this.changePage.bind(this);
	}
	componentDidMount(){
		
	}
	changePage(){
//		debugger;
			 window.location.hash ='/page'
		}
	render() {
		return(
			<Button type='button' className='am-btn am-btn-success' onClick={this.changePage}>test</Button>
		);
	}
}