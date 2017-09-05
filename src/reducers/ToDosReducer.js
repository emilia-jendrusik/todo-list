import {ELEMENT_DELETE, ELEMENT_ADD, ELEMENT_MOVE} from '../actions/index';

const initialData = [
			{daynum: 0, dayName: 'Monday', data: ['Meeting with Eric', 'Game with Daniel']}, 
			{daynum: 1, dayName: 'Tuesday', data: ['Lunch with Anna']},
			{daynum: 2, dayName: 'Wednesday', data: ['Cleaning up project folder']},
			{daynum: 3, dayName: 'Thursday', data: []},
			{daynum: 4, dayName: 'Friday', data: []},
			{daynum: 5, dayName: 'Saturday', data: []},
			{daynum: 6, dayName: 'Sunday', data: []}
	]
export default function(state = initialData, action) {
	function removingHandler(day, id) {
		let newToDoData = state.slice();
		newToDoData[day].data.splice(id, 1);
		return newToDoData;
	}
	function addingHandler(term, select, selectNum) {
		if(term.length) {
			let newToDoData = state.slice();
			newToDoData[selectNum].data.splice(0, 0, term);
			return newToDoData;
		}
	}
	function movingHandler(dir, day, id, term) {
		let newToDoData = state.slice();
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
		
		return newToDoData;
		
	}
	switch(action.type) {
		case ELEMENT_DELETE:
			return removingHandler(action.payload.day, action.payload.id);
		case ELEMENT_ADD:
			return addingHandler(action.payload.term, action.payload.select, action.payload.selectNum);
		case ELEMENT_MOVE:
			return movingHandler(action.payload.dir, action.payload.day, action.payload.id, action.payload.term);
		default: 
			return state;
	} 
}
