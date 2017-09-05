import {combineReducers} from 'redux';
import ToDosReducer from './ToDosReducer';
import ToDosRemoveReducer from './ToDosRemoveReducer';

const rootReducer = combineReducers({
	toDoData: ToDosReducer,
	toRemove: ToDosRemoveReducer
});

export default rootReducer;