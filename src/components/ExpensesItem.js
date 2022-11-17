import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      ></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;
