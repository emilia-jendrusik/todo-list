export const ELEMENT_DELETE = 'ELEMENT_DELETE';
export const ELEMENT_ADD = 'ELEMENT_ADD';
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