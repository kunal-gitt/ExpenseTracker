import React from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import ExpenseDetails from "../Expenses/ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickhandler = () => {
    console.log("CLicked...");
  };

  const deletehandler = () => {
    console.log("Deleted...");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
      ></ExpenseDetails>

      <button onClick={clickhandler}>Click me!</button>
      <button onClick={deletehandler}>Delete expense</button>
    </Card>
  );
};

export default ExpenseItem;
