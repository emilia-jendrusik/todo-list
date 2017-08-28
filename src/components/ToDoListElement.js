import React from 'react';

const ToDoElement = (props) => {
	return <li>{props.descr}<span onClick={() => props.onClick(props.id)}>X</span></li>
}

export default ToDoElement;