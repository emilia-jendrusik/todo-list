export const ELEMENT_DELETE = 'ELEMENT_DELETE';
export const ELEMENT_ADD = 'ELEMENT_ADD';
export const ELEMENT_MOVE = 'ELEMENT_MOVE';
export function removingHandler(day, id) {
	return {
		type: ELEMENT_DELETE,
		payload: {day: day, id: id}
	}

}
export function addingHandler(term, select, selectNum) {
	return {
		type: ELEMENT_ADD,
		payload: {term: term, select: select, selectNum: selectNum}
	}
}

export function movingHandler(dir, day, id, term) {
	return {
		type: ELEMENT_MOVE,
		payload: {dir: dir, day: day, id: id, term: term}
	}
}