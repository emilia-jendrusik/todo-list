import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removingHandler, movingHandler} from '../actions/index';
import {bindActionCreators} from 'redux';


class ToDoElement extends Component {
	render() {
		return (
			<div className='element'>
				<div className='el'>
					{this.props.descr}
					<span onClick={() => this.props.removingHandler(this.props.day, this.props.id)}>X</span>
					<i className='go-up' onClick={() => this.props.movingHandler('up', this.props.day, this.props.id, this.props.descr)}>&#8657;</i>
					<i className='go-down' onClick={() => this.props.movingHandler('down',this.props.day, this.props.id, this.props.descr)}>&#8659;</i>
				</div>
			</div>
		) 
	}
	
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({removingHandler: removingHandler, movingHandler: movingHandler}, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDoElement);