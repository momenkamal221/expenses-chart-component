import "./css/App.css";
import "./css/reset.css";
import { useState, useEffect } from "react";
import Column from "./components/Column";

function App() {
	const [expenses, setExpenses] = useState([]);
	const [highestAmount, setHighestAmount] = useState(1);
	const getData = async () => {
		const res = await fetch("./data.json");
		let expenses = await res.json();
		setHighestAmount(Math.max(...expenses.map((a)=>a.amount)));
		expenses=expenses.map((a)=>{return {...a,highest:a.amount===highestAmount}});
		setExpenses(expenses);
		};
	useEffect(() => {
		getData();
	}, [expenses]);

	

	return (
		<div className="expenses-card">
			<div className="expenses-card__balance-slab">
				<div>
					<p className="expenses-card__my-balance">My balance</p>
					<p className="expenses-card__balance">$921.48</p>
				</div>
				<div className="expenses-card__circle"></div>
			</div>
			<div className="expenses-card__expenses-chart-layout">
				<h1 className="expenses-card__title">Spending - Last 7 days</h1>
				<div className="expenses-card__chart-slab">
					{expenses.map((a) => (
						<Column key={a.day} spending={a} highestAmount={highestAmount} />
					))}
				</div>
				<div>
					<p className="expenses-card__total">Total this month</p>
					<div className="expenses-card__summary">
						<div>$478.33</div>
						<div>
							<div>+2.4%</div>
							<div>from last month</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
