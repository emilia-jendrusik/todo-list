import React, {Component} from 'react';

class AddToToDo extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			term: ''
		}
	}
	handleChange(e) {
		this.setState({term: e.target.value});
	}
	handleClick() {
		let selectEl = document.querySelector('.add-to-to-do select');
		let selectElNum = parseInt(selectEl.options[selectEl.selectedIndex].getAttribute('data-daynum'), 16);
		this.props.onClick(this.state.term, selectEl.value, selectElNum);
		document.querySelector('.add-to-to-do input').value = '';
	}
	render() {
		return (
			<div className='add-to-to-do'>
				<input className='form-control' placeholder='New entry' value={this.props.term} onChange={this.handleChange} />
				<select className='form-control'>
					<option data-daynum='0'>Monday</option>
					<option data-daynum='1'>Tuesday</option>
					<option data-daynum='2'>Wednesday</option>
					<option data-daynum='3'>Thursday</option>
					<option data-daynum='4'>Friday</option>
					<option data-daynum='5'>Saturday</option>
					<option data-daynum='6'>Sunday</option>
				</select>
				<button className='btn btn-primary' onClick={this.handleClick}>+</button>
			</div>
		)
	}
}

export default AddToToDo;