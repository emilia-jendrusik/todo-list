import React from 'react';

const ToDoElement = (props) => {
	return <div className='element'><div className='el'>{props.descr}<span onClick={() => props.onClick(props.day, props.id)}>X</span><i className='go-up' onClick={() => props.onMove('up',props.day, props.id, props.descr)}>&#8657;</i><i className='go-down' onClick={() => props.onMove('down',props.day, props.id, props.descr)}>&#8659;</i></div></div>
}

export default ToDoElement;