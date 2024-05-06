const deleteHandler = (state, id) => {
	const filteredItems = state.filter((item) => item.id !== id);
	return filteredItems;
};

const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [action.payload, ...state];

		case "DELETE":
			return deleteHandler(state, action.payload);
		default:
			return state;
	}
};

export default Reducer;
