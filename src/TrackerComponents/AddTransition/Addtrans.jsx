import React, { useContext, useState } from "react";
import styles from "./Addtrans.module.css";
import { useNavigate } from "react-router-dom";
import { GLobalContext } from "../GlobalContext/Context";

function Addtrans() {
	const navigate = useNavigate();

	const { addTransition } = useContext(GLobalContext);

	// Use State
	let [title, setTitle] = useState("");
	let [cate, setCate] = useState("");
	let [date, setDate] = useState("");
	let [amount, setAmount] = useState(0);
	let [select, setSelect] = useState("");

	const formHandler = (e) => {
		e.preventDefault();

		if (title === "" || amount === "" || date === "" || cate === "" || select === "") {
			alert("Please fill Input Fields");
			return;
		}
		if (select === "expense") {
			amount = Number(-amount);
		} else {
			amount = Number(+amount);
		}

		let transitionItem = {
			id: Math.random(),
			title,
			cate,
			amount,
			select,
			date,
		};
		
		addTransition(transitionItem);

		setAmount(0);
		setCate("");
		setDate("");
		setTitle("");
		setSelect("");

		navigate("/transition-page");
	};

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
				<h3 className={styles.title}>Add Transition</h3>
				<h2 style={{ visibility: "hidden" }}>extra </h2>
			</div>

			<form className={styles.form} onSubmit={formHandler}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					placeholder="Enter title..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="category">Category</label>
				<input
					type="text"
					name="category"
					placeholder="Enter category..."
					value={cate}
					onChange={(e) => setCate(e.target.value)}
				/>

				<label htmlFor="Amount">Amount</label>
				<input
					type="number"
					name="Amount"
					placeholder="Enter Amount..."
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>

				<label htmlFor="select" className={styles.choose}>
					Transition Method
				</label>
				<select className={styles.select} name="select" value={select} onChange={(e) => setSelect(e.target.value)}>
					<option value="" disabled>
						Choose Here!
					</option>
					<option value="income">Income</option>
					<option value="expense">Expense</option>
				</select>

				<label htmlFor="date">Date</label>
				<input
					type="date"
					name="date"
					placeholder="Choose Date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>

				<button className={styles.addBtn}>Add Transition</button>
			</form>
		</div>
	);
}

export default Addtrans;
