import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return React.createElement(
    ExpenseDate,
    { date: props.date },
    React.createElement("div", {}),
    React.createElement("h1", {}, "Expense1"),
    React.createElement("h1", {}, "Expense 1")
  );
};
//   return (
//     <div className="expense-item">
//       <ExpenseDate date={props.date}></ExpenseDate>
//       <ExpenseDetails
//         title={props.title}
//         amount={props.amount}
//         LocationOfExpenditure={props.LocationOfExpenditure}
//       ></ExpenseDetails>
//     </div>
//   );
// }

export default ExpenseItem;
