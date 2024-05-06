import React from "react";

function Incomeboxitem({ income }) {
	return (
		<>
			<li className="income">
				<div className="category">
					<h3>{income.title}</h3>
					<p>{income.cate}</p>
				</div>
				<div>
					<h3 className="incomeAmount">{income.amount.toLocaleString()} NGN</h3>
					<p>{income.date}</p>
				</div>
			</li>
		</>
	);
}

export default Incomeboxitem;
