export default function(state = null, action) {
	switch(action.type) {
		case 'ELEMENT_DELETE':
			console.log(action.payload.day);
			console.log(action.payload.id);
			return state;
		default: 
			return state;
	} 
}