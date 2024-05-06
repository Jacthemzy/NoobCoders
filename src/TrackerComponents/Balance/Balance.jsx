import React, { useContext } from "react";
import styles from "./Balance.module.css";
import { GLobalContext } from "../GlobalContext/Context";
let x;
function Balance() {
	const { transitionList } = useContext(GLobalContext);

	const Total = transitionList.map((transition) => transition.amount).reduce((total, number) => (total += number), 0);
	Total < 0 ? (x = "red") : (x = "rgb(1, 252, 1)");
	const FormattedTotal = Total.toLocaleString();
	return (
		<div className={styles.container}>
			<h5 className={styles.yourBalance}>Your Balance</h5>
			<h1
				style={{
					marginTop: "-10px",
					fontSize: "27",
					color: `${x}`,
				}}
			>
				{FormattedTotal} NGN
			</h1>
		</div>
	);
}

export default Balance;
