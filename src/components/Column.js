const Column = ({spending,highestAmount}) => {
	const height=`${(150*spending.amount)/highestAmount}px`;
	return (
		<div className="expenses-card__chart" >
			<div className={`expenses-card__chart-colum ${spending.highest?`expenses-card__chart-colum_max`:''}`}  style={{height:height}}></div>
			<div className="expenses-card__chart-spent"  id={spending.day}>${spending.amount}</div>
			<div className="expenses-card__chart-day">{spending.day}</div>
		</div>
	);
};
export default Column;
