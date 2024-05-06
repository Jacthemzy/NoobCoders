import React, { useContext } from "react";
import styles from "./Incexp.module.css";
import { GLobalContext } from "../GlobalContext/Context";
import { useNavigate } from "react-router-dom";

function Incexp() {
	const { transitionList } = useContext(GLobalContext);
	const navigate = useNavigate();

	//Getting Amount Arr
	const amounts = transitionList.map((transition) => transition.amount);
	

	//Getting Income Arr
	const IncomeTotal = amounts.filter((item) => item > 0).reduce((total, number) => (total += number), 0);
	const FomrattedIncTotal = IncomeTotal.toLocaleString();

	//Getting Expense Arr
	const ExpenseTotal = amounts.filter((item) => item < 0).reduce((total, number) => (total += number), 0);
	const FormattedExpTotal = ExpenseTotal.toLocaleString();

	return (
		<div className={styles.container}>
			<div className={styles.incomeBox} onClick={() => navigate("/incomebox")}>
				<h5 className={styles.incometitle}>Income</h5>
				<h2 className={styles.incomeAmount}>{FomrattedIncTotal} </h2>

				<div className={styles.circle}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="20"
						height="20"
					>
						<path d="M16.913,19.35l-4.361,4.418c-.305,.309-.799,.309-1.104,0l-4.361-4.418c-.492-.498-.143-1.35,.552-1.35h3.361V1c0-.552,.447-1,1-1s1,.448,1,1V18h3.361c.695,0,1.044,.852,.552,1.35Z" />
					</svg>
				</div>
			</div>
			<div className={styles.expenseBox} onClick={() => navigate("/expensebox")}>
				<h5 className={styles.expensetitle}>Expense</h5>
				<h3 className={styles.expenseAmount}>{FormattedExpTotal} </h3>
				<div className={styles.circle}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="20"
						height="20"
					>
						<path d="M16.913,19.35l-4.361,4.418c-.305,.309-.799,.309-1.104,0l-4.361-4.418c-.492-.498-.143-1.35,.552-1.35h3.361V1c0-.552,.447-1,1-1s1,.448,1,1V18h3.361c.695,0,1.044,.852,.552,1.35Z" />
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Incexp;
