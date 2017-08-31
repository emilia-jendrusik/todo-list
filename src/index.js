import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './containers/ToDoList';
import AddToToDo from './components/AddToToDo';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

class App extends Component {
	constructor(props) {
		super(props);
		this.addingHandler = this.addingHandler.bind(this);
		this.removingHandler = this.removingHandler.bind(this);
		this.movingHandler = this.movingHandler.bind(this);
	}
	movingHandler(dir, day, id, term) {
		let newToDoData = this.state.toDoData.slice();
		if(dir === 'up') {
			if(id > 0) {
				newToDoData[day].data.splice(id - 1, 0, term);
				newToDoData[day].data.splice(id + 1, 1);
			} else {
				if(day === 0) {
					return
				} else {
					let sibling = newToDoData[day - 1].data;
					let siblingLength;
					sibling ? siblingLength = sibling.length : siblingLength = 0;
					newToDoData[day - 1].data.splice(siblingLength, 0, term);
					newToDoData[day].data.splice(id, 1);
				}

			}
		} else if (dir === 'down') {
			if(newToDoData[day].data.length - 1 > id) {
				newToDoData[day].data.splice(id, 1);
				newToDoData[day].data.splice(id + 1, 0, term);
			} else {
				if(day === 6) {
					return
				} else {
					let sibling = newToDoData[day + 1].data;
					let siblingLength;
					sibling ? siblingLength = sibling.length - 1 : siblingLength = 0;
					newToDoData[day + 1].data.splice(siblingLength, 0, term);
					newToDoData[day].data.splice(id, 1);
				}
			}
		}
		
		this.setState({toDoData: newToDoData});
		
	}
	addingHandler(term, select, selectNum) {
		if(term.length) {
			let newToDoData = this.state.toDoData.slice();
			newToDoData[selectNum].data.splice(0, 0, term);
			this.setState({toDoData: newToDoData});
		}
	}
	removingHandler(day, id) {
		let newToDoData = this.state.toDoData.slice();
		newToDoData[day].data.splice(id, 1);
		this.setState({toDoData: newToDoData});
	}
	render() {
		return (
			<div className='container'>
				<AddToToDo onClick={this.addingHandler} />
				<ToDoList onClick={this.removingHandler} onMove={this.movingHandler} />
			</div>
		)
	}
}
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>, 
document.getElementById('root'));
