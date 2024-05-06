import React from "react";

function Expenseboxitem({ expense }) {
	return (
		<>
			<li className="expense">
				<div className="category">
					<h3>{expense.title}</h3>
					<p>{expense.cate}</p>
				</div>
				<div>
					<h3 className="expenseAmount">{expense.amount.toLocaleString()} NGN</h3>
					<p>{expense.date}</p>
				</div>
			</li>
		</>
	);
}

export default Expenseboxitem;
