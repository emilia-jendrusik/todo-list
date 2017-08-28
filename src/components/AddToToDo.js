import React, {Component} from 'react';

class AddToToDo extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		let inputEl = document.querySelector('.add-to-to-do .form-control');
		this.props.onClick(inputEl.value);
		inputEl.value = '';
	}
	render() {
		return (
			<div className='add-to-to-do'>
				<input className='form-control' placeholder='New entry' />
				<button className='btn btn-primary' onClick={this.handleClick}>+</button>
			</div>
		)
	}
}

export default AddToToDo;