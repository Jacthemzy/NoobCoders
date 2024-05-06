import React, { useContext } from "react";
import styles from "../AddTransition/Addtrans.module.css";
import { useNavigate } from "react-router-dom";
import { GLobalContext } from "../GlobalContext/Context";

import Incomeboxitem from "./Incomeboxitem";

function Incomebox() {
	const navigate = useNavigate();
	const { transitionList } = useContext(GLobalContext);

	let incomeArr = transitionList.filter((transition) => transition.amount > 0);
	console.error(incomeArr);

	return (
		<div className={styles.container}>
			<div className={styles.toprow}>
				<button className={styles.exitBtn} onClick={() => navigate("/transition-page")}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25">
						<g id="_01_align_center" data-name="01 align center">
							<path d="M9.707,19.293v-14L16,11.586A1,1,0,0,1,16,13Z" />
						</g>
					</svg>
					Back
				</button>
				<h3 className={styles.title}>Income</h3>
				<h2 style={{ visibility: "hidden" }}>extra </h2>
			</div>

			<div style={{ marginTop: "20px" }}>
				<ul>
					{incomeArr.map((income) => (
						<Incomeboxitem income={income} key={income.id} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default Incomebox;
