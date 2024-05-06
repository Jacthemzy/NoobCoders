import { createContext, useEffect } from "react";
import { useReducer } from "react";
import Reducer from "./Reducer";

export const GLobalContext = createContext([]);
const GlobalProvider = ({ children }) => {
	const getData = () => {
		let data = localStorage.getItem("transitionList");
		return data ? JSON.parse(data) : [];
	};

	const [state, dispatch] = useReducer(Reducer, getData());
	

	//Action
	function addTransition(transition) {
		dispatch({
			type: "ADD",
			payload: transition,
		});
	}
	function deleTransition(id) {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	}

	useEffect(() => {
		localStorage.setItem("transitionList", JSON.stringify(state));
	}, [state]);

	return (
		<GLobalContext.Provider value={{ transitionList: state, addTransition, deleTransition }}>
			{children}
		</GLobalContext.Provider>
	);
};

export default GlobalProvider;
