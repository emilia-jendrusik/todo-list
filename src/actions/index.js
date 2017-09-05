export function removingHandler(day, id) {
	return {
		type: 'ELEMENT_DELETE',
		payload: {day: day, id: id}
	}

}