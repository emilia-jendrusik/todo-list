import {combineReducers} from 'redux';
import ToDosReducer from './ToDosReducer';

const rootReducer = combineReducers({
	toDoData: ToDosReducer
});

export default rootReducer;