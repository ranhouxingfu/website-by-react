import React from 'react'
import { Grid, Col, Icon, Input, Form,Button } from 'amazeui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
export default class order extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: moment(),
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(date) {
		this.setState({
			startDate: date
		});

	}
	render() {
		return(
			<div className='order-contain  contain'>
			<div className='order-box'>
			<img src='../images/coffee.jpg'/>
			</div>
			<div className='order-title'>
			<div className='order-title-p'>
			<Icon icon='map-marker'/>
			<h3>在线预约</h3>
			</div>
			</div>
			<Grid>
			<Col sm={8} smOffset={2}>
			 <Form className="order-form" >
			<Input type="text"  placeholder="输入用户名" />
			<Input type="text"  placeholder="输入电话号码" />
			<Input type="text"  placeholder="就餐人员（人数）" />
			<DatePicker className='am-form-group'  selected={this.state.startDate}     onChange={this.handleChange}/>
			 <Input
      type="textarea"
      placeholder="详情"
      amSize="lg" />
			 <p className='submit-p'><Button amStyle="success" amSize="xl" round>提交</Button></p>
			</Form>
			</Col></Grid>
			</div>
		)
	}
}