import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ToDoList from './containers/ToDoList';
import AddToToDo from './containers/AddToToDo';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<AddToToDo />
				<ToDoList />
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
