import React, { useContext } from "react";
import "./Transitem.css";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { GLobalContext } from "../GlobalContext/Context";

let x, y, z;
let sign;
let id;

function Transitem({ transition }) {
	const { deleTransition } = useContext(GLobalContext);

	const leadingActions = () => (
		<LeadingActions>
			<SwipeAction onClick={() => console.info("swipe action triggered")}>Action name</SwipeAction>
		</LeadingActions>
	);

	id = transition.id;
	

	const trailingActions = (id) => (
		<TrailingActions>
			<SwipeAction destructive={true} onClick={() => deleTransition(id)}>
				<RiDeleteBack2Fill className="deleteIcon" />
			</SwipeAction>
		</TrailingActions>
	);
	transition.select === "expense" ? (x = "expense") : (x = "income");

	if (transition.select === "expense") {
		x = "expense";
		y = transition.amount;
		z = "expenseAmount";
		sign = "";
	} else {
		x = "income";
		y = transition.amount;
		z = "incomeAmount";
		sign = "+";
	}

	return (
		<>
			<SwipeableList>
				<SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions(id)}>
					<li className={x}>
						<div className="category">
							<h3>{transition.title}</h3>
							<p>{transition.cate}</p>
						</div>
						<div>
							<h3 className={z}>
								{sign}
								{y.toLocaleString()} NGN
							</h3>
							<p>{transition.date}</p>
						</div>
					</li>
				</SwipeableListItem>
			</SwipeableList>
		</>
	);
}

export default Transitem;
