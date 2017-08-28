import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './components/ToDoList';
import AddToToDo from './components/AddToToDo';

class App extends Component {
	constructor(props) {
		super(props);
		this.addingHandler = this.addingHandler.bind(this);
		this.removingHandler = this.removingHandler.bind(this);
		this.state = {
			toDoData: ['Meeting with Eric', 'Lunch with Anna', 'Cleaning up project folder', 'Picking up laundry']
		}
	}
	addingHandler(term) {
		if(term.length) {
			let newToDoData = this.state.toDoData.slice();
			newToDoData.push(term);
			this.setState({toDoData: newToDoData});
		}
	}
	removingHandler(id) {
		let newToDoData = this.state.toDoData.slice();
		newToDoData.splice(id, 1);
		this.setState({toDoData: newToDoData});
	}
	render() {
		return (
			<div className='container'>
				<AddToToDo onClick={this.addingHandler} />
				<ToDoList data={this.state.toDoData} onClick={this.removingHandler} />
			</div>
		)
	}
}
ReactDOM.render(<App/>, document.getElementById('root'));
