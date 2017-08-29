import React, {Component} from 'react';

class AddToToDo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let inputEl = document.querySelector('.add-to-to-do input');
		let selectEl = document.querySelector('.add-to-to-do select');
		let selectElNum = parseInt(selectEl.options[selectEl.selectedIndex].getAttribute('data-daynum'), 16);
		this.props.onClick(inputEl.value, selectEl.value, selectElNum);
		inputEl.value = '';
	}
	render() {
		return (
			<div className='add-to-to-do'>
				<input className='form-control' placeholder='New entry' />
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